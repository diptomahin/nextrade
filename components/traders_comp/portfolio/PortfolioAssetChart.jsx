import React from "react";
import {
  Tooltip,
  Bar,
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
} from "recharts";
import emptyIcon from "../../../assets/emptyIcon.png";
import Image from "next/image";

const PortfolioAssetChart = ({ cryptoData }) => {


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-gray-400 dark:bg-black dark:text-white text-white p-3 rounded-md">
          <p className="label font-semibold    ">{`Asset: ${label}`}</p>
          <p className="total-investment">{`Investment: ${payload[0].value} USD`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="rounded-lg w-full overflow-x-auto overflow-y-auto">
      {
        cryptoData.length > 0 ? (
          <ResponsiveContainer width={"100%"} height={300} className="mx-auto text-center">
        <BarChart data={cryptoData}>
          
          <XAxis dataKey="assetKey" position="bottom" />
          <Tooltip content={<CustomTooltip />} />

          {cryptoData.map((data, index) => (
            <Bar key={index} dataKey="totalInvestment" fill='#40a0ff' />
          ))}
        </BarChart>
      </ResponsiveContainer>
        ) : (
          <div className=" w-full  flex flex-col items-center justify-center gap-2 py-8">
              <Image 
                src={emptyIcon}
                width={70}
                height={70}
                alt="BTC/USDT Logo"
              />
              <h3 className="text-primary text-lg font-semibold text-center">
                empty !!
              </h3>
            </div>
        )
      }
    </div>
  );
};

export default PortfolioAssetChart;
