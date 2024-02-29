import React from "react";
import { FaUserTie } from "react-icons/fa";
import PeopleIcon from "@mui/icons-material/People";
import { MdAdminPanelSettings } from "react-icons/md";

const ManageUserTopBar = ({ allUser, traderAccounts, adminAccounts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 5xl:grid-cols-3 justify-between gap-5 mb-6 ">
      {/* total users */}
      <div className="w-full p-5 bg-[#40a0ff] rounded flex justify-between items-center text-white">
        <div className="font-medium">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <h3 className="text-2xl font-semibold">{allUser.length}</h3>
        </div>
        <PeopleIcon sx={{ fontSize: "50px" }} />
      </div>

      {/* total traders */}
      <div className="w-full p-5 bg-[#5dad3e] rounded flex justify-between items-center text-white">
        <div className="font-medium">
          <h3 className="text-lg font-semibold">Total Trader</h3>
          <h3 className="text-2xl font-semibold">{traderAccounts.length}</h3>
        </div>
        <FaUserTie className="text-5xl" />
      </div>

      {/* total admins */}
      <div className="w-full p-5 bg-[#6c52ff] rounded flex justify-between items-center text-white">
        <div className="font-medium">
          <h3 className="text-lg font-semibold">Total Admin</h3>
          <h3 className="text-2xl font-semibold">{adminAccounts.length}</h3>
        </div>
        <MdAdminPanelSettings className="text-5xl" />
      </div>
    </div>
  );
};

export default ManageUserTopBar;
