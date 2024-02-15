"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import { AiOutlineUser } from "react-icons/ai";
const Security = () => {
  return (
    <div className="bg-gradient-to-br from-darkOne to-darkTwo border border-darkThree rounded-xl w-full h-full p-5">
      <h2 className="text-xl font-semibold pb-5">Security</h2>
      {/* authentication */}
      <div>Authentication . . .</div>
      <hr className="h-0 border border-darkThree my-5" />
      {/* password  */}
      <h3 className="font-semibold">Password</h3>
      <p className="text-sm font-medium opacity-70 mb-7">
        Set a unique password to protect your personal account
      </p>

      {/* old password */}
      <div className="w-full flex flex-col">
        <label htmlFor="" className="flex items-center gap-1 font-medium">
          Old Password
        </label>
        <input
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded-xl outline-none"
          type="password"
          name="fullName"
          placeholder="* * * * * * * * * * * * * * * "
        />
      </div>
      <div className=" md:flex items-center gap-5 mt-5 mb-7 ">
      {/* New password */}
      <div className="w-full flex flex-col md:mb-0 mb-3 ">
        <label htmlFor="" className="flex items-center gap-1 font-medium">
          New Password
        </label>
        <input
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded-xl outline-none"
          type="password"
          name="fullName"
          placeholder="* * * * * * * * * * * * * * * "
        />
      </div>
      {/* Re-enter password */}
      <div className="w-full flex flex-col">
        <label htmlFor="" className="flex items-center gap-1 font-medium">
        Re-enter Password 
        </label>
        <input
          className="bg-transparent w-full border border-darkThree focus:border-darkGray text-lg mt-2 px-4 py-[10px] rounded-xl outline-none"
          type="password"
          name="fullName"
          placeholder="* * * * * * * * * * * * * * * "
        />
      </div>

      </div>
      {/* save btn  */}
      <div className=" md:flex justify-between gap-10">
      <p className="text-sm font-medium opacity-70 mb-7">
        To ensure your account is well protect, please use 8 or more charecters with a mix of letters, numbers & symbois. 
      </p>
      <DarkButton>Save Password</DarkButton>
      </div>
    </div>
  );
};

export default Security;
