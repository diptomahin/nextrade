"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import CurrencyDetails from "@/components/traders_comp/market/CurrencyDetails";
import CryptoDetails from "@/components/traders_comp/market/CryptoDetails";
import usePublicAPI from "@/hooks/usePublicAPI";

const CoinDetailsBody = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState("");
  const [coinName, setCoinName] = useState("");

  const [currencyRate, setCurrencyRate] = useState(null);
  const [currencyName, setCurrencyName] = useState("");

  const { user } = useAuth();
  const publicAPI = usePublicAPI();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);
  // console.log(usersRemainingBalance)

  // fetch real-time data for crypto currency and regular currency
  useEffect(() => {
    if (params.CoinDetails.length > 3) {
      publicAPI.get("/manageAllCryptoCoins").then((res) => {
        const foundCurrency = res.data.find(
          (currency) => currency.key === params.CoinDetails
        );
        setCoinImage(foundCurrency?.icon);
        setCurrencyName(foundCurrency?.name);
        setCoinName(foundCurrency?.name);
        // console.log(foundCurrency)
      });

      const socket = new WebSocket(
        `wss://stream.binance.com:9443/ws/${params.CoinDetails.toLowerCase()}@ticker`
      );
      socket.addEventListener("message", (event) =>
        setTickerData(JSON.parse(event.data))
      );
    } else {
      // operations for currencies
      publicAPI.get("/manageAllFlatCoins").then((res) => {
        const foundCurrency = res.data.find(
          (currency) => currency.key === params.CoinDetails
        );
        setCoinImage(foundCurrency.icon);
        setCurrencyName(foundCurrency.name);
        setCoinName(foundCurrency.name);
        // console.log(foundCurrency)
      });
      const fetchCurrencyRates = async () => {
        try {
          const response = await axios.get(
            `https://api.exchangerate-api.com/v4/latest/${params.CoinDetails}`
          );
          setCurrencyRate(response.data.rates.USD);
        } catch (error) {
          console.error("Error fetching currency rates:", error);
        }
      };

      fetchCurrencyRates();

      // set coin image
    }
  }, [params.CoinDetails, publicAPI]);

  // show currency details
  if (params.CoinDetails.length === 3) {
    return (
      <CurrencyDetails
        currencyRate={currencyRate}
        coinKey={params.CoinDetails}
        currencyName={currencyName}
        coinImage={coinImage}
        usersRemainingBalance={usersRemainingBalance}
        user={user}
        refetch={refetch}
      ></CurrencyDetails>
    );
  }

  // show crypto details
  if (params.CoinDetails.length > 3) {
    return (
      <div>
        <CryptoDetails
          tickerData={tickerData}
          coinImage={coinImage}
          coinName={coinName}
          coinKey={params.CoinDetails}
          usersRemainingBalance={usersRemainingBalance}
          user={user}
          refetch={refetch}
        ></CryptoDetails>
      </div>
    );
  }
};

export default CoinDetailsBody;
