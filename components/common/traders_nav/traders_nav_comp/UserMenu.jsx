import useAuth from "@/hooks/useAuth";
import Image from "next/image";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const UserMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logOut } = useAuth();
  return (
    <div className="relative flex items-center justify-end gap-3">
      <div className="hidden lg:flex flex-col items-end">
        <h4 className="text-sm font-semibold">{user?.displayName}</h4>
        <h4 className="text-xs opacity-70">{user?.email}</h4>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {user ? (
          <Image
            src={user.photoURL}
            width={40}
            height={40}
            className="rounded-full"
            alt="user photo"
          />
        ) : (
          <FaUserCircle className={`w-8 h-8 ${isOpen && "text-primary"}`} />
        )}
      </button>
      {isOpen && (
        <div className="w-60 absolute top-14 right-0 bg-white rounded-xl border overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-[#352786] text-white p-5">
            <div className="flex flex-col items-center gap-3">
              {user ? (
                <Image
                  src={user.photoURL}
                  height={48}
                  width={48}
                  alt="user photo"
                  className="rounded-full"
                />
              ) : (
                <p className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <FaUser className="w-10 h-10 m-[6px] text-sky-500 rounded-full" />
                </p>
              )}

              <div className="text-center">
                <h3 className="font-semibold">{user?.displayName}</h3>
                <p title={user?.email} className="opacity-70">
                  <small>{user?.email}</small>
                </p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex flex-col gap-2 p-4">
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
            </Link>
            <hr />
            <Link href="/">
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
        </div>
      )}
    </div>
  );
};

export default UserMenu;
