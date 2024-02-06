"use client";

import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Stack } from "@mui/material";

//image imports
import imageBTC from "../../../assets/coinImages/bitcoin.png";
import imageETH from "../../../assets/coinImages/ethereum.png";
import imageLTC from "../../../assets/coinImages/ltc.png";
import imageQTUM from "../../../assets/coinImages/QTUM.png";
import imageDOGE from "../../../assets/coinImages/DOGE.png";
import imageXRP from "../../../assets/coinImages/XRP.png";
import imageBCH from "../../../assets/coinImages/BCH.png";
import imageADA from "../../../assets/coinImages/ADA.png";
import imageDOT from "../../../assets/coinImages/DOT.png";
import imageBNB from "../../../assets/coinImages/BNB.png";
import imageMATIC from "../../../assets/coinImages/MATIC.png";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketTable from "@/components/traders_comp/market/MarketTable";

const MarketPage = () => {

  const [category, setCategory] = useState('');

  const createData = (name, key, price, icon, changePrice, heighPrice, lowPrice) => ({ name, key, price, icon, changePrice, heighPrice, lowPrice });

  const [assets, setAssets] = useState([
    createData("Bitcoin", "BTCUSDT", 0, imageBTC, 0, 0, 0),
    createData("Ethereum", "ETHUSDT", 0, imageETH, 0, 0, 0),
    createData("LiteCoin", "LTCUSDT", 0, imageLTC, 0, 0, 0),
    createData("QTUM coin", "QTUMUSDT", 0, imageQTUM, 0, 0, 0),
    createData("DOGE coin", "DOGEUSDT", 0, imageDOGE, 0, 0, 0),
    createData("Ripple coin", "XRPUSDT", 0, imageXRP, 0, 0, 0),
    createData("Bitcoin cash", "BCHUSDT", 0, imageBCH, 0, 0, 0),
    createData("Cardano", "ADAUSDT", 0, imageADA, 0, 0, 0),
    createData("Polkadot", "DOTUSDT", 0, imageDOT, 0, 0, 0),
    createData("Binance Coin", "BNBUSDT", 0, imageBNB, 0, 0, 0),
    createData("Polygon", "MATICUSDT", 0, imageMATIC, 0, 0, 0)
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
