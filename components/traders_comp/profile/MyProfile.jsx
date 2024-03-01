import React, { useState } from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import DarkButton from "@/components/library/buttons/DarkButton";
import EditProfile from "./EditProfile";

const MyProfile = ({ refetchUserData, userData }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      style={{ minHeight: "calc(100vh - 104px)" }}
      className="flex justify-center"
    >
      <div className="w-full bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree flex flex-col gap-10 rounded px-5 pb-8">
        <div className="w-full flex items-center justify-between border-b border-dashed border-darkThree px-0 py-3 md:p-5">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold">
            My Profile
          </h2>
          <DarkButton
            onClick={() => setIsEdit(!isEdit)}
            className="px-5 rounded 2xl:rounded"
          >
            <MdEditSquare /> Edit
          </DarkButton>
        </div>

        {/* user info */}
        {isEdit ? (
          <EditProfile
            userData={userData}
            setIsEdit={setIsEdit}
            refetchUserData={refetchUserData}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-between gap-5">
            {/* photo url */}
            <div className="flex items-center justify-center">
              {userData?.photo !== undefined && userData?.photo !== null ? (
                <div className="w-40 h-40 overflow-hidden rounded-full">
                  <Image
                    alt="profile-image"
                    width={160}
                    height={160}
                    src={userData?.photo}
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

            <div className="w-full flex flex-col md:flex-row gap-5">
              {/* left side part */}
              <div className="flex-1 space-y-8 lg:p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Full Name</p>
                  <p className="font-semibold">{userData?.name}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">
                    Email Address
                  </p>
                  <p className="font-semibold">{userData?.email}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Address</p>
                  <p className="font-semibold">{userData?.address || "N/A"}</p>
                </div>
              </div>

              {/* right side part */}
              <div className="flex-1 space-y-8 lg:p-5">
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">User Name</p>
                  <p className="font-semibold">{userData?.username || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Phone Number</p>
                  <p className="font-semibold">{userData?.phone || "N/A"}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium opacity-70">Currency</p>
                  <p className="font-semibold">{userData?.currency || "N/A"}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row  items-center justify-between gap-5 lg:px-5">
              <div className="">
                {userData?.lastUpdate !== undefined &&
                  userData?.lastUpdate !== null && (
                    <p className="text-xs text-primary/80 mt-1">
                      Last updated:{" "}
                      <span className="font-medium">
                        {userData?.lastUpdate?.day}/
                        {userData?.lastUpdate?.month}/
                        {userData?.lastUpdate?.year}
                      </span>
                    </p>
                  )}
                <p className="text-xs">
                  This account was created on{" "}
                  <span className="font-medium">
                    {userData?.createdAt?.day}/{userData?.createdAt?.month}/
                    {userData?.createdAt?.year}
                  </span>
                </p>
              </div>
              <button className="btn btn-sm px-5 h-8 bg-red-600 hover:bg-red-600 border-none text-white text-xs rounded">
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
