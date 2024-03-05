"use client";
import DepositForm from "@/components/traders_comp/wallet/DepositForm";
import WithdrawForm from "@/components/traders_comp/wallet/WithdrawForm";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";

const DepositWithdrawSection = ({
  userData,
  refetchUserData,
  refetchSpecificTransactionsData,
  stripePromise,
}) => {
  const [isBuyOpen, setIsBuyOpen] = useState(true);

  return (
    <div className="w-full p-5 bg-white dark:bg-tertiary rounded-xl shadow">
      <div className="flex items-center justify-center">
        <div className="relative w-full sm:w-72 h-10 flex items-center text-black  bg-gray-100 dark:bg-secondary rounded-xl">
          <div
            className={`w-1/2 h-full rounded-xl bg-primary  transition-transform ${
              isBuyOpen ? "translate-x-0" : "translate-x-full"
            } duration-200 ease-in-out`}
          ></div>
          <button
            onClick={() => setIsBuyOpen(true)}
            className={`absolute w-1/2 h-full whitespace-nowrap bg-transparent transition-all ${
              isBuyOpen ? "text-white" : "dark:text-gray-300"
            } duration-200 ease-in-out font-medium text-sm z-10`}
          >
            Deposit
          </button>
          <button
            onClick={() => setIsBuyOpen(false)}
            className={`absolute w-1/2 whitespace-nowrap transform translate-x-full h-full bg-transparent transition-all ${
              !isBuyOpen ? "text-white" : "dark:text-gray-300"
            } duration-100 font-medium text-sm z-10`}
          >
            Withdraw
          </button>
        </div>
      </div>
      {isBuyOpen ? (
        <DepositForm
          stripePromise={stripePromise}
          refetchUserData={refetchUserData}
          refetchSpecificTransactionsData={refetchSpecificTransactionsData}
        />
      ) : userData && userData.balance <= 10 ? (
        <div className="flex flex-col items-center justify-center text-center my-10">
          <h4 className="text-xl  3xl:text-2xl font-bold">
            Please deposit first
          </h4>
          <p className="text-sm  3xl:text-base">
            Your account balance must meet or exceed{" "}
            <span className="font-semibold text-quaternary">$10</span> to
            initiate a withdrawal.
          </p>
        </div>
      ) : (
        <Elements stripe={stripePromise}>
          <WithdrawForm
            refetchUserData={refetchUserData}
            refetchSpecificTransactionsData={refetchSpecificTransactionsData}
            totalBalance={userData?.balance}
          />
        </Elements>
      )}
    </div>
  );
};

export default DepositWithdrawSection;
