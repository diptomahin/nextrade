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
import Currencies from "@/components/traders_comp/profile/Currencies";
import Payments from "@/components/traders_comp/profile/Payments";

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const [isToggleProfile, setIsToggleProfile] = useState(false);
  const { user } = useAuth();
  return (
    <Tabs className="h-full relative bg-darkBG">
      {/* toggle menu button one */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`hidden xl:block fixed top-[92px] ${
          isActiveProfile
            ? "left-[57px] 2xl:left-[274px]"
            : "left-[249px] 2xl:left-[466px]"
        } btn btn-sm h-9 px-[10px] bg-transparent hover:bg-white/5 active:bg-white/20 border-none shadow-none text-white rounded-full z-20 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-base transition-transform duration-500 ease-in-out ${
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* toggle profile button two */}
      <button
        onClick={() => setIsToggleProfile(!isToggleProfile)}
        className={`xl:hidden fixed top-[92px] ${
          isToggleProfile ? "left-[249px]" : "-left-1"
        } btn btn-sm h-9 px-[10px] bg-transparent active:bg-white/15 border-none shadow-none text-white rounded-full z-20 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-lg transition-transform duration-500 ease-in-out ${
            isToggleProfile ? "rotate-0" : "rotate-180 "
          }`}
        />
      </button>

      {/* large device profile menu */}
      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`hidden xl:block fixed 2xl:left-[238px] ${
          isActiveProfile ? "w-[78px]" : "w-[270px]"
        } bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-3 py-14 transition-all duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {user?.photoURL &&
          user?.photoURL !== undefined &&
          user?.photoURL !== null ? (
            <Image
              alt="profile-image"
              width={100}
              height={100}
              src={user?.photoURL}
              className="rounded-full"
            />
          ) : (
            <p className="text-8xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={` ${isActiveProfile ? "hidden" : "block"}`}>
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
          </div>
        </div>
        <hr className="h-0 border border-darkThree my-5" />
        <TabList className="tab-list h-full w-full flex flex-col gap-3">
          <Tab className="react-tab custom-btn">
            {" "}
            <CiUser className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="text-xl" />{" "}
            <span className={isActiveProfile ? "hidden" : "block"}>
              Security
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            {" "}
            <PiCurrencyDollarThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              Currency Preferences
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              Payment Option
            </span>
          </Tab>
        </TabList>
      </div>

      {/* small device profile menu */}

      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`xl:hidden fixed w-[270px] bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-6 py-14 transition-all ${
          isToggleProfile ? "translate-x-0" : "-translate-x-[275px]"
        } duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {user?.photoURL &&
          user?.photoURL !== undefined &&
          user?.photoURL !== null ? (
            <Image
              alt="profile-image"
              width={100}
              height={100}
              src={user?.photoURL}
              className="rounded-full"
            />
          ) : (
            <p className="text-8xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div>
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
          </div>
        </div>
        <hr className="h-0 border border-darkThree my-5" />
        <TabList className="tab-list h-full w-full flex flex-col gap-3">
          <Tab className="react-tab custom-btn">
            <CiUser className="text-xl" />
            My Profile
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="text-xl" /> Security
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCurrencyDollarThin className="text-xl" />
            Currency Preferences
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            Payment Option
          </Tab>
        </TabList>
      </div>

      {/* content */}
      <div
        className={` transition-all duration-300 ease-in-out ${
          isActiveProfile ? "xl:pl-[98px]" : "pl-3 xl:pl-[290px]"
        }`}
      >
        <TabPanel>
          <MyProfile></MyProfile>
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
