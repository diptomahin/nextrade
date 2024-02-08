"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import useAuth from "@/hooks/useAuth";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

//   date related variable
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const date = { day: day, month: month, year: year };

const DepositForm = ({ refetch }) => {
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

    setPaymentError("");
    if (!/^-?\d*\.?\d+$/.test(form.amount.value)) {
      return setPaymentError("*Please provide a valid number amount");
    }
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
              elements.getElement(CardElement).clear();
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
    <form onSubmit={handleSubmit} className="text-sm mt-5 text-white">
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Currency
          </label>
          <select
            name="currency"
            id=""
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
          >
            <option value="" disabled selected>
              select currency
            </option>
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Amount
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="amount"
            id=""
            placeholder="amount"
          />
        </div>
      </div>
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
