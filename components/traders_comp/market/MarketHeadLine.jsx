import { Stack } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import usePublicFetch from '@/hooks/usePublicFetch';
import axios from 'axios';

const MarketHeadLine = () => {
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);



  const {
    data: allCoins = [],
    isPending,
    isLoading,
    refetch,
  } = usePublicFetch(`/manageAllCoins`, "allCoinData");

  // console.log(allCoins)
  useEffect(() => {
    if (allCoins.length > 0) {
      setAssets(allCoins.filter((coin) => coin.type === "crypto coin"));
      setFlatCurrency(allCoins.filter((coin) => coin.type === "flat coin"));
    }
  }, [allCoins]);

  // console.log(searchText)


  // create new objects 
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


  // get real time crypto price and create new array of object with real time crypto price
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

  // create new objects with new data
  const createFlatCurrencyData = (name, key, type, price, icon) => ({
    name,
    key,
    type,
    price,
    icon,
  });

  // get real time currency price and create new array of object with real time currency price
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
  return (
    <div className='mt-4'>
      <Stack gap={2}>
        <Marquee direction='right'>
          {assets.map((asset) => (
            <Stack className="bg-darkThree rounded-lg h-24" key={asset.name} sx={{ px: 2, py: 1 }} justifyContent="space-between" alignItems="center" marginX={4} gap={3} flexDirection="row">
              <Stack>
                <Stack flexDirection="row" gap={1} alignItems="center">
                  <Image width={45} height={45} src={asset.icon} alt='coin lgog'></Image>
                  <p className='font-semibold'>{asset.name}</p>
                </Stack>
                <Stack flexDirection="row" gap={2}>
                  <p>${asset.price}</p>
                  <p className={` font-semibold ${asset.changePrice < 0 ? "text-red-500" : "text-green-700"}`}>{asset.changePrice}% {asset.changePrice < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}</p>
                </Stack>
              </Stack>
              <Stack>
                <p>Heigh Price: <span className="text-green-700 font-semibold">${asset.highPrice}</span></p>
                <p>Low Price: <span className="text-red-500 font-semibold">${asset.lowPrice}</span></p>
              </Stack>
            </Stack>
          ))}
        </Marquee>
        <Marquee direction='left'>
          {flatCurrency.map((asset) => (
            <Stack className="bg-darkThree rounded-lg h-24" key={asset.name} sx={{ px: 2, py: 1 }} justifyContent="space-between" alignItems="center" marginX={4} gap={3} flexDirection="row">
              <Stack>
                <Stack flexDirection="row" gap={1} alignItems="center">
                  <Image width={45} height={45} src={asset.icon} alt='coin logo'></Image>
                  <Stack>
                    <p className='font-semibold'>{asset.name}</p>
                    <span className="bg-sky-100/5 px-1 py-[2px] rounded text-primary text-xs w-max">
                      {asset.key}
                    </span>
                  </Stack>
                </Stack>
                <Stack flexDirection="row" gap={2}>
                  <p>Current value: ${asset.price}</p>
                </Stack>
              </Stack>
              <Stack>
                {/* <p>Heigh Price: <span className="text-green-700 font-semibold">${asset.highPrice}</span></p>
                <p>Low Price: <span className="text-red-500 font-semibold">${asset.lowPrice}</span></p> */}
              </Stack>
            </Stack>
          ))}
        </Marquee>
      </Stack>
    </div>
  );
};

export default MarketHeadLine;