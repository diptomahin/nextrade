"use client";
import { useEffect, useState } from "react";
import QuickBuy from "./quick-buy/QuickBuy";
import QuickSell from "./quick-sell/QuickSell";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import useUserData from "@/hooks/useUserData";
import axios from "axios";

const QuickTrade = () => {
  const [isBuyOpen, setIsBuyOpen] = useState(true);
  const [cryptoCurrency, setCryptoCurrency] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);

  // get currency data from hook
  const { allCryptoCoins, cryptoRefetch } = useAllCryptoCoins();
  const { allFlatCoins, flatRefetch } = useAllFlatCoins();

  const { userData, userDataLoading, userDataPending, userDataError, refetchUserData } =
    useUserData();

  // data without real time price
  useEffect(() => {
    if (allCryptoCoins.length > 0 && allFlatCoins.length > 0) {
      setCryptoCurrency(allCryptoCoins);
      setFlatCurrency(allFlatCoins);
    }
  }, [allCryptoCoins, allFlatCoins]);

  // createData function for adding real time prices
  const createData = (
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon
  ) => ({
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon,
  });

  // fetch real time crypto data from binance api and create data
  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (cryptoCurrency.length > 0) {
        const updatedAssets = cryptoCurrency.map((asset) => {
          const ticker = data.find((item) => item.s === asset.key);
          if (ticker) {
            return createData(
              asset._id,
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
        setCryptoCurrency(updatedAssets);
      }
    });
    return () => socket.close();
  }, [cryptoCurrency]);

  // createFlatCurrencyData function for adding current price
  const createFlatCurrencyData = (_id, name, key, type, price, icon) => ({
    _id,
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
          const updatedAssets = await Promise.all(
            flatCurrency.map(async (cur) => {
              const currencyKey = cur.key;
              const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
              );

              return createFlatCurrencyData(
                cur._id,
                cur.name,
                cur.key,
                cur.type,
                response.data.rates.USD,
                cur.icon
              );
            })
          );
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  return (
    <div className="xl:col-span-12 2xl:col-span-5 w-full bg-white dark:bg-tertiary p-5 rounded-xl shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Quick Trade</h3>
        <div className="relative w-60 h-10 flex items-center bg-secondary rounded-xl">
          <div
            className={`w-1/2 h-full rounded-xl bg-primary  transition-transform ${
              isBuyOpen ? "translate-x-0" : "translate-x-full"
            } duration-200 ease-in-out`}
          ></div>
          <button
            onClick={() => setIsBuyOpen(true)}
            className={`absolute w-1/2 h-full bg-transparent transition-all ${
              isBuyOpen ? "text-white" : "text-gray-300"
            } duration-200 ease-in-out font-semibold text-sm z-10`}
          >
            Buy
          </button>
          <button
            onClick={() => setIsBuyOpen(false)}
            className={`absolute w-1/2 transform translate-x-full h-full bg-transparent transition-all ${
              !isBuyOpen ? "text-white" : "text-gray-300"
            } duration-100 font-semibold text-sm z-10`}
          >
            Sell
          </button>
        </div>
      </div>

      {/* content */}
      {isBuyOpen ? (
        <QuickBuy
          cryptoCurrency={cryptoCurrency}
          flatCurrency={flatCurrency}
          cryptoRefetch={cryptoRefetch}
          flatRefetch={flatRefetch}
          userData={userData}
          refetchUserData={refetchUserData}
        />
      ) : (
        <QuickSell userData={userData} refetchUserData={refetchUserData}/>
      )}
    </div>
  );
};

export default QuickTrade;
