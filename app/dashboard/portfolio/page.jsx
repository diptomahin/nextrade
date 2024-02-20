"use client";
import React, { useEffect, useState } from "react";
import * as MuiIcons from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";
import DashButton from "@/components/library/buttons/DashButton";
import PortfolioAssetChart from "@/components/traders_comp/portfolio/PortfolioAssetChart";
import PortfolioTopBanner from "@/components/traders_comp/portfolio/PortfolioTopBanner";
import Image from "next/image";
import BuyAndExchange from "@/components/traders_comp/portfolio/BuyAndExchange";
import emptyIcon from "../../../assets/emptyIcon.png";
import axios from "axios";

const Portfolio = () => {

  const { user, loading } = useAuth();
  const [cryptoData, setCryptoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user?.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);

  // data fetch in all coin in buying  market page
  const {
    data: purchasedAssets = [],
    isPending: purchasedPending,
    isLoading: purchasedLoading,
    refetch: purchasedRefetch,
  } = useSecureFetch(`/purchasedAssets?email=${user.email}`, [
    "purchased-asset",
    user?.email,
  ]);
  // console.log(purchasedAssets)

  // filter  coin data
  useEffect(() => {
    if (purchasedAssets.length > 0) {
      setCryptoData(
        purchasedAssets.filter((data) => data.assetType === "crypto coin")
      );
      setCurrencyData(
        purchasedAssets.filter((data) => data.assetType === "flat coin")
      );
    }
  }, [purchasedAssets]);

  // console.log(currencyData);

  // data information create object
  const createCryptoData = (
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
  // console.log(cryptoData);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (currencyData.length > 0) {
          const updatedAssets = await Promise.all(currencyData.map(async (asset) => {
            const currencyKey = asset.assetKey;
            const response = await axios.get(
              `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
            );
            return createCryptoData(
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
          }));
          setCryptoData((prevCryptoData) => [...prevCryptoData, ...updatedAssets]);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };
  
    fetchCurrencyRates();
  }, [currencyData]);

  // console.log(cryptoData);

  // profit and loss calculator

  const calculateDifference = (currentPrice, buyingPrice,portion) => {
  const profitLoss = (currentPrice - buyingPrice)*(parseFloat(portion.slice(0,-1))/100);
    return profitLoss;
  };

  

  const calculateTotalProfit = cryptoData.reduce((total, asset) => {
    const difference = calculateDifference(
      asset.currentPrice,
      asset.assetBuyingPrice,
      asset.assetPortion
    );
    return total + (parseFloat(difference) > 0 ? parseFloat(difference) : 0);
  }, 0);


    const calculateTotalLoss = cryptoData.reduce((total, asset) => {
      const difference = calculateDifference(
        asset.currentPrice,
        asset.assetBuyingPrice,
        asset.assetPortion
      );
      
      return total + (parseFloat(difference) < 0 ? Math.abs(parseFloat(difference)) : 0);
    }, 0);
    
  
  

  const totalBuyingPrice = purchasedAssets.reduce(
    (total, asset) => total + parseFloat(asset.assetBuyingPrice),
    0
  );

  // Calculate total current price
  const totalCurrentPrice = purchasedAssets.reduce(
    (total, asset) => total + parseFloat(asset.totalInvestment),
    0
  );

  if (
    loading ||
    isLoading ||
    isPending ||
    purchasedLoading ||
    purchasedPending
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
          totalBuyingPrice={totalBuyingPrice}
          calculateTotalProfit={calculateTotalProfit}
          usersRemainingBalance={usersRemainingBalance}
          calculateTotalLoss={calculateTotalLoss}
        />
        {/* coin buying list   */}
        <div className="my-5 p-4   rounded bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree ">
          <h1 className="text-xl font-semibold my-3">Coin Allocation</h1>
          {cryptoData ? (
            <div className=" bg-gradient-to-bl overflow-x-auto from-darkOne to-darkTwo  ">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Coin
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Company
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Buying Price
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Investment
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Current Price
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Profit / Loss
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cryptoData.map((asset, index) => (
                    <TableRow key={index}>
                      {/* 1st row */}
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <Image
                          height={45}
                          width={45}
                          src={asset.assetImg}
                          alt="coin logo"
                        ></Image>
                      </TableCell>
                      {/* 2nd row */}
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <h2 className="font-medium ">{asset.assetName}</h2>
                      </TableCell>
                      {/* 3rd row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.assetBuyingPrice).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 4th row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.totalInvestment).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 5th row */}
                      <TableCell
                        className="font-medium"
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <span
                          className={`${
                            asset.currentPrice <
                            parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700"
                              : "text-green-700"
                          }`}
                        >
                          ${parseFloat(asset.currentPrice).toFixed(2)}
                        </span>
                        {asset.currentPrice >
                        parseFloat(asset.assetBuyingPrice) ? (
                          <MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" />
                        ) : (
                          <MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" />
                        )}
                      </TableCell>
                      {/* 6th row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <span
                          className={`font-medium ${
                            calculateDifference(
                              asset.currentPrice,
                              parseFloat(asset.assetBuyingPrice),
                              asset.assetPortion
                            ).toFixed(2) > 0
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          $
                          {calculateDifference(
                            asset.currentPrice,
                            parseFloat(asset.assetBuyingPrice),
                            asset.assetPortion
                          ).toFixed(2)}
                          {calculateDifference(
                            asset.currentPrice,
                            parseFloat(asset.assetBuyingPrice),
                            asset.assetPortion
                          ).toFixed(2) > 0 ? (
                            <MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" />
                          ) : (
                            <MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" />
                          )}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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
          <BuyAndExchange cryptoData={cryptoData}></BuyAndExchange>
        </div>
        <div className="p-4  bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded  ">
          <h1 className="text-xl font-semibold my-5">Total Asset Chart</h1>
          {cryptoData ? (
            <PortfolioAssetChart totalCurrentPrice={totalCurrentPrice} />
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
