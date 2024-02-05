"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
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

const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="banner w-full h-[100vh] absolute -bottom-1/4"></div>
      <Container className="w-full h-full py-32">
        {/* left */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="relative h-full flex flex-col items-start justify-center z-10"
        >
          {/* banner title */}
          <div className="relative h-1/3 w-full flex flex-col justify-center">
            <h1 className="absolute left-0 top-0 text-7xl font-extrabold">
              Trade
            </h1>
            <h1 className="absolute left-[8%] top-1/3 text-7xl font-extrabold">
              With
            </h1>
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[16%] bottom-0 text-7xl font-extrabold text-right"
            >
              <Typewriter
                options={{
                  strings: [
                    '<span class="">NexTrade</span>',
                    '<span class="">Strategy</span>',
                    '<span class="">Precision</span>',
                    '<span class="">Confidence</span>',
                    '<span class="">Skill</span>',
                    '<span class="">Vision</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriter-wrapper",
                }}
              />
            </motion.h1>

            {/* animation */}
            <div className="orange-move absolute left-[13%] bg-secondary w-24 h-24 rounded-full blur-[80px]"></div>
            <div className="blue-move absolute left-[13%] bg-primary w-24 h-24 rounded-full blur-[80px]"></div>
            <div className="w-20 absolute left-0 -top-12 text-primary">
              <p className="icon1">
                <svg
                  class="w-10 h-10"
                  viewBox="0 0 152 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.82548 90.5701C0.262846 80.2936 -0.448058 72.3483 4.38757 63.1414C7.62646 56.9746 11.3067 50.9698 15.3251 45.2775C18.1293 41.305 29.0288 26.8409 35.3148 33.357C39.295 37.483 54.3739 81.3071 66.6943 60.4306C73.2132 49.3848 79.2451 29.0606 92.3183 23.5463C100.068 20.2775 105.912 50.4764 109.585 55.1914C114.865 61.9698 118.714 49.115 120.568 45.2744C125.32 35.4329 130.422 25.8479 136.496 16.7529C139.458 12.3177 142.096 8.13541 146.341 4.84157C148.493 3.17191 146.712 3.691 144.92 3.83379C142.189 4.05146 129.653 5.87573 138.7 4.38625C144.055 3.50451 146.192 6.86109 147.701 11.8111C148.394 14.0842 148.786 16.417 148.918 18.7836C148.949 19.3337 148.638 20.6183 149.152 20.4197C150.07 20.0649 150.424 3.60434 151.435 1.01685"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M137.392 6.91785C140.08 10.2427 142.806 13.5134 145.588 16.7529"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>

          {/* banner description */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm 2xl:text-lg my-8 text-white"
          >
            {" "}
            <span className="text-3xl font-bold">
              Join world&apos;s biggest & trusted Exchange.
            </span>
            <br />
            Trade in Bitcoin, Ethereum, LiteCoin, and many more currencies.
          </motion.p>

          {/* group */}
          <div className="h-16 relative w-full">
            <Image
              alt="icon"
              src={icon1}
              className="absolute left-0 w-8 h-8 rounded-full"
            />
            <Image
              alt="icon"
              src={icon2}
              className="absolute left-6 w-8 h-8 rounded-full bg-white p-1"
            />
            <Image
              alt="icon"
              src={icon3}
              className="absolute left-12 w-8 h-8 rounded-full"
            />
            <Image
              alt="icon"
              src={icon4}
              className="absolute left-[72px] w-8 h-8 rounded-full"
            />
            <Image
              alt="icon"
              src={icon5}
              className="absolute left-24 w-8 h-8 rounded-full"
            />
            <p className="absolute left-[120px] rounded-full bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree text-white py-1 px-3 font-semibold">
              +More <span className="text-sm font-normal">assets</span>
            </p>
          </div>

          {/* banner button */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="mt-3"
          >
            <Link href="/dashboard/market">
              <Button>Trade Now</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* right */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="z-10"
        ></motion.div>
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
