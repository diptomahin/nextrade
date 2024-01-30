import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const UserMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logOut } = useAuth();
  return (
    <div className="flex items-center justify-end gap-3">
      <div className="flex flex-col items-end">
        <h4 className="text-sm font-semibold">{user?.displayName}</h4>
        <h4 className="text-xs opacity-70">{user?.email}</h4>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className="relative">
        {/* <Image alt="user photo " width={50} href={user?.photoURL} /> */}
        <FaUserCircle className="w-8 h-8" />
        {isOpen && (
          <div className="absolute top-12 right-0 w-40 bg-white flex flex-col gap-2 p-3 border rounded-xl">
            <Link href="/dashboard/profile" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary rounded-full"
              >
                {" "}
                <FaUserCircle /> Profile
              </button>
            </Link>
            <Link href="/dashboard/settings" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary rounded-full"
              >
                {" "}
                <IoMdSettings /> Settings
              </button>
            </Link>{" "}
            <hr />{" "}
            <Link href="/" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary rounded-full"
              >
                {" "}
                <GoHomeFill /> Home
              </button>
            </Link>
            <button
              onClick={() => {
                logOut();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-[6px] font-medium hover:bg-black/5 text-primary  rounded-full"
            >
              {" "}
              <IoLogOut /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
