import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaMountain, FaUserCircle, FaWallet } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoListCircleSharp, IoLogOut } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo, SiMeilisearch } from "react-icons/si";

const SideNavLinks = () => {
  const { logOut } = useAuth();

  const pathname = usePathname();
  return (
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
      <hr />
      <Link
        href="/"
        className="w-full font-medium hover:bg-black/5 text-primary rounded-full"
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <GoHomeFill /> Home
        </button>
      </Link>
      <Link
        href="/dashboard/settings"
        className={`w-full font-medium hover:bg-black/5 ${
          pathname === "/dashboard/settings" && "bg-black/5"
        } text-primary rounded-full`}
      >
        <button className="w-full flex items-center gap-2 px-4 py-[10px] ">
          {" "}
          <IoMdSettings /> Settings
        </button>
      </Link>

      <button
        onClick={() => logOut()}
        className="w-full flex items-center gap-2 px-4 py-[10px] font-medium hover:bg-black/5 text-primary  rounded-full"
      >
        {" "}
        <IoLogOut /> Logout
      </button>
    </>
  );
};

export default SideNavLinks;
