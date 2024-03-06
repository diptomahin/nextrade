import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { SiKhanacademy } from "react-icons/si";

const AdminNavLinks = ({ pathname, isActiveMenu }) => {
  return (
    <>
      <Link
        href="/admin_dashboard"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard"
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
        href="/admin_dashboard/manage_users"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_users"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        }`}
      >
        {isActiveMenu ? (
          <FaUsers className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <FaUsers className="text-lg" />
            Users
          </div>
        )}
      </Link>

      <Link
        href="/admin_dashboard/manageCoins"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manageCoins"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        }`}
      >
        {isActiveMenu ? (
          <GrServices className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <GrServices className="text-lg" />
            Coins
          </div>
        )}
      </Link>
      <Link
        href="/admin_dashboard/manage_academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start bg-transparent hover:bg-transparent border-4 border-transparent hover:border-transparent hover:border-l-4 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_academy"
            ? "text-primary border-l-4 border-l-primary"
            : "text-black dark:text-white dark:hover:text-primary hover:text-primary"
        }`}
      >
        {isActiveMenu ? (
          <SiKhanacademy className="text-xl" />
        ) : (
          <div className="flex items-center gap-2">
            <SiKhanacademy className="text-lg" />
            Academy
          </div>
        )}
      </Link>
    </>
  );
};

export default AdminNavLinks;
