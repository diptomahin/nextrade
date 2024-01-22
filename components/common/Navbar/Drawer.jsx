"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/library/Button/Button";
import logo from "../../../assets/logo/nextrade-logo.svg";
import Link from "next/link";

const Drawer = ({ toggleMenu }) => {
  const [aboutUsHover, setAboutUsHover] = React.useState(false);
  const [recoursesHover, setRecoursesHover] = React.useState(false);
  return (
    <div
      className={`xl:hidden fixed top-0 left-0 h-screen overflow-auto w-9/12 sm:w-1/2 md:w-2/5 bg-white transition-transform transform duration-500 ease-in-out z-50 border-r-2 ${toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <div className="flex flex-col">
        <div className="h-10 flex items-center justify-center mt-10">
          <Image src={logo} alt="Trad Icon" width={120} />
        </div>
        <Link href={"/"} className="py-3 px-4 hover:bg-black/50 hover:text-white">Home</Link>
        <Link href={"/"} className="py-3 px-4 hover:bg-black/50 hover:text-white">Dashboard</Link>
        <Link href={"/services"} className="py-3 px-4 hover:bg-black/50 hover:text-white">Services</Link>
        <div
          onClick={() => setAboutUsHover(!aboutUsHover)}
        >
          <p className="py-3 px-4 hover:bg-black/50 hover:text-white">About Us</p>
          {aboutUsHover && (
            <div className=" bg-blue-50 text-black flex flex-col justify-center items-center gap-5 p-5 rounded-md text-sm">
              <Link href={"/aboutus"}>About NexTrade</Link>
              <Link href={"/why-choose-us"}>Why Choose Us</Link>
              <Link href={"/"}>Contact Us</Link>
            </div>
          )}
        </div>
        <div
          onClick={() => setRecoursesHover(!recoursesHover)}
        >
          <p className="py-3 px-4 hover:bg-black/50 hover:text-white">Recourses</p>
          {recoursesHover && (
            <div className=" bg-blue-50 text-black flex flex-col justify-center items-center gap-5 p-5 rounded-md text-sm">
              <Link href={"/payment"}>Payment Methods</Link>
              <Link href={"/helpCenter"}>Help Centre</Link>
            </div>
          )}
        </div>
        <Link href={'/login'} className="my-2 mx-4"><Button>Login</Button></Link>
        <Link href={'/register'} className="my-2 mx-4">  <Button>Register</Button></Link>
      </div>
    </div>
  );
};
export default Drawer;
