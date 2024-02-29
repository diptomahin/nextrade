import React, { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import CryptoBuy from "./CryptoBuy";
import CurrencyBuy from "./CurrencyBuy";

const BuyMarket = ({ cryptoCurrency, flatCurrency, cryptoRefetch, flatRefetch }) => {
  const [isCryptoSelected, setIsCryptoSelected] = useState(true);
  return (
    <div>
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

      {isCryptoSelected ? <CryptoBuy cryptoCurrency={cryptoCurrency}  cryptoRefetch={cryptoRefetch}  /> : <CurrencyBuy flatCurrency={flatCurrency} flatRefetch={flatRefetch}/>}

      <div className="bg-darkBG flex items-center justify-between gap-5 px-5 py-[10px] rounded-full my-5">
        <p className="text-sm font-medium">Trade amount</p>
        <p className="font-medium">$500</p>
      </div>
      <div className="flex item-center justify-center">
        <button className="btn btn-sm h-10 border-none bg-primary hover:bg-primary text-white font-medium rounded-full px-5">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default BuyMarket;
