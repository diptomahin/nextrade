"use client";

import useUserData from "@/hooks/useUserData";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { HiMiniArrowDownOnSquareStack } from "react-icons/hi2";
import Rechart from "../wallet/Rechart";

const Balance = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  return (
    <div className="xl:col-span-12 2xl:col-span-7 w-full h-full bg-[#21212f] p-5 rounded-xl">
      <h3 className="text-xl font-semibold">Balance</h3>

      {/* content */}
      <div className="h-full flex flex-col lg:flex-row items-center justify-between lg:gap-5 6xl:gap-10 py-5">
        <div className="w-full">
          {/* top part */}
          <div className="flex flex-wrap gap-5 justify-between">
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                <MdAccountBalance className="text-2xl" />
              </div>
              <div className="">
                <h3 className="text-primary font-semibold">Total Balance</h3>
                <p className="text-xl font-semibold">${userData?.balance}</p>
              </div>
            </div>

            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-thirdGreen flex items-center justify-center rounded-full">
                <MdAccountBalance className="text-2xl" />
              </div>
              <div className="">
                <h3 className="text-thirdGreen font-semibold">Total Assets</h3>
                <p className="text-xl font-semibold">$10000</p>
              </div>
            </div>
          </div>

          {/* bottom part */}
          <div className="bg-[#17171e] p-5 my-8 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-thirdGreen flex items-center justify-center rounded-full">
                <HiMiniArrowDownOnSquareStack className="text-lg" />
              </div>
              <div className="">
                <h3 className="text-sm text-thirdGreen font-semibold">
                  Total Profit/Loss
                </h3>
                <p className="font-semibold">$10000</p>
              </div>
            </div>
            <hr className="border-darkThree my-5" />
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-thirdGreen flex items-center justify-center rounded-full">
                <RiLuggageDepositFill className="text-lg" />
              </div>
              <div className="">
                <h3 className="text-sm text-thirdGreen font-semibold">
                  Total Deposit
                </h3>
                <p className="font-semibold">${userData?.deposit}</p>
              </div>
            </div>
            <hr className="border-darkThree my-5" />
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-fourthPink flex items-center justify-center rounded-full">
                <FaCreditCard className="text-lg" />
              </div>
              <div className="">
                <h3 className="text-sm text-fourthPink font-semibold">
                  Total Withdraw
                </h3>
                <p className="font-semibold">${userData?.withdraw}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Rechart />
        </div>
      </div>
    </div>
  );
};

export default Balance;
