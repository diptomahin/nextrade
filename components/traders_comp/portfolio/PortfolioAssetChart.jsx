import React from "react";
import {
  Tooltip,
  ComposedChart,
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Area,
  Line,
} from "recharts";

const PortfolioAssetChart = ({ totalCurrentPrice }) => {
  const chartData = [
    {
      name: "Total Current Value",
      uv: totalCurrentPrice,
    },
  ];
 

  return (
    <div className=" rounded-lg w-full overflow-x-auto">
    <ComposedChart width={260} height={250} data={chartData}>
      <CartesianGrid stroke="#313131" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Area type="monotone" dataKey="uv" fill="#34ff71" stroke="#34ff71" />
      <Bar dataKey="uv" barSize={20} fill="#2230ff" />
      <Line type="monotone" dataKey="uv" stroke="#fff" />
    </ComposedChart>
  </div>
  );
};

export default PortfolioAssetChart;
