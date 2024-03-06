"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import logoOriginal from "../../assets/logo/NexTrade-Logo-Original.png";
import Link from "next/link";
import AdminNavLinks from "./nav_comp/AdminNavLinks";
import { CgMenuLeft } from "react-icons/cg";

const AdminSideNav = ({ isActiveMenu, setIsActiveMenu, pathname }) => {
  return (
    <div className="relative h-full w-full bg-white dark:bg-quaternary text-zinc-950 dark:text-zinc-100 flex flex-col gap-2 py-3 shadow">
      <Link href="/" className="pl-3 mt-1 mb-3">
        {" "}
        {isActiveMenu ? (
          <Image src={logo} width={40} height={"auto"} alt="logo" />
        ) : (
          <Image src={logoOriginal} width={130} height={"auto"} alt="logo" />
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
      <AdminNavLinks pathname={pathname} isActiveMenu={isActiveMenu} />
    </div>
  );
};

export default AdminSideNav;
