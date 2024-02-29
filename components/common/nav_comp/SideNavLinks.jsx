import Link from "next/link";
import React from "react";
import { FaHistory, FaUserCircle, FaWallet } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo } from "react-icons/si";
import { HiMiniQueueList } from "react-icons/hi2";
import { AiFillSliders, AiOutlineFundView } from "react-icons/ai";

const SideNavLinks = ({ pathname }) => {
  return (
    <>
      <Link
        href="/dashboard"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <MdSpaceDashboard className="text-xl" /> Dashboard
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <AiFillSliders className="text-xl" />
        Trading
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <SiMarketo className="text-xl" /> Market
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <AiOutlineFundView className="text-xl" /> Portfolio
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <HiMiniQueueList className="text-xl" /> Watchlist
      </Link>
      <Link
        href="/dashboard/history"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/history"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <FaHistory className="text-xl" /> History
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <SiKhanacademy className="text-xl" /> Academy
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <FaUserCircle className="text-xl" /> Profile
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <FaWallet className="text-xl" /> Wallet
      </Link>
    </>
  );
};

export default SideNavLinks;
