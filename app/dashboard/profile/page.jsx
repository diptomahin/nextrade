"use client";
import React from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

const ProfilePage = () => {
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
    <div>
      <form onSubmit={updateProfileInfo}>
        <div className="flex gap-2">
          <input
            type="text"
            defaultValue={user.displayName}
            size="lg"
            name="name"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>

        <div className="flex gap-2">
          <input
            type="url"
            size="lg"
            name="photo"
            placeholder="Enter Photo URL"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        </div>
        <button className="">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
