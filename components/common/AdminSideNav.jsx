"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import AdminNavLinks from "./nav_comp/AdminNavLinks";

const AdminSideNav = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl p-2 ">
      <Magnetic>
        <Link href="/" className="flex flex-col items-center pt-2 pb-4 ">
          {" "}
          <Image src={logo} width={120} alt="logo" />
        </Link>
      </Magnetic>
      <div className="flex flex-col jus gap-2 py-3 border-t">
        <AdminNavLinks />
      </div>
    </div>
  );
};

export default AdminSideNav;
