"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import WatchlistCryptoTable from "@/components/traders_comp/watchlist/WatchlistCryptoTable";
import WatchlistCurrencyTable from "@/components/traders_comp/watchlist/WatchlistCurrencyTable";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Watchlist = () => {
  const { user, loading } = useAuth();
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);
  const [value, setValue] = React.useState('1');


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

  useEffect(() => {
    if (watchlistData.length > 0) {
      setAssets(watchlistData.filter(coin => coin.type === "crypto coin"))
      setFlatCurrency(watchlistData.filter(coin => coin.type === "flat coin"))
    }
  }, [watchlistData])


  const createData = (name, key, price, type, changePrice, highPrice, lowPrice, icon, email) => ({ name, key, price, type, changePrice, highPrice, lowPrice, icon, email });

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

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
              asset.icon,
              asset.email
            );
          }
          return asset;
        });
        setAssets(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assets]);
  // console.log(assets)


  const createFlatCurrencyData = (name, key, type, price, icon, email) => ({ name, key, type, price, icon, email });

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const response = await axios.get(
            'https://api.exchangerate-api.com/v4/latest/USD'
          );
          // Access the data property of the response to get the currency rates
          const data = response.data.rates;
          const updatedAssets = flatCurrency.map(cur => {
            const currencyKey = cur.key
            // console.log(currencyKey)
            return createFlatCurrencyData(
              cur.name,
              cur.key,
              cur.type,
              data[currencyKey],
              cur.icon,
              cur.email
            );
          })
          setFlatCurrency(updatedAssets)
        }
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);
  // console.log(flatCurrency)


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <div className="flex-1  flex flex-col gap-4 p-4 font-semibold rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
      <h1> All Coins Watchlist</h1>

      <Box className='w-full my-6'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: 'divider', marginBottom: "10px" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
              <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">

                <WatchlistCryptoTable assets={assets}></WatchlistCryptoTable>

          </TabPanel>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
            <div className='w-full'>

                  <WatchlistCurrencyTable assets={flatCurrency}></WatchlistCurrencyTable>

            </div>
          </TabPanel>
        </TabContext>
      </Box>


    </div>
  );
};

export default Watchlist;
