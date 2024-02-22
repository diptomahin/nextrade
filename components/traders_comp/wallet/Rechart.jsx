"use client";
import useTransactionData from "@/hooks/useTransactionData";
import useUserData from "@/hooks/useUserData";
import { Tooltip } from "@mui/material";
import React from "react";
import { Bar, BarChart, Legend, ResponsiveContainer } from "recharts";

const Rechart = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  const {
    transactionsData,
    transactionsDataLoading,
    transactionsDataPending,
    transactionsDataError,
  } = useTransactionData();

  if (
    userDataLoading ||
    userDataPending ||
    userDataError ||
    transactionsDataLoading ||
    transactionsDataPending ||
    transactionsDataError
  ) {
    return;
  }

  const totalDeposit = transactionsData?.reduce((acc, obj) => {
    if (obj?.deposit !== undefined) {
      // Added safe navigation operator ?.
      acc += obj.deposit;
    }
    return acc;
  }, 0);

  const totalWithdraw = transactionsData?.reduce((acc, obj) => {
    if (obj?.withdraw !== undefined) {
      // Added safe navigation operator ?.
      acc += obj.withdraw;
    }
    return acc;
  }, 0);
  return (
    <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree text-white rounded mt-5">
      <h1 className="text-xl text-center font-bold mb-5">Transaction Report</h1>
      <ResponsiveContainer width="90%" height={300} className=" mx-auto">
        <BarChart
          data={[
            {
              name: "Total Balance",
              "Total Balance":
                parseFloat(userData?.balance).toFixed(2) || "0.00",
            },
            {
              name: "Total Deposited",
              "Total Deposit": totalDeposit ? totalDeposit?.toFixed(2) : "0.00",
            },
            {
              name: "Total Withdrawals",
              "Total Withdraw": totalWithdraw
                ? totalWithdraw?.toFixed(2)
                : "0.00",
            },
          ]}
        >
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Balance" fill="#40a0ff" />
          <Bar dataKey="Total Deposit" fill="#78c350" />
          <Bar dataKey="Total Withdraw" fill="#ff5252" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
