"use client"
import { IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ManageCrypto = ({ assets }) => {
    return (
        <div className='flex gap-6 flex-wrap my-6'>
            {assets.map((asset, idx) => (
                // <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-indigo-100 '>
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
                    <p className='flex justify-between items-center font-semibold'>Price: ${parseFloat(asset.price).toFixed(2)}<span>{asset.changePrice}%</span></p>
                    <div className='flex justify-between items-center'>
                        <p>24h High: <span className='text-green-700 font-semibold'>${parseFloat(asset.highPrice).toFixed(2)}</span></p>
                        <IconButton aria-label="delete">
                            <EditIcon className='text-gray-500' />
                        </IconButton>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p>24h Low: <span className='text-red-700 font-semibold'>${parseFloat(asset.lowPrice).toFixed(2)}</span></p>
                        <IconButton aria-label="delete">
                            <DeleteIcon className='text-gray-500' />
                        </IconButton>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageCrypto;