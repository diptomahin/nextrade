import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { SiKhanacademy } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";

const AdminNavLinks = ({ pathname }) => {
  return (
    <>
      <Link
        href="/admin_dashboard"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <MdSpaceDashboard className="text-xl" /> Dashboard
      </Link>
      <Link
        href="/admin_dashboard/manage_users"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_users"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <FaUsers className="text-xl" /> Manage Users
      </Link>
      {/* <Link
        href="/admin_dashboard/manage_services"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_services"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <GrServices className="text-xl" />
        Manage Services
      </Link> */}
      <Link
        href="/admin_dashboard/manageCoins"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manageCoins"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <GrServices className="text-xl" />
        Manage Coins
      </Link>
      <Link
        href="/admin_dashboard/manage_academy"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_academy"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <SiKhanacademy className="text-xl" /> Manage Academy
      </Link>
      {/* <Link
        href="/admin_dashboard/message_box"
        className={`w-full h-10 px-5 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/message_box"
            ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
            : "bg-transparent hover:bg-transparent hover:text-primary"
        }`}
      >
        <LuMessagesSquare className="text-xl" /> Message Box
      </Link> */}
    </>
  );
};

export default AdminNavLinks;
