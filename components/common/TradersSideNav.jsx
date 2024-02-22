"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-White.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";

const TradersDashboardSidebar = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-darkOne to-darkTwo border-r border-darkThree px-2 pb-2">
      <Magnetic>
        <Link href="/" className="h-16 flex items-center justify-center">
          {" "}
          <Image src={logo} width={110} alt="logo" />
        </Link>
      </Magnetic>
      <div className="flex flex-col gap-3 py-3 border-t border-dashed border-darkThree">
        <SideNavLinks />
      </div>
    </div>
  );
};

export default TradersDashboardSidebar;
