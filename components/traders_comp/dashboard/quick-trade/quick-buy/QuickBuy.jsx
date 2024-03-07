import BuyMarket from "./BuyMarket";

const QuickBuy = ({
  cryptoCurrency,
  flatCurrency,
  cryptoRefetch,
  flatRefetch,
  userData,
  refetchUserData,
}) => {
  return (
    <div className="w-full mt-10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <button
            className={`btn btn-sm h-10 
             border-primary hover:border-primary bg-primary hover:bg-primary text-white dark:text-white text-xs rounded-full px-5`}
          >
            Market
          </button>
        </div>
        <div className="flex items-center gap-2 font-medium">
          Balance : ${userData?.balance}
        </div>
      </div>

      <BuyMarket
        cryptoCurrency={cryptoCurrency}
        flatCurrency={flatCurrency}
        cryptoRefetch={cryptoRefetch}
        flatRefetch={flatRefetch}
        refetchUserData={refetchUserData}
        userData={userData}
      />
    </div>
  );
};

export default QuickBuy;
