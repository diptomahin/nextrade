"use client";
import useAllUsersData from "@/hooks/useAllUsersData";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Button from "../library/Button";
import Link from "next/link";

const AdminDashUserProfile = () => {
  const { allUser, refetch } = useAllUsersData();
  refetch();
  return (
    <div className="w-full bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
      <h2 className=" font-semibold text-xl ">User Profile</h2>
      {allUser?.slice(0, 7).map((userProfile) => (
        <div
          key={userProfile._id}
          className="flex items-center gap-5 my-[14px] bg-whiteBg dark:bg-darkOne rounded-xl p-2"
        >
          
          {userProfile?.photo ? (
            <Image
              src={userProfile?.photo}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
              alt="user photo"
            />
          ) : (
            <FaUserCircle className={`w-8 h-8 lg:w-12 lg :h-12 text-primary`} />
          )}
          <div className="w-full flex items-center justify-between text-sm lg:text-base text-black dark:text-white">
            <div className=" w-full">
              <h1 className="font-semibold text-xs ">
                {userProfile.name ? userProfile.name : "No name"}{" "}
              </h1>
              <h1 className="hidden xs:block text-gray-500 text-xs">
                {userProfile.email}
              </h1>
              <p className="flex justify-end">
              <span
              className={` ml-2  md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${
                userProfile.role === "admin"
                  ? "bg-[#6c52ff]"
                  : userProfile.role === "trader"
                  ? "bg-[#5dad3e]"
                  : "bg-[#40a0ff]"
              }`}
            >
              {userProfile.role}
            </span>
              </p>
            </div>
            
          
          </div>
          
        </div>
      ))}
      <Link href={"admin_dashboard/manage_users"}>
        <Button className="w-full rounded-xl">See All</Button>
      </Link>
    </div>
  );
};

export default AdminDashUserProfile;
