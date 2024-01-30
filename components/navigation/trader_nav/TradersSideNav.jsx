"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/NexTrade-Logo-Original.png";
import useAuth from "@/hooks/useAuth";
import { MdSpaceDashboard } from "react-icons/md";
import { SiMarketo, SiMeilisearch, SiKhanacademy } from "react-icons/si";
import { IoListCircleSharp } from "react-icons/io5";
import { FaUserCircle, FaWallet } from "react-icons/fa";
import { FaMountain } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const TradersDashboardSidebar = () => {
  const { logOut } = useAuth();

  const pathname = usePathname();

  // dashboard route for user
  const tradersNavLinks = (
    <>
      <Link
        href="/dashboard"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <MdSpaceDashboard /> Dashboard
        </button>
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/market" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <SiMarketo /> Market
        </button>
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/trading" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <SiMeilisearch />
          Trading
        </button>
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/portfolio" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <FaMountain /> Portfolio
        </button>
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/watchlist" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <IoListCircleSharp /> Watchlist
        </button>
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/academy" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <SiKhanacademy /> Academy
        </button>
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/profile" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <FaUserCircle /> Profile
        </button>
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/wallet" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <FaWallet /> Wallet
        </button>
      </Link>
    </>
  );

  return (
    <div className="h-full w-full bg-white rounded-2xl p-3">
      <div className="flex flex-col items-center mt-2">
        <Image src={logo} width={120} alt="logo" />
      </div>
      <p className="font-semibold text-zinc-500 mt-5 pb-1 border-b">
        Navigation
      </p>
      <div className="flex flex-col jus gap-3 my-5">{tradersNavLinks}</div>
    </div>
  );
};

export default TradersDashboardSidebar;
