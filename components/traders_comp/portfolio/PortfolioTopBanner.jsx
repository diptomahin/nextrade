"use client";
import { VisibilityOutlined } from "@mui/icons-material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const PortfolioTopBanner = ({
  totalBuyingPrice,
  calculateTotalProfit,
  calculateTotalLoss,
  usersRemainingBalance,
}) => {
  const [hideAssetAmount, setHideAssetAmount] = useState(false);
  const [hideRemainingBalance, setHideRemainingBalance] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center rounded-xl gap-5 text-white">
        {/* total asset */}
        <div className="w-full flex items-center gap-3  p-5 rounded-xl bg-[#40a0ff]">
          <div className="w-full">
            <p className="font-semibold  ">
              Total Investment{" "}
              <MonetizationOnIcon className="text-base ml-2  " />
            </p>
            <div
              className={`flex items-center py-2  ${
                !hideAssetAmount && "gap-3"
              } `}
            >
              <h1>
                {!hideAssetAmount && (
                  <span className=" xl:text-2xl text-xl font-bold  ">
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

           <div className=" p-2 px-2 bg-white w-full flex flex-col xl:flex-row items-center justify-between rounded-md   ">
              {/* total profit */}
              <p
                className={`font-semibold ${
                  calculateTotalProfit >= 0 ? "text-green-700" : "text-red-600"
                }`}
              >
                <span>Profit -  </span>
                {Math.abs(calculateTotalProfit).toFixed(2)} $
                <span className=" bg-white p-1"><TrendingUpIcon/></span>


              </p>


              {/* total loss */}
              <p
                className={`font-semibold ${
                  calculateTotalProfit >= 0
                    ? "text-red-700"
                    : " text-green-700 "
                }`}
              >
                <span>Loss -  </span>
                 {calculateTotalLoss?.toFixed(2)} $
                 <span className=" bg-white p-1"><TrendingDownIcon/></span>
              </p>
            </div> 
          </div>
          
        </div>

        {/*  Remaining balance */}

        <div className="w-full flex items-center gap-3  p-5 rounded-xl bg-[#3aba69]">
          <div className=" w-full xl:pb-9 lg:pb-16">
            <p className="font-semibold ">
              Total Balance{" "}
              <MonetizationOnIcon className="text-base ml-2 " />
            </p>
            <div
              className={`flex items-center py-2  ${
                !hideRemainingBalance && "gap-3"
              } `}
            >
              {!hideRemainingBalance && (
                <h1 className=" xl:text-2xl text-xl font-bold">
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
