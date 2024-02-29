"use client";

import Link from "next/link";
import Rechart from "../wallet/Rechart";
import useUserData from "@/hooks/useUserData";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import {
  HiMiniArrowDownOnSquareStack,
  HiMiniArrowUpOnSquareStack,
} from "react-icons/hi2";

const Balance = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }
  return (
    <div className="xl:col-span-12 2xl:col-span-7 w-full bg-[#21212f] p-5 rounded-xl">
      <div className="flex items-center justify-between  border-b pb-2 border-b-darkThree">
        <h3 className="text-xl font-semibold">Total Balance</h3>
        <Link
          href="/dashboard/market"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all
        </Link>
      </div>

      {/* content */}
      <div className="h-full flex items-center justify-between gap-5">
        <div className="h-full w-full py-10">
          {/* top part */}
          <div className="flex justify-between">
            {/*  */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full">
                <MdAccountBalance className="text-2xl" />
              </div>
              <div className="">
                <h3 className="text-primary font-semibold">Total Balance</h3>
                <p className="text-xl font-semibold">$10000</p>
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
            <div className="flex justify-between">
              {/*  */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-thirdGreen flex items-center justify-center rounded-full">
                  <HiMiniArrowDownOnSquareStack className="text-lg" />
                </div>
                <div className="">
                  <h3 className="text-sm text-thirdGreen font-semibold">
                    Income
                  </h3>
                  <p className="font-semibold">$10000</p>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-fourthPink flex items-center justify-center rounded-full">
                  <HiMiniArrowUpOnSquareStack className="text-lg" />
                </div>
                <div className="">
                  <h3 className="text-sm text-fourthPink font-semibold">
                    Outcome
                  </h3>
                  <p className="font-semibold">$10000</p>
                </div>
              </div>
            </div>
            <hr className="border-darkThree my-5" />
            {/*  */}
            <div className="flex justify-between">
              {/*  */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-thirdGreen flex items-center justify-center rounded-full">
                  <RiLuggageDepositFill className="text-lg" />
                </div>
                <div className="">
                  <h3 className="text-sm text-thirdGreen font-semibold">
                    Deposit
                  </h3>
                  <p className="font-semibold">$10000</p>
                </div>
              </div>

              {/*  */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-fourthPink flex items-center justify-center rounded-full">
                  <FaCreditCard className="text-lg" />
                </div>
                <div className="">
                  <h3 className="text-sm text-fourthPink font-semibold">
                    Withdraw
                  </h3>
                  <p className="font-semibold">$10000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Rechart />
      </div>
    </div>
  );
};

export default Balance;
