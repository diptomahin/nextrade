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
<<<<<<< HEAD

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const { user } = useAuth();
  return (
    <Tabs className="h-full relative bg-darkBG">
      {/* toggle menu button */}
      <button
        onClick={() => setIsActiveProfile(!isActiveProfile)}
        className={`fixed top-[78px] ${
          isActiveProfile
            ? "left-2 xl:left-[70px] 2xl:left-[285px]"
            : "left-2 xl:left-[230px] 2xl:left-[447px]"
        } btn btn-sm h-9 px-[10px] bg-white/5 hover:bg-white/10 active:bg-white/20 border-none shadow-none text-white rounded-full z-20 transition-all duration-300 ease-in-out`}
      >
        <MdArrowBackIosNew
          className={`text-base transition-transform duration-300 ease-in-out ${
=======
import useSecureFetch from "@/hooks/useSecureFetch";

const ProfilePage = () => {
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const [isToggleProfile, setIsToggleProfile] = useState(false);
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
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
            isActiveProfile ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
<<<<<<< HEAD

      {/* large device profile menu */}
      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`hidden xl:block fixed 2xl:left-[238px] ${
          isActiveProfile ? "w-[78px]" : "w-[240px]"
        } bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-3 py-12 transition-all duration-300 ease-in-out z-10`}
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
=======

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
        style={{ height: "calc(100vh - 95px)" }}
        className={`hidden xl:block fixed 2xl:left-[238px] ${
          isActiveProfile ? "w-[78px]" : "w-[270px]"
        } bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-3 py-14 transition-all duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {userDetails?.photo !== undefined && userDetails?.photo !== null ? (
            <div
              className={`overflow-hidden rounded-full transition-all duration-300 ease-linear ${
                isActiveProfile ? "w-[50px] h-[50px]" : "w-[100px] h-[100px] "
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
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
          ) : (
            <p className="text-8xl text-primary">
              <FaUserCircle />
            </p>
          )}
          <div className={` ${isActiveProfile ? "hidden" : "block"}`}>
<<<<<<< HEAD
            <p className="font-semibold"> {user?.displayName}</p>
            <p className="text-xs font-medium mt-1">{user?.email}</p>
=======
            <p className="font-semibold"> {userDetails?.name}</p>
            <p className="text-xs font-medium mt-1">{userDetails?.email}</p>
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
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
<<<<<<< HEAD
              Currencies
=======
              Currency Preferences
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
            </span>
          </Tab>
          <Tab className="react-tab custom-btn">
            <PiCardholderThin className="text-xl" />
            <span className={isActiveProfile ? "hidden" : "block"}>
<<<<<<< HEAD
              Payments
=======
              Payment Option
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
            </span>
          </Tab>
        </TabList>
      </div>

      {/* small device profile menu */}
<<<<<<< HEAD
      <div
        className={`xl:hidden profile-menu fixed 2xl:left-[238px]  bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl flex ${
          isActiveProfile && "flex-col md:flex-row"
        } items-center gap-5 pl-5 px-3 py-3 transition-all duration-300 ease-in-out z-10`}
      >
        <div
          className={`flex ${
            isActiveProfile ? "flex-col" : "flex-row"
          } gap-3 xl:gap-5 items-center`}
        >
          {isActiveProfile ? (
            user?.photoURL !== undefined && user?.photoURL !== null ? (
=======

      <div
        style={{ height: "calc(100vh - 107px)" }}
        className={`xl:hidden fixed w-[270px] bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl px-6 py-14 transition-all ${
          isToggleProfile ? "translate-x-0" : "-translate-x-[275px]"
        } duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col items-center gap-4">
          {userDetails?.photo !== undefined && userDetails?.photo !== null ? (
            <div
              className={`overflow-hidden rounded-full transition-all duration-300 ease-linear ${
                isActiveProfile ? "w-[50px] h-[50px]" : "w-[100px] h-[100px] "
              }`}
            >
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              <Image
                alt="profile-image"
                width={100}
                height={100}
<<<<<<< HEAD
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
=======
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
          <div>
            <p className="font-semibold"> {userDetails?.name}</p>
            <p className="text-xs font-medium mt-1">{userDetails?.email}</p>
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
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
          </Tab>
        </TabList>
      </div>

<<<<<<< HEAD
      <div
        className={` transition-all duration-300 ease-in-out ${
          isActiveProfile ? "xl:pl-[98px]" : "xl:pl-[260px]"
        }`}
      >
        <TabPanel>
          <MyProfile></MyProfile>
=======
      {/* content */}
      <div
        className={` transition-all duration-300 ease-in-out ${
          isActiveProfile ? "xl:pl-[98px]" : "pl-3 xl:pl-[290px]"
        }`}
      >
        <TabPanel>
          <MyProfile userDataRefetch={refetch}></MyProfile>
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
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
