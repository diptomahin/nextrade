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
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard" ? "bg-black/5" : "bg-transparent"
        }`}
      >
        <MdSpaceDashboard /> Dashboard
      </Link>
      <Link
        href="/admin_dashboard/manage_users"
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard/manage_users"
            ? "bg-black/5"
            : "bg-transparent"
        } text-primary rounded-full`}
      >
        <FaUsers /> Manage Users
      </Link>
      <Link
        href="/admin_dashboard/manage_services"
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard/manage_services"
            ? "bg-black/5"
            : "bg-transparent"
        } text-primary rounded-full`}
      >
        <GrServices />
        Manage Services
      </Link>
      <Link
        href="/admin_dashboard/manageCoins"
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard/manageCoins"
            ? "bg-black/5"
            : "bg-transparent"
        } text-primary rounded-full`}
      >
        <GrServices />
        Manage Coins
      </Link>
      <Link
        href="/admin_dashboard/manage_academy"
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard/manage_academy"
            ? "bg-black/5"
            : "bg-transparent"
        } text-primary rounded-full`}
      >
        <SiKhanacademy /> Manage Academy
      </Link>
      <Link
        href="/admin_dashboard/message_box"
        className={`w-full h-10 btn btn-sm justify-start hover:bg-black/5 border-none shadow-none rounded-xl font-medium text-primary ${
          pathname === "/admin_dashboard/message_box"
            ? "bg-black/5"
            : "bg-transparent"
        } text-primary rounded-full`}
      >
        <LuMessagesSquare /> Message Box
      </Link>
    </>
  );
};

export default AdminNavLinks;
