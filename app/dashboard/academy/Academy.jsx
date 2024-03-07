"use client";
import React from "react";
import { Timeline } from "react-ts-tradingview-widgets";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import moment from "moment";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";
import useDarkMode from "@/hooks/useDarkMode";
import useSecureFetch from "@/hooks/useSecureFetch";

const Academy = () => {
  const isDarkMode = useDarkMode();

  const { data, isPending, isLoading, refetch, isError } = useSecureFetch(
    "https://nex-trade-server.vercel.app/v1/api/articles"
  );

  if ((isError, isPending, isLoading)) {
    return;
  }

  const videoData = data.filter((item) => item.category === "Video");

  console.log(videoData)



  return (
    <div className="">
      {/* top stories and recent news */}
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-1 md:gap-10 mt-10 lg:p-10 2xl:p-10  3xl:p-10 5xl:p-10 6xl:p-0">
        <div className="lg:mt-1">
          <Timeline colorTheme="dark" height={690} width="100%" />
        </div>
        <div className="mt-10 lg:mt-0">
          <div>
            <SectionTitle title="Recent News" btnText="ALL RECENT NEWS" />
          </div>
          {data.slice(0, 4).map((news, index) => (
            <div className="flex gap-5 my-5" key={index}>
              <Link href={`/dashboard/academy/${news._id}`}>
                <div className="w-[200px] h-[150px] overflow-hidden">
                  <Image
                    src={news.thumbnail}
                    alt={news.title}
                    width={200}
                    height={200}
                    className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
              </Link>

              <div>
                <button className="relative px-2 py-1 text-sm text-white overflow-hidden bg-darkTwo before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkOne before:transition-all before:duration-500   hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">{news.category}</span>
                </button>
                <Link href={`/dashboard/academy/${news._id}`}>
                  <h3 className="lg:text-[16px] text-[14px] font-semibold 2xl:my-3 my-1 group dark:text-white text-black transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {news.title}
                    </span>
                  </h3>
                </Link>
                <p className="text-gray-500">
                  {moment(news.date).format("ll")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending stories */}
      <div className="dark:bg-[#1e222d] bg-white lg:p-10 p-4 mt-10">
        <div className="">
          <SectionTitle
            title="Trending Stories"
            btnText="ALL Trending Stories"
          />
          <div className="2xl:flex justify-between gap-10 mt-10">
            <div className="">
              {data.slice(4, 5).map((news, index) => (
                <div className="relative 2xl:my-0 my-10 mb-10" key={index}>
                  <div className="overflow-hidden">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={980}
                        height={600}
                        sizes="190vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </Link>
                  </div>

                  <div className="absolute lg:bottom-16 bottom-10 lg:left-10 left-5">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="lg:text-3xl text-xl font-semibold my-2 lg:my-4 group text-white transition-all duration-300 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          {news.title}
                        </span>
                      </h3>
                    </Link>
                    <div className="flex gap-1">
                      <p className="text-white">
                        {moment(news.date).format("ll")} .
                      </p>
                      <p className="text-white">{news?.viewCount} Views</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {data.slice(5, 7).map((news, index) => (
                <div className="relative mb-5" key={index}>
                  <div className="overflow-hidden">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        src={news.thumbnail}
                        alt={news.title}
                        width={80}
                        height={100}
                        sizes="40vw"
                        style={{
                          width: "100%",
                          height: "50%",
                          "@media (maxWidth: 600px)": {
                            height: "25%",
                          },
                        }}
                      />
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-5">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="font-semibold my-1 group text-white transition-all duration-300 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          {news.title}
                        </span>
                      </h3>
                    </Link>
                    <div className="flex gap-1">
                      <p className="text-white text-sm">
                        {moment(news.date).format("ll")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Market News */}
      <div className="mt-10 lg:p-10 2xl:p-10  3xl:p-10 5xl:p-10 6xl:p-0">
        <SectionTitle title="Market News" btnText="ALL Market News" />

        <div>
          <div className="2xl:grid grid-cols-2 gap-5">
            {data.slice(7, 13).map((news, index) => (
              <div
                className="flex gap-5 2xl:-my-10 my-5 2xl:mt-10 mt-5"
                key={index}
              >
                <Link href={`/dashboard/academy/${news._id}`}>
                  <div className="w-[200px] h-[150px] overflow-hidden">
                    <Image
                      className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      src={news.thumbnail}
                      alt={news.title}
                      width={400}
                      height={150}
                    />
                  </div>
                </Link>

                <div className="">
                  <button className="relative px-2 py-1 text-sm text-white overflow-hidden bg-darkTwo before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkOne before:transition-all before:duration-500   hover:before:left-0 hover:before:w-full">
                    <span className="relative z-10">{news.category}</span>
                  </button>
                  <Link href={`/dashboard/academy/${news._id}`}>
                    <h3 className="lg:text-[16px] text-[14px] font-semibold 2xl:my-3 my-1 group dark:text-white text-black transition-all duration-300 ease-in-out">
                      <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {news.title}
                      </span>
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-[14px]">
                    {moment(news.date).format("ll")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos */}
      <div className="dark:bg-black bg-white lg:p-10 my-10">
        <div className="">
          <div className="flex justify-between items-center py-5">
            <h2 className="lg:text-[30px] text-xl font-semibold dark:text-white text-black">
              Videos
            </h2>
            <Link href="#">
              <button
                className="relative font-semibold uppercase lg:text-normal text-[14px]"
                style={{
                  display: "inline-block",
                  paddingBottom: "2px",
                  backgroundImage: "linear-gradient(white, white)",
                  backgroundPosition: "0 100%",
                  backgroundSize: "0% 2px",
                  backgroundRepeat: "no-repeat",
                  transition:
                    "background-size 0.3s, background-position 0s 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundPosition = "100% 100%";
                  e.target.style.backgroundSize = "100% 2px";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundPosition = "0 100%";
                  e.target.style.backgroundSize = "0% 2px";
                }}
              >
                <span className="absolute bottom-0 left-0 bg-white" />
                All Video&apos;s
              </button>
            </Link>
          </div>
          <div className="2xl:flex justify-between gap-10">
            <div className="">
              {videoData.slice(0, 1).map((news, index) => (
                <div className="relative mt-10" key={index}>
                  <div className="overflow-hidden">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        src={news.thumbnail}
                        alt={news.title}
                        width={900}
                        height={600}
                        sizes="(max-width: 1500px) 200vw, (max-width: 2500px) 70vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <FaRegCirclePlay className="text-3xl text-white" />
                    </div>
                  </div>

                  <Link href={`/dashboard/academy/${news._id}`}>
                    <h3 className="2xl:text-2xl md:text-[26px] font-semibold my-4 md:mr-10 text-white absolute md:bottom-16 md:left-10 left-4 bottom-11 group transition-all duration-300 ease-in-out">
                      <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        {news.title}
                      </span>
                    </h3>
                  </Link>
                  <div className="flex gap-1 text-white absolute md:bottom-12 bottom-8 md:left-10 left-4">
                    <p>{moment(news.date).format("ll")} .</p>
                    <p>{news?.viewCount} Views</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 md:mt-10 mt-10">
              {videoData.slice(1, 4).map((news, index) => (
                <div className="flex gap-3 mb-5" key={index}>
                  <div className="relative">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <div className="lg:w-[180px] 2xl:w-[180px] md:w-[120px] w-[100px] h-[150px] overflow-hidden">
                        <Image
                          src={news.thumbnail}
                          alt={news.title}
                          width={400}
                          height={400}
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 transform-gpu hover:scale-110 cursor-pointer"
                        />
                      </div>
                    </Link>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <FaRegCirclePlay className="text-3xl text-white" />
                    </div>
                  </div>
                  <div className="-mt-1">
                    <button className="relative px-2 py-1 text-sm text-white overflow-hidden bg-darkTwo before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkOne before:transition-all before:duration-500   hover:before:left-0 hover:before:w-full">
                      <span className="relative z-10">{news.category}</span>
                    </button>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="font-semibold my-1 lg:text-[17px] 2xl:text-[15px] text-[13px] group dark:text-white text-black transition-all duration-300 ease-in-out">
                        <span className="bg-left-bottom bg-gradient-to-r from-black to-black dark:bg-gradient-to-r dark:from-white dark:to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                          {news.title}
                        </span>
                      </h3>
                    </Link>
                    <p className="text-gray-500 2xl:text-[15px] lg:text-[17px] text-[13px]">
                      {moment(news.date).format("ll")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
