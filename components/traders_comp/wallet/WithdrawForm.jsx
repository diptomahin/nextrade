import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";
import DarkButton from "@/components/library/buttons/DarkButton";
import useAuth from "@/hooks/useAuth";
import useSecureAPI from "@/hooks/useSecureAPI";
import useNotificationData from "@/hooks/useNotificationData";
import getDate from "@/components/utils/date";


const WithdrawForm = ({ refetch, totalBalance, userBalanceRefetch }) => {
  const [paymentError, setPaymentError] = React.useState("");
  const [clientSecret, setClientSecret] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [postalCode, setPostalCode] = React.useState(0);
  // const [currency, setCurrency] = React.useState("");

  const {notificationRefetch}= useNotificationData()
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const secureAPI = useSecureAPI();
  const data = getDate()

  React.useEffect(() => {
    if (amount <= 0 || !amount) {
      return;
    }
    if (amount > 100000) {
      return setPaymentError("*The amount must be 100,000 or less.");
    }

    axios
      .post("https://nex-trade-server.vercel.app/create-payment-intent", {
        price: amount,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [amount, postalCode, totalBalance]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setPaymentError("");

    if (!/^-?\d*\.?\d+$/.test(amount)) {
      form.reset();
      setAmount(0);
      return setPaymentError("*Please provide a valid number amount");
    }

    if (amount <= 0 || !amount) {
      return setPaymentError("*Please provide a valid amount");
    }

    if (amount > 100000) {
      return setPaymentError("*The amount must be 100,000 or less.");
    }

    if (totalBalance < amount) {
      return setPaymentError("*Insufficient balance");
    }

    if (!/^\d{4}$/.test(postalCode)) {
      setPostalCode(0);
      return setPaymentError("*Please provide a valid 4-digit postal code");
    }

    const toastId = toast.loading("Progress...", { duration: 10000 });

    if (!stripe || !elements) {
      toast.error("internal error!!!", { id: toastId, duration: 4000 });
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
        address: {
          postal_code: postalCode,
        },
      },
    });

    if (error) {
      setPaymentError(error.message);
      toast.error(error.message, { id: toastId, duration: 4000 });
    } else {
      setPaymentError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setPaymentError(confirmError.message);
    } else {
      setPaymentError("");
      if (paymentIntent.status === "succeeded") {
        const withdrawData = {
          transaction: paymentIntent,
          date: date,
          withdraw: parseInt(amount),
          email: user?.email,
          name: user?.displayName,
          action: "Withdraw",
          amount: parseInt(amount),
          currency: "usd",
        };

        // post notification data sen database
        const notificationInfo = {
          title: "Withdraw Successfully",
          description: `${
            parseInt(amount) + "$"
          } has been withdrawn from your account`,
          assetKey: "",
          assetImg: "",
          assetBuyerUID: "",
          assetBuyerEmail: user.email,
          postedDate:data
        };

        // post to  notification data in database
        secureAPI
          .post("/notifications", notificationInfo)
          .then((res) => {
            console.log("Successfully coin added:", res);
            
            notificationRefetch()
          })
          .catch((error) => {
            console.error("Error sending notification:", error);
          });

        axios
          .post(
            `https://nex-trade-server.vercel.app/v1/api/withdraw/${user?.email}`,
            withdrawData
          )
          .then((res) => {
            if (res.data.insertedId) {
              form.reset();
              setAmount(0);
              setPostalCode(0);
              elements.getElement(CardNumberElement).clear(); // Reset card number
              elements.getElement(CardExpiryElement).clear(); // Reset card expiry
              elements.getElement(CardCvcElement).clear();
              refetch();
              userBalanceRefetch();
              toast.success("Withdraw Successful", {
                id: toastId,
                duration: 5000,
              });
            }
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-sm mt-5 text-white">
      {/* section one */}
      <div className="flex items-center justify-between gap-4 mb-5">
        {/* <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Currency
          </label>
          <select
            // onChange={(e) => setCurrency(e.target.value)}
            name="currency"
            id=""
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded outline-none"
          >
            <option value="usd" selected>
              USD
            </option>
            <option value="bdt">BDT</option>
            <option value="inr">INR</option>
          </select>
        </div> */}
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Amount
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded outline-none"
            type="text"
            name="amount"
            id=""
            placeholder="amount"
          />
        </div>
      </div>

      {/* section two */}
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full">
          <div className="font-medium mb-2">Card Number</div>
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: "14px",
                  color: "white",
                  "::placeholder": {
                    color: "#939db1",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <div className="w-full">
          <div className="font-medium mb-2">CVC</div>
          <CardCvcElement
            options={{
              style: {
                base: {
                  fontSize: "14px",
                  color: "white",
                  "::placeholder": {
                    color: "#939db1",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      {/* section three */}
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full">
          <div className="font-medium mb-2">Expiration Date</div>
          <CardExpiryElement
            options={{
              style: {
                base: {
                  fontSize: "14px",
                  color: "white",
                  "::placeholder": {
                    color: "#939db1",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <div className="w-full">
          <div className="font-medium">Postal Code</div>
          <input
            onChange={(e) => setPostalCode(e.target.value)}
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded outline-none"
            type="text"
            name="postal_code"
            id=""
            placeholder="Postal Code"
            maxLength={4}
          />
        </div>
      </div>

      <div className="relative my-3 text-red-500 flex items-center justify-center font-semibold">
        {paymentError}
      </div>
      <DarkButton
        className="w-full"
        type="submit"
        disabled={!stripe || !elements}
      >
        Withdraw
      </DarkButton>
    </form>
  );
};

export default WithdrawForm;
