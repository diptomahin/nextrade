"use client";
import useAuth from "@/utils/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

//   date related variable
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();
const date = { day: day, month: month, year: year };
const time = { second: second, minute: minute, hour: hour };

const DepositForm = () => {
  const [paymentError, setPaymentError] = React.useState("");
  const [clientSecret, setClientSecret] = React.useState("");
  const [amount, setAmount] = React.useState("");
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
    const toastId = toast.loading("Progress...");

    if (!stripe || !elements) {
      toast.error("internal error!!!", { id: toastId, duration: 3000 });
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      toast.error("internal error!!!", { id: toastId, duration: 3000 });
      return;
    }

    const {
      error,
      // paymentMethod
    } = await stripe.createPaymentMethod({
      type: "card",
      card,
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
          card: card,
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
        toast.success("Deposit Successful", {
          id: toastId,
          duration: 4000,
        });
        const depositData = {
          transaction: paymentIntent,
          date: date,
          time: time,
          deposit: amount,
          email: user?.email,
          name: user?.displayName,
        };
        axios
          .post(`http://localhost:5000/api/v1/deposit`, depositData)
          .then((res) => console.log(res.data));
        // axiosSecure.post("/api/sale/create", salesData).then((res) => {
        //   if (res.data.insertedId) {
        //     const updateProductInfo = {
        //       sellCount: productData.sellCount + 1,
        //       productQuantity: productData.productQuantity - 1,
        //     };
        //     axiosSecure
        //       .patch(
        //         `/api/product/update/checkout/${productData._id}`,
        //         updateProductInfo
        //       )
        //       .then((res) => {
        //         if (res.data.modifiedCount > 0) {
        //           toast.success("Payment Successful", {
        //             id: toastId,
        //             duration: 4000,
        //           });
        //           navigate("/dashboard/sales-Collection");
        //         }
        //       });
        //   }
        // });
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="" className="font-semibold ml-4">
          Select Currency
        </label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border-2 mt-3 mb-6 px-4 py-2 rounded-full"
          type="text"
          name=""
          id=""
          placeholder="currency"
        />
        <label htmlFor="" className="font-semibold ml-4">
          Amount
        </label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border-2 mt-3 mb-8 px-4 py-2 rounded-full"
          type="text"
          name=""
          id=""
          placeholder="amount"
        />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "black",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="relative my-4 text-red-600">{paymentError}</div>
        <button
          className="w-full bg-sky-500 hover:bg-sky-600 text-white border-none rounded-full py-2 text-xl"
          type="submit"
          disabled={!stripe || !elements}
        >
          Deposit
        </button>
      </form>
    </>
  );
};

export default DepositForm;
