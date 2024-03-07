"use client";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../assets/Banner/banner.png";
import icon1 from "../../../assets/Banner/bitcoin-btc-logo.svg";
import icon2 from "../../../assets/Banner/ethereum-eth-logo.svg";
import icon3 from "../../../assets/Banner/litecoin-ltc-logo.svg";
import icon4 from "../../../assets/Banner/dogecoin-doge-logo.svg";
import icon5 from "../../../assets/Banner/qtum-qtum-logo.svg";
import Button from "@/components/library/Button";
import { IoIosArrowForward } from "react-icons/io";
import Typewriter from "typewriter-effect";
import "./banner.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

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
    <div className="relative">
      <div className="banner w-full min-h-full absolute left-0 bottom-0 2xl:-bottom-10 opacity-70"></div>
      <Container className="flex flex-col-reverse 2xl:flex-row items-center justify-between gap-20 2xl:gap-5 pb-20 pt-40 2xl:pt-60">
        {/* left */}
        <div className="w-full h-full flex-1 relative">
          {" "}
          {/* banner title */}
          <div className="z-10">
            <motion.h1
              variants={fadeIn("down", 0.05)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-extrabold"
            >
              Trade On
            </motion.h1>
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="pl-5 xs:pl-10 md:pl-16  3xl:pl-24 text-3xl xs:text-4xl md:text-5xl 2xl:text-6xl font-extrabold"
            >
              <Typewriter
                options={{
                  strings: ["NexTrade", "Cryptos", "Currencies"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriter-wrapper",
                }}
              />
            </motion.h1>
          </div>
          {/* banner description */}
          <motion.p
            variants={fadeIn("up", 0.15)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm my-8 pr-8 text-wrap z-10"
          >
            {" "}
            <span className="block text-lg md:text-2xl 2xl:text-xl  3xl:text-2xl font-bold mb-2">
              Join world&apos;s biggest & trusted exchange.
            </span>
            Trade in Bitcoin, Ethereum, and many more cryptos and currencies.
          </motion.p>
          {/* group */}
          <div className="h-16 relative w-full z-10">
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
              variants={fadeIn("up", 0.12)}
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
              variants={fadeIn("up", 0.24)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[120px] rounded-full bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree text-white py-1 px-3 font-semibold"
            >
              +More <span className="text-sm font-normal">assets</span>
            </motion.p>
          </div>
          {/* banner button */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="mt-3 z-10"
          >
            <Link href="/dashboard">
              <Button className="w-36 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-1">
                Trade Now <IoIosArrowForward />
              </Button>
            </Link>
          </motion.div>
          {/* animation */}
          <div className="orange-move absolute left-[20%] md:left-[11%] top-0 bg-quinary w-24 h-24 blur-[120px]"></div>
          <div className="blue-move absolute left-[20%] md:left-[11%] top-0 bg-primary w-24 h-24 blur-[120px]"></div>
          <div className="w-20 absolute left-0 -top-16 text-primary">
            <p className="icon1">
              <svg
                className="w-10 h-10"
                viewBox="0 0 152 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.82548 90.5701C0.262846 80.2936 -0.448058 72.3483 4.38757 63.1414C7.62646 56.9746 11.3067 50.9698 15.3251 45.2775C18.1293 41.305 29.0288 26.8409 35.3148 33.357C39.295 37.483 54.3739 81.3071 66.6943 60.4306C73.2132 49.3848 79.2451 29.0606 92.3183 23.5463C100.068 20.2775 105.912 50.4764 109.585 55.1914C114.865 61.9698 118.714 49.115 120.568 45.2744C125.32 35.4329 130.422 25.8479 136.496 16.7529C139.458 12.3177 142.096 8.13541 146.341 4.84157C148.493 3.17191 146.712 3.691 144.92 3.83379C142.189 4.05146 129.653 5.87573 138.7 4.38625C144.055 3.50451 146.192 6.86109 147.701 11.8111C148.394 14.0842 148.786 16.417 148.918 18.7836C148.949 19.3337 148.638 20.6183 149.152 20.4197C150.07 20.0649 150.424 3.60434 151.435 1.01685"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M137.392 6.91785C140.08 10.2427 142.806 13.5134 145.588 16.7529"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </p>
          </div>
        </div>

        {/* right */}
        <div className="relative h-full flex-1 flex flex-col 2xl:flex-row justify-end gap-5">
          {/* animation part */}
          <div className="orange-move absolute left-[60%] top-[45%] bg-quinary w-24 h-24 blur-[120px]"></div>
          <div className="blue-move absolute left-[60%] top-[45%] bg-primary w-24 h-24 blur-[120px]"></div>

          <div className="w-80 md:w-[450px] relative flex items-center justify-center z-10">
            <div className="z-20">
              <Image
                alt="banner"
                src={bg}
                className="w-[250px] md:w-[280px] mx-auto"
                width={300}
                height={"auto"}
                priority
              />
            </div>

            {/* box one */}
            <div className="absolute -left-2 md:left-12 top-5">
              <div className="animation w-fit relative z-10">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* box two */}
            <div className="absolute -right-2 md:right-12 top-5">
              <div className="animation w-fit relative z-10">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* box three */}
            <div className="absolute -left-10 md:left-0 top-[40%]">
              <div className="animation-two w-fit relative z-10">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-two-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* box four */}
            <div className="absolute -right-10 md:right-0 top-[40%]">
              <div className="animation-two w-fit relative z-10">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-two-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* box five */}
            <div className="absolute left-0 md:left-14 bottom-2">
              <div className="animation w-fit relative z-10">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* box six */}
            <div className="absolute right-0 md:right-14 bottom-2">
              <div className="animation w-fit relative z-10 ">
                <div className="flex z-10">
                  <div className="border-t-[30px] border-r-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[30px] border-l-[50px] border-b-[30px]  border-x-[#d2e2fc] border-t-transparent border-b-transparent"></div>
                </div>
                {/*  */}
                <div className="flex absolute h-16 left-0 top-1 -z-10">
                  <div className="border-t-[26px] border-r-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                  <div className="border-t-[26px] border-l-[50px] border-b-[30px]  border-x-[#3749b0] border-t-transparent border-b-transparent"></div>
                </div>
              </div>
              {/* box one shadow */}
              <div className="animation-shadow absolute left-[9%] -bottom-6 blur-[1px]">
                <div className="w-fit relative right-0">
                  {/*  */}
                  <div className="flex">
                    <div className="border-t-[25px] border-r-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                    <div className="border-t-[25px] border-l-[40px] border-b-[25px]  border-x-gray-500 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="h-fit max-w-7xl mx-5 md:mx-10 4xl:mx-auto">
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
            <SwiperSlide key={crypto?._id} className="w-full">
              <Link
                href={`/dashboard/market/${crypto?.key}`}
                className="w-full bg-gradient-to-b from-darkOne to-darkTwo  border border-b-transparent border-darkThree flex gap-3 rounded-xl shadow hover:shadow-2xl p-5 my-10 transition-all hover:-translate-y-[6px] duration-500 ease-in-out"
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
                    <h3 className="font-medium">
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
      </div>
    </div>
  );
};

export default Banner;
