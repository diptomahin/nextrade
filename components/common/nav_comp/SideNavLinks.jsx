import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHistory, FaMountain, FaUserCircle, FaWallet } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo, SiMeilisearch } from "react-icons/si";
import { HiMiniQueueList } from "react-icons/hi2";
import {
  AiFillBoxPlot,
  AiFillSliders,
  AiOutlineFundView,
} from "react-icons/ai";

const SideNavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <MdSpaceDashboard className="text-xl" /> Dashboard
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <AiFillSliders className="text-xl" />
        Trading
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiMarketo className="text-xl" /> Market
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <AiOutlineFundView className="text-xl" /> Portfolio
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <HiMiniQueueList className="text-xl" /> Watchlist
      </Link>
      <Link
        href="/dashboard/history"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/history"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaHistory className="text-xl" /> History
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiKhanacademy className="text-xl" /> Academy
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaUserCircle className="text-xl" /> Profile
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 btn btn-sm justify-start gap-3 hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaWallet className="text-xl" /> Wallet
      </Link>
    </>
  );
};

export default SideNavLinks;
