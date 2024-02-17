"use client";
const Currency = ({ countryDollar, icon: Icon, iconName }) => {
  return (
    <div className=" border border-primary p-4 rounded cursor-pointer">
      <div className=" flex justify-between items-center {className}">
        <p className=" ">
          {" "}
          <span className=" rounded p-2 bg-blue-300 text-black">
            <Icon />
          </span>{" "}
          {iconName}
        </p>

        <span className="w-5 h-5 p-3 rounded-full border border-primary hover:bg-primary"></span>
      </div>
      <p className="text-sm font-medium opacity-70 pt-4">{countryDollar}</p>
    </div>
  );
};

export default Currency;
