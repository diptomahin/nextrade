"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import useAuth from "@/hooks/useAuth";
import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import useSecureAPI from "@/hooks/useSecureAPI";
import getDate from "../../utils/date";

const Security = () => {
  // Get user information using the useAuth hook
  const { user, updateUserPassword } = useAuth();
  const secureAPI = useSecureAPI();
  const { notificationRefetch } = useNotificationData();

  // State variables to manage input values and messages
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle password change
  const changePassword = async () => {
    try {
      // Validate inputs
      if (!newPassword || !confirmPassword) {
        setError("Please fill in all fields");
        return;
      }

      if (newPassword !== confirmPassword) {
        setError("New password and confirm password must match");
        return;
      }

      updateUserPassword(user, newPassword)
        .then(() => {
          console.log("Update successful.");

          // post notification data sen database
          const notificationInfo = {
            title: "Password Change ",
            description: "Your account password has been changed",
            assetKey: "",
            assetImg: "",
            assetBuyerUID: "",
            assetBuyerEmail: user.email,
            postedDate: getDate,
          };

          // post to  notification data in database
          secureAPI
            .post("/notifications", notificationInfo)
            .then((res) => {
              console.log("Successfully coin added:", res);
              notificationRefetch();
            })
            .catch((error) => {
              console.error("Error sending notification:", error);
            });
        })
        .catch((error) => {
          console.log("error");
        });

      // Reset input fields and show success message
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError(null);
      setSuccessMessage("Password updated successfully");
    } catch (error) {
      setError(`Error updating password: ${error.message}`);
    }
  };

  return (
    <div className="bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded w-full h-full p-5">
      <h2 className="text-xl font-semibold pb-5">Security</h2>

      {/* authentication */}
      <div>Authentication . . .</div>
      <hr className="h-0 border border-darkThree my-5" />

      {/* password */}
      <h3 className="font-semibold">Password</h3>
      <p className="text-sm font-medium opacity-70 mb-7">
        Set a unique password to protect your personal account
      </p>

      {/* old password */}
      <div className="w-full flex flex-col">
        <label
          htmlFor="oldPassword"
          className="flex items-center gap-1 font-medium"
        >
          Old Password
        </label>
        <input
          id="oldPassword"
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded outline-none"
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          placeholder="* * * * * * * * * * * * * * * "
        />
      </div>

      <div className=" md:flex items-center gap-5 mt-5 mb-7 ">
        {/* New password */}
        <div className="w-full flex flex-col md:mb-0 mb-3">
          <label
            htmlFor="newPassword"
            className="flex items-center gap-1 font-medium"
          >
            New Password
          </label>
          <input
            id="newPassword"
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded outline-none"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="* * * * * * * * * * * * * * * "
          />
        </div>

        {/* Re-enter password */}
        <div className="w-full flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="flex items-center gap-1 font-medium"
          >
            Re-enter Password
          </label>
          <input
            id="confirmPassword"
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded outline-none"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="* * * * * * * * * * * * * * * "
          />
        </div>
      </div>

      {/* save btn */}
      <div className="md:flex justify-between gap-10">
        <p className="text-sm font-medium opacity-70 mb-7">
          To ensure your account is well protected, please use 8 or more
          characters with a mix of letters, numbers & symbols.
        </p>
        <DarkButton onClick={changePassword}>Save Password</DarkButton>
      </div>

      {/* Display error or success message */}
      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </div>
  );
};

// Export the Security component
export default Security;
