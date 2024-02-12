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
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <MdSpaceDashboard /> Dashboard
      </Link>
      <Link
        href="/dashboard/market"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiMarketo /> Market
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiMeilisearch />
        Trading
      </Link>
      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaMountain /> Portfolio
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <IoListCircleSharp /> Watchlist
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiKhanacademy /> Academy
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaUserCircle /> Profile
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "bg-white/10 border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaWallet /> Wallet
      </Link>
    </>
  );
};

export default SideNavLinks;
