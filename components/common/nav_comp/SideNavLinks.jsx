import Link from "next/link";
import { FaHistory, FaUserCircle, FaWallet } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { SiKhanacademy, SiMarketo } from "react-icons/si";
import { HiMiniQueueList } from "react-icons/hi2";
import { AiFillSliders, AiOutlineFundView } from "react-icons/ai";

const SideNavLinks = ({ pathname, isActiveMenu }) => {
  return (
    <>
      <Link
        href="/dashboard"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        }`}
      >
        {isActiveMenu ? (
          <MdSpaceDashboard className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <MdSpaceDashboard className="text-lg" /> Dashboard
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/trading"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/trading"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <AiFillSliders className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <AiFillSliders className="text-lg" />
            Trading
          </div>
        )}
      </Link>

      <Link
        href="/dashboard/market"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/market"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <SiMarketo className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <SiMarketo className="text-lg" />
            Market
          </div>
        )}
      </Link>

      <Link
        href="/dashboard/portfolio"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/portfolio"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <AiOutlineFundView className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <AiOutlineFundView className="text-lg" /> Portfolio
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/watchlist"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/watchlist"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <HiMiniQueueList className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <HiMiniQueueList className="text-lg" /> Watchlist
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/history"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/history"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaHistory className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <FaHistory className="text-lg" /> History
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/academy"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <SiKhanacademy className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <SiKhanacademy className="text-lg" /> Academy
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/profile"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/profile"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaUserCircle className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-lg" />
            Profile
          </div>
        )}
      </Link>
      <Link
        href="/dashboard/wallet"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/dashboard/wallet"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        } transition-all duration-300 ease-in-out`}
      >
        {isActiveMenu ? (
          <FaWallet className="text-xl transition-all duration-300 ease-in-out" />
        ) : (
          <div className="flex items-center gap-2">
            <FaWallet className="text-lg" /> Wallet
          </div>
        )}
      </Link>
    </>
  );
};

export default SideNavLinks;
