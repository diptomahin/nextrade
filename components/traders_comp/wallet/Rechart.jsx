"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useUserData from "@/hooks/useUserData";

const Rechart = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return <div>Loading...</div>;
  }

  const data = [
    {
      balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
  ];

  return (
    <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree text-white rounded mt-5">
      <h1 className="text-xl text-center font-bold mb-5">Transaction Report</h1>
      <ResponsiveContainer width="90%" height={300} className="mx-auto">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="balance" fill="#40a0ff" />
          <Bar dataKey="deposit" fill="#78c350" />
          <Bar dataKey="withdraw" fill="#ff5252" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
