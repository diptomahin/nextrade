"use client"
import DarkButton from '@/components/library/buttons/DarkButton';
import useInvestmentHistory from '@/hooks/useInvestmentHistory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import emptyIcon from "../../../assets/emptyIcon.png";

const SideHistory = () => {
    const { investmentHistoryData, refetchInvestmentHistory, investmentHistoryLoading, investmentHistoryPending, investmentHistoryError } = useInvestmentHistory()
    // Helper function to format time in 12-hour format
    const formatTime = (hours) => {
        return hours % 12 || 12; // Convert to 12-hour format
    };

    // Helper function to pad zero for single-digit minutes
    const padZero = (minutes) => {
        return minutes < 10 ? `0${minutes}` : minutes;
    };

    // Helper function to determine AM or PM
    const getAmPm = (hours) => {
        return hours >= 12 ? "PM" : "AM";
    };
    return (
        <div className='max-h-min w-full bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3'>
            <div className="flex items-center justify-between">
                <h3 className='font-semibold'>Investment history</h3>
                <Link href="/dashboard/history">
                    <DarkButton>See all</DarkButton>
                </Link>
            </div>
            {
                investmentHistoryData.length > 0 ? (
                    investmentHistoryData.slice(0, 5).map(history => (
                        <div key={history._id} className=" border-b pb-2 border-b-darkThree">

                            <div className='flex gap-1 items-center'>
                                <Image
                                    width={30}
                                    height={30}
                                    src={history.assetImg}
                                    alt="coin-icon"
                                />
                                <div className='flex justify-between w-full'>
                                    <div>
                                        <h4 className="">{history.assetName}</h4>
                                    </div>
                                    {/* <p className="whitespace-nowrap text-xs">{history.date}</p> */}
                                    <p className="text-darkGray text-[10px] flex flex-col items-center justify-end">
                                        {/* Date */}
                                        <span>
                                            {history?.date?.day || " "}-
                                            {history?.date?.month || " "}-
                                            {history?.date?.year || " "}
                                        </span>
                                        {/* Time */}
                                        <span>
                                            {formatTime(history?.date?.hours || " ")}:
                                            {padZero(history?.date?.minutes || " ")}{" "}
                                            {getAmPm(history?.date?.hours || " ")}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <p className='text-sm'>{history.detail}</p>


                        </div>
                    ))

                ) : (
                    <div className=" w-full flex flex-col items-center justify-center gap-2 py-20 border-2 border-primary rounded">
                        <Image
                            src={emptyIcon}
                            width={70}
                            height={70}
                            alt=" Logo"
                        />
                        <h3 className="text-primary text-lg font-semibold text-center">
                            empty !!
                        </h3>
                    </div>
                )
            }
        </div >
    );
};

export default SideHistory;