"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TradersDashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="relative h-full w-full bg-white dark:bg-tertiary flex flex-col gap-2 py-3 shadow">
      <div className="flex items-center justify-center mb-1">
        <Link
          href="/"
          className="flex items-center justify-center gap-1 h-fit w-fit"
        >
          {" "}
          <Image src={logo} width={30} alt="logo" />
          <h1 className="font-semibold">NexTrade</h1>
        </Link>
        <button>Menu</button>
      </div>
      <SideNavLinks pathname={pathname} />
    </div>
  );
};

export default TradersDashboardSidebar;
