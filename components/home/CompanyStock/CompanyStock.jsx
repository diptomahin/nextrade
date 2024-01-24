"use client";
import Container from "@/components/library/Container";
import React from "react";
import { TickerTape } from "react-ts-tradingview-widgets";

const CompanyStock = () => {
  return (
    <Container>
      <div className="mt-10 ">
      <h1 className="xl:text-3xl lg:text-4xl text-4xl my-2 text-primary font-bold mx-auto text-center">
        Real-Time Market
      </h1>
      <p className="mt-1 mb-5  xl:w-96 text-center mx-auto font-medium text-gray-500">
      Real-time market data is the continuous, such as stock prices, trading volumes.
      </p>
      <TickerTape colorTheme="dark"></TickerTape>
    </div>
    </Container>
  );
};

export default CompanyStock;
