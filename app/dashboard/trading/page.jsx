"use client";

import React from "react";
import { useState } from "react";


// material imports
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//other imports
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import DashboardButton from "@/components/library/buttons/DashButton";
import useSecureFetch from "@/hooks/useSecureFetch";
import usePublicAPI from "@/hooks/usePublicAPI";

const Trading = () => {
  const { user, loading } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const [BTCPrice, setBTCPrice] = useState(0);
  const [LTCPrice, setLTCPrice] = useState(0);
  const [ETHPrice, setETHPrice] = useState(0);
  const [QTUMPrice, setQTUMPrice] = useState(0);
  const [DOGEPrice, setDOGEPrice] = useState(0);

  const publicAPI = usePublicAPI();

  React.useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    // Event listener for incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      // Find and update prices for BTC, LTC, and ETH
      data.forEach((ticker) => {
        const symbol = ticker.s;

        if (symbol === "BTCUSDT") {
          setBTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "LTCUSDT") {
          setLTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ETHUSDT") {
          setETHPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "QTUMUSDT") {
          setQTUMPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "DOGEUSDT") {
          setDOGEPrice(parseFloat(ticker.c).toFixed(2));
        }
      });
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  function createData(name, key, price) {
    return { name, key, price };
  }

  const assets = [
    createData("Bitcoin (BTC)", "BTCUSDT", BTCPrice),
    createData("Ethereum (ETC)", "ETHUSDT", ETHPrice),
    createData("LiteCoin (LTC)", "LTCUSDT", LTCPrice),
    createData("QTUM coin", "QTUMUSDT", QTUMPrice),
    createData("DOGE coin", "DOGEUSDT", DOGEPrice),
  ];

  //handle buy coin
  const handleBuyCoin = (ast) => {
    const assetInfo = {
      assetName: ast.name,
      assetKey: ast.key,
      assetBuyingPrice: ast.price,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };

    // calculate remaining balance after buying a coin
    const usersBalance = parseFloat(allUsers[0].balance).toFixed(2);
    const remainingBalance = usersBalance - parseFloat(ast.price).toFixed(2);
    if (usersBalance < parseFloat(ast.price)) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    publicAPI
      .put(`/all-users/${remainingBalance}`, assetInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: `Coin Purchase successful!`,
            text: `Best of luck`,
            icon: "success",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `Coin Purchase failed!`,
          text: `Please try again`,
          icon: "error",
        });
      });
  };

  //Dropdown
  const [coin, setCoin] = React.useState('');

  const handleChange = (event) => {
    setCoin(event.target.value);

  };
  console.log(coin)


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
          <InputLabel id="demo-simple-select-label">Choose coin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coin}
            label="coin"
            onChange={handleChange}
          >
            {
              assets.map(coin => <MenuItem key={coin.name} value={coin.name}>{coin.name}</MenuItem>
              )
            }
          </Select>
        </FormControl>
      </div>
      <div>

      </div>
    </div>
  );
}


export default Trading;
