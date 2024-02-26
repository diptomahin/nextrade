import { useState } from "react";
import BuyLimit from "./BuyLimit";
import BuyMarket from "./BuyMarket";
import { MdAccountBalance } from "react-icons/md";

const QuickBuy = () => {
  const [isLimitOpen, setIsLimitOpen] = useState(true);
  return (
    <div className="w-full mt-10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLimitOpen(true)}
            className={`btn btn-sm h-10 ${
              isLimitOpen
                ? "bg-primary hover:bg-primary"
                : "bg-transparent hover:bg-primary "
            } border-primary hover:border-primary text-white text-xs rounded-full px-5`}
          >
            Limit
          </button>
          <button
            onClick={() => setIsLimitOpen(false)}
            className={`btn btn-sm h-10 ${
              !isLimitOpen
                ? "bg-primary hover:bg-primary"
                : "bg-transparent hover:bg-primary "
            } border-primary hover:border-primary text-white text-xs rounded-full px-5`}
          >
            Market
          </button>
        </div>
        <div className="flex items-center gap-2 font-medium">
          Balance : $10000
        </div>
      </div>
      {isLimitOpen ? <BuyLimit /> : <BuyMarket />}
    </div>
  );
};

export default QuickBuy;
