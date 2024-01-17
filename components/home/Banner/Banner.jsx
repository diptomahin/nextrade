"use client";
// next js basic Image component
import Image from 'next/image';

// Image import the asset file  
import bannerImg from '../../../assets/banner.jpg'

const Banner = () => {
     return (
          <div className='md:flex md:flex-row-reverse   items-center justify-between gap-20 mt-10'>
               {/* Banner Image div   */}   
               <div>
               <Image
            alt=''
            className='md:w-[600px]  md:mb-0  mb-10'
            src={bannerImg} />
               </div>
               {/* Banner Content div   */}
               <div className='lg:w-[600px]'>
                    <h1 className='lg:text-5xl  md:text-3 text-2xl  font-bold lg:mb-8 md:mb-4 mb-4 text-primary-darkBlue '>Start Trading in Crypto Instant</h1>
                    <p className='font-semibold text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error aspernatur consectetur</p>

                    {/* Tow  Button start and download  */}
                    <div className=" flex items-center md:justify-start justify-center gap-4 lg:my-10 md:my-6 my-5">
                         <button className='bg-primary-darkLightBlue text-primary-white lg:p-3 md:p-2 p-3 rounded-3xl px-5 font-semibold border-2 border-primary-darkLightBlue hover:bg-primary-white hover:text-primary-darkLightBlue duration-300 '>Start Trading</button>

                         <button className='border-2 border-primary-darkLightBlue text-primary-darkLightBlue lg:p-3 md:p-2 p-3 rounded-3xl px-5 font-semibold hover:bg-primary-darkLightBlue hover:text-primary-white duration-300'>Download App</button>
                         
                    </div>
               </div>
          </div>
     );
};

export default Banner;