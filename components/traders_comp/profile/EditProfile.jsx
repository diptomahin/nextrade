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
import { useRouter } from "next/navigation";
import getDate from "@/components/utils/date";
import { MdEdit } from "react-icons/md";

const image_hosting_key = `4696195291e937983db500161bc852ce`;

const EditProfile = ({ userData, setIsEdit, refetchUserData }) => {
  const [hostedImage, setHostedImage] = useState(userData.photo);
  const [hostedImageInfo, setHostedImageInfo] = useState(null);
  const [imageHosting, setImageHosting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("");

  const router = useRouter();

  const date = getDate();

  // update user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const toastId = toast.loading("Updating...", { duration: 10000 });

    if (imageHosting) {
      return;
    }

    const userDetails = {
      name: form?.fullName.value,
      username: form?.userName.value,
      phone: form?.phone.value,
      address: form?.address.value,
      currency: form?.currency.value,
      photo:
        hostedImageInfo !== null ? hostedImageInfo?.data.data.url : hostedImage,
      lastUpdate: date,
    };

    const res = await axios.put(
      `https://nex-trade-server.vercel.app/v1/api/update-user/${userData?.email}`,
      userDetails
    );
    if (res.data.modifiedCount > 0) {
      refetchUserData();
      setIsEdit(false);
      router.push("/dashboard/profile");
      toast.success("User Information Updated", {
        id: toastId,
        duration: 5000,
      });
    }
  };

  // image hosting function
  const handleFileChange = async (e) => {
    setImageHosting(true);
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
        setImageHosting(false);
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
      className="flex flex-col 2xl:flex-row 2xl:items-center gap-10 md:px-5"
    >
      {/* photo url */}
      <div className="flex-[2] flex flex-col items-center justify-center">
        <div className="relative w-40 h-40">
          {hostedImage ? (
            <div className="w-full h-full overflow-hidden rounded-full">
              <Image
                alt="profile-image"
                width={160}
                height={160}
                src={hostedImage}
                priority
                className="w-full h-full rounded-full object-top object-cover"
              />
            </div>
          ) : (
            <p className="w-40 h-40 text-primary">
              <FaUserCircle className="h-full w-full" />
            </p>
          )}
          <div className="absolute bottom-0 right-3 z-10">
            <input
              className="w-14 h-8 opacity-0 z-10"
              type="file"
              name="photo"
              onChange={handleFileChange}
              id=""
              placeholder="file"
            />
          </div>
          <button className="absolute bottom-0 right-3 btn btn-sm h-8 bg-secondary hover:bg-secondary border-darkThree hover:border-darkThree text-white rounded font-medium px-1 gap-1 cursor-pointer">
            <MdEdit /> <span className="text-sm">Edit</span>
          </button>
        </div>
      </div>

      {/* user info */}
      <div className="flex-[5] flex flex-col gap-10">
        <h3 className="text-lg font-semibold w-fit">Update Information :</h3>
        <div className="">
          {/* first part */}
          <div className="flex flex-col lg:flex-row 2xl:items-center gap-5 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <AiOutlineUser className="text-lg" />
                Full Name
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                name="fullName"
                defaultValue={userData?.name}
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
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="userName"
                defaultValue={userData?.username}
                id=""
                placeholder="User Name"
              />
            </div>
          </div>

          {/* second part */}
          <div className="flex flex-col lg:flex-row 2xl:items-center gap-5 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <MdOutlineEmail className="text-lg" />
                Email Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none cursor-not-allowed"
                type="text"
                name="email"
                value={userData?.email}
                disabled
                placeholder="Email Address"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <IoMdPhonePortrait className="text-lg" />
                Phone Number
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={userData?.phone}
                id=""
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* third part */}
          <div className="flex flex-col lg:flex-row 2xl:items-center gap-5 justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <FaRegAddressBook className="text-base" />
                Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={userData?.address}
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
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setCurrency(e.target.value)}
                defaultValue={userData?.currency}
              >
                <option value="" disabled>
                  Select Currency
                </option>
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="IDR">IDR</option>
                <option value="AED">AED</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-5">
          <DarkButton
            className="px-10 rounded"
            disabled={
              fullName ||
              userName ||
              phone ||
              address ||
              currency ||
              hostedImageInfo?.data.data.url
                ? false
                : true
            }
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </DarkButton>
          <DarkButton
            type="submit"
            disabled={
              fullName ||
              userName ||
              phone ||
              address ||
              currency ||
              hostedImageInfo?.data.data.url
                ? false
                : true
            }
            className="px-10 rounded"
          >
            Save
          </DarkButton>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
