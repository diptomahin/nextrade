"use client"

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Divider } from '@mui/material';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import DashButton from '@/components/library/buttons/DashButton';
import TopBanner from '@/components/traders_comp/market/TopBanner';

const CoinDetails = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState(null);
  const [coinName, setCoinName] = useState("")

  useEffect(() => {
    // Create a WebSocket connection for BTC/USDT ticker
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${params.CoinDetails.toLowerCase()}@ticker`);

    // Event listener for incoming messages
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      setTickerData(data);
    });

    // Fetch coin image using CoinGecko API
    const fetchCoinImage = async () => {
      // Extract the coin ID from the response
      if (params.CoinDetails === "BTCUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`);
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName("Bitcoin")
      } else if (params.CoinDetails === "LTCUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/litecoin`);
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName("Lite Coin")
      } else if (params.CoinDetails === "ETHUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum`);
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName("Ethereum Coin")
      } else if (params.CoinDetails === "QTUMUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/qtum`);
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName("QTUM Coin")
      } else if (params.CoinDetails === "DOGEUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/dogecoin`);
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName("DOGE Coin")
      }
    };

    fetchCoinImage();

  }, [params.CoinDetails]); // Empty dependency array ensures the effect runs only once on mount



  return (
    <div>

      {tickerData ? (
        <TopBanner tickerData={tickerData} coinImage={coinImage} coinName={coinName} />
      ) : (
        <p>Loading...</p>
      )}


      <div className='flex flex-col xl:flex-row my-10'>
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 ">
          <AdvancedRealTimeChart
            width="100%"
            height="100%"
            autosize
            symbol={`${params.CoinDetails}`}
            interval={60}
            range="1M"
            timezone="UTC"
            theme="light"
            style={1}
            locale="en"
            toolbar_bg="#f1f3f6"
            enable_publishing={false}
            hide_top_toolbar={false}
            hide_legend={true}
            withdateranges={false}
            hide_side_toolbar={true}
            details={false}
            hotlist={false}
            calendar={false}
            studies={[]}
            disabled_features={[]}
            enabled_features={[]}
            container_id="advanced-chart-widget-container"
          />
        </div>
        <div className='flex-1 flex flex-col gap-4 justify-center items-center'>
          <DashButton>Add to Watchlist</DashButton>
          <DashButton>Buy</DashButton>
        </div>
      </div>

    </div>
  );
};

export default CoinDetails;


