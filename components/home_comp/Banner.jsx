"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";

//banner image impost asset
import bannerImg from '../../assets/Trading-PNG-Photo.png'


const Banner = () => {
  return (
    <Container className="relative min-h-[100vh] flex flex-col items-center justify-center gap-8 py-32 ">
      <div className=" lg:flex flex-row-reverse items-center justify-between gap-10">
        
        <div className="">
          <Image src={bannerImg} alt=""/>
        </div>
        <div>
          <div className=" text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-5xl font-extrabold text-secondary md:mb-5 mb-4 flex flex-wrap items-center  ">
        <Magnetic>
          <h1 className="text-primary">Innovation</h1>
        </Magnetic>
        .
        <Magnetic>
          <h1 className="text-primary">Integrity</h1>
        </Magnetic>
        .
        <Magnetic>
          <h1 className="text-primary">Investment</h1>
        </Magnetic>
        .
      </div>
      <p className=" text-sm md:text-md lg:text-lg xl:text-xl mb-8 font-medium text-secondary ">
        {" "}
        Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
        Ethereum, LiteCoin, DOGE coin and many more currencies.
      </p>

      <Button>Trade Now</Button>
      </div>
      </div>
      

      <div className="absolute bottom-5 w-full">
        <TickerTape displayMode="adaptive"></TickerTape>
      </div>
    </Container>
  );
};

export default Banner;
