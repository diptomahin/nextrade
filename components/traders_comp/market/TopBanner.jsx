import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const TopBanner = ({ tickerData, coinImage, coinName }) => {
  return (
    <div className="  flex flex-col md:flex-row items-center xl:justify-between bg-sky-100 p-4 rounded-md">
      <div className="flex-1 flex items-center gap-2 md:gap-5">
        {coinImage && (
          <Image src={coinImage} width={80} height={80} alt="BTC/USDT Logo" />
        )}
        <div>
          <h3 className="text-lg font-semibold">{coinName}</h3>
          <p>$ {tickerData.c}</p>
        </div>
      </div>
      <Divider
        orientation="vertical"
        sx={{ border: "1px solid blue" }}
        variant="middle"
        flexItem
      />

      <div className="flex-1 flex flex-col lg:flex-row  justify-around gap-10">
        <div>
          <p>24h High</p>
          <p className="text-green-700">
            $ {parseFloat(tickerData.h).toFixed(2)}
          </p>
        </div>
        <div>
          <p>24h Low</p>
          <p className="text-red-700">
            $ {parseFloat(tickerData.l).toFixed(2)}
          </p>
        </div>
        <div>
          <p>24h Change</p>
          <p
            className={`${
              tickerData.p < 0 ? "text-red-700" : "text-green-700"
            }`}
          >
            $ {parseFloat(tickerData.p).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
