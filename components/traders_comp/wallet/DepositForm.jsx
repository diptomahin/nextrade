"use client";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "@/components/library/Button";
import useAuth from "@/hooks/useAuth";
import useSecureAPI from "@/hooks/useSecureAPI";
import getDate from "../../utils/date";
import { useEffect, useState } from "react";
import useNotificationData from "@/hooks/useNotificationData";
import useAdminNotificationData from "@/hooks/useAdminNotificationData";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { useForm } from "react-hook-form";

const DepositForm = ({ refetchUserData, refetchSpecificTransactionsData }) => {
  const [paymentError, setPaymentError] = useState("");
  const [amount, setAmount] = useState(0);
  // const [currency, setCurrency] = useState("");
  const { user } = useAuth();
  const secureAPI = useSecureAPI();
  const { refetchNotificationsData } = useNotificationData();
  const { adminRefetchNotificationsData } = useAdminNotificationData();
  const date = getDate();
  const [isPaymentSelected, setIsPaymentSelected] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    if (amount <= 0 || !amount) {
      return;
    }
    if (amount > 100000) {
      return setPaymentError("*The amount must be 100,000 or less.");
    }

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

    if (!/^\d{4}$/.test(postalCode)) {
      setPostalCode(0);
      return setPaymentError("*Please provide a valid 4-digit postal code");
    }

    const toastId = toast.loading("Progress...", { duration: 10000 });

    const depositData = {
      transaction: paymentIntent,
      date: date,
      deposit: parseInt(amount),
      email: user?.email,
      name: user?.displayName,
      action: "Deposit",
      amount: parseInt(amount),
      currency: "usd",
    };

    axios
      .post(
        `https://nex-trade-server.vercel.app/v1/api/deposit/${user?.email}`,
        depositData
      )
      .then((res) => {
        if (res.data.insertedId) {
          // post notification data sen database
          const notificationInfo = {
            title: "Deposit Successfully",
            description: `A deposit of ${
              "$" + parseInt(amount)
            } has been credited to your account.`,
            assetKey: "",
            assetImg: "",
            assetBuyerUID: "",
            email: user?.email,
            postedDate: date,
            location: "/dashboard/wallet",
            read: false,
            type: "admin",
          };

          // post to  notification data in database
          secureAPI
            .post("/notifications", notificationInfo)
            .then((res) => {
              if (res.data.insertedId) {
                secureAPI.post("/adminNotifications", notificationInfo);
                form.reset();
                setAmount(0);
                setPostalCode(0);
                elements.getElement(CardNumberElement).clear(); // Reset card number
                elements.getElement(CardExpiryElement).clear(); // Reset card expiry
                elements.getElement(CardCvcElement).clear();
                refetchUserData();
                refetchSpecificTransactionsData();
                refetchNotificationsData();
                adminRefetchNotificationsData();
                toast.success("Deposit Successful", {
                  id: toastId,
                  duration: 5000,
                });
              }
            })
            .catch((error) => {});
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* section one */}
      <div className="w-full flex flex-col">
        <label htmlFor="" className="font-medium">
          Currency
        </label>
        <select
          // onChange={(e) => setCurrency(e.target.value)}
          name="currency"
          id=""
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
        >
          <option value="usd" selected>
            USD
          </option>
          <option value="bdt">BDT</option>
          <option value="inr">INR</option>
        </select>
      </div>

      {/* section two */}
      <div className="w-full flex flex-col">
        <label htmlFor="" className="text-sm font-medium">
          Amount
        </label>
        <input
          // onBlur={(e) => setAmount(e.target.value)}
          className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
          type="text"
          name="amount"
          id=""
          placeholder="Amount..."
        />
      </div>

      <p className="mt-6">Choose payment option</p>

      <div className="flex flex-col md:flex-row 2xl:flex-col gap-5 mt-2 mb-4">
        <div
          onClick={() => {
            setIsPaymentSelected(true);
          }}
          className={`w-fit flex items-center gap-1 ${
            isPaymentSelected ? "text-primary" : ""
          } text-sm font-medium cursor-pointer`}
        >
          {isPaymentSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Credit & Debit Card
        </div>

        <div
          onClick={() => {
            setIsPaymentSelected(false);
          }}
          className={`w-fit flex items-center gap-1 ${
            !isPaymentSelected ? "text-primary" : ""
          } text-sm font-medium cursor-pointer`}
        >
          {!isPaymentSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Bank
        </div>
      </div>

      <hr className="dark:border-darkThree mb-3" />
      {isPaymentSelected ? (
        <div className="">
          {/* section one */}
          <div className="w-full flex flex-col my-3">
            <label htmlFor="" className="text-sm font-medium">
              Card Number
            </label>
            <input
              // onBlur={(e) => setAmount(e.target.value)}
              className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
              type="text"
              name="amount"
              id=""
              placeholder="Card Number..."
            />
          </div>

          {/* section two */}
          <div className="flex flex-col md:flex-row 2xl:flex-col items-center justify-between gap-4 my-3">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                Expiration Date
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="MM/YY..."
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                CVC
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="CVC..."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          {/* section one */}
          <div className="flex flex-col md:flex-row 2xl:flex-col items-center justify-between gap-4 my-4">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                Account Holder
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="Account holder..."
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                Routing Number
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-md outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="Routing number..."
              />
            </div>
          </div>

          {/* section two */}
          <div className="flex flex-col md:flex-row 2xl:flex-col items-center justify-between gap-4 my-4">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                Account Number
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="Account number..."
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-sm font-medium">
                Confirm Account Number
              </label>
              <input
                // onBlur={(e) => setAmount(e.target.value)}
                className="bg-transparent w-full border dark:border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                id=""
                placeholder="Confirm account number..."
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <Button className="2xl:w-full mt-2">Deposit</Button>
      </div>
    </form>
  );
};

export default DepositForm;
