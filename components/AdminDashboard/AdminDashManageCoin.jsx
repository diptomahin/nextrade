"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./AdminManageCoin.css";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import Link from "next/link";
import axios from "axios";
const AdminDashManageCoin = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);

  // get currency data from hook
  const { allCryptoCoins, cryptoRefetch } = useAllCryptoCoins();
  const { allFlatCoins, flatRefetch } = useAllFlatCoins();

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

  // fetch current flat coin prices from exchange rate api and create data
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const response = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
          );
          // Access the data property of the response to get the currency rates
          const data = response.data.rates;
          const updatedAssets = flatCurrency.map((cur) => {
            const currencyKey = cur.key;
            return createFlatCurrencyData(
              cur._id,
              cur.name,
              cur.key,
              cur.type,
              data[currencyKey],
              cur.icon
            );
          });
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Top Coins</h3>
        <Link
          href="/admin_dashboard/manageCoins"
          className="btn btn-sm h-10 bg-primary/10 hover:bg-primary/20 active:bg-primary/30 border-none shadow-none font-medium text-primary rounded-xl"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
        {cryptoCurrency ? (
          cryptoCurrency.slice(0, 3).map((asset, idx) => (
            // Your map logic here
            <div
              key={idx}
              className="w-full flex flex-col gap-5 rounded-3xl text-zinc-950 dark:text-zinc-100 bg-white dark:bg-quaternary p-5 cursor-pointer shadow"
            >
              <div>
                <Image
                  width={40}
                  height={40}
                  src={asset.icon}
                  alt="coin-icon"
                  className="mx-auto"
                />
                <p className="text-center text-lg font-semibold mt-3">
                  {asset.name}
                </p>
              </div>
              <p className="flex justify-between items-center font-semibold">
                Price: ${parseFloat(asset.price).toFixed(2)}
              </p>
              <div className="flex justify-between items-center">
                <p>
                  24h High:{" "}
                  <span className="text-green-700 font-semibold">
                    ${parseFloat(asset.highPrice).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>
                  24h Low:{" "}
                  <span className="text-red-700 font-semibold">
                    ${parseFloat(asset.lowPrice).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 className=" text-center font-semibold my-5">
              Data Loading . . .
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashManageCoin;
