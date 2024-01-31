"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";

//banner image impost asset
import bannerImg from '../../assets/Trading-PNG-Photo.png'

//framer motion
import {motion} from 'framer-motion';
import { easing } from "@mui/material";




const Banner = () => {
  return (
    <motion.div >
    <Container className="relative min-h-[100vh] flex flex-col items-center justify-center gap-8 py-32 ">
      <motion.div   className=" lg:flex flex-row-reverse items-center justify-between gap-10">
        
      <motion.div 
    initial={{ opacity: 0, scale: 0.5, x: 100 }} initially
    animate={{ opacity: 1, scale: 1, x: 0 }}  position
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }} 
    className="">
    <Image src={bannerImg} alt=""/>
</motion.div>

        <div>
          <motion.h1 initial={{ opacity: 0, scale: 0.2, x: -1 }} initially
    animate={{ opacity: 1, scale: 1, x: 0 }}  position
    transition={{
        duration: 0.2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}  className=" text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-5xl font-extrabold text-secondary md:mb-5 mb-4 flex flex-wrap items-center  ">
        <Magnetic>
          <span className="text-primary">Innovation</span>
        </Magnetic>
        .
        <Magnetic>
          <span className="text-primary">Integrity</span>
        </Magnetic>
        .
        <Magnetic>
          <span className="text-primary">Investment</span>
        </Magnetic>
        .
      </motion.h1>
      <motion.p  className=" text-sm md:text-md lg:text-lg xl:text-xl mb-8 font-medium text-secondary ">
        {" "}
        Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
        Ethereum, LiteCoin, DOGE coin and many more currencies.
      </motion.p>

      <Button>Trade Now</Button>
      </div>
      </motion.div>
      

      <div className="absolute bottom-5 w-full">
        <TickerTape displayMode="adaptive"></TickerTape>
      </div>
    </Container>
    </motion.div>
  );
};

export default Banner;
