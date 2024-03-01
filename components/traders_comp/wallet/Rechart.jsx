"use client";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip } from "recharts";

const Rechart = ({ userData }) => {
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
      height={300}
      className="mx-auto text-center"
    >
      <BarChart data={data}>
        {/* <XAxis dataKey={data} /> */}
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
