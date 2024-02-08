"use client";
import React, { useEffect, useState } from "react";
import * as MuiIcons from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";
import DashButton from "@/components/library/buttons/DashButton";
import PortfolioAssetChart from "@/components/traders_comp/portfolio/PortfolioAssetChart";
import PortfolioTopBanner from "@/components/traders_comp/portfolio/PortfolioTopBanner";
import Image from "next/image";
import BuyAndExchange from "@/components/traders_comp/portfolio/BuyAndExchange";

const Portfolio = () => {
  const [currentPrices, setCurrentPrices] = useState({});
  const [buyingPriceInfo, setBuyingPriceInfo] = useState([]);
  const { user, loading } = useAuth();
 
  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      const prices = {};
      data.forEach((ticker) => {
        const symbol = ticker.s;
        if (
          [
            "BTCUSDT",
            "ETHUSDT",
            "LTCUSDT",
            "QTUMUSDT",
            "DOGEUSDT",
            "XRPUSDT",
            "BCHUSDT",
            "ADAUSDT",
            "DOTUSDT",
            "BNBUSDT",
            "MATICUSDT",
          ].includes(symbol)
        ) {
          prices[symbol] = parseFloat(ticker.c).toFixed(2);
        }
      });
      setCurrentPrices(prices);
    });
  }, []);

  useEffect(() => {
    const userBTCData = allUsers.flatMap((user) => user.portfolio);
    const filteredAssets = userBTCData.filter((asset) =>
      [
        "BTCUSDT",
        "ETHUSDT",
        "LTCUSDT",
        "QTUMUSDT",
        "DOGEUSDT",
        "XRPUSDT",
        "BCHUSDT",
        "ADAUSDT",
        "DOTUSDT",
        "BNBUSDT",
        "MATICUSDT",
      ].includes(asset.assetKey)
    );
    if (filteredAssets.length > 0) {
      setBuyingPriceInfo(filteredAssets);
    }
  }, [allUsers]);

  const calculateDifference = (currentPrice, buyingPrice) => {
    return (currentPrice - buyingPrice).toFixed(2);
  };

  const calculateTotalProfit = buyingPriceInfo.reduce((total, asset) => {
    const difference = calculateDifference(
      currentPrices[asset.assetKey] || 0,
      parseFloat(asset.assetBuyingPrice)
    );
    return total + (parseFloat(difference) > 0 ? parseFloat(difference) : 0);
  }, 0);

  const calculateTotalLoss = () => {
    const totalLoss = buyingPriceInfo.reduce((total, asset) => {
      const difference = calculateDifference(
        currentPrices[asset.assetKey] || 0,
        parseFloat(asset.assetBuyingPrice)
      );
      return total + (parseFloat(difference) < 0 ? parseFloat(difference) : 0);
    }, 0);
    return Math.abs(totalLoss).toFixed(2);
  };

  const totalBuyingPrice = buyingPriceInfo.reduce(
    (total, asset) => total + parseFloat(asset.assetBuyingPrice),
    0
  );

  if (loading || isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center text-primary">
        <span>loading...</span>
      </p>
    );
  }

  return (
    <div>
      {/* new design */}

      <div className=" grid md:grid-cols-7 grid-cols-1 my-4 md:gap-5">
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
        <div className="my-5">
        
        {totalBuyingPrice ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-primary">
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "600" }}>
                    Coin
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "600" }}>
                    Company
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Buying Price
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Current Price
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Profit / Loss
                  </TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {buyingPriceInfo.map((asset, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <Image
                        height={45}
                        width={45}
                        src={asset.assetImg}
                        alt="coin logo"
                      ></Image>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <h2 className="font-semibold">{asset.assetName}</h2>
                    </TableCell>
                    <TableCell align="right">
                      <h2 className="font-semibold">
                        $ {asset.assetBuyingPrice}
                      </h2>
                    </TableCell>
                    <TableCell align="right" className="font-semibold">
                      <span
                        className={`${
                          currentPrices[asset.assetKey] <
                          parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }`}
                      >
                        ${currentPrices[asset.assetKey]}
                      </span>
                      {currentPrices[asset.assetKey] >
                      parseFloat(asset.assetBuyingPrice) ? (
                        <MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" />
                      ) : (
                        <MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <span
                        className={`font-semibold ${
                          calculateDifference(
                            currentPrices[asset.assetKey] || 0,
                            parseFloat(asset.assetBuyingPrice)
                          ) > 0
                            ? "text-green-700"
                            : "text-red-700"
                        }`}
                      >
                        $
                        {calculateDifference(
                          currentPrices[asset.assetKey] || 0,
                          parseFloat(asset.assetBuyingPrice)
                        )}
                        {calculateDifference(
                          currentPrices[asset.assetKey] || 0,
                          parseFloat(asset.assetBuyingPrice)
                        ) > 0 ? (
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
          </TableContainer>
        ) : (
          <div className="flex justify-center items-center h-[40vh]">
            <h3 className="text-red-500 text-lg 2xl:text-3xl font-semibold">
              Empty !!
            </h3>
          </div>
        )}
      </div>
        </div>
        
        {/* Right side  */}
        <div className=" col-span-2 ">
          <div className="p-4  bg-white rounded-xl border ">
          <h1 className="text-xl font-semibold my-5">Total Asset Chart</h1>
          {totalBuyingPrice && <PortfolioAssetChart allUsers={allUsers} />}
          </div>
          <div className="p-4  bg-white rounded-xl border my-5 ">
          
            <BuyAndExchange></BuyAndExchange>
          </div>
        </div>
      </div>

      

      
    </div>
  );
};

export default Portfolio;
