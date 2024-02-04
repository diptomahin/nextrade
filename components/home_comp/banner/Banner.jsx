"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Link from "next/link";
import "./banner.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <div className="banner w-full h-[100vh] absolute -bottom-1/4 z-10"></div>
      <Container className="w-full h-full py-32">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-full flex flex-col items-start justify-center"
        >
          <div className="relative h-1/2 w-full flex flex-col justify-center z-20">
            <h1 className="absolute left-0 top-0 text-8xl font-extrabold">
              Trade
            </h1>
            <h1 className="absolute left-[8%] text-8xl font-extrabold">With</h1>
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute left-[16%] bottom-0 text-8xl font-extrabold text-right"
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
            <div className="orange absolute left-[12%] bg-secondary w-24 h-24 rounded-full blur-[80px]"></div>
            <div className="blue absolute left-[12%] bg-primary w-24 h-24 rounded-full blur-[80px]"></div>
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

          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm 2xl:text-lg mt-5 mb-8 md:my-8 text-white z-10"
          >
            {" "}
            <span className="text-3xl font-bold">
              Join world&apos;s biggest & trusted Exchange.
            </span>
            <br />
            Trade in Bitcoin, Ethereum, LiteCoin, and many more currencies.
          </motion.p>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="z-10"
          >
            <Link href="/dashboard/market">
              <Button>Trade Now</Button>
            </Link>
          </motion.div>
        </motion.div>
        <div className=""></div>
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
