"use client";
import { FaCreditCard } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";

const BalanceSection = ({ userData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 5xl:grid-cols-3 justify-between gap-7">
      {/* total balance */}
      <div className="w-full p-5 bg-primary flex items-center justify-between gap-3 rounded-xl">
        <div>
          <h3 className="font-medium">Total Balance</h3>
          <h3 className="text-xl font-semibold">
            $ {parseFloat(userData?.balance).toFixed(2) || "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <MdAccountBalance className="text-4xl" />
        </div>
      </div>

      {/* total deposit */}
      <div className="w-full p-5 bg-senary rounded-xl flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Total Deposit</h3>
          <h3 className="text-xl font-semibold">
            $ {parseFloat(userData?.deposit).toFixed(2) || "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <RiLuggageDepositFill className="text-4xl" />
        </div>
      </div>

      {/* total withdraw */}
      <div className="w-full p-5 bg-septenary rounded-xl flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Total Withdraw</h3>
          <h3 className="text-xl font-semibold">
            $ {parseFloat(userData?.withdraw).toFixed(2) || "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <FaCreditCard className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
