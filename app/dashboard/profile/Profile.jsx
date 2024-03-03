"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./profile.css";
import { FaUserCircle } from "react-icons/fa";
import { CiLock, CiUser } from "react-icons/ci";
// import { PiCurrencyDollarThin, PiCardholderThin } from "react-icons/pi";
import { MdArrowBackIosNew } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import useUserData from "@/hooks/useUserData";
import MyProfile from "@/components/traders_comp/profile/MyProfile";
import Security from "@/components/traders_comp/profile/Security";

const Profile = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);

  const {
    userData,
    refetchUserData,
    userDataLoading,
    userDataPending,
    userDataError,
  } = useUserData();

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }
  return (
    <Tabs className="relative dark:bg-secondary">
      {/* toggle menu button one */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`fixed top-[100px] ${
          isActiveProfile
            ? "-left-1 sm:left-0 2xl:left-[64px]  3xl:left-[282px]"
            : "left-[230px] sm:left-[258px]  3xl:left-[474px]"
        } btn btn-sm h-9 px-[10px] bg-transparent hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/20 dark:active:bg-white/20 border-none shadow-none dark:text-white rounded-full z-20 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-base transition-transform duration-500 ease-in-out ${
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        style={{ height: "calc(100vh - 104px)" }}
        className={`fixed w-[250px]  sm:w-[270px]  3xl:left-[248px] bg-white dark:bg-tertiary px-4 py-14 transition-all  ${
          isActiveProfile
            ? "-translate-x-[255px] sm:-translate-x-[250px] 2xl:translate-x-0   2xl:w-[78px]"
            : "translate-x-0"
        } duration-300 ease-in-out rounded-xl shadow z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {userData?.photo ? (
            <div
              className={`overflow-hidden rounded-full transition-all duration-300 ease-linear ${
                isActiveProfile
                  ? "w-[100px] h-[100px] 2xl:w-[50px] 2xl:h-[50px]"
                  : "w-[100px] h-[100px]"
              }`}
            >
              <Image
                alt="profile-image"
                width={100}
                height={100}
                src={userData?.photo}
                className="w-full h-full rounded-full object-top object-cover"
                priority
              />
            </div>
          ) : (
            <p className="text-5xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={` ${isActiveProfile ? "2xl:hidden" : ""}`}>
            <p className="font-semibold"> {userData?.name}</p>
            <p className="text-xs font-medium mt-1">{userData?.email}</p>
          </div>
        </div>
        <hr className="h-0 border dark:border-darkThree my-5" />
        <TabList className="tab-list h-full w-full flex flex-col gap-4">
          <Tab className="react-tab btn btn-sm h-10">
            {" "}
            <CiUser className="text-xl" />
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab btn btn-sm h-10">
            <CiLock className="text-xl" />{" "}
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              Security
            </span>
          </Tab>
        </TabList>
      </div>

      {/* content */}
      <div
        className={`sm:pl-8  transition-all duration-300 ease-in-out ${
          isActiveProfile ? "2xl:pl-[106px]" : "2xl:pl-[298px]"
        }`}
      >
        <TabPanel>
          <MyProfile
            userData={userData}
            refetchUserData={refetchUserData}
          ></MyProfile>
        </TabPanel>
        <TabPanel>
          <Security />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Profile;
