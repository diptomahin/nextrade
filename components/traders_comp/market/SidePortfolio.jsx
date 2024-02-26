"use client"
import usePurchasedCoinData from '@/hooks/usePurchasedCoinData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import emptyIcon from "../../../assets/emptyIcon.png";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as MuiIcons from "@mui/icons-material";
import Link from 'next/link';
import axios from 'axios';
import DarkButton from '@/components/library/buttons/DarkButton';

const SidePortfolio = () => {
    const { purchasedAssets } = usePurchasedCoinData();
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
                    const updatedAssets = await Promise.all(currencyData.map(async (asset) => {
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
                    }));
                    setCryptoData((prevCryptoData) => [...prevCryptoData, ...updatedAssets]);
                }
            } catch (error) {
                console.error("Error fetching currency rates:", error);
            }
        };

        fetchCurrencyRates();
    }, [currencyData]);

    const calculateDifference = (currentPrice, buyingPrice, portion) => {
        const profitLoss = (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
        return profitLoss;
    };

    return (
        <div className="max-h-min w-full bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 font-semibold p-3">
            <div className="flex items-center justify-between">
                <h3>Portfolio</h3>
                <Link href="/dashboard/portfolio">
                    <DarkButton>See all</DarkButton>
                </Link>
            </div>
            {cryptoData ? (
                <div className=" bg-gradient-to-bl overflow-x-auto from-darkOne to-darkTwo  ">
                    <TableContainer
                        sx={{
                            boxShadow: "none",
                            padding: "0px"
                        }}
                        className="bg-gradient-to-bl from-darkOne to-darkTwo border-none "
                        component={Paper}
                    >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            fontSize: "14px",
                                            paddingX: "4px",
                                            paddingY: "10px",
                                            fontWeight: 500,
                                            color: "white",
                                            borderBottom: "2px solid #2c3750",
                                            borderTop: "2px solid #2c3750",
                                        }}>
                                        Coin Name
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: "14px",
                                            paddingX: "4px",
                                            paddingY: "10px",
                                            fontWeight: 500,
                                            color: "white",
                                            borderBottom: "2px solid #2c3750",
                                            borderTop: "2px solid #2c3750"
                                        }}>
                                        Investment
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            fontSize: "14px",
                                            paddingX: "4px",
                                            paddingY: "10px",
                                            fontWeight: 500,
                                            color: "white",
                                            borderBottom: "2px solid #2c3750",
                                            borderTop: "2px solid #2c3750"
                                        }}>
                                        Profit / Loss
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cryptoData.slice(0, 5).map((asset, index) => (
                                    <TableRow key={index}>
                                        {/* 1st row */}
                                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    width={30}
                                                    height={30}
                                                    src={asset.assetImg}
                                                    alt="coin-icon"
                                                />
                                                <p className={`text-xs text-white`}>
                                                    {asset.assetName}
                                                </p>
                                            </div>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                                            <h2 className="font-medium text-xs text-white">
                                                ${parseFloat(asset.totalInvestment).toFixed(2)}
                                            </h2>
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                                            <span
                                                className={`font-medium text-xs ${calculateDifference(
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
                </div>
            ) : (
                <div className=" w-full  flex flex-col items-center justify-center gap-2 py-20">
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
    );
};

export default SidePortfolio;