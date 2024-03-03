"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import AdminNavLinks from "./nav_comp/AdminNavLinks";
import { usePathname } from "next/navigation";

const AdminSideNav = () => {
  const pathname = usePathname();
  return (
    <div className="h-full w-full bg-white dark:bg-tertiary flex flex-col gap-3 py-3">
      <div className="flex items-center justify-center mb-3">
        <Magnetic>
          <div className="">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 h-fit w-fit"
            >
              {" "}
              <Image src={logo} width={35} alt="logo" />
              <h1 className="text-lg font-semibold">NexTrade</h1>
            </Link>
          </div>
        </Magnetic>
      </div>
      <AdminNavLinks pathname={pathname} />
    </div>
  );
};

export default AdminSideNav;
