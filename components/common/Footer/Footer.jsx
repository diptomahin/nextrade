import Image from "next/image";
import Link from "next/link";

//image import assets
import logo from "../../../assets/logo/nextrade-logo.svg"
import strip from "../../../assets/PaymentLogo/stripLogo.png"
import bkash from "../../../assets/PaymentLogo/BKash-Icon-Logo.wine.svg"
import paypal from "../../../assets/PaymentLogo/PaypalLogo.png"

// material Icon
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import Container from "@/components/library/Container";

const Footer = () => {
     return (
          <footer className="bg-blue-50 ">
             <Container> <div className="w-52">
              <Link href={'/'} >
        <Image src={logo} alt="" width={140} className=' py-8' />
      </Link>
              </div>
      <div className=' grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 mx-auto gap-8 my-8'>
        {/* Contact Us */}
        <nav className="text-primary-white flex flex-col ">
          <header className=" font-bold text-primary mb-5 uppercase">Contact Us</header>
          <Link href={'/about'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">About Us</Link>
          <Link href={'/joinUs'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Join Us</Link>
          <Link href={'/technicalSupport'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Technical Support</Link>
        </nav>
        {/* products */}
        <nav className="text-primary-white flex flex-col ">
          <header className=" font-bold text-primary mb-5 uppercase">Products</header>
          <Link href={'/sportTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer"> Sport Trade</Link>
          <Link href={'/margeTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Marge Trade</Link>
          <Link href={'/futureTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Future Trade</Link>
        </nav>
        {/* Services*/}
        <nav className="text-primary-white flex flex-col gap-2">
          <header className=" font-bold text-primary mb-3 uppercase">Services</header>
          <Link href={'/sportTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer"> Sport Trade</Link>
          <Link href={'/margeTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Marge Trade</Link>
          <Link href={'/futureTrade'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer">Future Trade</Link>
          
        </nav>
        {/* CONNECT WITH US */}
        <nav className="text-primary-white flex flex-col gap-2">
          <header className=" font-bold text-primary mb-3 uppercase">Connect</header>
          <Link href={'/'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer flex items-center gap-2"><InstagramIcon /> <span>4.7M People Like this</span></Link>
          <Link href={'/'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer flex items-center gap-2"><FacebookIcon /> <span>1M Followers</span></Link>
          <div className='flex items-center gap-5 '>
            <Link href={'/'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer"><AppleIcon /></Link>
            <Link href={'/'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer"><XIcon /></Link>
            <Link href={'/'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer"><GoogleIcon /></Link>
          </div>
        </nav>
      
        {/* 100% SECURE PAYMENT */}
        <nav className="text-primary-white flex flex-col">
          <header className=" font-bold text-primary mb-3 lg:mx-auto">100% SECURE PAYMENT
          </header>
          <div className='flex items-center gap-5 lg:mx-auto '>
            <Link href={'/payment'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer  hover:bg-primary w-[55px] h-[55px] flex items-center rounded-full p-2 "><Image src={strip} alt="" className='w-28' /></Link>
            <Link href={'/payment'} className="hover:underline duration-200 font-medium text-gray-700 hover:text-black cursor-pointer  hover:bg-primary w-[55px] h-[55px] flex items-center rounded-full p-2 "><Image src={bkash} alt="" className='w-28' /></Link>
            <Link href={'/payment'} className="hover:underline duration-200 font-medium text-gray-600 hover:text-black cursor-pointer  hover:bg-primary w-[55px] h-[55px] flex items-center rounded-full p-2 "><Image src={paypal} alt="" className='w-28' /></Link>
          </div>
        </nav>
      </div>
      <div className="footer footer-center p-4 border-primary border-t  mt-4 text-primary  text-center font-semibold">
        <aside>
          <p>Copyright © 2024 - All right reserved by <span className="underline font-medium">NexTrade</span></p>
        </aside>
      </div></Container>
          </footer>
     );
};

export default Footer;