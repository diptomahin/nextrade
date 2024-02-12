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
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
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
  "pk_test_51OcLnwB6RMsoXbxVtHu6thbvRXkoM5hYmM60zlvPZu7kr6bdIyG1vZs6G1ZiJYtf0pT8pmRgu4GDlL0d7edJPAIW00iHrYjfqo"
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
    data: userBalanceDetails = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, user?.email, "all-users");

  if (isLoading || isPending || loading) {
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

  const totalDeposit = userBalanceDetails[0]?.depositWithdrawData?.reduce(
    (acc, obj) => {
      // Check if the object has a 'deposit' property
      if (obj.deposit !== undefined) {
        // Add the deposit amount to the accumulator
        acc += obj.deposit;
      }
      return acc;
    },
    0
  );

  const totalWithdraw = userBalanceDetails[0]?.depositWithdrawData?.reduce(
    (acc, obj) => {
      // Check if the object has a 'withdraw' property
      if (obj.withdraw !== undefined) {
        // Add the withdraw amount to the accumulator
        acc += obj.withdraw;
      }
      return acc;
    },
    0
  );

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-5 w-full">
      <div className="xl:w-9/12 flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5">
          {/* total balance */}
          <div className="w-full p-5 bg-[#40a0ff] rounded-xl flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <MdAccountBalance className="text-2xl" /> Total Balance
            </h3>
            <h3 className="text-2xl font-semibold">
              ${" "}
              {parseFloat(userBalanceDetails[0]?.balance).toFixed(2) || "0.00"}
            </h3>
          </div>

          {/* total deposit */}
          <div className="w-full p-5 bg-[#78c350] rounded-xl flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <RiLuggageDepositFill className="text-2xl" /> Total Deposit
            </h3>
            <h3 className="text-2xl font-semibold">
              $ {totalDeposit ? totalDeposit?.toFixed(2) : "0.00"}
            </h3>
          </div>

          {/* total withdraw */}
          <div className="w-full p-5 bg-[#ff5252] rounded-xl flex flex-col justify-center gap-3">
            <h3 className="flex items-center gap-2 font-medium">
              <BiMoneyWithdraw className="text-2xl" /> Total Withdraw
            </h3>

            <h3 className="text-2xl font-semibold">
              $ {totalWithdraw ? totalWithdraw?.toFixed(2) : "0.00"}
            </h3>
          </div>
        </div>

        {/* Transaction History */}
        <TransactionTable userBalanceDetails={userBalanceDetails} />
      </div>

      {/* Select Currency & Payment */}
      <div className="xl:w-5/12 2xl:w-4/12">
        <div className="w-full p-5 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl">
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
                <DepositForm refetch={refetch} date={date} />
              </Elements>
            </TabPanel>
            <TabPanel>
              {userBalanceDetails && userBalanceDetails[0]?.balance <= 10 ? (
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
                    refetch={refetch}
                    date={date}
                    totalBalance={userBalanceDetails[0].balance}
                  />
                </Elements>
              )}
            </TabPanel>
          </Tabs>
        </div>

        {/* Transaction Report */}
        <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree text-white rounded-xl mt-5">
          <h1 className="text-xl text-center font-bold mb-5">
            Transaction Report
          </h1>
          <ResponsiveContainer width="80%" height={300} className="mx-auto">
            <BarChart
              data={[
                {
                  name: "Total Deposited",
                  Deposit: totalDeposit ? totalDeposit.toFixed(2) : "0.00",
                },
                {
                  name: "Total Withdrawals",
                  Withdraw: totalWithdraw ? totalWithdraw.toFixed(2) : "0.00",
                },
              ]}
            >
              <CustomXAxis dataKey="name" />
              <CustomYAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Deposit" fill="#78c350" />
              <Bar dataKey="Withdraw" fill="#ff5252" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
