"use client";
import React from "react";
import useAllUsersData from "@/hooks/useAllUsersData";
import { PieChart } from "@mui/x-charts/PieChart";

const AdminDashUserCount = () => {
  const { allUser, refetch } = useAllUsersData();

  const traderAccounts = allUser.filter((user) => user.role === "trader");
  const adminAccounts = allUser.filter((admin) => admin.role === "admin");

  const totalTraderAccounts = traderAccounts.length;
  const totalAdminAccounts = adminAccounts.length;

  const data = [
    { label: "Trader Accounts", value: totalTraderAccounts },
    { label: "Admin Accounts", value: totalAdminAccounts },
  ];

  return (
    <div className="bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5 mt-7">
      <h2 className="font-semibold text-start text-xl">Total User Count</h2>
      <div
        style={{ margin: "auto", textAlign: "center" }}
        className="md:pl-20 pl-0 "
      >
        <PieChart
          series={[
            {
              outerRadius: 70,
              data,
              fill: ["#6c52ff", "#5dad3e"], // Use the provided colors
            },
          ]}
          height={300}
          slotProps={{
            legend: { hidden: true },
          }}
          style={{
            "& .recharts-pie-sector": {
              // Override any existing styles
              fill: "transparent",
            },
            "& .recharts-pie-label-line": {
              // Override label line styles if needed
              stroke: "none",
            },
          }}
        />
      </div>
      <div className="flex items-center justify-center gap-10">
        <p className="bg-[#6c52ff] p-2 rounded-md font-semibold">
          Admin : {totalTraderAccounts}
        </p>
        <p className="bg-[#5dad3e] p-2 rounded-md font-semibold">
          Trader : {totalAdminAccounts}
        </p>
      </div>
    </div>
  );
};

export default AdminDashUserCount;
