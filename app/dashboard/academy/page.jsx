"use client"
import React from 'react';
import { Timeline } from "react-ts-tradingview-widgets";
import Image from 'next/image'
import demo from "../../../assets/academy/Explorer.webp"

const page = () => {
  
  return (
    <div className='px-10'>
      <h1 className="text-3xl text-center my-10">Expert market insights on forex, stocks, cryptos, and commodities</h1>

      <div className='grid grid-cols-2 gap-10'>
        <div className='w-full  bg-white border border-gray-200 rounded-lg shadow'>
          <div className="w-full">
            <Image
              src={demo}
              alt="Picture of the author"
            />
          </div>
          <div className='p-3'>
            <h5 className="my-2 text-2xl">How to identify and trade popular candlestick patterns</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Candlestick charts are one of the most popular tools used in technical analysis. By condensing price data into an easy-to-read format.</p>
            <button className='text-blue-600'>
              Read More..
            </button>
          </div>

        </div>
        <div>
          <Timeline colorTheme="dark" height={600} width="100%" />
        </div>
      </div>
      {/* news card */}
      <div className='mt-10'>
        <h1 className='text-2xl font-semibold my-5'>
          Recent News
        </h1>
        <div className='grid grid-cols-3 gap-10'>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-2xl font-semibold my-5'>
          Recent Videos
        </h1>
        <div className='grid grid-cols-3 gap-10'>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-2xl font-semibold my-5'>
        Market news
        </h1>
        <div className='grid grid-cols-3 gap-10'>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src={demo}
              alt="Picture of the author"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;