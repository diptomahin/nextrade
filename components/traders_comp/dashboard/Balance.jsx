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
import usePurchasedAssets from "@/hooks/usePurchasedAssets";
import useSecureAPI from "@/hooks/useSecureAPI";
import axios from "axios";


const Balance = () => {
  const {user} = useAuth()
   // asset Data without search functionality
   const [assetData2, setAssetData2] = useState([]);
   const [currencyData2, setCurrencyData2] = useState([]);

  const secureAPI = useSecureAPI();

  // get total balance form users data
  const {
    userData,
    userDataLoading,
    userDataPending,
    userDataError,
    refetchUserData,
  } = useUserData();

  refetchUserData();


  // asset Data with search functionality
  const [cryptoData, setCryptoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [dynamicSearch, setDynamicSearch] = useState("");
  const [coinPerPage, setCoinPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [assetCount, setAssetCount] = useState(0);

  // get page count from database
  useEffect(() => {
    secureAPI
      .get("/totalAssetCount")
      .then((res) => setAssetCount(res.data.count))
      .catch((error) => console.log(error));
  }, [secureAPI, user]);

  // Use optional chaining or default to 0 if assetCount is undefined
  const numberOfAssetPages = Math.ceil(assetCount / coinPerPage);

  const assetPage = [...Array(numberOfAssetPages).keys()];
 

  // fetch data with search functionality
  const {
    purchasedAssets,
    purchasedPending,
    purchasedLoading,
    purchasedRefetch,
  } = usePurchasedAssets(dynamicSearch, currentPage, coinPerPage);

  purchasedRefetch();



  // fetch data without search functionality
  const { data: totalPurchased = [], refetch: totalRefetch } = useSecureFetch(
    `/sidePortfolio?email=${user.email}`,
    ["purchased-asset", user?.email]
  );

  // filter  coin data
  useEffect(() => {
    // filter coin data with search functionality
    if (purchasedAssets.length > 0) {
      setCryptoData(
        purchasedAssets.filter((data) => data.assetType === "crypto coin")
      );
      setCurrencyData(
        purchasedAssets.filter((data) => data.assetType === "flat coin")
      );
    }

    // filter coin data without search functionality
    if (totalPurchased.length > 0) {
      setAssetData2(
        totalPurchased.filter((data) => data.assetType === "crypto coin")
      );
      setCurrencyData2(
        totalPurchased.filter((data) => data.assetType === "flat coin")
      );
    }
  }, [purchasedAssets, purchasedRefetch, totalPurchased]);

  // convert static data into real time data
  const createCryptoData = (
    _id,
    assetName,
    assetKey,
    assetImg,
    assetType,
    assetBuyingPrice,
    currentPrice,
    assetPortion,
    totalInvestment,
    assetBuyerUID,
    assetBuyerEmail
  ) => {
    return {
      _id,
      assetName,
      assetKey,
      assetImg,
      assetType,
      assetBuyingPrice,
      currentPrice,
      assetPortion,
      totalInvestment,
      assetBuyerUID,
      assetBuyerEmail,
    };
  };

  // ___________________create crypto data with search functionality start_________________

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (cryptoData.length > 0) {
        const updatedAssets = cryptoData.map((asset) => {
          const ticker = data.find((item) => item.s === asset.assetKey);
          if (ticker) {
            return createCryptoData(
              asset._id,
              asset.assetName,
              asset.assetKey,
              asset.assetImg,
              asset.assetType,
              asset.assetBuyingPrice,
              parseFloat(ticker.c).toFixed(3),
              asset.assetPortion,
              asset.totalInvestment,
              asset.assetBuyerUID,
              asset.assetBuyerEmail
            );
          }
          return asset;
        });
        setCryptoData(updatedAssets);
      }
    });
    return () => socket.close();
  }, [cryptoData]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (currencyData.length > 0) {
          const updatedAssets = await Promise.all(
            currencyData.map(async (asset) => {
              const currencyKey = asset.assetKey;
              const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
              );
              return createCryptoData(
                asset._id,
                asset.assetName,
                asset.assetKey,
                asset.assetImg,
                asset.assetType,
                asset.assetBuyingPrice,
                response.data.rates.USD,
                asset.assetPortion,
                asset.totalInvestment,
                asset.assetBuyerUID,
                asset.assetBuyerEmail
              );
            })
          );
          setCryptoData((prevCryptoData) => [
            ...prevCryptoData,
            ...updatedAssets,
          ]);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [currencyData]);

  // ___________________create crypto data with search functionality ends_________________

  // _________________create crypto data data without search functionality start____________

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (assetData2.length > 0) {
        const updatedAssets = assetData2.map((asset) => {
          const ticker = data.find((item) => item.s === asset.assetKey);
          if (ticker) {
            return createCryptoData(
              asset._id,
              asset.assetName,
              asset.assetKey,
              asset.assetImg,
              asset.assetType,
              asset.assetBuyingPrice,
              parseFloat(ticker.c).toFixed(3),
              asset.assetPortion,
              asset.totalInvestment,
              asset.assetBuyerUID,
              asset.assetBuyerEmail
            );
          }
          return asset;
        });
        setAssetData2(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assetData2]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (currencyData2.length > 0) {
          const updatedAssets = await Promise.all(
            currencyData2.map(async (asset) => {
              const currencyKey = asset.assetKey;
              const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
              );
              return createCryptoData(
                asset._id,
                asset.assetName,
                asset.assetKey,
                asset.assetImg,
                asset.assetType,
                asset.assetBuyingPrice,
                response.data.rates.USD,
                asset.assetPortion,
                asset.totalInvestment,
                asset.assetBuyerUID,
                asset.assetBuyerEmail
              );
            })
          );
          setAssetData2((prevCryptoData) => [
            ...prevCryptoData,
            ...updatedAssets,
          ]);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [currencyData2]);

  const liveCurrentData= cryptoData.map(data => data.currentPrice)

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

 

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  const data = [
    {
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Assets: parseFloat(userData?.balance).toFixed(2) || "0.00",

      "Profit": calculateTotalProfit.toFixed(2) || "0.00",
      "Loss": calculateTotalLoss.toFixed(2) || "0.00",
      
      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",

      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
  ];

  //total asset 
  
  const totalAssetInvestment = totalPurchased.reduce(
    (total, asset) => total + parseFloat(asset.totalInvestment),
    0
  );
  totalRefetch();

  return (
    <div className="xl:col-span-12 2xl:col-span-7 w-full h-full bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
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
                  <span className='text-green-500 flex gap-2'>${liveCurrentData ? calculateTotalProfit.toFixed(2) : "0.00"} <IoMdArrowDropup/></span>
                  <span className='text-red-500 flex gap-2'>${liveCurrentData ?calculateTotalLoss.toFixed(2) : "0.00"} <IoMdArrowDropdown/></span>
                  
                  
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
              <Bar dataKey="Profit" fill="#0891b2" name="Profit" />
              <Bar dataKey="Loss" fill="#f65455" name="Loss" />
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
