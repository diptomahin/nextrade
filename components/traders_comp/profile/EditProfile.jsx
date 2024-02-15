import DarkButton from "@/components/library/buttons/DarkButton";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { PiCurrencyDollar, PiUpload } from "react-icons/pi";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const image_hosting_key = `4696195291e937983db500161bc852ce`;

const EditProfile = ({ user }) => {
  const [hostedImage, setHostedImage] = useState(user?.photoURL);
  const [hostedImageInfo, setHostedImageInfo] = useState(null);

  // update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (!file) {
      toast.error("Please select a file");
      return;
    }

    // const toastId = toast.loading('Uploading image...');

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setHostedImage(response.data.data.url);
      }
      const imageUrl = response.data.data.url;

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setHostedImage(response.data.data.url);
        setHostedImageInfo(response);
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-around gap-10 px-5"
    >
      {/* photo url */}
      <div className="flex-[2] flex flex-col items-center justify-center">
        {user?.photoURL !== undefined && user?.photoURL !== null ? (
          <div className="w-40 h-40 overflow-hidden rounded-full">
            <Image
              alt="profile-image"
              width={160}
              height={160}
              src={hostedImage}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
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
            name="photo"
            onChange={handleFileChange}
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
                name="fullName"
                defaultValue={user?.displayName}
                id=""
                placeholder="Full Name"
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
                name="userName"
                defaultValue={user?.email}
                id=""
                placeholder="User Name"
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex items-center gap-5 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <MdOutlineEmail className="text-lg" />
                Email Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="email"
                defaultValue={user?.email}
                id=""
                placeholder="Email Address"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <IoMdPhonePortrait className="text-lg" />
                Phone Number
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="phone"
                defaultValue={"+8801973875893"}
                id=""
                placeholder="Phone Number"
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
                name="address"
                defaultValue={"Jatrabari, Dhaka"}
                id=""
                placeholder="Address"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <PiCurrencyDollar className="text-lg" /> Currency
              </label>
              <select
                name="currency"
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
          <DarkButton type="submit" className="px-10">
            Save
          </DarkButton>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
