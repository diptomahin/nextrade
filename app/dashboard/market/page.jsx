"use client";

import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Menu,
  NativeSelect,
  InputBase,
} from "@mui/material";
import { Stack } from "@mui/material";

import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketTable from "@/components/traders_comp/market/MarketTable";
import axios from "axios";
import NormalCurrencyTable from "@/components/traders_comp/market/NormalCurrencyTable";
import styled from "@emotion/styled";
import usePublicFetch from "@/hooks/usePublicFetch";

const CustomSelect = styled(Select)({
  "& .MuiSelect-root": {
    color: "#E0E3E7", // Text color
    "&:focus": {
      backgroundColor: "transparent", // Remove focus background color
    },
  },
  "& .MuiSelect-select": {
    color: "white",
    "&:hover": {
      backgroundColor: "transparent", // Remove hover background color
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#40a0ff", // Border color
    "&:active": {
      borderColor: "#4a0ff",
    },
    "&:hover": {
      borderColor: "#4a0ff",
    },
  },
  "& .MuiSelect-icon": {
    color: "#40a0ff", // Color of the select icon
  },
  "& .MuiMenuItem-root": {
    color: "black", // Menu item text color
  },
  "& .MuiList-root": {
    backgroundColor: "#21366c", // Background color of select options when open
  },
});

const MarketPage = () => {
  const [category, setCategory] = useState("Cryptos");
  const [sort, setSort] = useState("Current Price");
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);

  const {
    data: allCoins = [],
    isPending,
    isLoading,
    refetch,
  } = usePublicFetch(`/allCoins`, ["allCoins"]);

  // console.log(allCoins)
  useEffect(() => {
    if (allCoins.length > 0) {
      setAssets(allCoins.filter((coin) => coin.type === "crypto coin"));
      setFlatCurrency(allCoins.filter((coin) => coin.type === "flat coin"));
    }
  }, [allCoins]);

  const createData = (
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon
  ) => ({ name, key, price, type, changePrice, highPrice, lowPrice, icon });

  // console.log(assets)

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (assets.length > 0) {
        const updatedAssets = assets.map((asset) => {
          const ticker = data.find((item) => item.s === asset.key);
          if (ticker) {
            return createData(
              asset.name,
              asset.key,
              parseFloat(ticker.c).toFixed(3),
              asset.type,
              parseFloat(ticker.p).toFixed(3),
              parseFloat(ticker.h).toFixed(2),
              parseFloat(ticker.l).toFixed(2),
              asset.icon
            );
          }
          return asset;
        });
        setAssets(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assets]);

  const createFlatCurrencyData = (name, key, type, price, icon) => ({
    name,
    key,
    type,
    price,
    icon,
  });

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const updatedAssets = await Promise.all(flatCurrency.map(async (cur) => {
            const currencyKey = cur.key;
            const response = await axios.get(
              `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
            );
          
            return createFlatCurrencyData(
              cur.name,
              cur.key,
              cur.type,
              response.data.rates.USD,
              cur.icon
            );
          }));
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };
  
    fetchCurrencyRates();
    
  }, [flatCurrency]);
  // console.log(flatCurrency)

  return (
    <div>
      {/* Table boat  */}
      <div className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree  p-4 rounded">
        <h2 className=" text-2xl font-semibold mb-3">Market Coins</h2>
        <p>
          Choose from a wide range of trade options with hundreds of different
          instruments available.
        </p>
        <MarketHeadLine assets={assets}></MarketHeadLine>
      </div>

      <div className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree  p-2 my-4 max-w-min rounded">
        <Stack flexDirection="row" gap={2}>
          <FormControl sx={{ width: 200, backgroundColor: "transparent" }}>
            <InputLabel id="demo-simple-select-label">
              <p className="text-primary">Category</p>
            </InputLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            >
              <MenuItem value={"Cryptos"}>
                <p>Cryptos</p>
              </MenuItem>
              <MenuItem value={"Currency"}>
                <p>Currency</p>
              </MenuItem>
            </CustomSelect>
          </FormControl>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">
              <p className="text-primary">Sort by</p>
            </InputLabel>
            <CustomSelect
              labelId="demo-simple-select"
              id="demo-simple"
              value={sort}
              label="Sort by"
              onChange={(event) => {
                setSort(event.target.value);
              }}
            >
              <MenuItem value={"Current Price"}>
                <p>Current Price</p>
              </MenuItem>
              <MenuItem value={"24h Heigh Price"}>
                <p>24h Heigh Price</p>
              </MenuItem>
              <MenuItem value={"24h Low Price"}>
                <p>24h Low Price</p>
              </MenuItem>
            </CustomSelect>
          </FormControl>
        </Stack>
      </div>

      <div className="flex flex-col xl:flex-row gap-5">
        <div className="w-full p-3 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree  rounded xl:w-3/4">
          {category === "Cryptos" ? (
            <MarketTable assets={assets}></MarketTable>
          ) : category === "Currency" ? (
            <NormalCurrencyTable assets={flatCurrency}></NormalCurrencyTable>
          ) : (
            <div>
              <h1>This is Under Development</h1>
            </div>
          )}
        </div>
        <div className="max-h-min flex-1">
          <SideWatchlist
            assets={assets}
            flatCurrency={flatCurrency}
          ></SideWatchlist>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
