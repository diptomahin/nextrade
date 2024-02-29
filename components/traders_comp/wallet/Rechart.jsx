"use client";
import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
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
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
  ];

  return (
    <ResponsiveContainer
      width={"100%"}
      height={325}
      className="mx-auto text-center"
    >
      <BarChart data={data}>
        <XAxis dataKey={data} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Balance" fill="#40a0ff" />
        <Bar dataKey="Deposit" fill="#3aba69" />
        <Bar dataKey="Withdraw" fill="#f65455" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Rechart;
