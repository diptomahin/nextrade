"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import { MdEditSquare } from "react-icons/md";
import DarkButton from "@/components/library/buttons/DarkButton";
import EditProfile from "./EditProfile";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useAuth();

  return (
    <div
      style={{ minHeight: "calc(100vh - 107px)" }}
      className="flex items-center justify-center py-5"
    >
      <div className="5xl:w-4/6 bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree flex flex-col gap-10 rounded-xl px-5 pb-8">
        <div className="w-full flex items-center justify-between border-b border-dashed border-darkThree p-5">
          <h2 className="text-xl font-semibold">My Profile</h2>
          <DarkButton
            onClick={() => setIsEdit(!isEdit)}
            className="px-5 rounded-md xl:rounded-md"
          >
            <MdEditSquare /> Edit
          </DarkButton>
        </div>

        {/* user info */}
        {isEdit ? (
          <EditProfile user={user} />
        ) : (
          <div className="flex flex-col items-center gap-5 ">
            {/* photo url */}
            <div className="flex items-center justify-center">
              {user?.photoURL !== undefined && user?.photoURL !== null ? (
                <Image
                  alt="profile-image"
                  width={150}
                  height={150}
                  src={user?.photoURL}
                  className="rounded-full"
                />
              ) : (
                <p className="text-5xl text-primary">
                  <FaUserCircle />
                </p>
              )}
            </div>

            <div className="w-full flex gap-5">
              {/* left side part */}
              <div className="flex-1 space-y-8 p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Full Name</p>
                  <p className="font-semibold">{user?.displayName}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">
                    Email Address
                  </p>
                  <p className="font-semibold">{user?.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Address</p>
                  <p className="font-semibold">Jatrabari, Dhaka</p>
                </div>
              </div>

              {/* right side part */}
              <div className="flex-1 space-y-8 p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">User Name</p>
                  <p className="font-semibold">{user?.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Phone Number</p>
                  <p className="font-semibold">+8801973875893</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Currency</p>
                  <p className="font-semibold">$USD</p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-5 px-5">
              <p className="text-xs">
                This account was created on January 10, 2024
              </p>
              <button className="btn btn-sm px-5 h-8 bg-red-600 hover:bg-red-600 border-none text-white text-xs">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
