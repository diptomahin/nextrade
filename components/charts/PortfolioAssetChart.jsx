"use client"
import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Divider } from '@mui/material';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const PortfolioAssetChart = ({ totalBuyingPrice, calculateTotalProfit, usersRemainingBalance, calculateTotalLoss, allUsers }) => {

    // pie chart with customized label
    const COLORS = ['#c2410c', '#65a30d', '#10b981', '#6366f1', '#d946ef', '#f43f5e'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    let allPortfolios = allUsers[0].portfolio;

    // Calculate the total assetBuyingPrice for each unique assetName
    let totalAssetPriceMap = allPortfolios.reduce((acc, asset) => {
        const { assetName, assetBuyingPrice } = asset;
        acc[assetName] = (acc[assetName] || 0) + parseFloat(assetBuyingPrice);
        return acc;
    }, {});

    // Convert the totalAssetPriceMap into an array of objects suitable for a pie chart
    let pieChartData = Object.keys(totalAssetPriceMap).map(assetName => ({
        name: assetName,
        value: totalAssetPriceMap[assetName]
    }));

    // console.log(pieChartData);



    return (
        <div>
            <div className="  flex flex-col md:flex-row items-center md:justify-between bg-grayPrimary p-4 rounded-md gap-12 xl:gap-5 lg:gap-32">
                <div>
                    <p className="font-semibold text-gray-500">
                        Total Asset <RemoveRedEyeOutlinedIcon className="text-base ml-2" />
                    </p>
                    <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
                        $ {totalBuyingPrice.toFixed(2)}
                    </h1>
                    <div className=" flex items-center justify-between">
                        {/* total profit */}
                        <p
                            className={`font-semibold ${calculateTotalProfit >= 0 ? "text-green-700" : "text-red-600"
                                }`}
                        >
                            {calculateTotalProfit >= 0 ? "+" : "-"}$
                            {Math.abs(calculateTotalProfit).toFixed(2)}
                        </p>

                        {/* total loss */}
                        <p
                            className={`font-semibold ${calculateTotalProfit >= 0 ? "text-red-700" : " text-green-700 "
                                }`}
                        >
                            -${calculateTotalLoss()}
                        </p>
                    </div>
                </div>
                <Divider orientation="vertical" sx={{ border: "1px solid blue" }} variant="middle" flexItem />
                <div>
                    <p className="font-semibold text-gray-500">
                        Remaining Balance{" "}
                        <RemoveRedEyeOutlinedIcon className="text-base ml-2" />
                    </p>
                    <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
                        $ {usersRemainingBalance}
                    </h1>
                </div>
            </div>

            <h1 className='text-2xl font-semibold mt-10'>Total Asset Chart</h1>
            <PieChart width={320} height={320}>
                <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {pieChartData?.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default PortfolioAssetChart;