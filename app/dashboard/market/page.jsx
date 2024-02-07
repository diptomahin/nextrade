"use client";

import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Stack } from "@mui/material";

import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketTable from "@/components/traders_comp/market/MarketTable";
import Watchlist from "../watchlist/page";

const MarketPage = () => {

  const [category, setCategory] = useState('');

  const createData = (name, key, price, icon, changePrice, heighPrice, lowPrice) => ({ name, key, price, icon, changePrice, heighPrice, lowPrice });

  const [assets, setAssets] = useState([
    createData("Bitcoin", "BTCUSDT", 0, "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", 0, 0, 0),
    createData("Ethereum", "ETHUSDT", 0, "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628", 0, 0, 0),
    createData("LiteCoin", "LTCUSDT", 0, "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580", 0, 0, 0),
    createData("QTUM coin", "QTUMUSDT", 0, "https://assets.coingecko.com/coins/images/684/large/Qtum_Logo_blue_CG.png?1696501874", 0, 0, 0),
    createData("DOGE coin", "DOGEUSDT", 0, "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256", 0, 0, 0),
    createData("Ripple coin", "XRPUSDT", 0, "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731", 0, 0, 0),
    createData("Bitcoin cash", "BCHUSDT", 0, "https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1696501932", 0, 0, 0),
    createData("Cardano", "ADAUSDT", 0, "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860", 0, 0, 0),
    createData("Polkadot", "DOTUSDT", 0, "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1696512008", 0, 0, 0),
    createData("Binance Coin", "BNBUSDT", 0, "https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615", 0, 0, 0),
    createData("Polygon", "MATICUSDT", 0, "https://assets.coingecko.com/coins/images/4713/large/polygon.png?1698233745", 0, 0, 0),
    // Add more assets similarly
  ]);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      const updatedAssets = assets.map((asset) => {
        const ticker = data.find((item) => item.s === asset.key);
        if (ticker) {
          return createData(
            asset.name,
            asset.key,
            parseFloat(ticker.c).toFixed(3),
            asset.icon,
            parseFloat(ticker.p).toFixed(3),
            parseFloat(ticker.h).toFixed(2),
            parseFloat(ticker.l).toFixed(2)
          );
        }
        return asset;
      });
      setAssets(updatedAssets);
    });

    return () => socket.close();
  }, [assets]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div>
      {/* Table boat  */}
      <div className="bg-white p-4 rounded-xl">
        <h2 className=" text-xl font-semibold mb-3">Market Coins</h2>
        <p>Choose from a wide range of trade options with hundreds of different instruments available.</p>
        <MarketHeadLine assets={assets}></MarketHeadLine>
      </div>

      <Stack flexDirection="row" gap={2} marginY={2}>
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value={10} >Crypto</MenuItem>
            <MenuItem value={20} >Currency</MenuItem>
            <MenuItem value={30} >Stocks</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Sort by"
            onChange={handleCategoryChange}
          >
            <MenuItem value={10} >Current Price</MenuItem>
            <MenuItem value={20} >24h Heigh Price</MenuItem>
            <MenuItem value={30} >24h Low Price</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className="w-full xl:w-3/4">
          <MarketTable assets={assets}></MarketTable>
        </div>
        <SideWatchlist assets={assets}></SideWatchlist>
      </div>
    </div>
  );
};

export default MarketPage;
