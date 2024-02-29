"use client";

import Currency from "./Currency";
// icon
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Currencies = () => {
  return (
    <div className="bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded w-full h-full p-5">
      <h2 className="text-xl font-semibold ">Currency Prefernces</h2>
      <p className="text-sm font-medium opacity-70 mb-7">Popular Currencies</p>
      {/* currency  */}
      <div className=" grid 2xl:grid-cols-4 grid-cols-2 gap-4">
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
        <Currency
          countryDollar={"United States Dollar"}
          icon={AttachMoneyIcon}
          iconName={"USD - $"}
        />
      </div>
    </div>
  );
};

export default Currencies;
