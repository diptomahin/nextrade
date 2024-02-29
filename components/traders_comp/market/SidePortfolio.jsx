"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import emptyIcon from "../../../assets/emptyIcon.png";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import Link from "next/link";
import axios from "axios";
import DarkButton from "@/components/library/buttons/DarkButton";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";

const SidePortfolio = () => {
  const { user } = useAuth();
  const {
    data: purchasedAssets = [],
    isPending: purchasedPending,
    isLoading: purchasedLoading,
  } = useSecureFetch(`/sidePortfolio?email=${user.email}`, [
    "purchased-asset",
    user?.email,
  ]);
  const [cryptoData, setCryptoData] = useState([]);
  const [currencyData, setCurrencyData] = useState([]);

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
  // console.log(cryptoData);

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

  if (purchasedLoading || purchasedPending) {
    return;
  }

  const calculateDifference = (currentPrice, buyingPrice, portion) => {
    const profitLoss =
      (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
    return profitLoss;
  };

  return (
    <div className="w-full h-full bg-[#21212f] flex flex-col gap-5 font-semibold p-5 rounded-xl">
      <div className="flex items-center justify-between  border-b pb-2 border-b-darkThree">
        <h3 className="text-xl font-semibold">Recently Added</h3>
        <Link
          href="/dashboard/portfolio"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all
        </Link>
      </div>
      {cryptoData.length > 0 ? (
        <TableContainer
          sx={{
            boxShadow: "none",
            padding: "0px",
            background: "none",
          }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    color: "white",
                    border: "none",
                  }}
                >
                  Coin Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    color: "white",
                    border: "none",
                  }}
                >
                  Investment
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    color: "white",
                    border: "none",
                  }}
                >
                  Profit / Loss
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cryptoData.slice(0, 5).map((asset, index) => (
                <TableRow key={index}>
                  {/* 1st row */}
                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <div className="flex items-center gap-2">
                      <Image
                        width={30}
                        height={30}
                        src={asset.assetImg}
                        alt="coin-icon"
                      />
                      <p className={`text-xs text-white`}>{asset.assetName}</p>
                    </div>
                  </TableCell>

                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <h2 className="font-medium text-xs text-white">
                      ${parseFloat(asset.totalInvestment).toFixed(2)}
                    </h2>
                  </TableCell>
                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <span
                      className={`font-medium text-xs ${
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
                        <MuiIcons.ArrowDropUpSharp className="text-green-700" />
                      ) : (
                        <MuiIcons.ArrowDropDownSharp className="text-red-700" />
                      )}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 py-24">
          <Image src={emptyIcon} width={70} height={70} alt=" Logo" />
          <h3 className="text-primary text-lg font-semibold text-center">
            No data available !!!
          </h3>
        </div>
      )}
    </div>
  );
};

export default SidePortfolio;
