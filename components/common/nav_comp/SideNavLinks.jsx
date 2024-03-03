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
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <MdSpaceDashboard className="text-lg" /> Dashboard
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <AiFillSliders className="text-lg" />
        Trading
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <SiMarketo className="text-lg" /> Market
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <AiOutlineFundView className="text-lg" /> Portfolio
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <HiMiniQueueList className="text-lg" /> Watchlist
      </Link>
      <Link
        href="/dashboard/history"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/history"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <FaHistory className="text-lg" /> History
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <SiKhanacademy className="text-lg" /> Academy
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <FaUserCircle className="text-lg" /> Profile
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "text-primary border-l-4 border-l-primary"
            : "text-[#717579] hover:text-primary"
        }`}
      >
        <FaWallet className="text-lg" /> Wallet
      </Link>
    </>
  );
};

export default SideNavLinks;
