"use client";

import useUserData from "@/hooks/useUserData";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { HiMiniArrowDownOnSquareStack } from "react-icons/hi2";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


const Balance = () => {
  const {user} = useAuth()
   // asset Data without search functionality
   const [assetData2, setAssetData2] = useState([]);

   // fetch data without search functionality
   const { data: totalPurchased = [], refetch: totalRefetch } = useSecureFetch(
    `/sidePortfolio?email=${user.email}`,
    ["purchased-asset", user?.email]
  );

  // filter  coin data
  useEffect (() => {
    
    // filter coin data without search functionality
    if (totalPurchased.length > 0) {
      setAssetData2(
        totalPurchased.filter((data) => data.assetType === "crypto coin")
      );
      
    }
  }, [ totalPurchased ]);

  // profit and loss calculator
  const calculateDifference = (currentPrice, buyingPrice, portion) => {
    const profitLoss =
      (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
    return profitLoss;
  };

  const calculateTotalProfit = assetData2.reduce((total, asset) => {
    const difference = calculateDifference(
      asset.currentPrice,
      asset.assetBuyingPrice,
      asset.assetPortion
    );
    return total + (parseFloat(difference) > 0 ? parseFloat(difference) : 0);
  }, 0);

  const calculateTotalLoss = assetData2.reduce((total, asset) => {
    const difference = calculateDifference(
      asset.currentPrice,
      asset.assetBuyingPrice,
      asset.assetPortion
    );

    return (
      total +
      (parseFloat(difference) < 0 ? Math.abs(parseFloat(difference)) : 0)
    );
  }, 0);

  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  const data = [
    {
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Assets: parseFloat(userData?.balance).toFixed(2) || "0.00",

      "Profit/Loss": parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",

      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
  ];

  //total asset 
  
  const totalAssetInvestment = totalPurchased.reduce(
    (total, asset) => total + parseFloat(asset.totalInvestment),
    0
  );


  return (
    <div className="xl:col-span-12 2xl:col-span-7 w-full h-full bg-white dark:bg-tertiary p-5 rounded-xl shadow">
      <h3 className="text-xl font-semibold">Balance</h3>

      {/* content */}
      <div className="h-full flex flex-col lg:flex-row items-center justify-between lg:gap-5 6xl:gap-10 py-5">
        <div className="w-full">
          {/* top part */}
          <div className="flex flex-wrap gap-5 justify-between">
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full">
                <MdAccountBalance className="text-2xl" />
              </div>
              <div className="">
                <h3 className="text-primary font-semibold">Total Balance</h3>
                <p className="text-xl font-semibold">
                  ${parseFloat(userData?.balance).toFixed(2) || "0.00"}
                </p>
              </div>
            </div>

            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-[#eab308] text-white flex items-center justify-center rounded-full">
                <MdAccountBalance className="text-2xl" />
              </div>
              <div className="">
                <h3 className="text-[#eab308] font-semibold">Total Assets</h3>
                <p className="text-xl font-semibold">
                  ${totalAssetInvestment.toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
          </div>

          {/* bottom part */}
          <div className="bg-zinc-100 dark:bg-secondary p-5 my-8 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-600 text-white flex items-center justify-center rounded-full">
                <HiMiniArrowDownOnSquareStack className="text-lg" />
              </div>
              <div className="w-full">
                <h3 className="text-sm text-bg-cyan-600 font-semibold">
                  Total Profit/Loss
                </h3>
                <p className="font-semibold flex items-center justify-between  w-full">
                  <span className='text-green-500 flex gap-2'>${calculateTotalProfit.toFixed(2) || "0.00"} <IoMdArrowDropup/></span>
                  <span className='text-red-500 flex gap-2'>${calculateTotalLoss.toFixed(2) || "0.00"} <IoMdArrowDropdown/></span>
                  
                  
                </p>
              </div>
            </div>
            <hr className="dark:border-darkThree my-5" />
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-senary text-white flex items-center justify-center rounded-full">
                <RiLuggageDepositFill className="text-lg" />
              </div>
              <div className="">
                <h3 className="text-sm text-secondary font-semibold">
                  Total Deposit
                </h3>
                <p className="font-semibold">
                  ${parseFloat(userData?.deposit).toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
            <hr className="dark:border-darkThree my-5" />
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-septenary text-white flex items-center justify-center rounded-full">
                <FaCreditCard className="text-lg" />
              </div>
              <div className="">
                <h3 className="text-sm text-tertiary font-semibold">
                  Total Withdraw
                </h3>
                <p className="font-semibold">
                  ${parseFloat(userData?.withdraw).toFixed(2) || "0.00"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <ResponsiveContainer
            width={"100%"}
            height={300}
            className="mx-auto text-center flex flex-col"
          >
            <BarChart data={data}>
              {/* <XAxis data={data} /> */}
              <Tooltip />
              <Legend />
              <Bar dataKey="Balance" fill="#40a0ff" name="Balance" />
              <Bar dataKey="Assets" fill="#eab308" name="Assets" />
              <Bar dataKey="Profit/Loss" fill="#0891b2" name="Profit/Loss" />
              <Bar dataKey="Deposit" fill="#3aba69" name="Deposit" />
              <Bar dataKey="Withdraw" fill="#f65455" name="Withdraw" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Balance;
