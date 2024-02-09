"use client"
import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';


const TopBannerNormalCurrency = ({ currencyRate, coinKey, currencyName, coinImage }) => {


    return (
        <div className='bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg p-4 mb-6'>  
                <h1 className="text-xl font-semibold">Market Stats</h1>
                <div className="  flex flex-col md:flex-row xl:items-center xl:justify-between gap-6 xl:gap-0  rounded-lg my-6">
                    <div className="flex-1 flex items-center gap-2 md:gap-5">
                        {coinImage && (
                            <Image src={coinImage} width={50} height={50} alt="BTC/USDT Logo" />
                        )}
                        <div className="flex gap-5 items-center">
                            <h3 className="text-lg font-semibold">{currencyName}  <span className="bg-sky-100/15 px-1 py-[2px] rounded text-primary text-xs">{coinKey}</span></h3>
                            <div className="rounded p-1 bg-sky-100/15">
                                <StarIcon className="text-primary " />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="flex justify-between">
                            <p className="text-xl md:text-3xl font-semibold">
                                ${currencyRate}
                            </p>
                            <div>
                                <p className="text-xs md:text-base ">{currencyName} price(USD)</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default TopBannerNormalCurrency;