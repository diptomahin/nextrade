"use client";
import { Divider } from "@mui/material";
import { VisibilityOutlined } from "@mui/icons-material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";
//material Icon
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";


const PortfolioTopBanner = ({
  totalBuyingPrice,
  calculateTotalProfit,
  usersRemainingBalance,
  calculateTotalLoss,
}) => {
  const [hideAssetAmount, setHideAssetAmount] = useState(false);
  const [hideRemainingBalance, setHideRemainingBalance] = useState(false);
  return (
    <div className="  flex flex-col md:flex-row items-center md:justify-between bg-white p-4 rounded-lg gap-12 xl:gap-5 lg:gap-32">
      <div className="flex items-center gap-3 md:gap-10">
        {!hideAssetAmount && (
          <div>
            <p className="font-semibold text-gray-500">
              Total Asset <MonetizationOnIcon className="text-base ml-2" />
            </p>
            <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
              $ {totalBuyingPrice.toFixed(2)}
            </h1>
            <div className=" flex items-center justify-between">
              {/* total profit */}
              <p
                className={`font-semibold ${
                  calculateTotalProfit >= 0 ? "text-green-700" : "text-red-600"
                }`}
              >
               <ArrowDropUpSharpIcon /> {calculateTotalProfit >= 0 ? "+" : "-"}$
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
                <ArrowDropDownSharpIcon /> -${calculateTotalLoss()}
              </p>
            </div>
          </div>
        )}
        <button
          onClick={() => setHideAssetAmount(!hideAssetAmount)}
          className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-1 rounded-full"
        >
          {hideAssetAmount ? (
            <span>
              Show total Assets <VisibilityOutlined className=" w-4 h-4" />
            </span>
          ) : (
            <span>
              Hide <VisibilityOffOutlinedIcon className=" w-4 h-4" />
            </span>
          )}
        </button>
      </div>
      <div></div>
      <Divider
        orientation="vertical"
        sx={{ border: "1px solid gray" }}
        variant="middle"
        flexItem
      />

      <div className="flex items-center gap-3 md:gap-10">
        {!hideRemainingBalance && (
          <div>
            <p className="font-semibold text-gray-500">
              Remaining Balance{" "}
              <MonetizationOnIcon className="text-base ml-2" />
            </p>
            <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
              $ {usersRemainingBalance}
            </h1>
          </div>
        )}
        <button
          onClick={() => setHideRemainingBalance(!hideRemainingBalance)}
          className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-1 rounded-full"
        >
          {hideRemainingBalance ? (
            <span>
              Show Remaining Balance <VisibilityOutlined className=" w-4 h-4" />
            </span>
          ) : (
            <span>
              Hide <VisibilityOffOutlinedIcon className=" w-4 h-4" />
            </span>
          )}
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default PortfolioTopBanner;
