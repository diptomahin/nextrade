"use client";
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./profile.css";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { CiLock, CiUser } from "react-icons/ci";
import { PiCurrencyDollarThin, PiCardholderThin } from "react-icons/pi";
import { MdArrowBackIosNew } from "react-icons/md";
import MyProfile from "@/components/traders_comp/profile/MyProfile";
import Security from "@/components/traders_comp/profile/Security";
import Currencies from "@/components/traders_comp/profile/Currencies/Currencies";
import Payments from "@/components/traders_comp/profile/Payments";
import useSecureFetch from "@/hooks/useSecureFetch";

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const { user, loading } = useAuth();

  const {
    data: userDetails = {},
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`user/${user?.email}`, "userDetail");

  refetch();
  if (isLoading || isPending || loading) {
    return;
  }
  return (
    <Tabs className="relative bg-darkBG">
      {/* toggle menu button one */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`fixed top-[92px] ${
          isActiveProfile
            ? "-left-1 sm:left-0 2xl:left-[57px]  3xl:left-[274px]"
            : "left-[230px] sm:left-[250px]  3xl:left-[466px]"
        } btn btn-sm h-9 px-[10px] bg-transparent hover:bg-white/5 active:bg-white/20 border-none shadow-none text-white rounded-full z-20 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-base transition-transform duration-500 ease-in-out ${
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        style={{ height: "calc(100vh - 104px)" }}
        className={`fixed w-[250px]  sm:w-[270px]  3xl:left-[240px] bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree px-4 py-14 transition-all  ${
          isActiveProfile
            ? "-translate-x-[255px] sm:-translate-x-[250px] 2xl:translate-x-0   2xl:w-[78px]"
            : "translate-x-0"
        } duration-300 ease-in-out rounded z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {userDetails?.photo !== undefined && userDetails?.photo !== null ? (
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
                src={userDetails?.photo}
                className="w-full h-full rounded-full object-top object-cover"
                priority
              />
            </div>
          ) : (
            <p className="text-8xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={` ${isActiveProfile ? "2xl:hidden" : ""}`}>
            <p className="font-semibold"> {userDetails?.name}</p>
            <p className="text-xs font-medium mt-1">{userDetails?.email}</p>
          </div>
        </div>
        <hr className="h-0 border border-darkThree my-5" />
        <TabList className="tab-list h-full w-full flex flex-col gap-3">
          <Tab className="react-tab custom-btn">
            {" "}
            <CiUser className="text-xl" />
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="text-xl" />{" "}
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              Security
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            {" "}
            <PiCurrencyDollarThin className="text-xl" />
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              Currency Preferences
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            <span className={isActiveProfile ? "2xl:hidden" : ""}>
              Payment Option
            </span>
          </Tab>
        </TabList>
      </div>

      {/* content */}
      <div
        className={`sm:pl-6  transition-all duration-300 ease-in-out ${
          isActiveProfile ? "2xl:pl-[98px]" : "2xl:pl-[290px]"
        }`}
      >
        <TabPanel>
          <MyProfile userDataRefetch={refetch}></MyProfile>
        </TabPanel>
        <TabPanel>
          <Security />
        </TabPanel>
        <TabPanel>
          <Currencies />
        </TabPanel>
        <TabPanel>
          <Payments />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ProfilePage;
