"use client";

import React from "react";
import { useState,  useEffect } from "react";

// material imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//other imports
import useAuth from "@/hooks/useAuth";

import DashboardButton from "@/components/library/buttons/DashButton";
import useSecureFetch from "@/hooks/useSecureFetch";

//components
import TradingGraph from "@/components/traders_comp/trading/TradingGraph"
import TradingSidebar from "@/components/traders_comp/trading/TradingSidebar";

const Trading = () => {
  const { user, loading } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);
  const trader = allUsers[0] ;

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



  //handle buy coin


  //Dropdown
  const [value, setValue] = React.useState(``);

  const handleChange = (event) => {
    setValue(event.target.value);


  };


  //handle loading
  if (loading || isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center text-primary">
        <span> loading...</span>
      </p>
    );
  }

  return (
    <div>
      <div className="w-1/2">
        <FormControl fullWidth>
          <InputLabel   id="demo-simple-select-label">Choose coin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="coin"
            onChange={handleChange}
          >
            {
              assets.map(coin => <MenuItem key={coin.name} value={coin.key} className="text-lg font-semibold text-primary">{coin.name}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </div>
      <div className="mt-10 flex flex-col gap-2  md:flex-row md:gap-3">
      <TradingGraph value={value} assets={assets} ></TradingGraph>
      <TradingSidebar value={value} assets={assets} trader={trader}></TradingSidebar>
      </div>
    </div>
  );
}


export default Trading;
