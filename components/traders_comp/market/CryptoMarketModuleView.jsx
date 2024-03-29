import React from "react";
import Image from "next/image";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import "./market.css";
import { Skeleton } from "@mui/material";

const CryptoMarketModuleView = ({ assets, loading, pending }) => {
  if (loading || pending) {
    return (
      <div className="grid lg:grid-cols-2  3xl:grid-cols-3 gap-6">
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px" }}
          animation="wave"
          variant="rectangular"
        />
      </div>
    );
  }
  return (
    <div className="grid lg:grid-cols-2  3xl:grid-cols-3 gap-4">
      {assets.map((asset, idx) => (
        <Link key={idx} href={`/dashboard/market/${asset.key}`}>
          <div className="rounded-[30px] coinBg border bg-zinc-100 border-zinc-300 dark:border-none dark:bg-secondary p-5 space-y-4 hover:scale-105 transition-transform cursor-pointer ease-in">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Image
                  width={40}
                  height={40}
                  src={asset.icon}
                  alt="coin-icon"
                />
                <span className="bg-primary/40 dark:bg-sky-100/10 px-1 py-[2px] rounded text-black dark:text-primary text-xs">
                  {asset.key.slice(0, -4)}
                </span>
              </div>
              <p
                className={` font-semibold text-sm ${
                  asset.changePrice < 0 ? "text-red-500" : "text-green-700"
                }`}
              >
                {asset.changePrice}%{" "}
                {asset.changePrice < 0 ? (
                  <TrendingDownIcon />
                ) : (
                  <TrendingUpIcon />
                )}
              </p>
            </div>
            <h3 className="text-xl font-semibold">{asset.name}</h3>
            <p className="font-semibold dark:font-normal">Current Price: ${asset.price}</p>
            <div className="text-xs flex justify-between">
              <p className="font-semibold dark:font-normal">
                24h High:{" "}
                <span className="text-green-700 font-semibold">
                  ${asset.highPrice}
                </span>
              </p>
              <p className="font-semibold dark:font-normal">
                24h Low:{" "}
                <span className="text-red-500 font-semibold">
                  ${asset.lowPrice}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CryptoMarketModuleView;
