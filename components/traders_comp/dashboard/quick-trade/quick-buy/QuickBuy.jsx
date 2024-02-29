import { useState } from "react";
import BuyLimit from "./BuyLimit";
import BuyMarket from "./BuyMarket";

const QuickBuy = ({
  cryptoCurrency,
  flatCurrency,
  cryptoRefetch,
  flatRefetch,
  userData,
}) => {
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
          Balance : ${userData?.balance}
        </div>
      </div>
      {isLimitOpen ? (
        <BuyLimit
          cryptoCurrency={cryptoCurrency}
          flatCurrency={flatCurrency}
          cryptoRefetch={cryptoRefetch}
          flatRefetch={flatRefetch}
        />
      ) : (
        <BuyMarket
          cryptoCurrency={cryptoCurrency}
          flatCurrency={flatCurrency}
          cryptoRefetch={cryptoRefetch}
          flatRefetch={flatRefetch}
        />
      )}
    </div>
  );
};

export default QuickBuy;
