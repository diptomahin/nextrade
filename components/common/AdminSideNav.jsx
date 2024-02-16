"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import AdminNavLinks from "./nav_comp/AdminNavLinks";

const AdminSideNav = () => {
  return (
    <div className="h-full w-full bg-white px-2 pb-2 border-r">
      <Magnetic>
        <Link href="/" className="h-16 flex items-center justify-center">
          {" "}
          <Image src={logo} width={120} alt="logo" />
        </Link>
      </Magnetic>
      <div className="flex flex-col jus gap-2 py-3 border-t border-dashed">
        <AdminNavLinks />
      </div>
    </div>
  );
};

export default AdminSideNav;
