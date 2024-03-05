"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuLeft } from "react-icons/cg";

const TradersDashboardSidebar = ({ isActiveMenu, setIsActiveMenu }) => {
  const pathname = usePathname();
  return (
    <div className="relative h-full w-full bg-white dark:bg-tertiary flex flex-col gap-2 py-3 shadow">
      <Link href="/" className="flex items-center gap-2 pl-3 mb-3">
        {" "}
        {isActiveMenu ? (
          <Image src={logo} width={40} height={"auto"} alt="logo" />
        ) : (
          <>
            <Image src={logo} width={35} height={"auto"} alt="logo" />
            <h1 className="text-lg font-semibold text-primary">
              Nex<span className="text-black dark:text-white">Trade</span>
            </h1>
          </>
        )}
      </Link>
      <button
        onClick={() => setIsActiveMenu(!isActiveMenu)}
        className="hidden 3xl:flex absolute top-[10px] -right-4 btn btn-sm btn-circle w-10 h-10 bg-white hover:bg-black/5 active:bg-black/15 dark:bg-quaternary dark:hover:bg-white/5 dark:active:bg-white/15 dark:text-white border-none shadow-none"
      >
        {isActiveMenu ? (
          <span className="text-2xl transition-transform scale-100 duration-200 ease-out">
            <CgMenuLeft />
          </span>
        ) : (
          <span className="text-2xl transition-transform -scale-100 duration-200 ease-out">
            <CgMenuLeft />
          </span>
        )}
      </button>
      <SideNavLinks pathname={pathname} isActiveMenu={isActiveMenu} />
    </div>
  );
};

export default TradersDashboardSidebar;
