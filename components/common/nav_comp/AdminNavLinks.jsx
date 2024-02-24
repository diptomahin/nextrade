import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { SiKhanacademy } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";

const AdminNavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      <Link
        href="/admin_dashboard"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <MdSpaceDashboard className="text-xl" /> Dashboard
      </Link>
      <Link
        href="/admin_dashboard/manage_users"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_users"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <FaUsers className="text-xl" /> Manage Users
      </Link>
      <Link
        href="/admin_dashboard/manage_services"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_services"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <GrServices className="text-xl" />
        Manage Services
      </Link>
      <Link
        href="/admin_dashboard/manageCoins"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manageCoins"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <GrServices className="text-xl" />
        Manage Coins
      </Link>
      <Link
        href="/admin_dashboard/manage_academy"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/manage_academy"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <SiKhanacademy className="text-xl" /> Manage Academy
      </Link>
      <Link
        href="/admin_dashboard/message_box"
        className={`w-full h-10 btn btn-sm justify-start  hover:bg-white/[0.03] active:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
          pathname === "/admin_dashboard/message_box"
            ? "bg-white/[0.02] border-l-2 border-l-primary text-primary"
            : "bg-transparent text-white"
        }`}
      >
        <LuMessagesSquare className="text-xl" /> Message Box
      </Link>
    </>
  );
};

export default AdminNavLinks;
