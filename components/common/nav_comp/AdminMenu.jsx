import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoLogOut } from "react-icons/io5";

const AdminMenu = ({ userDetails, loading, isLoading, isPending, logOut }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  if (isLoading || isPending || loading) {
    return;
  }
  return (
    <div className="relative flex items-center justify-end gap-3">
      <div className="hidden lg:flex flex-col items-end">
        <h4 className="text-sm font-semibold">{userDetails?.name}</h4>
        <h4 className="text-xs opacity-70">{userDetails?.email}</h4>
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {userDetails?.photo ? (
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
        <div className="min-w-44 absolute top-14 right-0 bg-white dark:bg-tertiary rounded-xl overflow-hidden shadow-2xl shadow-black">
          <div className="bg-gradient-to-br from-primary to-[#352786] text-black dark:text-white px-2 py-3">
            <div className="flex flex-col items-center gap-3 overflow-hidden">
              {userDetails?.photo ? (
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
                <p className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                  <FaUser className="w-10 h-10 m-[6px] text-sky-500 rounded-full" />
                </p>
              )}

              <div className="text-center text-white">
                <h3 className="text-sm font-semibold ">{userDetails?.name} </h3>
                <p title={userDetails?.email} className="text-sm opacity-70">
                  <small>{userDetails?.email}</small>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 py-4 ">
            <Link href="/">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full btn btn-sm h-8 px-5 justify-between bg-transparent hover:bg-transparent dark:text-white hover:text-primary dark:hover:text-primary rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary shadow-none"
              >
                Home <GoHomeFill className="text-lg" />
              </button>
            </Link>
            <button
              onClick={() => {
                logOut();
                setIsOpen(false);
              }}
              className="w-full btn btn-sm h-8 px-5 justify-between bg-transparent hover:bg-transparent dark:text-white hover:text-primary dark:hover:text-primary rounded-none border-2 border-transparent hover:border-transparent hover:border-l-2 hover:border-l-primary shadow-none"
            >
              Logout <IoLogOut className="text-lg" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMenu;
