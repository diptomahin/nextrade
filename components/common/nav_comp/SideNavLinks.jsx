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
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <MdSpaceDashboard /> Dashboard
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/market" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <SiMarketo /> Market
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/trading" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <SiMeilisearch />
        Trading
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/portfolio" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <FaMountain /> Portfolio
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/watchlist" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <IoListCircleSharp /> Watchlist
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/academy" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <SiKhanacademy /> Academy
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/profile" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <FaUserCircle /> Profile
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-none shadow-none rounded-xl text-primary ${
          pathname === "/dashboard/wallet" ? "bg-white/10" : "bg-transparent"
        }`}
      >
        <FaWallet /> Wallet
      </Link>
    </>
  );
};

export default SideNavLinks;
