"use client";
import React from "react";
import { useContext } from "react";
import { Avatar, Box } from "@mui/material";
import { AuthContext } from "@/provider/AuthProvider";

//material imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import DarkButton from "@/components/library/buttons/DarkButton";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const updateProfileInfo = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const updatedProfileInfo = { name };
    console.log(updatedProfileInfo);

    updateUserProfile(name, photo).then(() => {});
  };
  return (
    <form className="flex items-center justify-around gap-10 p-5">
      {/* photo url */}
      <div className="w-80 flex flex-col items-center justify-center">
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
        <div className="w-full flex flex-col mt-10">
          <label htmlFor="" className="font-medium text-center">
            Upload Photo
          </label>
          <input
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
            type="file"
            id=""
            placeholder="file"
          />
        </div>
      </div>

      {/* user info */}
      <div className="flex-1 flex flex-col gap-5 justify-center ">
        {/* left side part */}
        <div className="p-5">
          <h3 className="text-xl font-semibold border-b w-fit">
            Personal Information
          </h3>

          {/* first part */}
          <div className="flex items-center gap-10 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                First Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName.split(" ").shift()}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Last Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName.split(" ").slice(1)}
                id=""
                placeholder="amount"
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex items-center gap-10 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Full Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                User Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.email}
                id=""
                placeholder="amount"
              />
            </div>
          </div>
        </div>

        <hr className="border-darkThree" />

        {/* right side part */}
        <div className="p-5">
          <h3 className="text-xl font-semibold border-b w-fit">
            Contact Information
          </h3>

          {/* first part */}
          <div className="flex items-center gap-10 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Email
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName.split(" ").shift()}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Phone
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName.split(" ").slice(1)}
                id=""
                placeholder="amount"
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex items-center gap-10 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="font-medium">
                Currency
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs mt-2 px-4 py-2 rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.email}
                id=""
                placeholder="amount"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-5">
          <DarkButton className="px-10">Cancel</DarkButton>
          <DarkButton className="px-10">Save</DarkButton>
        </div>
      </div>
    </form>
  );
};

export default MyProfile;
