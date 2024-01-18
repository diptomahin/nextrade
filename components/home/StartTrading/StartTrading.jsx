import React from "react";
import logo from "../../../assets/nextrade-logo.png";
import image1 from "../../../assets/economic-world-forex-trading-background_1017-38068.png";
import image2 from "../../../assets/gradient-stock-market-concept_23-2149166929.png";
import Image from "next/image";
import Container from "@/components/library/Container";
import Button from "@/components/library/Button/Button";

const StartTrading = () => {
  return (
    <Container className="flex flex-col-reverse md:flex-row justify-between">
      <div className="w-full md:w-1/2 py-10">
        <Image src={logo} alt="logo" width={80} className="my-2" />
        <h1 className="text-2xl my-4 text-primary font-bold">
          Embark on Your Trading Journey with NexTrade: Start Trading Today
        </h1>
        <p className="text-lg my-4 text-slate-500">
          Ready to dive in? Navigate to the trading interface, choose the asset
          you want to trade
        </p>
        <Button>Start Trading</Button>
      </div>
      <div className="md:mt-0 mt-10">
        <div className=" flex gap-6">
          <div className="space-y-6">
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image1} alt="logo" width={150} className="" />
            </div>
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image2} alt="logo" width={150} className="" />
            </div>
          </div>
          <div className="space-y-6 -mt-14">
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image2} alt="logo" width={150} className="" />
            </div>
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg">
              <Image src={image1} alt="logo" width={150} className="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StartTrading;
