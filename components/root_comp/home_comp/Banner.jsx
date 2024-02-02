"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";

import banner from "../../../assets/Banner/banner2.jpg";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative h-[100vh]">
      <Image
        src={banner}
        alt=""
        className="absolute w-full h-full top-0 object-cover -z-10"
      />
      <Container className="w-full h-full py-32 bg-black/50">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-full flex items-center justify-center"
        >
          <div className="text-center w-full mx-auto ">
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="flex items-center justify-center flex-wrap gap-2 text-4xl md:text-[46px] lg:text-[58px] xl:text-7xl 2xl:text-[80px] 3xl:text-[90px] 4xl:text-8xl 4xl:px-5 font-extrabold text-secondary"
            >
              <div className="flex items-center md:gap-2">
                <Magnetic>
                  <h1 className="text-white">Innovation</h1>
                </Magnetic>
                .
              </div>
              <div className="flex items-center md:gap-2">
                <Magnetic>
                  <h1 className="text-white">Integrity</h1>
                </Magnetic>
                .
              </div>
              <div className="flex items-center md:gap-2">
                <Magnetic>
                  <h1 className="text-white">Investment</h1>
                </Magnetic>
                .
              </div>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="text-xs md:text-sm lg:text-base 2xl:text-lg mt-5 mb-8 md:my-8 text-white text-center font-inter"
            >
              {" "}
              Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
              Ethereum, LiteCoin, DOGE coin and many more currencies.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Link href="/dashboard/market">
                <Button>Trade Now</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <div className="w-full absolute left-0 bottom-2 px-5 md:px-10 2xl:px-20">
          <TickerTape displayMode="adaptive"></TickerTape>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
