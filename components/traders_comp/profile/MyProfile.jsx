"use client";
import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  return (
    <div className="w-4/6 mx-auto bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree flex flex-col gap-10 rounded-xl p-5">
      <div className="w-full flex items-center justify-between">
        <h2>My Profile</h2>
        <button>Edit</button>
      </div>

      <div className="w-full border border-dashed border-darkThree"></div>

      {/* user info */}
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
              <p className="text-sm font-medium opacity-70">Email Address</p>
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
      </div>
      <div className="w-full flex items-center justify-between gap-5 px-5">
        <p className="text-sm">This account was created on January 10, 2024</p>
        <button className="btn btn-sm px-5 h-8 bg-red-600 hover:bg-red-600 border-none text-white text-xs">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
