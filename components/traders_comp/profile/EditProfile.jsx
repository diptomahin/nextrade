import DarkButton from "@/components/library/buttons/DarkButton";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { PiCurrencyDollar, PiUpload } from "react-icons/pi";

const EditProfile = ({ user }) => {
  return (
    <form className="flex items-center justify-around gap-10 px-5">
      {/* photo url */}
      <div className="flex-[2] flex flex-col items-center justify-center">
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
        <div className="w-full flex flex-col mt-10 relative">
          <label
            htmlFor=""
            className="w-full absolute top-0 flex flex-col items-center justify-center font-medium"
          >
            <PiUpload className="text-5xl" />{" "}
            <span className="border-b-2 border-dashed border-secondary">
              Upload Photo
            </span>
          </label>
          <input
            className="w-1/2 mx-auto h-20 opacity-0 z-10"
            type="file"
            id=""
            placeholder="file"
          />
        </div>
      </div>

      {/* user info */}
      <div className="flex-[5] flex flex-col gap-10">
        <h3 className="text-lg font-semibold border-b border-dashed border-secondary w-fit">
          Update Information :
        </h3>
        <div className="">
          {/* first part */}
          <div className="flex items-center gap-5 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <AiOutlineUser className="text-lg" />
                Full Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <TbUserStar className="text-lg" />
                User Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.email}
                id=""
                placeholder="amount"
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex items-center gap-5 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <MdOutlineEmail className="text-lg" />
                Email
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.email}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <IoMdPhonePortrait className="text-lg" />
                Phone
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={"+8801973875893"}
                id=""
                placeholder="amount"
              />
            </div>
          </div>

          {/* third part */}
          <div className="flex items-center gap-5 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <FaRegAddressBook className="text-base" />
                Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={"Jatrabari, Dhaka"}
                id=""
                placeholder="amount"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <PiCurrencyDollar className="text-lg" /> Currency
              </label>
              <select
                name=""
                id=""
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                defaultValue="usd"
              >
                <option value="" disabled>
                  Select Currency
                </option>
                <option value="usd">USD</option>
                <option value="bdt">BDT</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="inr">INR</option>
                <option value="idr">IDR</option>
                <option value="aed">AED</option>
              </select>
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

export default EditProfile;
