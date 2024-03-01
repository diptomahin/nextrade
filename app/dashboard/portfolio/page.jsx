"use client";
import React, { useEffect, useState } from "react";

import {

  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import PortfolioAssetChart from "@/components/traders_comp/portfolio/PortfolioAssetChart";
import PortfolioTopBanner from "@/components/traders_comp/portfolio/PortfolioTopBanner";
import Image from "next/image";
import BuyAndExchange from "@/components/traders_comp/portfolio/BuyAndExchange";
import emptyIcon from "../../../assets/emptyIcon.png";
import axios from "axios";
import useUserData from "@/hooks/useUserData";
import usePurchasedAssets from "@/hooks/usePurchasedAssets";
import PortfolioAssetTable from "@/components/traders_comp/portfolio/PortfolioAssetTable";
import PortfolioAssetBox from "@/components/traders_comp/portfolio/PortfolioAssetBox";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";

const Portfolio = () => {
  const { user } = useAuth();

  // get total balance form users data
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  const usersRemainingBalance = parseFloat(userData?.balance).toFixed(2);

  // asset Data with search functionality
  const [cryptoData, setCryptoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);
  const [dynamicSearch, setDynamicSearch] = useState("");
  const [coinPerPage, setCoinPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  // fetch data with search functionality
  const {
    purchasedAssets,
    purchasedPending,
    purchasedLoading,
    purchasedRefetch,
  } = usePurchasedAssets(dynamicSearch, currentPage, coinPerPage);

  purchasedRefetch()

  // asset Data without search functionality
  const [assetData2, setAssetData2] = useState([]);
  const [currencyData2, setCurrencyData2] = useState([]);

  // fetch data without search functionality
  const {
    data: totalPurchased = [],
    refetch: totalRefetch
  } = useSecureFetch(`/sidePortfolio?email=${user.email}`, [
    "purchased-asset",
    user?.email,
  ]);


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
      setAssetData2(totalPurchased.filter((data) => data.assetType === "crypto coin"))
      setCurrencyData2(totalPurchased.filter((data) => data.assetType === "flat coin"))
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

  const totalAssetInvestment = totalPurchased.reduce(
    (total, asset) => total + parseFloat(asset.totalInvestment),
    0
  );

  // // Calculate total current price
  // const totalCurrentPrice = purchasedAssets.reduce(
  //   (total, asset) => total + parseFloat(asset.totalInvestment),
  //   0
  // );

  // search functionality
  const Search = () => {
    purchasedRefetch();
  };

  //  short coin pages and size page in coin
  const handleCoinPerPages = (e) => {
    const val = parseInt(e.target.value);
    setCoinPerPage(val);
    setCurrentPage(0);
  };

  const [view, setView] = React.useState("list");

  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };

  if (
    purchasedLoading ||
    purchasedPending ||
    userDataLoading ||
    userDataPending ||
    userDataError
  ) {
    return (
      <p className="h-screen flex items-center justify-center text-primary">
        <span>loading...</span>
      </p>
    );
  }

  return (
    <div className=" grid md:grid-cols-7 grid-cols-1  md:gap-5">
      {/* left side  */}
      <div className=" col-span-5 ">
        {/* header */}
        <PortfolioTopBanner
          totalBuyingPrice={totalAssetInvestment}
          calculateTotalProfit={calculateTotalProfit}
          usersRemainingBalance={usersRemainingBalance}
          calculateTotalLoss={calculateTotalLoss}
        />
        {/* coin buying list   */}
        <div className="my-5 p-4   rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree ">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold my-3">Your Holdings</h1>
            <div className=" flex justify-around items-center gap-3">
              {/* search form */}
              <div className="relative flex items-center">
                <input
                  onChange={(e) => setDynamicSearch(e.target.value)}
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="w-28 focus:w-48 bg-white/5 hover:bg-white/10 transition-all duration-200 ease-in-out text-sm pl-3 pr-9 py-[6px] outline-none rounded font-medium"
                />
                <button
                  onClick={Search}
                  className="absolute right-0 bg-transparent text-lg text-white mix-blend-difference hover:bg-transparent btn btn-sm rounded-l-none shadow-none border-none"
                >
                  <BiSearchAlt />
                </button>
              </div>
              {/* show coin count */}
              <div className="bg-white/5 p-1 rounded">

                <select
                  value={coinPerPage}
                  onChange={handleCoinPerPages}
                  className="bg-transparent  rounded-md p-1 text-sm "
                  name=""
                  id=""
                >
                  <option className="text-black" value="6">
                    6
                  </option>
                  <option className="text-black" value="12">
                    12
                  </option>
                  <option className="text-black" value="18">
                    18
                  </option>
                  <option className="text-black" value="24">
                    24
                  </option>
                </select>

              </div>

              {/* view options */}
              <ToggleButtonGroup
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleViewChange}
              >
                <ToggleButton value="list" aria-label="list">
                  <ViewListIcon className="text-primary" />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon className="text-primary " />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>

          {cryptoData ? (
            <>
              {view === "list" ? (
                <PortfolioAssetTable
                  cryptoData={cryptoData}
                  calculateDifference={calculateDifference}
                  setCurrentPage={setCurrentPage}
                />
              ) : (
                <PortfolioAssetBox cryptoData={cryptoData} loading={purchasedLoading} pending={purchasedPending} calculateDifference={calculateDifference}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
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
          )}
        </div>
      </div>

      {/* Right side  */}
      <div className=" col-span-2 ">
        <div className="p-4  bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded  mb-5 ">
          <BuyAndExchange
            cryptoData={assetData2}
            remainingBalance={usersRemainingBalance}
            refetch={purchasedRefetch}
            totalRefetch={totalRefetch}
          ></BuyAndExchange>
        </div>
        <div className="p-4  bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded  ">
          <h1 className="text-xl font-semibold my-5">Total Asset Chart</h1>
          {cryptoData ? (
            <PortfolioAssetChart totalCurrentPrice={totalAssetInvestment} />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
