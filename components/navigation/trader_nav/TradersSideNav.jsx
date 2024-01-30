"use client";

import Image from "next/image";
import logo from "../../../assets/logo/NexTrade-Logo-Original.png";
import SideNavLinks from "./SideNavLinks";

const TradersDashboardSidebar = () => {
  return (
    <div className="h-full w-full bg-white rounded-2xl p-3">
      <div className="flex flex-col items-center pt-3 pb-6 border-b">
        <Image src={logo} width={120} alt="logo" />
      </div>
      <div className="flex flex-col jus gap-3 my-5">
        <SideNavLinks />
      </div>
    </div>
  );
};

export default TradersDashboardSidebar;
