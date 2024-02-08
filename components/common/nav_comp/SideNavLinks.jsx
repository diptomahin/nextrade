import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaMountain, FaUserCircle, FaWallet } from "react-icons/fa";
import { IoListCircleSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo, SiMeilisearch } from "react-icons/si";

const SideNavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/dashboard"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <MdSpaceDashboard /> Dashboard
        </button>
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/market" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <SiMarketo /> Market
        </button>
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/trading" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <SiMeilisearch />
          Trading
        </button>
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/portfolio" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <FaMountain /> Portfolio
        </button>
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/watchlist" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <IoListCircleSharp /> Watchlist
        </button>
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/academy" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <SiKhanacademy /> Academy
        </button>
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/profile" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <FaUserCircle /> Profile
        </button>
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full font-medium hover:bg-white/10 ${
          pathname === "/dashboard/wallet" && "bg-white/10"
        } text-white rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-2">
          {" "}
          <FaWallet /> Wallet
        </button>
      </Link>
    </>
  );
};

export default SideNavLinks;
