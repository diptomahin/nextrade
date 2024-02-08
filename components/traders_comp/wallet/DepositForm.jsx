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

const DepositForm = ({ refetch, date }) => {
  const [paymentError, setPaymentError] = React.useState("");
  const [clientSecret, setClientSecret] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [postalCode, setPostalCode] = React.useState(0);
  // const [currency, setCurrency] = React.useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  React.useEffect(() => {
    axios
      .post("https://nex-trade-server.vercel.app/create-payment-intent", {
        price: amount,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setPaymentError("");

    if (!/^-?\d*\.?\d+$/.test(amount)) {
      form.reset();
      setAmount("");
      return setPaymentError("*Please provide a valid number amount");
    }

    if (!/^\d{4}$/.test(postalCode)) {
      setPostalCode("");
      return setPaymentError("*Please provide a valid 4-digit postal code");
    }

    const toastId = toast.loading("Progress...", { duration: 5000 });

    if (!stripe || !elements) {
      toast.error("internal error!!!", { id: toastId, duration: 3000 });
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
      toast.error(error.message, { id: toastId, duration: 3000 });
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
        const depositData = {
          transaction: paymentIntent,
          date: date,
          deposit: parseInt(amount),
          email: user?.email,
          name: user?.displayName,
        };
        axios
          .put(
            `https://nex-trade-server.vercel.app/v1/api/all-users/deposit/${user?.email}`,
            depositData
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              form.reset();
              setAmount("");
              setPostalCode("");
              elements.getElement(CardNumberElement).clear(); // Reset card number
              elements.getElement(CardExpiryElement).clear(); // Reset card expiry
              elements.getElement(CardCvcElement).clear();
              refetch();
              toast.success("Deposit Successful", {
                id: toastId,
                duration: 4000,
              });
            }
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-sm mt-10 text-white">
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Currency
          </label>
          <select
            // onChange={(e) => setCurrency(e.target.value)}
            name="currency"
            id=""
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
          >
            <option value="usd" selected>
              USD
            </option>
            <option value="bdt">BDT</option>
            <option value="inr">INR</option>
          </select>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Amount
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="amount"
            id=""
            placeholder="amount"
          />
        </div>
      </div>
      <div className="my-4">
        <label className="font-medium">Card Number</label>
        <div className="stripe-input">
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
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-1/2">
          <label className="font-medium">CVC</label>
          <div className="stripe-input">
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
        <div className="flex flex-col w-1/2">
          <label className="font-medium">Expiration Date</label>
          <div className="stripe-input">
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: "14px",
                    color: "white",
                    padding: "10px",
                    border: "1px solid white",
                    borderRadius: "5px",
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
      </div>
      <div className="my-4">
        <label className="font-medium">Postal Code</label>
        <input
          onChange={(e) => setPostalCode(e.target.value)}
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
          type="text"
          name="postal_code"
          id=""
          placeholder="Postal Code"
          maxLength={4}
        />
      </div>
      <div className="relative mt-4 text-red-600">{paymentError}</div>
      <DarkButton
        className="w-full mt-5"
        type="submit"
        disabled={!stripe || !elements}
      >
        Deposit
      </DarkButton>
    </form>
  );
};

export default DepositForm;
