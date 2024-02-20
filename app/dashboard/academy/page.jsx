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
      <div className="grid md:grid-cols-1 md:gap-10 mt-10 container mx-auto md:p-5">
        <div className="mt-3">
          <Timeline colorTheme="dark" height={700} width="100%" />
        </div>
        <div>
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
                  <h3 className="text-[16px] font-semibold my-3">
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
      <div className="bg-[#1e222d] p-10 md:p-5 mt-10">
        <div className="container mx-auto">
          <SectionTitle
            title="Trending Stories"
            btnText="ALL Trending Stories"
          />
          <div className="grid-cols-3 md:grid-cols-1 gap-10 mt-5">
            <div className="col-span-2 md:col-span-1">
              {data.slice(4, 5).map((news, index) => (
                <div className="relative" key={index}>
                  <div>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={600}
                        height={600}
                      />
                    </Link>
                  </div>

                  <div className="absolute bottom-16 left-10">
                    <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                      {news.category}
                    </button>
                    <Link href={`/academy/${news._id}`}>
                      <h3 className="text-3xl font-semibold my-4 text-white">
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
            <div className="col-span-1">
              {data.slice(5, 8).map((news, index) => (
                <div className="relative mb-5" key={index}>
                  <div>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={290}
                        height={290}
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
      <div className="mt-10 container mx-auto md:p-5">
        <SectionTitle title="Market News" btnText="ALL Market News" />
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div>
            {data.slice(7, 10).map((news, index) => (
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
                    <h3 className="text-[16px] font-semibold my-3">
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
          <div>
            {data.slice(10, 13).map((news, index) => (
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
                    <h3 className="text-[16px] font-semibold my-3">
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
      </div>

      {/* Videos */}
      <div className="bg-black p-10 md:p-5 my-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-[30px] font-semibold text-white">Videos</h2>
            <Link href="#">
              <button className="font-semibold uppercase text-white border-b-2 border-white">
                All Videos
              </button>
            </Link>
          </div>
          <div className="grid-cols-3 gap-10 mt-5 md:grid-cols-1">
            <div className="col-span-2 md:col-span-1">
              {data.slice(13, 14).map((news, index) => (
                <div className="relative" key={index}>
                  <Link href={`/dashboard/academy/${news._id}`}>
                    <div className="lg:w-[480px] md:w-full md:h-full md:mx-auto md:flex md:justify-center">
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={700}
                        height={700}
                      />
                    </div>
                  </Link>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="md:text-6xl text-4xl text-white">
                      <FaRegCirclePlay className="text-center" />
                    </div>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="md:text-3xl text-xl font-semibold my-4 md:mr-10 text-white absolute md:bottom-16 md:left-10 left-4 bottom-11">
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
                      <div className="w-[140px]">
                        <Image
                          src={news.thumbnail}
                          alt={news.title}
                          width={130}
                          height={130}
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
                    <button className="text-blue-500 text-sm">
                      {news.category}
                    </button>
                    <Link href={`/dashboard/academy/${news._id}`}>
                      <h3 className="font-semibold my-1 text-white text-[15px]">
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
        </div>
      </div>

      {/* video section */}
      <div>

      </div>
   
      {/* lowest */}
      {/* <div className="mt-10 container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            {data.slice(12, 15).map((news, index) => (
              <div className="flex gap-5 my-5" key={index}>
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={200}
                  height={200}
                />
                <div className="">
                  <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                    {news.category}
                  </button>
                  <h3 className="text-xl font-semibold my-4">{news.title}</h3>
                  <p className="text-gray-500">
                    {moment(news.date).format("ll")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>hi</div>
        </div>
      </div> */}

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
