"use client"

import React, { useState, useEffect } from 'react';
import { Tooltip, ComposedChart, Area, Bar, CartesianGrid, Legend, Line, XAxis, YAxis } from 'recharts';

const PortfolioAssetChart = ({ allUsers }) => {
    const [chartWidth, setChartWidth] = useState(1000); 
    let allPortfolios = allUsers[0].portfolio;

    useEffect(() => {
        const handleResize = () => {
            // Adjust width based on device size
            const newWidth = window.innerWidth >= 1024 ? 1000 : 500; // Set width to 500 for LG devices (>=1024px)
            setChartWidth(newWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially to set the initial width
        handleResize();

        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   

    // Calculate the total assetBuyingPrice for each unique assetName
    let totalAssetPriceMap = allPortfolios.reduce((acc, asset) => {
        const { assetName, assetBuyingPrice } = asset;
        acc[assetName] = (acc[assetName] || 0) + parseFloat(assetBuyingPrice);
        return acc;
    }, {});

    // Convert the totalAssetPriceMap into an array of objects suitable for a composed chart
    let composedChartData = Object.keys(totalAssetPriceMap).map(assetName => ({
        name: assetName,
        uv: totalAssetPriceMap[assetName]
    }));

    return (
        <div className="bg-white rounded-lg  overflow-x-auto">
            <h1 className='text-2xl font-semibold my-5'>Total Asset Chart</h1>
            <div className="">
                <ComposedChart
                    width={chartWidth} 
                    height={300}
                    data={composedChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="uv" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </div>
            
        </div>
    );
};

export default PortfolioAssetChart;
