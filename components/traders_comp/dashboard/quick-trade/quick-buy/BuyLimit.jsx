import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import CryptoBuy from "./CryptoBuy";
import CurrencyBuy from "./CurrencyBuy";

const BuyLimit = ({
  cryptoCurrency,
  flatCurrency,
  cryptoRefetch,
  flatRefetch,
}) => {
  const [isOpenSetLimit, setIsOpenSetLimit] = useState(false);
  const [limitAmount, setLimitAmount] = useState(0);
  const [isLimitAmountError, setIsLimitAmountError] = useState(false);
  const [isCryptoSelected, setIsCryptoSelected] = useState(true);
  const [getAmount, setGetAmount] = useState(
    JSON.parse(localStorage.getItem("LimitAmount"))
  );

  // set limit function
  const handleSetLimitAmount = () => {
    if (limitAmount === 0 || !/^\d+$/.test(limitAmount)) {
      return setIsLimitAmountError(true);
    }
    setIsLimitAmountError(false);
    localStorage.setItem("LimitAmount", JSON.stringify(limitAmount));
    setGetAmount(limitAmount);
    setIsOpenSetLimit(false);
  };

  return (
    <div className="mt-5">
      {isOpenSetLimit ? (
        <div className="flex items-center gap-5">
          <input
            onChange={(e) => setLimitAmount(e.target.value)}
            className={`flex-1 bg-gray-100 dark:bg-quaternary flex items-center justify-between text-sm px-5 py-[11px] border  ${
              isLimitAmountError
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-white"
            } outline-none rounded-full`}
            type="text"
            name=""
            id=""
            placeholder="Set limit amount..."
          />
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handleSetLimitAmount()}
              className="btn btn-sm h-11 border-none bg-gray-100 hover:bg-gray-100  dark:bg-quaternary dark:hover:bg-quaternary  text-secondary font-medium rounded-full px-5"
            >
              Set
            </button>
            <button
              onClick={() => setIsOpenSetLimit(false)}
              className="btn btn-sm h-11 border-none dark:bg-quaternary dark:hover:bg-quaternary  text-tertiary font-medium rounded-full px-5"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <div className="flex-1 dark:bg-quaternary flex items-center justify-between px-5 py-[10px] rounded-full">
            <p className="text-sm font-medium">Limit Price</p>
            <p className="font-medium">${getAmount}</p>
          </div>
          <button
            onClick={() => setIsOpenSetLimit(true)}
            className="btn btn-sm h-10 border-none dark:bg-quaternary dark:hover:bg-quaternary dark:text-white font-medium rounded-full px-5"
          >
            Set limit
          </button>
        </div>
      )}

      <div className="flex items-center gap-5 my-10">
        <div
          onClick={() => {
            setIsCryptoSelected(true);
          }}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer"
        >
          {isCryptoSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Cryptocurrency
        </div>

        <div
          onClick={() => {
            setIsCryptoSelected(false);
          }}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer"
        >
          {!isCryptoSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Currency
        </div>
      </div>

      {isCryptoSelected ? (
        <CryptoBuy
          cryptoCurrency={cryptoCurrency}
          cryptoRefetch={cryptoRefetch}
        />
      ) : (
        <CurrencyBuy flatCurrency={flatCurrency} flatRefetch={flatRefetch} />
      )}
    </div>
  );
};

export default BuyLimit;
