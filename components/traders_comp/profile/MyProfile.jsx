"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "@/hooks/useAuth";
import { MdEditSquare } from "react-icons/md";
import DarkButton from "@/components/library/buttons/DarkButton";
import EditProfile from "./EditProfile";
import useSecureFetch from "@/hooks/useSecureFetch";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { user, loading } = useAuth();

  const {
    data: userDetails = [],
    refetch,
    isPending,
    isLoading,
  } = useSecureFetch(`user/${user?.email}`, "userDetails");

  if (isLoading || isPending || loading) {
    return;
  }

  return (
    <div
      style={{ minHeight: "calc(100vh - 107px)" }}
      className="flex items-center justify-center"
    >
      <div className="w-full 5xl:w-10/12 bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree flex flex-col gap-10 rounded-xl px-5 pb-8">
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
          <EditProfile
            userDetails={userDetails}
            refetch={refetch}
            setIsEdit={setIsEdit}
            user={user}
          />
        ) : (
          <div className="flex flex-col items-center gap-5">
            {/* photo url */}
            <div className="flex items-center justify-center">
              {userDetails?.photo !== undefined &&
              userDetails?.photo !== null ? (
                <div className="w-40 h-40 overflow-hidden rounded-full">
                  <Image
                    alt="profile-image"
                    width={160}
                    height={160}
                    src={userDetails?.photo}
                    className="w-full h-full rounded-full object-top object-cover"
                    priority
                  />
                </div>
              ) : (
                <p className="text-9xl text-primary">
                  <FaUserCircle />
                </p>
              )}
            </div>

            <div className="w-full flex gap-5">
              {/* left side part */}
              <div className="flex-1 space-y-8 p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Full Name</p>
                  <p className="font-semibold">{userDetails?.name}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">
                    Email Address
                  </p>
                  <p className="font-semibold">{userDetails?.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Address</p>
                  <p className="font-semibold">
                    {userDetails?.address || "N/A"}
                  </p>
                </div>
              </div>

              {/* right side part */}
              <div className="flex-1 space-y-8 p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">User Name</p>
                  <p className="font-semibold">
                    {userDetails?.username || "N/A"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Phone Number</p>
                  <p className="font-semibold">{userDetails?.phone || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Currency</p>
                  <p className="font-semibold">
                    {userDetails?.currency || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between gap-5 px-5">
              <div className="">
                <p className="text-xs">
                  This account was created on {userDetails?.createdAt}
                </p>
                <p className="text-xs text-secondary">
                  Last updated: {userDetails?.lastUpdate?.day}/
                  {userDetails?.lastUpdate?.month}/
                  {userDetails?.lastUpdate?.year}
                </p>
              </div>
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
