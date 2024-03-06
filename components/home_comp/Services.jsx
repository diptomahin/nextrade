"use client";
import React from "react";
import Image from "next/image";
import Icon1 from "../../assets/Services/stock.png";
import Icon2 from "../../assets/Services/platform.png";
import Icon3 from "../../assets/Services/analysis.png";
import Icon4 from "../../assets/Services/content.png";
import Icon5 from "../../assets/Services/exchange.png";
import Icon6 from "../../assets/Services/trade.png";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import Subtitle from "../library/Subtitle";

const Services = () => {
  return (
    <Container className="py-20">
      <Title>Explore Our Trading Services</Title>
      <Subtitle>
        Discover essential tools for successful trading. From market insights to
        user-friendly platforms, we offer everything you need to trade with
        confidence.
      </Subtitle>

      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray"
      >
        {/* cart 1  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon1}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Real Time Market Updates</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
            Get instant updates on market prices, news, and events to make
            informed decisions.
          </p>
        </div>
        {/* cart 2  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon3}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Tools for Technical Analysis</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Access easy-to-use charts and tools to analyze market trends and
            find trading opportunities.
          </p>
        </div>
        {/* cart 3  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon2}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Educational Resources</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Learn from our articles, tutorials, and videos to improve your
            trading skills.
          </p>
        </div>
        {/* cart 4  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon4}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">User Friendly Platform</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Trade seamlessly with our intuitive platform, equipped with advanced
            features.
          </p>
        </div>
        {/* cart 5  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={40}
              height={40}
              className="rounded-md"
            />
            <h3 className="font-semibold">Diverse Asset Classes</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Explore a wide range of asset classes including currencies and
            cryptocurrencies for diversified trading opportunities.
          </p>
        </div>
        {/* cart 6  */}
        <div className="overflow-hidden 3xl:h-44 transition-all hover:-translate-y-[6px] bg-gradient-to-b from-darkOne to-darkTwo hover:from-darkTwo hover:to-darkTwo border border-b-transparent border-darkThree p-6 rounded-xl text-white duration-500 ease-in-out">
          <div className="flex items-center justify-start gap-3">
            <Image
              src={Icon6}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Integrated Wallet</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Securely manage your funds and assets with our integrated wallet
            service, providing convenience and peace of mind for your
            transactions.
          </p>
        </div>
      </motion.div>
    </Container>
  );
};

export default Services;
