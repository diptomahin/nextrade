"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import * as MuiIcons from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Watchlist = () => {
  const { user, loading } = useAuth();
  const [currentPrice, setCurrentPrices] = useState({});
  const [changedPrice, setChangedPrices] = useState({});
  const [heighPrice, setHeighPrices] = useState({});
  const [lowPrice, setLowPrices] = useState({});

  const {
    data: watchlistData = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/watchlist?email=${user.email}`, [
    "watchlist",
    user.email,
  ]);
  // console.log(watchlistData)
  const cryptoWatchlistData = watchlistData.filter(
    (crypto) => crypto.assetType === "crypto currency"
  );
  useEffect(() => {
    const cryptoKeys = cryptoWatchlistData.map((asset) => {
      return asset.assetKey;
    });
    const prices = {};
    const priceChange = {};
    const priceHeigh = {};
    const priceLow = {};

    cryptoKeys.forEach((symbol) => {
      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`
      );
      socket.addEventListener("message", (event) => {
        const tickerData = JSON.parse(event.data);
        prices[symbol] = tickerData.c;
        priceChange[symbol] = tickerData.p;
        priceHeigh[symbol] = tickerData.h;
        priceLow[symbol] = tickerData.l;

        setCurrentPrices((prevPrices) => ({
          ...prevPrices,
          [symbol]: tickerData.c,
        }));
        setChangedPrices((prevChanges) => ({
          ...prevChanges,
          [symbol]: tickerData.p,
        }));
        setHeighPrices((prevHeighs) => ({
          ...prevHeighs,
          [symbol]: tickerData.h,
        }));
        setLowPrices((prevLows) => ({ ...prevLows, [symbol]: tickerData.l }));
      });
    });
  }, [watchlistData, cryptoWatchlistData]);

  return (
    <div className="flex-1  flex flex-col gap-4 p-4 font-semibold rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
      <h1> All Coins Watchlist</h1>

      {watchlistData.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Table aria-label="simple table">
            <TableHead className="mx-auto ">
              <TableRow className="text-center">
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  Coin Name
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  24%
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  24h heigh price
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  24h low price
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {watchlistData.map((asset, idx) => (
                <TableRow
                  key={asset._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <Image
                        width={30}
                        height={30}
                        src={asset.assetImg}
                        alt="coin-icon"
                      />
                      <p className={`font-semibold text-xs`}>
                        {asset.assetName}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <p className={` font-semibold text-xs`}>
                      $ {" "}
                      {currentPrice[asset.assetKey]
                        ? parseFloat(currentPrice[asset.assetKey]).toFixed(2)
                        : 0}
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <p
                      className={` font-semibold text-xs ${
                        changedPrice[asset.assetKey] < 0
                          ? "text-red-700"
                          : "text-green-700"
                      }`}
                    >
                      {changedPrice[asset.assetKey]
                        ? parseFloat(changedPrice[asset.assetKey]).toFixed(3)
                        : 0}
                      %
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <p className={` font-semibold text-xs text-green-700`}>
                      $ {" "}
                      {heighPrice[asset.assetKey]
                        ? parseFloat(heighPrice[asset.assetKey]).toFixed(2)
                        : 0} <span><MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" /></span>
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <p className={` font-semibold text-xs text-red-700`}>
                      $
                      {lowPrice[asset.assetKey]
                        ? parseFloat(lowPrice[asset.assetKey]).toFixed(2)
                        : 0} <span><MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" /></span>
                    </p>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    <DarkButton className={"bg-red-600 text-white border-white"}>Delete</DarkButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>
          <h3 className="text-red-500 text-lg font-semibold text-center mt-6">
            empty !!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
