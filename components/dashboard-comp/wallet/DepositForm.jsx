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

const DepositForm = ({ setUserBalanceDetails }) => {
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
    const form = event.target;
    const toastId = toast.loading("Progress...", { duration: 5000 });

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
        const depositData = {
          transaction: paymentIntent,
          date: date,
          time: time,
          deposit: parseInt(form.amount.value),
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
              // Reset the Stripe CardElement
              if (elements) {
                elements.getElement(CardElement).clear();
              }
              axios
                .get(
                  `https://nex-trade-server.vercel.app/v1/api/all-users/${user?.email}`
                )
                .then((res) => {
                  form.reset();
                  // Reset the Stripe CardElement
                  if (elements) {
                    elements.getElement(CardElement).clear();
                  }
                  setUserBalanceDetails(res.data[0]);
                  toast.success("Deposit Successful", {
                    id: toastId,
                    duration: 4000,
                  });
                });
            }
          });
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
          name="amount"
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
        <div className="relative mt-4 text-red-600">{paymentError}</div>
        <button
          className="w-full bg-[#1D366F]/90 hover:bg-[#1D366F] text-white border-none rounded-full py-[6px] text-lg mt-5"
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
