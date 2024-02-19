"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { RiLuggageDepositFill } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import DepositForm from "@/components/traders_comp/wallet/DepositForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BiMoneyWithdraw } from "react-icons/bi";
import React from "react";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import TransactionTable from "@/components/traders_comp/wallet/TransactionTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./wallet.css";
import WithdrawForm from "@/components/traders_comp/wallet/WithdrawForm";

const stripePromise = loadStripe(
  "pk_test_51OlajqDiMQeSaa5LxC7tWUKZSGttpwdEYpHonWb6QkYttv3vgJlGazlArbsWPutWsDsua0zPbK9oUvEYYspfs0Rf00viBhriC3"
);

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const date = { day: day, month: month, year: year };

const CustomXAxis = ({ dataKey, tick }) => (
  <XAxis dataKey={dataKey} tick={tick} />
);

CustomXAxis.defaultProps = {
  tick: { fill: "white", fontSize: 12 },
};

const CustomYAxis = ({ tick }) => <YAxis tick={tick} />;

CustomYAxis.defaultProps = {
  tick: { fill: "white", fontSize: 12 },
};

const Wallet = () => {
  const { user, loading } = useAuth();

  const {
    data: userBalance = [],
    refetch: userBalanceRefetch,
    isPending: userBalancePending,
    isLoading: userBalanceLoading,
  } = useSecureFetch(`/all-users/${user?.email}`, "userBalance");

  const {
    data: depositWithdrawData = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/deposit-withdraw/${user?.email}`, user?.email);

  if (
    (isLoading || isPending || loading || userBalanceLoading,
    userBalancePending)
  ) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }

  const totalDeposit = depositWithdrawData?.reduce((acc, obj) => {
    // Check if the object has a 'deposit' property
    if (obj.deposit !== undefined) {
      // Add the deposit amount to the accumulator
      acc += obj.deposit;
    }
    return acc;
  }, 0);

  const totalWithdraw = depositWithdrawData?.reduce((acc, obj) => {
    // Check if the object has a 'withdraw' property
    if (obj.withdraw !== undefined) {
      // Add the withdraw amount to the accumulator
      acc += obj.withdraw;
    }
    return acc;
  }, 0);

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-5 w-full">
      <div className="xl:w-9/12 flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5">
          {/* total balance */}
          <div className="w-full p-5 bg-primary rounded flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <MdAccountBalance className="text-2xl" /> Total Balance
            </h3>
            <h3 className="text-2xl font-semibold">
              $ {parseFloat(userBalance[0]?.balance).toFixed(2) || "0.00"}
            </h3>
          </div>

          {/* total deposit */}
          <div className="w-full p-5 bg-thirdGreen rounded flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <RiLuggageDepositFill className="text-2xl" /> Total Deposit
            </h3>
            <h3 className="text-2xl font-semibold">
              $ {totalDeposit ? totalDeposit?.toFixed(2) : "0.00"}
            </h3>
          </div>

          {/* total withdraw */}
          <div className="w-full p-5 bg-fourthPink rounded flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <BiMoneyWithdraw className="text-2xl" /> Total Withdraw
            </h3>

            <h3 className="text-2xl font-semibold">
              $ {totalWithdraw ? totalWithdraw?.toFixed(2) : "0.00"}
            </h3>
          </div>
        </div>

        {/* Transaction History */}
        <TransactionTable user={user} />
      </div>

      {/* Select Currency & Payment */}
      <div className="xl:w-5/12 2xl:w-4/12">
        <div className="w-full p-5 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded">
          <Tabs>
            <TabList className="text-xl flex items-center justify-center gap-10 font-medium">
              <Tab className="font-semibold border-none outline-none cursor-pointer">
                Deposit
              </Tab>
              <Tab className="font-semibold border-none outline-none cursor-pointer">
                Withdraw
              </Tab>
            </TabList>

            <TabPanel>
              <Elements stripe={stripePromise}>
                <DepositForm
                  userBalanceRefetch={userBalanceRefetch}
                  refetch={refetch}
                  date={date}
                />
              </Elements>
            </TabPanel>
            <TabPanel>
              {userBalance && userBalance[0]?.balance <= 10 ? (
                <div className="flex flex-col items-center justify-center text-center my-10">
                  <h4 className="text-xl 2xl:text-2xl font-bold">
                    Please deposit first
                  </h4>
                  <p className="text-sm 2xl:text-base">
                    Your account balance must meet or exceed{" "}
                    <span className="font-semibold text-secondary">$10</span> to
                    initiate a withdrawal.
                  </p>
                </div>
              ) : (
                <Elements stripe={stripePromise}>
                  <WithdrawForm
                    userBalanceRefetch={userBalanceRefetch}
                    refetch={refetch}
                    date={date}
                    totalBalance={userBalance[0]?.balance}
                  />
                </Elements>
              )}
            </TabPanel>
          </Tabs>
        </div>

        {/* Transaction Report */}
        <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree text-white rounded mt-5">
          <h1 className="text-xl text-center font-bold mb-5">
            Transaction Report
          </h1>
          <ResponsiveContainer width="90%" height={300} className=" mx-auto">
            <BarChart
              data={[
                {
                  name: "Total Balance",
                  "Total Balance":
                    parseFloat(userBalance[0]?.balance).toFixed(2) || "0.00",
                },
                {
                  name: "Total Deposited",
                  "Total Deposit": totalDeposit
                    ? totalDeposit.toFixed(2)
                    : "0.00",
                },
                {
                  name: "Total Withdrawals",
                  "Total Withdraw": totalWithdraw
                    ? totalWithdraw.toFixed(2)
                    : "0.00",
                },
              ]}
            >
              <CustomXAxis dataKey="name" />
              <CustomYAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Total Balance" fill="#40a0ff" />
              <Bar dataKey="Total Deposit" fill="#78c350" />
              <Bar dataKey="Total Withdraw" fill="#ff5252" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
