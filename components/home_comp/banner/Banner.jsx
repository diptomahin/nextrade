"use client";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Link from "next/link";
import "./banner.css";
import Image from "next/image";
import icon1 from "../../../assets/Banner/bitcoin-btc-logo.svg";
import icon2 from "../../../assets/Banner/ethereum-eth-logo.svg";
import icon3 from "../../../assets/Banner/litecoin-ltc-logo.svg";
import icon4 from "../../../assets/Banner/dogecoin-doge-logo.svg";
import icon5 from "../../../assets/Banner/qtum-qtum-logo.svg";
import Button from "@/components/library/Button";
import { IoIosArrowForward } from "react-icons/io";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import { useEffect, useState } from "react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";

const Banner = () => {
  const [cryptoCurrency, setCryptoCurrency] = useState([]);
  const [Currency, setCurrency] = useState([]);

  // get currency data from hook
  const { allCryptoCoins } = useAllCryptoCoins();
  const { allFlatCoins } = useAllFlatCoins();

  // data without real time price
  useEffect(() => {
    if (allCryptoCoins.length > 0 && allFlatCoins.length > 0) {
      setCryptoCurrency(allCryptoCoins);
      setCurrency(allFlatCoins);
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

  return (
    <div className="relative z-10 text-zinc-100">
      <div className="banner w-full h-full absolute left-0 top-0 opacity-30 -z-20"></div>
      <Container className="py-56 z-10">
        <h1 className="text-5xl text-center  font-bold leading-normal tracking-wider">
          Make Better Investment{" "}
          <span className="block">Decision With Alternative Data</span>
        </h1>
        <p className="text-lg text-center  font-semibold mt-6 mb-2">
          At NexTrade, We providing you the opportunity to invest
        </p>
        <p className="text-center  font-medium text-gray-300">
          in more than{" "}
          <Link href="/dashboard/market" className="text-primary font-semibold">
            #{cryptoCurrency.length + Currency.length}
          </Link>{" "}
          assets for continuous income
        </p>

        {/* group */}
        <div className="w-full flex items-center justify-center mt-8">
          <div className="relative h-16 w-[250px] z-10">
            <motion.div
              variants={fadeIn("up", 0.04)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon1}
                className="absolute left-0 rounded-full"
                style={{ width: "32px", height: "32px" }}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.08)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              {" "}
              <Image
                alt="icon"
                src={icon2}
                className="absolute left-6 rounded-full bg-white p-1"
                style={{ width: "32px", height: "32px" }}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.012)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon3}
                className="absolute left-12 rounded-full"
                style={{ width: "32px", height: "32px" }}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.16)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              {" "}
              <Image
                alt="icon"
                src={icon4}
                className="absolute left-[72px] rounded-full"
                style={{ width: "32px", height: "32px" }}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon5}
                className="absolute left-24 rounded-full"
                style={{ width: "32px", height: "32px" }}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.18)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[120px] rounded-full bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree text-white py-1 px-3 font-semibold"
            >
              +More <span className="text-sm font-normal">assets</span>
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <Link href="/dashboard">
            <Button className="w-36 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-1">
              Trade Now <IoIosArrowForward />
            </Button>
          </Link>
        </div>

        <Swiper
          slidesPerView={20}
          spaceBetween={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
        >
          {cryptoCurrency?.slice(0, 6).map((crypto) => (
            <SwiperSlide
              key={crypto?._id}
              className="w-full bg-quaternary border  border-darkThree p-5 rounded-xl shadow hover:shadow-2xl shadow-quinary my-10"
            >
              <Link
                href={`/dashboard/market/${crypto?.key}`}
                className="flex gap-3"
              >
                <Image
                  alt="icon"
                  width={44}
                  height={44}
                  src={crypto?.icon}
                  className="w-11 h-11 rounded-full"
                />
                <div className="w-full flex lg:flex-col justify-start">
                  <div className="">
                    <h3 className="text-lg font-medium">
                      {crypto?.name}{" "}
                      <sup className="text-[10px]">{crypto.key}</sup>
                    </h3>
                    <p className="text-lg font-semibold">${crypto.price}</p>
                  </div>

                  {/*  */}
                  <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-3 lg:mt-3">
                    <p className="flex items-center gap-2 text-sm text-secondary">
                      <FaArrowTrendUp /> ${crypto?.highPrice}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-tertiary">
                      <FaArrowTrendDown />${crypto?.lowPrice}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Banner;
