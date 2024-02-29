"use client";
import { useState } from "react";
import QuickBuy from "./quick-buy/QuickBuy";
import QuickSell from "./quick-sell/QuickSell";

const QuickTrade = () => {
  const [isBuyOpen, setIsBuyOpen] = useState(true);

  return (
    <div className="md:col-span-6 xl:col-span-3 w-full bg-[#21212f] p-5 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Quick trade</h3>
        <div className="relative w-60 h-10 flex items-center bg-darkBG rounded-full">
          <div
            className={`w-1/2 h-full rounded-full bg-primary  transition-transform ${
              isBuyOpen ? "translate-x-0" : "translate-x-full"
            } duration-200 ease-in-out`}
          ></div>
          <button
            onClick={() => setIsBuyOpen(true)}
            className={`absolute w-1/2 h-full bg-transparent transition-all ${
              isBuyOpen ? "text-white" : "text-gray-300"
            } duration-200 ease-in-out font-semibold text-sm z-10`}
          >
            Buy
          </button>
          <button
            onClick={() => setIsBuyOpen(false)}
            className={`absolute w-1/2 transform translate-x-full h-full bg-transparent transition-all ${
              !isBuyOpen ? "text-white" : "text-gray-300"
            } duration-100 font-semibold text-sm z-10`}
          >
            Sell
          </button>
        </div>
      </div>

      {/* content */}
      {isBuyOpen ? <QuickBuy /> : <QuickSell />}
    </div>
  );
};

export default QuickTrade;
