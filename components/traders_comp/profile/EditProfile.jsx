import DarkButton from "@/components/library/buttons/DarkButton";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { TbUserStar } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaRegAddressBook } from "react-icons/fa6";
import { PiCurrencyDollar, PiUpload } from "react-icons/pi";
<<<<<<< HEAD

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
=======
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const image_hosting_key = `4696195291e937983db500161bc852ce`;

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const date = { day: day, month: month, year: year };

const EditProfile = ({
  userDetails,
  setIsEdit,
  refetch,
  user,
  userDataRefetch,
}) => {
  const [hostedImage, setHostedImage] = useState(userDetails.photo);
  const [hostedImageInfo, setHostedImageInfo] = useState(null);
  const [imageHosting, setImageHosting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("");

  const router = useRouter();

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
      `https://nex-trade-server.vercel.app/v1/api/update-user/${user?.email}`,
      userDetails
    );
    if (res.data.modifiedCount > 0) {
      refetch();
      userDataRefetch();
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
      className="flex flex-col xl:flex-row xl:items-center gap-10 md:px-5"
    >
      {/* photo url */}
      <div className="flex-[2] flex flex-col items-center justify-center">
        {hostedImage !== undefined && hostedImage !== null ? (
          <div className="w-40 h-40 overflow-hidden rounded-full">
            <Image
              alt="profile-image"
              width={160}
              height={160}
              src={hostedImage}
              priority
              className="w-full h-full rounded-full object-top object-cover"
            />
          </div>
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
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
<<<<<<< HEAD
=======
            name="photo"
            onChange={handleFileChange}
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
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
<<<<<<< HEAD
          <div className="flex items-center gap-5 justify-between">
=======
          <div className="flex flex-col lg:flex-row xl:items-center gap-5 justify-between">
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <AiOutlineUser className="text-lg" />
                Full Name
              </label>
              <input
<<<<<<< HEAD
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.displayName}
                id=""
                placeholder="amount"
=======
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                name="fullName"
                defaultValue={userDetails?.name}
                id=""
                placeholder="Full Name"
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <TbUserStar className="text-lg" />
                User Name
              </label>
              <input
<<<<<<< HEAD
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={user?.email}
                id=""
                placeholder="amount"
=======
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="userName"
                defaultValue={userDetails?.username}
                id=""
                placeholder="User Name"
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              />
            </div>
          </div>

          {/* second part */}
<<<<<<< HEAD
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
=======
          <div className="flex flex-col lg:flex-row xl:items-center gap-5 justify-between my-10">
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <MdOutlineEmail className="text-lg" />
                Email Address
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none cursor-not-allowed"
                type="text"
                name="email"
                value={userDetails?.email}
                disabled
                placeholder="Email Address"
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <IoMdPhonePortrait className="text-lg" />
<<<<<<< HEAD
                Phone
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={"+8801973875893"}
                id=""
                placeholder="amount"
=======
                Phone Number
              </label>
              <input
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                type="text"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={userDetails?.phone}
                id=""
                placeholder="Phone Number"
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              />
            </div>
          </div>

          {/* third part */}
<<<<<<< HEAD
          <div className="flex items-center gap-5 justify-between">
=======
          <div className="flex flex-col lg:flex-row xl:items-center gap-5 justify-between">
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <FaRegAddressBook className="text-base" />
                Address
              </label>
              <input
<<<<<<< HEAD
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                type="text"
                name="amount"
                defaultValue={"Jatrabari, Dhaka"}
                id=""
                placeholder="amount"
=======
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                type="text"
                name="address"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={userDetails?.address}
                id=""
                placeholder="Address"
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="flex items-center gap-1 font-medium">
                <PiCurrencyDollar className="text-lg" /> Currency
              </label>
              <select
<<<<<<< HEAD
                name=""
                id=""
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded-xl outline-none"
                defaultValue="usd"
=======
                name="currency"
                id=""
                className="bg-transparent w-full border border-darkThree focus:border-darkGray text-sm mt-2 px-4 py-[10px] rounded outline-none"
                onChange={(e) => setCurrency(e.target.value)}
                defaultValue={userDetails?.currency}
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              >
                <option value="" disabled>
                  Select Currency
                </option>
<<<<<<< HEAD
                <option value="usd">USD</option>
                <option value="bdt">BDT</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="inr">INR</option>
                <option value="idr">IDR</option>
                <option value="aed">AED</option>
=======
                <option value="USD">USD</option>
                <option value="BDT">BDT</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="IDR">IDR</option>
                <option value="AED">AED</option>
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
              </select>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="flex items-center justify-end gap-5">
          <DarkButton className="px-10">Cancel</DarkButton>
          <DarkButton className="px-10">Save</DarkButton>
=======
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
>>>>>>> 671371b4d1f7e1e96c2fea59712cafeafef4f340
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
