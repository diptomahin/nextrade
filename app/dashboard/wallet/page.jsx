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
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import DepositForm from "@/components/traders_comp/wallet/DepositForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import useAuth from "@/hooks/useAuth";
import DashButton from "@/components/library/buttons/DashButton";
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
const date = `${day} ${
  month === 1
    ? "January"
    : month === 2
    ? "February"
    : month === 3
    ? "March"
    : month === 4
    ? "April"
    : month === 5
    ? "May"
    : month === 6
    ? "June"
    : month === 7
    ? "July"
    : month === 8
    ? "August"
    : month === 9
    ? "September"
    : month === 10
    ? "October"
    : month === 11
    ? "November"
    : "December"
} ${year}`;

const Wallet = () => {
  const [hidePrice, setHidePrice] = React.useState(false);
  const { user } = useAuth();

  const {
    data: userBalanceDetails = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, user?.email, "all-users");

  if (isLoading || isPending) {
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

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-5 w-full font-mont">
      <div className="xl:w-9/12 flex flex-col gap-5">
        <div className="p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl">
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-6">
            <div>
              <h1 className="text-xl font-bold">Wallet</h1>
              <p className="text-sm opacity-70">Updated on {date}</p>
            </div>
            <div className="flex items-center gap-5">
              <DashButton>
                <BorderColorIcon className="w-5 h-5" /> Edit
              </DashButton>
              <DashButton>
                <AddIcon /> Add New Wallet
              </DashButton>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between gap-6 mt-10">
            <div className="flex items-center gap-3 md:gap-10">
              {!hidePrice && (
                <div>
                  <p className="text-sm pb-2 opacity-70 flex items-center gap-3">
                    <CardTravelOutlinedIcon className="w-5 h-5" /> Wallet
                    Balance
                  </p>
                  <h1 className="text-xl font-semibold">
                    $
                    {parseFloat(userBalanceDetails[0]?.balance).toFixed(2) || 0}
                  </h1>
                </div>
              )}
              <button
                onClick={() => setHidePrice(!hidePrice)}
                className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-1 rounded-full"
              >
                {hidePrice ? (
                  <span>
                    Show Price <VisibilityOutlined className=" w-4 h-4" />
                  </span>
                ) : (
                  <span>
                    Hide Price{" "}
                    <VisibilityOffOutlinedIcon className=" w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
            <div className="bg-black/5 rounded-md p-3">
              <h6>
                <AddCardOutlinedIcon /> Total Deposited{" "}
                <span className="font-semibold ml-5">
                  <FileDownloadOutlinedIcon className=" text-green-600" />$
                  {parseFloat(userBalanceDetails[0]?.balance).toFixed(2) || 0}
                </span>
              </h6>

              <h6 className="mt-4">
                <AvTimerOutlinedIcon /> Total Withdrawals{" "}
                <span className="font-semibold ml-10">
                  <FileUploadOutlinedIcon className=" text-red-600" /> $0
                </span>
              </h6>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <TransactionTable userBalanceDetails={userBalanceDetails} />
      </div>

      {/* Select Currency & Payment */}
      <div className="xl:w-5/12 2xl:w-4/12">
        <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl">
          <Tabs>
            <TabList className="flex items-center justify-center gap-10 font-medium ">
              <Tab className="font-semibold border-none outline-none cursor-pointer">
                Deposit
              </Tab>
              <Tab className="font-semibold border-none outline-none cursor-pointer">
                Withdraw
              </Tab>
            </TabList>

            <TabPanel>
              <Elements stripe={stripePromise}>
                <DepositForm refetch={refetch} />
              </Elements>
            </TabPanel>
            <TabPanel>
              <WithdrawForm />
            </TabPanel>
          </Tabs>
        </div>

        {/* Transaction Report */}
        <div className="w-full p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree text-white rounded-xl mt-5">
          <h1 className="text-xl text-center font-bold mb-5">
            Transaction Report
          </h1>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }} // Adjust margins to provide more space
              data={[
                {
                  name: "Total Deposited",
                  amount:
                    parseFloat(userBalanceDetails[0]?.balance).toFixed(2) || 0,
                },
                {
                  name: "Total Withdrawals",
                  amount: 0,
                },
              ]}
            >
              <XAxis dataKey="name" tick={{ fill: "white", fontSize: 12 }} />
              <YAxis
                tick={{ fill: "white", fontSize: 12 }}
                tickFormatter={(value) => value.toFixed(2)} // Formats ticks to 2 decimal places
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#82ca9d" />
              <Bar dataKey="Withdraw" fill="#FF0000" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
