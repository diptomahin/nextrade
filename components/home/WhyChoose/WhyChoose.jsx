
import React from 'react';
import logo from "../../../assets/nextrade-logo.png"
import Image1 from "../../../assets/metrics-concept-illustration_114360-3455.png"
import Image from 'next/image';

const WhyChoose = () => {
    return (
        <div className='my-20 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >
                <div className=''>
                    <Image width={400} height={400} src={Image1} alt='Invest' />
                </div>
                <div className='py-10'>
                    <Image src={logo} alt='logo' width={80} className='my-4' />
                    <h1 className='text-2xl my-4 font-bold text-primary-darkBlue'>Why Choose NexTrade ???</h1>
                    <p  className='text-lg my-4 text-slate-500'>At NexTrade, your trading experience is our top priority, and we stand out for several compelling reasons.</p>
                    <div className='grid grid-cols-2 gap-3'>
                        <li>Safety Comes First</li>
                        <li>Bonus And Offers</li>
                        <li>Low Charges</li>
                        <li>Fast Transaction</li>
                        <li>Easy Deposit And Withdraw</li>
                        <li>24/7 Support</li>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChoose;