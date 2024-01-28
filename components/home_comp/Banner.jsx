"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import { TickerTape } from "react-ts-tradingview-widgets";

const Banner = () => {
  return (
    <Container className="relative min-h-[100vh] flex flex-col items-center justify-center gap-8 py-32">
      <div className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-extrabold text-secondary md:mb-5 mb-4 flex flex-wrap items-center justify-center font-dm">
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
      <p className="xl:w-11/12 mx-auto text-lg lg:text-2xl xl:text-3xl font-medium text-secondary text-justify md:text-center">
        {" "}
        Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
        Ethereum, LiteCoin, DOGE coin and many more currencies.
      </p>

      <Button>Trade Now</Button>

      <div className="absolute bottom-5 w-full">
        <TickerTape displayMode="adaptive"></TickerTape>
      </div>
    </Container>
  );
};

export default Banner;
