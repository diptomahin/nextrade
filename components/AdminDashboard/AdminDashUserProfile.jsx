"use client";
import useAllUsersData from "@/hooks/useAllUsersData";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Button from "../library/Button";
import Link from "next/link";

const AdminDashUserProfile = () => {
  const { allUser, refetch } = useAllUsersData();
  refetch()
  return (
    <div className=" text-black dark:text-white shadow bg-white dark:bg-tertiary p-4  w-full rounded ">
      <h2 className=" font-semibold ">User Profile</h2>
      {allUser?.slice(0, 5).map((userProfile) => (
        <div
          key={userProfile._id}
          className="flex items-center gap-2 my-2 md:gap-3  bg-gray-200 dark:bg-darkOne rounded p-2"
        >
          {userProfile?.photo ? (
            <Image
              src={userProfile?.photo}
              width={30}
              height={30}
              className="rounded-full object-cover"
              alt="user photo"
            />
          ) : (
            <FaUserCircle className={`w-8 h-8 lg:w-12 lg :h-12 text-primary`} />
          )}
          <div className="text-sm lg:text-base text-black dark:text-white w-full">
            <div className="flex justify-between  items-center w-full ">
              <h1 className="font-semibold text-sm ">
                {userProfile.name ? userProfile.name : "No name"}{" "}
              </h1>
              <span
                className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${
                  userProfile.role === "admin"
                    ? "bg-[#6c52ff]"
                    : userProfile.role === "trader"
                    ? "bg-[#5dad3e]"
                    : "bg-[#40a0ff]"
                }`}
              >
                {userProfile.role}
              </span>
            </div>
            <h1 className="hidden xs:block text-gray-500 text-xs">
              {userProfile.email}
            </h1>
          </div>
        </div>
      ))}
      <Link href={"admin_dashboard/manage_users"}>
        <Button className={"w-full"}>See All</Button>
      </Link>
    </div>
  );
};

export default AdminDashUserProfile;
