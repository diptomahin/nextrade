"use client";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Link from "next/link";
import "./banner.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import icon1 from "../../../assets/Banner/bitcoin-btc-logo.svg";
import icon2 from "../../../assets/Banner/ethereum-eth-logo.svg";
import icon3 from "../../../assets/Banner/litecoin-ltc-logo.svg";
import icon4 from "../../../assets/Banner/dogecoin-doge-logo.svg";
import icon5 from "../../../assets/Banner/qtum-qtum-logo.svg";
import bg from "../../../assets/Banner/banner.png";
import DarkButton from "@/components/library/buttons/DarkButton";

const Banner = () => {
  return (
    <div className="relative min-h-[100vh]">
      <div className="banner w-full min-h-full absolute bottom-28 opacity-80"></div>
      <Container className="flex flex-col-reverse xl:flex-row items-center justify-between w-full min-h-[100vh] py-20 z-10">
        {/* left */}
        <div className="relative min-h-[100vh] flex flex-col items-start justify-center z-10">
          {/* banner title */}
          <div className="z-10">
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-extrabold"
            >
              Trade On
            </motion.h1>
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="pl-5 xs:pl-10 md:pl-16 2xl:pl-24 text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-extrabold"
            >
              <Typewriter
                options={{
                  strings: [
                    "NexTrade",
                    "Cryptos",
                    "Stocks",
                    "Currencies",
                    "Commodities",
                  ],
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
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm 2xl:text-base my-8 text-white pr-8 text-wrap z-10"
          >
            {" "}
            <span className="block text-lg md:text-2xl xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold mb-2">
              Join world&apos;s biggest & trusted exchange.
            </span>
            Trade in Bitcoin, Ethereum, LiteCoin, and many more cryptos,
            currencies and stocks.
          </motion.p>

          {/* group */}
          <div className="h-16 relative w-full z-10">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon1}
                className="absolute left-0 w-8 h-8 rounded-full"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              {" "}
              <Image
                alt="icon"
                src={icon2}
                className="absolute left-6 w-8 h-8 rounded-full bg-white p-1"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon3}
                className="absolute left-12 w-8 h-8 rounded-full"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              {" "}
              <Image
                alt="icon"
                src={icon4}
                className="absolute left-[72px] w-8 h-8 rounded-full"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image
                alt="icon"
                src={icon5}
                className="absolute left-24 w-8 h-8 rounded-full"
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.6)}
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
            <Link href="/dashboard/market">
              <DarkButton>Try free demo</DarkButton>
            </Link>
          </motion.div>

          {/* animation */}
          <div className="orange-move absolute left-[20%] md:left-[11%] top-[31%] bg-secondary w-24 h-24 rounded-full blur-[80px]"></div>

          <div className="blue-move absolute left-[20%] md:left-[11%] top-[31%] bg-primary w-24 h-24 rounded-full blur-[80px]"></div>

          <div className="w-20 absolute left-0 top-[20%] text-primary">
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
        <div className="relative w-fit flex items-center justify-center z-10">
          <Image alt="banner" src={bg} className="w-3/4" />

          {/* box one */}
          <div className="absolute -left-5 top-5">
            <div className="w-fit relative">
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
          </div>

          {/* box two */}
          <div className="absolute -right-5 top-5">
            <div className="w-fit relative">
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
          </div>

          {/* box three */}
          <div className="absolute -left-16 top-[48%]">
            <div className="w-fit relative">
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
          </div>

          {/* box four */}
          <div className="absolute -right-16 top-[48%]">
            <div className="w-fit relative">
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
          </div>

          {/* box five */}
          <div className="absolute left-0 -bottom-5">
            <div className="w-fit relative">
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
          </div>

          {/* box six */}
          <div className="absolute right-0 -bottom-5">
            <div className="w-fit relative">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

{
  /* <div className="w-full absolute left-0 -bottom-20 px-5 md:px-10 2xl:px-20">
          <TickerTape displayMode="adaptive"></TickerTape>
        </div> */
}
