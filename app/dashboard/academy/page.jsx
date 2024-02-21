"use client";
import React, { useEffect, useState } from "react";
import { Timeline } from "react-ts-tradingview-widgets";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import moment from "moment";
import { FaRegCirclePlay } from "react-icons/fa6";
import Link from "next/link";

const Academy = () => {
  const [data, setData] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch("https://nex-trade-server.vercel.app/v1/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://nex-trade-server.vercel.app/v1/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
      });
  }, []);

  const opts = {
    height: "270",
    width: "270",
  };

  return (
    <div className="">
      {/* top stories and recent news */}
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:gap-10 mt-10 container mx-auto lg:p-10 xl:p-10 2xl:p-10 4xl:p-10 5xl:p-0">
        <div className="lg:mt-1">
          <Timeline colorTheme="dark" height={700} width="100%" />
        </div>
        <div className="mt-10 lg:mt-0">
          <div>
            <SectionTitle title="Recent News" btnText="ALL RECENT NEWS" />
          </div>
          {data.slice(0, 4).map((news, index) => (
            <div className="flex gap-5 my-5" key={index}>
              <Link href={`/dashboard/academy/${news._id}`}>
                <div className="w-[200px]">
                  <Image
                    src={news.thumbnail}
                    alt={news.title}
                    width={200}
                    height={200}
                  />
                </div>
              </Link>

              <div className="">
                <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                  {news.category}
                </button>
                <Link href={`/dashboard/academy/${news._id}`}>
                  <h3 className="lg:text-[16px] text-[14px]  font-semibold my-3">
                    {news.title}
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
      <div className="bg-[#1e222d] lg:p-10 p-4 mt-10">
        <div className="container mx-auto">
          <SectionTitle
            title="Trending Stories"
            btnText="ALL Trending Stories"
          />
          <div className="xl:flex justify-between gap-10 mt-10">
            <div className="">
              {data.slice(4, 5).map((news, index) => (
                <div className="relative xl:my-0 my-10 mb-10" key={index}>
                  <div>
                    <Link href={`/academy/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={980} // Provide the width property here
                        height={600} // Provide the height property if necessary
                        sizes="170vw"
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="absolute lg:bottom-16 bottom-10 lg:left-10 left-5">
                    <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                      {news.category}
                    </button>
                    <Link href={`/academy/${news._id}`}>
                      <h3 className="lg:text-3xl text-xl font-semibold my-2 lg:my-4 text-white">
                        {news.title}
                      </h3>
                    </Link>
                    <div className="flex gap-1">
                      <p className="text-white">
                        {moment(news.date).format("ll")} .
                      </p>
                      <p className="text-white">1k Views .</p>
                      <p className="text-white">210 Shares</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {data.slice(5, 7).map((news, index) => (
                <div className="relative mb-5" key={index}>
                  <div>
                    <Link href={`/academy/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={80} // Provide the width property here
                        height={100} // Provide the height property if necessary
                        sizes="40vw"
                        style={{
                          width: "100%",
                          height: "50%", // Default height for large devices
                          "@media (max-width: 600px)": {
                            height: "25%", // Height for small devices
                          },
                        }}
                      />
                    </Link>
                  </div>

                  <div className="absolute bottom-6 left-5">
                    <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                      {news.category}
                    </button>
                    <Link href={`/academy/${news._id}`}>
                      <h3 className="font-semibold my-1 text-white">
                        {news.title}
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
      <div className="mt-10 container mx-auto lg:p-10 xl:p-10 2xl:p-10 4xl:p-10 5xl:p-0">
        <SectionTitle title="Market News" btnText="ALL Market News" />
        <div>
          <div className="xl:grid grid-cols-2 gap-5">
            {data.slice(7, 13).map((news, index) => (
              <div className="flex gap-5 my-1 xl:mt-10 mt-5" key={index}>
                <Link href={`/dashboard/academy/${news._id}`}>
                  <div className="w-[200px]">
                    <Image
                      src={news.thumbnail}
                      alt={news.title}
                      width={200}
                      height={200}
                    />
                  </div>
                </Link>

                <div className="">
                  <button className="bg-blue-500 xl:px-2 px-1 py-1 xl:text-sm text-[12px] text-white">
                    {news.category}
                  </button>
                  <Link href={`/dashboard/academy/${news._id}`}>
                    <h3 className="lg:text-[16px] text-[14px] font-semibold xl:my-3 my-1">
                      {news.title}
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
      <div className="bg-black lg:p-10 my-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-5">
            <h2 className="lg:text-[30px] text-xl font-semibold text-white">Videos</h2>
            <Link href="#">
              <button className="font-semibold uppercase text-white border-b-2 border-white lg:text-normal text-[14px]">
                All Videos
              </button>
            </Link>
          </div>
          <div className="xl:flex justify-between gap-10">
            <div className="">
              {data.slice(13, 14).map((news, index) => (
                <div className="relative mt-10" key={index}>
                  <div>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
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
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="md:text-6xl text-4xl text-white">
                      <FaRegCirclePlay className="text-center" />
                    </div>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="xl:text-2xl md:text-[26px] font-semibold my-4 md:mr-10 text-white absolute md:bottom-16 md:left-10 left-4 bottom-11">
                        {news.title}
                      </h3>
                    </Link>
                    <div className="flex gap-1 text-white absolute md:bottom-12 bottom-8 md:left-10 left-4">
                      <p>{moment(news.date).format("ll")} .</p>
                      <p>1k Views .</p>
                      <p>210 Shares</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1 md:mt-10 mt-10">
              {data.slice(14, 18).map((news, index) => (
                <div className="flex gap-3 mb-5" key={index}>
                  <div className="relative">
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <div className="lg:w-[180px] xl:w-[180px] md:w-[120px] w-[100px]">
                        <Image
                          src={news.thumbnail}
                          alt={news.title}
                          width={400} // Provide the width property here
                          height={400} // Provide the height property if necessary
                          sizes="100vw"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </div>
                    </Link>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl text-white">
                        <FaRegCirclePlay />
                      </div>
                    </div>
                  </div>
                  <div className="-mt-1">
                    <button className="text-blue-500 lg:text-[16px] text-sm">
                      {news.category}
                    </button>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="font-semibold my-1 text-white lg:text-[17px] xl:text-[15px] text-[13px]">
                        {news.title}
                      </h3>
                    </Link>
                    <p className="text-gray-500 xl:text-[15px] lg:text-[17px] text-[13px]">
                      {moment(news.date).format("ll")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* lowest */}
      





      {/* Tutorial */}
      {/* <div className="container mx-auto mt-10">
        <SectionTitle
          title="Tutorial & Resource"
          btnText="ALL Tutorial & Resource"
        />

        <div className="mt-5 flex justify-between gap-5">
          {video.slice(0, 4).map((video, index) => (
            <div className="relative mb-5" key={index}>
              <YouTube videoId={video.url} opts={opts} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Academy;