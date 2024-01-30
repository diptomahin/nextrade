"use client";

import Image from "next/image";
import logo from "../../../assets/logo/NexTrade-Logo-Original.png";
import SideNavLinks from "./traders_nav_comp/SideNavLinks";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";

const TradersDashboardSidebar = () => {
  return (
    <div className="h-full w-full bg-white rounded-xl p-3 border">
      <Magnetic>
        <Link href="/" className="flex flex-col items-center pt-3 pb-6 ">
          {" "}
          <Image src={logo} width={120} alt="logo" />
        </Link>
      </Magnetic>
      <div className="flex flex-col jus gap-3 py-5 border-t">
        <SideNavLinks />
      </div>
    </div>
  );
};

export default TradersDashboardSidebar;
