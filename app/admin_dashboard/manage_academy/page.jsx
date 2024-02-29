"use client";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import CreatableSelect from "react-select/creatable";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/usePublicAPI";
import DarkButton from "@/components/library/buttons/DarkButton";

const image_hosting_key = "327864e87c612021efbee488ba128ba9";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddArticles = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTagsOption, setSelectedTagsOption] = useState(null);
  const animatedComponents = makeAnimated();
  const [fileName, setFileName] = useState("Attach file");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Category
  const CategoryOptions = [
    { value: "Trading", label: "Trading" },
    { value: "Forex Trading", label: "Forex Trading" },
    { value: "Futures Trading", label: "Futures Trading" },
    { value: "Cryptocurrency", label: "Cryptocurrency" },
    { value: "Stock Market", label: "Stock Market" },
    { value: "Blockchain", label: "Blockchain" },
    { value: "Investment", label: "Investment" },
    { value: "Technical Analysis", label: "Technical Analysis" },
    { value: "Trading Psychology", label: "Trading Psychology" },
    { value: "Trading Strategies", label: "Trading Strategies" },
  ];

  const category = selectedOption?.value;
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleTagsSelectChange = (selectedTagsOption) => {
    setSelectedTagsOption(selectedTagsOption);
  };
  const tags = selectedTagsOption?.map((tag) => tag?.value).join(", ");

  // Tags
  const TagsOptions = [
    { value: "Trading", label: "Trading" },
    { value: "TradingTips", label: "TradingTips" },
    { value: "StockMarket", label: "StockMarket" },
    { value: "ForexTrading", label: "ForexTrading" },
    { value: "Cryptocurrency", label: "Cryptocurrency" },
    { value: "Investing", label: "Investing" },
    { value: "OptionsTrading", label: "OptionsTrading" },
    { value: "CryptoTrading", label: "CryptoTrading" },
    { value: "TradingEducation", label: "TradingEducation" },
    { value: "RiskManagement", label: "RiskManagement" },
  ];

  // post in database
  const handelPostNews = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const description = form.get("description");
    const photo = form.get("photo");

    const toastId = toast.loading("Progress...", { duration: 10000 });

    // image upload to imgbb and then get an url
    if (photo instanceof File) {
      try {
        const formData = new FormData();
        formData.append("image", photo);

        // image upload to imgbb and then get an url
        const res = await axiosPublic.post(image_hosting_api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const imageUrl = res.data.data.url;
        const thumbnail = imageUrl;
        const date = new Date();

        const articlesInfo = {
          title,
          description,
          thumbnail,
          category,
          tags,
          date,
        };

        axiosPublic.post("/articles", articlesInfo).then((res) => {
          e.target.reset();
          if (res.data.insertedId) {
            toast.success("Post Added Successfully", {
              id: toastId,
              duration: 3000,
            });
          }
        });
      } catch (error) {}
    }
  };

  return (
    <div className="">
      <form className="grid grid-cols-4 gap-5 mt-14" onSubmit={handelPostNews}>
        {/* title, description, image */}
        <div className="col-span-3 mr-5">
          <div>
            <label className="flex justify-center font-semibold text-4xl text-white">
              Add New Post
            </label>
            <input
              type="text"
              id="helper-text"
              name="title"
              required
              aria-describedby="helper-text-explanation"
              className="bg-darkTwo border border-gray-300 text-white text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded mt-5"
              placeholder="Add a title"
            />
            <div className="w-full mt-4 mb-4 border border-gray-200 rounded-lg bg-darkTwo text-white dark:bg-gray-700 dark:border-gray-600">
              <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                    <label className="relative flex items-center justify-center w-full dark:border-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                      <input
                        type="file"
                        required
                        name="photo"
                        className="absolute inset-0 opacity-0"
                        onChange={handleFileChange}
                      />
                      <button
                        type="button"
                        className="p-2 text-gray-500 rounded flex items-center cursor-pointer !important"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 12 20"
                        >
                          <path
                            stroke="currentColor"
                            d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                          />
                        </svg>
                        {fileName}
                      </button>
                    </label>

                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                        <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                      </svg>
                      <span className="sr-only">Format code</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                      </svg>
                      <span className="sr-only">Add emoji</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 18"
                      >
                        <path
                          stroke="currentColor"
                          d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                        />
                      </svg>
                      <span className="sr-only">Add list</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                      </svg>
                      <span className="sr-only">Settings</span>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                        <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                      </svg>
                      <span className="sr-only">Timeline</span>
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  data-tooltip-target="tooltip-fullscreen"
                  className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 19 19"
                  >
                    <path
                      stroke="currentColor"
                      d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                    />
                  </svg>
                  <span className="sr-only">Full screen</span>
                </button>
                <div
                  id="tooltip-fullscreen"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Show full screen
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <div className="px-4 py-2 bg-darkTwo rounded-b-lg dark:bg-gray-800">
                <label className="sr-only cursor-pointer">Publish post</label>
                <textarea
                  id="editor"
                  name="description"
                  rows="15"
                  className="block w-full px-0 text-sm text-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 py-2 pl-2 bg-darkTwo"
                  placeholder="Write an article..."
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* submit, tags, publisher */}
        <div className="col-span-1">
          <div>
            <h1 className="mt-3 mb-5 flex justify-center text-xl font-semibold text-white">
              Select a Categories
            </h1>
            <Select
              className="basic-single"
              closeMenuOnSelect={true}
              onChange={handleSelectChange}
              required
              components={animatedComponents}
              options={CategoryOptions}
              placeholder="Select a Category"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#212a3f", // Set background color to black
                  color: "white",
                  border: "1px solid #444", // Add border for contrast
                  borderRadius: "4px", // Optional: Add border radius for rounded corners
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "darkGray", // Set text color of selected option to white
                }),
              }}
            />

            <h1 className="my-5 text-center justify-center text-xl font-semibold text-white">
              Add Your Tags
            </h1>

            <CreatableSelect
              isMulti
              required
              onChange={handleTagsSelectChange}
              components={animatedComponents}
              options={TagsOptions}
              placeholder="Select or Create Tags"
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "#212a3f",
                  color: "white",
                  border: "1px solid #444",
                  borderRadius: "4px",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "darkGray",
                }),
              }}
            />
            {/* input */}
            <div>
              <DarkButton className="mt-10 w-full cursor-pointer">
                Publish Post
              </DarkButton>
            </div>
          </div>
          <Toaster position="top-center"></Toaster>
        </div>
      </form>
    </div>
  );
};

export default AddArticles;
