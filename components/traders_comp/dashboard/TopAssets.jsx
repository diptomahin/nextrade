"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import { useEffect, useState } from "react";
import Image from "next/image";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import "../market/market.css";
import axios from "axios";

const TopAssets = () => {
  const [isBuyOpen, setIsBuyOpen] = useState(true);
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
            // console.log(currencyKey)
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
    <div className="xl:col-span-12 2xl:col-span-12 3xl:col-span-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Top Assets</h3>
        <Link
          href="/dashboard/market"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all assets
        </Link>
      </div>

      <div className="relative sm:w-72 h-10 flex items-center bg-white dark:bg-tertiary rounded-xl mt-5">
        <div
          className={`w-1/2 h-full rounded-xl bg-primary  transition-transform ${
            isBuyOpen ? "translate-x-0" : "translate-x-full"
          } duration-200 ease-in-out`}
        ></div>
        <button
          onClick={() => setIsBuyOpen(true)}
          className={`absolute w-1/2 h-full whitespace-nowrap bg-transparent transition-all ${
            isBuyOpen ? "text-white" : "text-gray-300"
          } duration-200 ease-in-out font-semibold text-sm z-10`}
        >
          Crypto Coins
        </button>
        <button
          onClick={() => setIsBuyOpen(false)}
          className={`absolute w-1/2 whitespace-nowrap transform translate-x-full h-full bg-transparent transition-all ${
            !isBuyOpen ? "text-white" : "text-gray-300"
          } duration-100 font-semibold text-sm z-10`}
        >
          Flat Coins
        </button>
      </div>

      {/* content */}
      <div className="w-full pt-5">
        {" "}
        <Swiper
          slidesPerView={20}
          spaceBetween={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {isBuyOpen
            ? cryptoCurrency.slice(0, 6).map((asset, idx) => (
                <SwiperSlide key={idx} className="w-full">
                  <Link
                    key={idx}
                    href={`/dashboard/market/${asset.key}`}
                    className="w-full"
                  >
                    <div className="w-full flex flex-col gap-5 rounded-3xl coinBg bg-gray-950 p-5 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                          />
                          <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">
                            {asset.key.slice(0, -4)}
                          </span>
                        </div>
                        <p
                          className={` font-semibold text-sm ${
                            asset.changePrice < 0
                              ? "text-red-500"
                              : "text-green-700"
                          }`}
                        >
                          {asset.changePrice}%{" "}
                          {asset.changePrice < 0 ? (
                            <TrendingDownIcon />
                          ) : (
                            <TrendingUpIcon />
                          )}
                        </p>
                      </div>
                      <h3 className="text-xl font-semibold">{asset.name}</h3>
                      <p>Current Price: ${asset.price}</p>
                      <div className="text-xs flex justify-between">
                        <p>
                          24h High:{" "}
                          <span className="text-green-700 font-semibold">
                            ${asset.highPrice}
                          </span>
                        </p>
                        <p>
                          24h Low:{" "}
                          <span className="text-red-500 font-semibold">
                            ${asset.lowPrice}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))
            : flatCurrency.slice(0, 6).map((asset, idx) => (
                <SwiperSlide key={idx} className="w-full">
                  <Link
                    key={idx}
                    href={`/dashboard/market/${asset.key}`}
                    className="w-full"
                  >
                    <div className="w-full flex flex-col gap-5 rounded-3xl coinBg bg-gray-950 px-5 py-[34.3px] cursor-pointer">
                      <div className="flex gap-2 items-center">
                        <Image
                          width={50}
                          height={50}
                          src={asset.icon}
                          alt="coin-icon"
                        />
                        <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">
                          {asset.key}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold">{asset.name}</h3>
                      <p>Current Price: ${asset.price}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopAssets;
