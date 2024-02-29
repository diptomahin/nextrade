"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import { useEffect, useState } from "react";

const TopAssets = () => {
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
    <div className="xl:col-span-6 2xl:col-span-12 3xl:col-span-7 h-80">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Top assets</h3>
        <Link
          href="/dashboard/watchlist"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all
        </Link>
      </div>

      {/* content */}
      <div className="">
        {" "}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopAssets;
