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

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const { user } = useAuth();
  return (
    <Tabs className="h-full relative bg-darkBG">
      {/* toggle menu button */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`fixed top-[70px] md:top-[87px] xl:top-[86px] ${
          isActiveProfile
            ? "left-2 md:left-5 xl:left-[55px] 2xl:left-[270px]"
            : "left-2 md:left-5 xl:left-[216px] 2xl:left-[432px]"
        } btn btn-sm h-11 bg-transparent hover:bg-transparent active:bg-white/10 border-none shadow-none text-white rounded-full z-10 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-xl transition-transform duration-300 ease-in-out ${
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* large device profile menu */}
      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`hidden xl:block fixed 2xl:left-[238px] ${
          isActiveProfile ? "w-[78px]" : "w-[240px]"
        } bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-3 py-12 transition-all duration-300 ease-in-out`}
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
              Currencies
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
              Payments
            </span>
          </Tab>
        </TabList>
      </div>

      {/* small device profile menu */}
      <div
        className={`xl:hidden profile-menu fixed 2xl:left-[238px]  bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl flex ${
          isActiveProfile && "flex-col md:flex-row"
        } items-center gap-5 md:pl-12 px-3 py-3 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`flex ${
            isActiveProfile ? "flex-col" : "flex-row"
          } gap-3 xl:gap-5 items-center`}
        >
          {isActiveProfile ? (
            user?.photoURL !== undefined && user?.photoURL !== null ? (
              <Image
                alt="profile-image"
                width={100}
                height={100}
                src={user?.photoURL}
                className="rounded-full"
              />
            ) : (
              <p className="text-5xl text-primary">
                <FaUserCircle />
              </p>
            )
          ) : user?.photoURL &&
            user?.photoURL !== undefined &&
            user?.photoURL !== null ? (
            <Image
              alt="profile-image"
              width={50}
              height={50}
              src={user?.photoURL}
              className="rounded-full"
            />
          ) : (
            <p className="text-5xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={isActiveProfile ? "block" : "hidden"}>
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
          </div>
        </div>
        <TabList
          className={`tab-list h-full w-full flex ${
            isActiveProfile ? "flex-col" : "flex-row"
          } flex-wrap xs:gap-3`}
        >
          <Tab className="react-tab custom-btn">
            {" "}
            <CiUser className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              {" "}
              My Profile
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <CiLock className="xs:text-xl" />{" "}
            <span className={isActiveProfile ? "block" : "hidden"}>
              Security
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            {" "}
            <PiCurrencyDollarThin className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              Currencies
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="xs:text-xl" />
            <span className={isActiveProfile ? "block" : "hidden"}>
              Payment Option
            </span>
          </Tab>
        </TabList>
      </div>

      <div
        className={` transition-all duration-300 ease-in-out ${
          isActiveProfile ? "xl:pl-[98px]" : "xl:pl-[260px]"
        }`}
      >
        
        <TabPanel>
          <MyProfile></MyProfile>
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
        <TabPanel>4</TabPanel>
      </div>
    </Tabs>
  );
};

export default ProfilePage;
