"use client";

import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Stack } from "@mui/material";

import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketTable from "@/components/traders_comp/market/MarketTable";

import eur from "@/assets/CurrencySymbol/eur.png"
import aed from "@/assets/CurrencySymbol/aed.png"
import afn from "@/assets/CurrencySymbol/afn.png"
import axios from "axios";
import NormalCurrencyTable from "@/components/traders_comp/market/NormalCurrencyTable";


const MarketPage = () => {

  const [category, setCategory] = useState('Cryptos');
  const [sort, setSort] = useState('Current Price');
  const [exchangeRate, setExchangeRate] = useState(null);

  // create crypto currency data
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

  const createFlatCurrencyData = (name, key, price, icon) => ({ name, key, price, icon });
  const [flatCurrency, setflatCurrency] = useState([
    createFlatCurrencyData("Euro", "EUR/USD", 0, eur),
    createFlatCurrencyData("Dirham", "AED/USD", 0, aed),
    createFlatCurrencyData("Afghani", "AFN/USD", 0, afn),

    // Add more assets similarly
  ]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        // Access the data property of the response to get the currency rates
        const data = response.data.rates;
        const updatedAssets = flatCurrency.map(cur => {
          const currencyKey = cur.key.slice(0, -4)
          // console.log(currencyKey)
          return createFlatCurrencyData(
            cur.name,
            cur.key,
            data[currencyKey],
            cur.icon,
          );
        })
        setflatCurrency(updatedAssets)
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, []);
  console.log(flatCurrency)



  return (
    <div>
      {/* Table boat  */}
      <div className="bg-white p-4 rounded-xl">
        <h2 className=" text-2xl font-semibold mb-3">Market Coins</h2>
        <p>Choose from a wide range of trade options with hundreds of different instruments available.</p>
        <MarketHeadLine assets={assets}></MarketHeadLine>
      </div>

      <div className="bg-white p-2 my-4 max-w-min rounded">
        <Stack flexDirection="row" gap={2}>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(event) => { setCategory(event.target.value) }}
            >
              <MenuItem value={"Cryptos"} >Cryptos</MenuItem>
              <MenuItem value={"Currency"} >Currency</MenuItem>
              <MenuItem value={"Stocks"} >Stocks</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select"
              id="demo-simple"
              value={sort}
              label="Sort by"
              onChange={(event) => { setSort(event.target.value) }}
            >
              <MenuItem value={"Current Price"} >Current Price</MenuItem>
              <MenuItem value={"24h Heigh Price"} >24h Heigh Price</MenuItem>
              <MenuItem value={"24h Low Price"} >24h Low Price</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </div>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className="w-full p-3 bg-white rounded xl:w-3/4">
          {
            category === "Cryptos" ?
              <MarketTable assets={assets}></MarketTable>
              :
              category === "Currency"
            ?
            <NormalCurrencyTable assets={flatCurrency}></NormalCurrencyTable>
            :
          <div>
            <h1>This is Under Development</h1>
          </div>
          }

        </div>
        <div className="max-h-min">
          <SideWatchlist assets={assets}></SideWatchlist>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
