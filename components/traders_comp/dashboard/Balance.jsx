"use client";

import useUserData from "@/hooks/useUserData";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import {
  HiMiniArrowDownOnSquareStack,
  HiMiniArrowUpOnSquareStack,
} from "react-icons/hi2";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

const Balance = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  const data = [
    {
      name: "balance",
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
    {
      name: "balance",
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
    {
      name: "balance",
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
    {
      name: "balance",
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
    {
      name: "balance",
      Balance: parseFloat(userData?.balance).toFixed(2) || "0.00",

      Deposit: parseFloat(userData?.deposit).toFixed(2) || "0.00",
      Withdraw: parseFloat(userData?.withdraw).toFixed(2) || "0.00",
    },
  ];

  return (
    <div className="xl:col-span-12 2xl:col-span-7 w-full bg-[#21212f] p-5 rounded-xl">
      <h3 className="text-xl font-semibold">Balance</h3>

      {/* content */}
      <div className="h-96 flex items-center justify-between gap-5 6xl:gap-10">
        <div className="w-full">
          {/* top part */}
          <div className="flex justify-between">
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
        <ResponsiveContainer
          width={"100%"}
          height={"100%"}
          className="mx-auto text-center"
        >
          <BarChart data={data}>
            <XAxis dataKey={"name"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Deposit" fill="#3aba69" />
            <Bar dataKey="Withdraw" fill="#f65455" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Balance;
