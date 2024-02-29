import { useState } from "react";

const CurrencyBuy = ({ flatCurrency, flatRefetch }) => {
  console.log(flatCurrency);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  return isOpenSelect ? (
    <div className="flex items-center gap-5">
      <select
        className={`w-full bg-quaternary flex items-center justify-between text-sm px-5 py-[11px] border   outline-none rounded-full`}
        name=""
        id=""
      >
        {flatCurrency?.map((asset) => (
          <option
            key={asset._id}
            value=""
            className="text-sm w-full flax justify-between"
          >
            name:{asset.name}, ________ price:{asset.price}
          </option>
        ))}
      </select>
      <div className="flex items-center justify-center gap-2">
        <button
          //   onClick={() => handleSetLimitAmount()}
          className="btn btn-sm h-11 border-none bg-quaternary hover:bg-quaternary  text-secondary font-medium rounded-full px-5"
        >
          Set
        </button>
        <button
          onClick={() => setIsOpenSelect(false)}
          className="btn btn-sm h-11 border-none bg-quaternary hover:bg-quaternary  text-tertiary font-medium rounded-full px-5"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-5">
      <div className="flex-1 bg-quaternary flex items-center justify-between px-5 py-[10px] rounded-full">
        <p className="text-sm font-medium">BTC Price</p>
        <p className="font-medium">$1000</p>
      </div>
      <button
        onClick={() => setIsOpenSelect(true)}
        className="btn btn-sm h-10 border-none bg-quaternary hover:bg-quaternary text-white font-medium rounded-full px-5"
      >
        Select
      </button>
    </div>
  );
};

export default CurrencyBuy;
