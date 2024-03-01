"use client";

import Currency from "./Currency";
// icon
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Currencies = () => {
  return (
    <div className="bg-tertiary rounded-xl w-full h-full p-5">
      <h2 className="text-xl font-semibold ">Currency Preferences</h2>
      <p className="text-sm font-medium opacity-70 my-5">Popular Currencies</p>
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
