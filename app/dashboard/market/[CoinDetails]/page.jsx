"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import CurrencyDetails from "@/components/traders_comp/market/CurrencyDetails";
import CryptoDetails from "@/components/traders_comp/market/CryptoDetails";

// coin image
import eur from "@/assets/CurrencySymbol/eur.png"
import aed from "@/assets/CurrencySymbol/aed.png"
import afn from "@/assets/CurrencySymbol/afn.png"
import bdt from "@/assets/CurrencySymbol/bdt.png"
import idr from "@/assets/CurrencySymbol/idr.png"
import jod from "@/assets/CurrencySymbol/jod.png"
import ars from "@/assets/CurrencySymbol/ars.png"
import gbp from "@/assets/CurrencySymbol/gpb.png"
import aud from "@/assets/CurrencySymbol/aud.png"
import amd from "@/assets/CurrencySymbol/amd.png"


const CoinDetails = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState("");
  const [coinName, setCoinName] = useState("");

  const [currencyRate, setCurrencyRate] = useState(null)
  const [currencyName, setCurrencyName] = useState("");

  const { user } = useAuth();
  
  const { data: allUsers = [], isPending, isLoading, refetch } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);
  // console.log(usersRemainingBalance)


  // fetch real-time data for crypto currency
  useEffect(() => {

    if (params.CoinDetails.length > 3) {  // operations for cryptos
      const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${params.CoinDetails.toLowerCase()}@ticker`);
      socket.addEventListener("message", (event) => setTickerData(JSON.parse(event.data)));

      const fetchCoinImage = async () => {
        const coinDetailsMap = {
          BTCUSDT: "bitcoin",
          LTCUSDT: "litecoin",
          ETHUSDT: "ethereum",
          QTUMUSDT: "qtum",
          DOGEUSDT: "dogecoin",
          XRPUSDT: "ripple",
          BCHUSDT: "bitcoin-cash",
          ADAUSDT: "cardano",
          DOTUSDT: "polkadot",
          BNBUSDT: "binancecoin",
          MATICUSDT: "matic-network",
          UNIUSDT: "uniswap",
          LINKUSDT: "chainlink",
          SOLUSDT: "solana",
          XLMUSDT: "stellar",
          EOSUSDT: "eos",
        };

        const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinDetailsMap[params.CoinDetails]}`);
        // console.log(coinDetailsResponse.data.image.large)
        setCoinImage(coinDetailsResponse.data.image.large);
        setCoinName(coinDetailsResponse.data.name);
      };

      fetchCoinImage();

    } else {  // operations for currencies
      const fetchCurrencyRates = async () => {
        try {
          const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${params.CoinDetails}`
          );
          setCurrencyRate(response.data.rates.USD);
        } catch (error) {
          console.error('Error fetching currency rates:', error);
        }
      };

      fetchCurrencyRates();

      fetch('/currencyname.json')
        .then(res => res.json())
        .then(data => setCurrencyName(data[params.CoinDetails]))


      // set coin image

    }
  }, [params.CoinDetails]);

  

  // show currency details
  if (params.CoinDetails.length === 3) {
    return (
      <CurrencyDetails currencyRate={currencyRate} coinKey={params.CoinDetails} currencyName={currencyName} usersRemainingBalance={usersRemainingBalance} refetch={refetch}></CurrencyDetails>
    )
  }


  // show crypto details
  if (params.CoinDetails.length > 3) {
    return (
      <div>

        <CryptoDetails tickerData={tickerData} coinImage={coinImage} coinName={coinName} coinKey={params.CoinDetails} usersRemainingBalance={usersRemainingBalance} user={user} refetch={refetch}></CryptoDetails>
        
      </div>
    );

  }



};

export default CoinDetails;
