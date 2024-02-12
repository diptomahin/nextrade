"use client"
import Image from 'next/image';
import React from 'react';

const ManageCrypto = ({ assets }) => {
    return (
        <div className='flex gap-6 flex-wrap'>
            {assets.map((asset, idx) => (
                <div key={idx} className='border rounded-lg p-6'>
                    <div >
                        <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                            className='mx-auto'
                        />
                        <p className='text-center'>{asset.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ManageCrypto;