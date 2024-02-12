"use client"
import Image from 'next/image';
import React from 'react';

const ManageCrypto = ({ assets }) => {
    return (
        <div className='flex gap-6 flex-wrap my-6'>
            {assets.map((asset, idx) => (
                <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                    <p className='absolute top-4 left-4'>{idx + 1}.</p>
                    <div >
                        <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                            className='mx-auto'
                        />
                        <p className='text-center text-lg font-semibold mt-3'>{asset.name}</p>
                    </div>
                    <p className='flex justify-between items-center'>Price: ${parseFloat(asset.price).toFixed(2)}<span>{asset.changePrice}%</span></p>
                    <p>24h High: <span className='text-green-600'>${parseFloat(asset.highPrice).toFixed(2)}</span></p>
                    <p>24h Low: <span className='text-red-600'>${parseFloat(asset.lowPrice).toFixed(2)}</span></p>
                </div>
            ))}
        </div>
    );
};

export default ManageCrypto;