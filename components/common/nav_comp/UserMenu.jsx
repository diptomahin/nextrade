import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

const UserMenu = ({ userDetails, logOut }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  return (
    <div className="relative flex items-center justify-end gap-3">
      <div className="hidden lg:flex flex-col items-end">
        <h4 className="text-sm font-semibold">{userDetails?.name}</h4>
        <h4 className="text-xs opacity-70">{userDetails?.email}</h4>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {userDetails?.photo !== undefined && userDetails?.photo !== null ? (
          <div className="w-10 h-10 overflow-hidden rounded-full">
            <Image
              alt="profile-image"
              width={40}
              height={40}
              src={userDetails?.photo}
              className="w-full h-full rounded-full object-top object-cover"
              priority
            />
          </div>
        ) : (
          <FaUserCircle className={`w-8 h-8 ${isOpen && "text-primary"}`} />
        )}
      </button>
      {isOpen && (
        <div className="w-60 absolute top-14 right-0 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl  overflow-hidden">
          <div className="bg-gradient-to-br from-primary to-[#352786] text-white p-4">
            <div className="flex flex-col items-center gap-3">
              {userDetails?.photo !== undefined &&
              userDetails?.photo !== null ? (
                <div className="w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    alt="profile-image"
                    width={48}
                    height={48}
                    src={userDetails?.photo}
                    className="w-full h-full rounded-full object-top object-cover"
                    priority
                  />
                </div>
              ) : (
                <p className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <FaUser className="w-10 h-10 m-[6px] text-sky-500 rounded-full" />
                </p>
              )}

              <div className="text-center">
                <h3 className="text-sm font-semibold">{userDetails?.name}</h3>
                <p title={userDetails?.email} className="text-sm opacity-70">
                  <small>{userDetails?.email}</small>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4">
            <Link href="/dashboard/profile" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
                  pathname === "/dashboard/profile"
                    ? "bg-white/10 border-l-2 border-l-primary text-primary"
                    : "bg-transparent text-white"
                }`}
              >
                {" "}
                <FaUserCircle /> Profile
              </button>
            </Link>
            <Link href="/dashboard/settings" className="w-full">
              <button
                onClick={() => setIsOpen(false)}
                className={`w-full h-10 btn btn-sm text-base justify-start hover:bg-white/10 border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary rounded-none shadow-none ${
                  pathname === "/dashboard/settings"
                    ? "bg-white/10 border-l-2 border-l-primary text-primary"
                    : "bg-transparent text-white"
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
                className="w-full btn btn-sm h-9 justify-start text-base bg-transparent hover:bg-white/10 text-white rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary"
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
              className="w-full btn btn-sm h-9 justify-start text-base bg-transparent hover:bg-white/10 text-white rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary"
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
