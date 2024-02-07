import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ImportExportIcon from '@mui/icons-material/ImportExport';

const TopBanner = ({ tickerData, coinImage, coinName, coinKey }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">Market Stats</h1>
      <div className="  flex flex-col md:flex-row xl:items-center xl:justify-between gap-6 xl:gap-0 bg-white p-4 rounded-md">
        <div className="flex-1 flex items-center gap-2 md:gap-5">
          {coinImage && (
            <Image src={coinImage} width={50} height={50} alt="BTC/USDT Logo" />
          )}
          <div className="flex gap-5 items-center">
            <h3 className="text-lg font-semibold">{coinName}  <span className="bg-sky-100 px-1 py-[2px] rounded text-primary text-xs">{coinKey.slice(0, -4)}</span></h3>
            <div className="rounded p-1 bg-sky-100">
              <StarIcon className="text-primary " />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div className="flex justify-between">
            <p className="text-xl md:text-3xl font-semibold">
              ${parseFloat(tickerData.c).toFixed(2)}
              <span className={`text-xs font-semibold ${tickerData.p < 0 ? 'text-red-700' : tickerData.p > 0 ? 'text-green-700' : ''}`}>
                {"  "} {parseFloat(tickerData.p).toFixed(2)}%
                {
                  tickerData.p < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />
                }
              </span>
            </p>
            <div>
              <p className="text-xs md:text-base text-zinc-600">{coinName} price(USD)</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p><ImportExportIcon />  High / Low price</p>
            <p className="px-2 py-1 rounded bg-sky-100">24h</p>
          </div>
          <Divider sx={{ border: "1px solid #40a0ff", borderRadius: "5px" }}></Divider>
          <div className="flex justify-between">
            <p className="text-[15px] md:text-base text-red-700">Low: {parseFloat(tickerData.l).toFixed(3)}</p>
            <p className="text-[15px] md:text-base text-green-700">High: {parseFloat(tickerData.h).toFixed(3)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
