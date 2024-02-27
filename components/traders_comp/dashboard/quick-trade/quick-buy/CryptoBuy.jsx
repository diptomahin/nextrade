import { useState } from "react";

const CryptoBuy = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  return isOpenSelect ? (
    <div className="flex items-center gap-5">
      <select
        className={`w-full bg-darkBG flex items-center justify-between text-sm px-5 py-[11px] border outline-none rounded-full`}
        name=""
        id=""
      >
        <option value="" className="text-sm">
          btc
        </option>
        <option value="" className="text-sm">
          ltc
        </option>
      </select>
      <div className="flex items-center justify-center gap-2">
        <button
          //   onClick={() => handleSetLimitAmount()}
          className="btn btn-sm h-11 border-none bg-darkBG hover:bg-darkBG  text-thirdGreen font-medium rounded-full px-5"
        >
          Set
        </button>
        <button
          onClick={() => setIsOpenSelect(false)}
          className="btn btn-sm h-11 border-none bg-darkBG hover:bg-darkBG  text-fourthPink font-medium rounded-full px-5"
        >
          Cancel
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center gap-5">
      <div className="flex-1 bg-darkBG flex items-center justify-between px-5 py-[10px] rounded-full">
        <p className="text-sm font-medium">BTC Price</p>
        <p className="font-medium">$1000</p>
      </div>
      <button
        onClick={() => setIsOpenSelect(true)}
        className="btn btn-sm h-10 border-none bg-darkBG hover:bg-darkBG text-white font-medium rounded-full px-5"
      >
        Select
      </button>
    </div>
  );
};

export default CryptoBuy;
