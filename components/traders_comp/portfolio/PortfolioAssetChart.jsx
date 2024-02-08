"use client";

import React, { useState, useEffect } from "react";
import {
  Tooltip,
  ComposedChart,
  Area,
  Bar,
  CartesianGrid,
  Legend,
  Line,
  XAxis,
  YAxis,
} from "recharts";

const PortfolioAssetChart = ({ allUsers }) => {
  let allPortfolios = allUsers[0].portfolio;

  // Calculate the total assetBuyingPrice for each unique assetName
  let totalAssetPriceMap = allPortfolios.reduce((acc, asset) => {
    const { assetName, assetBuyingPrice } = asset;
    acc[assetName] = (acc[assetName] || 0) + parseFloat(assetBuyingPrice);
    return acc;
  }, {});

  // Convert the totalAssetPriceMap into an array of objects suitable for a composed chart
  let composedChartData = Object.keys(totalAssetPriceMap).map((assetName) => ({
    name: assetName,
    uv: totalAssetPriceMap[assetName],
  }));

  return (
    <div className=" rounded-lg w-full overflow-x-auto">
      <ComposedChart width={260} height={280} data={composedChartData}>
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
