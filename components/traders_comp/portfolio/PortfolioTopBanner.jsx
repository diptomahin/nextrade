"use client";
import { Divider } from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";

const PortfolioTopBanner = ({
  totalBuyingPrice,
  calculateTotalProfit,
  calculateTotalLoss,
  usersRemainingBalance
}) => {
  const [hideAssetAmount, setHideAssetAmount] = useState(false);
  const [hideRemainingBalance, setHideRemainingBalance] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center rounded-md gap-5">
        {/* total asset */}
        <div className="w-full flex items-center gap-3  p-5 rounded bg-[#40a0ff]">
          <div className="w-full">
            <p className="font-semibold ">
              Total Investment <MonetizationOnIcon className="text-base ml-2 " />
            </p>
            <div
              className={`flex items-center py-2  ${
                !hideAssetAmount && "gap-3"
              } `}
            >
              <h1>
                {!hideAssetAmount && (
                  <span className=" lg:text-3xl text-xl font-bold  ">
                    $ {totalBuyingPrice.toFixed(2)}
                  </span>
                )}
              </h1>
              <button
                onClick={() => setHideAssetAmount(!hideAssetAmount)}
                className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-2 rounded-full"
              >
                {hideAssetAmount ? (
                  <span className="font-medium ">
                    Show total Assets{" "}
                    <VisibilityOutlined className=" w-4 h-4 ml-2 " />
                  </span>
                ) : (
                  <span className="font-medium">
                    <VisibilityOffOutlinedIcon className=" w-4 h-4 " />
                  </span>
                )}
              </button>
            </div>

            <div className="border bg-white p-1 px-2 rounded shadow-xl  flex  items-center justify-between gap-5 w-full ">
              {/* total profit */}
              <p
                className={`font-semibold ${
                  calculateTotalProfit >= 0
                    ? "text-green-700"
                    : "text-red-600"
                }`}
              >
                {calculateTotalProfit >= 0 ? "+ $" : "- $"}{" "}
                {Math.abs(calculateTotalProfit).toFixed(2)}
              </p> 

              {/* total loss */}
              <p
                className={`font-semibold ${
                  calculateTotalProfit >= 0
                    ? "text-red-700"
                    : " text-green-700 "
                }`}
              >
                - $ {calculateTotalLoss.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/*  Remaining balance */}

        <div className="w-full flex items-center gap-3  p-5 rounded bg-[#78c350]">
          <div className="pb-8 w-full">
            <p className="font-semibold ">
              Remaining Balance{" "}
              <MonetizationOnIcon className="text-base ml-2 " />
            </p>
            <div
              className={`flex items-center py-2  ${
                !hideRemainingBalance && "gap-3"
              } `}
            >
              {!hideRemainingBalance && (
                <h1 className=" lg:text-3xl text-xl font-bold">
                  $ {usersRemainingBalance}
                </h1>
              )}
              <button
                onClick={() => setHideRemainingBalance(!hideRemainingBalance)}
                className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-2 rounded-full"
              >
                {hideRemainingBalance ? (
                  <span className="font-medium ">
                    Show Remaining balance{" "}
                    <VisibilityOutlined className=" w-4 h-4 ml-2" />
                  </span>
                ) : (
                  <span className="font-medium ">
                    <VisibilityOffOutlinedIcon className=" w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTopBanner;
