"use client"

// pages/coin/[CoinDetails].jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const CoinDetails = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState(null);
  const [coinId, setCoinId] = useState("")

  useEffect(() => {
    // Create a WebSocket connection for BTC/USDT ticker
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

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
      } else if (params.CoinDetails === "LTCUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/litecoin`);
        setCoinImage(coinDetailsResponse.data.image.large);
      } else if (params.CoinDetails === "ETHUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/ethereum`);
        setCoinImage(coinDetailsResponse.data.image.large);
      } else if (params.CoinDetails === "QTUMUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/qtum`);
        setCoinImage(coinDetailsResponse.data.image.large);
      } else if (params.CoinDetails === "DOGEUSDT") {
        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/dogecoin`);
        setCoinImage(coinDetailsResponse.data.image.large);
      }
    };

    fetchCoinImage();

  }, [params.CoinDetails]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h2>BTC/USDT Details</h2>
      {coinImage && <Image src={coinImage} width={400} height={400} alt="BTC/USDT Logo" />}
      {tickerData ? (
        <div>
          <p>Last Price: {tickerData.c}</p>
          <p>24h High: {tickerData.h}</p>
          <p>24h Low: {tickerData.l}</p>
          <p>24h Change: {tickerData.P}%</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoinDetails;


