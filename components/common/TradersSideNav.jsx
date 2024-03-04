"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";

const TradersDashboardSidebar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="relative h-full w-full bg-white dark:bg-tertiary flex flex-col gap-2 py-5 shadow">
      <button
        onClick={() => setIsActiveMenu(!isActiveMenu)}
        className="absolute top-3 -right-[15px] btn btn-sm btn-circle w-10 h-10 bg-white hover:bg-black/5 active:bg-black/15 dark:bg-quaternary dark:hover:bg-white/5 dark:active:bg-white/15 dark:text-white px-0 border-none shadow-none"
      >
        <MdOutlineKeyboardDoubleArrowLeft className="text-4xl" />
      </button>
      <Link
        href="/"
        className="w-full flex items-center justify-center gap-[5px] mb-1"
      >
        {" "}
        <Image src={logo} width={25} height={"auto"} alt="logo" />
        <h1 className="font-medium ">
          Nex<span className="font-extrabold">Trade</span>
        </h1>
      </Link>
      <SideNavLinks pathname={pathname} isActiveMenu={isActiveMenu} />
    </div>
  );
};

export default TradersDashboardSidebar;
