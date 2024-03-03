import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const AdminMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logOut, loading } = useAuth();

  const pathname = usePathname();

  if (loading) {
    return;
  }
  return (
    <div className="relative flex items-center justify-end gap-3">
      <div className="hidden lg:flex flex-col items-end">
        <h4 className="text-sm font-semibold">{user?.displayName}</h4>
        <h4 className="text-xs opacity-70">{user?.email}</h4>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {user?.photoURL ? (
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              alt="profile-image"
              width={40}
              height={40}
              src={user?.photoURL}
              className="w-full h-full rounded-full object-top object-cover"
              priority
            />
          </div>
        ) : (
          <FaUserCircle className={`w-8 h-8 ${isOpen && "text-primary"}`} />
        )}
      </button>
      {isOpen && (
        <div className="min-w-44 absolute top-14 right-0 bg-tertiary rounded-xl overflow-hidden shadow-2xl shadow-black">
          <div className="bg-gradient-to-br from-primary to-[#352786] text-white px-2 py-3">
            <div className="flex flex-col items-center gap-3 overflow-hidden">
              {user?.photoURL ? (
                <div className="w-10 h-10 overflow-hidden rounded-full">
                  <Image
                    alt="profile-image"
                    width={40}
                    height={40}
                    src={user?.photoURL}
                    className="w-full h-full rounded-full object-top object-cover"
                    priority
                  />
                </div>
              ) : (
                <p className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <FaUser className="w-10 h-10 m-[6px] text-sky-500 rounded-full" />
                </p>
              )}

              <div className="text-center text-white">
                <h3 className="text-sm font-semibold ">{user?.displayName} </h3>
                <p title={user?.email} className="text-sm opacity-70">
                  <small>{user?.email}</small>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 py-4">
            <Link href="/admin_dashboard/profile" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className={`w-full h-8 px-4 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
                  pathname === "/admin_dashboard/profile"
                    ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
                    : "bg-transparent hover:bg-transparent hover:text-primary"
                }`}
              >
                {" "}
                <FaUserCircle /> Profile
              </button>
            </Link>
            <Link href="/admin_dashboard/settings" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className={`w-full h-8 px-4 btn btn-sm justify-start gap-2 text-white border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
                  pathname === "/admin_dashboard/settings"
                    ? "bg-primary hover:bg-primary hover:text-white border-l-2 border-l-primary"
                    : "bg-transparent hover:bg-transparent hover:text-primary"
                }`}
              >
                {" "}
                <IoMdSettings /> Settings
              </button>
            </Link>
            <hr className="border-darkThree" />
            <Link href="/">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full btn btn-sm h-8 justify-start bg-transparent hover:bg-black/5 rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 text-white hover:border-l-primary shadow-none"
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
              className="w-full btn btn-sm h-8 justify-start bg-transparent hover:bg-black/5 rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 text-white hover:border-l-primary shadow-none"
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

export default AdminMenu;
