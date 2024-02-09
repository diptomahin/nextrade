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

    useEffect(() => {
        fetch("/fake.json")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
      

      console.log(data)

    return (
      <div className="">
      {/* top stories and recent news */}
      <div className="grid md:grid-cols-2 md:gap-10 mt-10 container mx-auto">
        <div className="mt-3">
          <Timeline colorTheme="dark" height={700} width="100%" />
        </div>
        <div>
          <div>
            <SectionTitle title="Recent News" btnText="ALL RECENT NEWS" />
          </div>
          {data.slice(0, 4).map((news, index) => (
            <div className="flex gap-5 my-5" key={index}>
              <Image
                src={news.image}
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
      </div>

      {/* Trending stories */}
      <div className="bg-[#f6f4f4] p-10 mt-10">
        <div className="container mx-auto">
          <SectionTitle
            title="Trending Stories"
            btnText="ALL Trending Stories"
          />
          <div className="flex grid-cols-3 gap-10 mt-5">
            <div className="col-span-2">
              {data.slice(4, 5).map((news, index) => (
                <div className="relative" key={index}>
                  <div>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={600}
                      height={600}
                    />
                  </div>

                  <div className="absolute bottom-16 left-10">
                    <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                      {news.category}
                    </button>
                    <h3 className="text-3xl font-semibold my-4 text-white">
                      {news.title}
                    </h3>
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
            <div className="col-span-1 ">
              {data.slice(5, 8).map((news, index) => (
                <div className="relative mb-5" key={index}>
                  <div>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={290}
                      height={290}
                    />
                  </div>

                  <div className="absolute bottom-6 left-5">
                    <button className="bg-blue-500 px-2 py-1 text-sm text-white">
                      {news.category}
                    </button>
                    <h3 className="font-semibold my-1 text-white">
                      {news.title}
                    </h3>
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
      <div className="mt-10 container mx-auto">
        <SectionTitle title="Market News" btnText="ALL Market News" />
        <div className="grid grid-cols-2">
          <div>
            {data.slice(7, 10).map((news, index) => (
              <div className="flex gap-5 my-5" key={index}>
                <Image
                  src={news.image}
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
          <div>
            {data.slice(10, 13).map((news, index) => (
              <div className="flex gap-5 my-5" key={index}>
                <Image
                  src={news.image}
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
        </div>
      </div>

      {/* Videos */}
      <div className="bg-black p-10 mt-10">
        <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <h2 className="text-[30px] font-semibold text-white">Videos</h2>
            <Link href="#">
                <button className="font-semibold uppercase text-white border-b-2 border-white">All Videos</button>
            </Link>
        </div>
          <div className="flex grid-cols-3 gap-10 mt-5">
            <div className="col-span-2">
              {data.slice(13, 14).map((news, index) => (
                <div className="relative" key={index}>
                  <div>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={600}
                      height={600}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white">
                      <FaRegCirclePlay className="text-center" />
                    </div>
                    <h3 className="text-3xl font-semibold my-4 text-white absolute bottom-16 left-10">
                      {news.title}
                    </h3>
                    <div className="flex gap-1 text-white absolute bottom-12 left-10">
                      <p>{moment(news.date).format("ll")} .</p>
                      <p>1k Views .</p>
                      <p>210 Shares</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-1">
              {data.slice(14, 19).map((news, index) => (
                <div className="flex gap-3 mb-5" key={index}>
                  <div className="relative">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={130}
                      height={130}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl text-white">
                        <FaRegCirclePlay />
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <button className="text-blue-500 text-sm">
                      {news.category}
                    </button>
                    <h3 className="font-semibold my-3 text-white">
                      {news.title}
                    </h3>
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

      {/* lowest */}
      {/* <div className="mt-10 container mx-auto">
        <div className="grid grid-cols-2">
          <div>
            {data.slice(12, 15).map((news, index) => (
              <div className="flex gap-5 my-5" key={index}>
                <Image
                  src={news.image}
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
      <YouTube videoId={video.url}  opts={opts}  />
    </div>
  ))}
</div>

       
      </div> */}
    </div>
    );
};

export default Academy;