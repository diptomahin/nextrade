"use client";
import React from "react";
import logo from "../../assets/nextrade-logo.png";
// import image1 from "../../../assets/economic-world-forex-trading-background_1017-38068.png";
// import image2 from "../../../assets/gradient-stock-market-concept_23-2149166929.png";
import Image from "next/image";
import Container from "@/components/library/Container";
import Button from "@/components/library/buttons/root_button/RootButton";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

//framer motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from '../../components/Animations/variants'

const StartTrading = () => {
  return (
    <Container className="grid lg:grid-cols-2 md:grid-cols-0 item-center justify-center gap-4">
      <motion.div
      variants={fadeIn('up',0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.10}}
      className="w-full py-10">
        <Image src={logo} alt="logo" width={80} className="my-2" />
        <h1 className="lg:text-3xl md:text-3xl text-4xl my-4 text-primary font-bold">
          Embark on Your Trading Journey with NexTrade: Start Trading Today
        </h1>
        <p className="text-lg my-4 text-slate-500">
          Ready to dive in? Navigate to the trading interface, choose the asset
          you want to trade
        </p>
        <Button>Start Trading</Button>
      </motion.div>
      <motion.div
      variants={fadeIn('left',0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.10}}
      className="md:mt-0 mt-10">
        {/* <div className=" flex gap-6">
          <div className="space-y-6">
            <div className=" lg:flex border border-blue-200  items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image1} alt="logo" width={190} className="" />
            </div>
            <div className=" lg:flex border border-blue-200  items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image2} alt="logo" width={190} className="" />
            </div>
          </div>
          <div className="space-y-6 -mt-14">
            <div className=" lg:flex border border-blue-200  items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image2} alt="logo" width={190} className="" />
            </div>
            <div className=" lg:flex border border-blue-200  items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image1} alt="logo" width={190} className="" />
            </div>
          </div>
        </div> */}
        <CryptoCurrencyMarket width="100%" height={320}></CryptoCurrencyMarket>
      </motion.div>
    </Container>
  );
};

export default StartTrading;
