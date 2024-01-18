"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/library/Button/Button";
import logo from "../../../assets/logo/nextrade-logo.svg";

const Drawer = ({ toggleMenu }) => {
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 h-screen w-9/12 sm:w-1/2 md:w-2/5 bg-white transition-transform transform duration-500 ease-in-out z-50 ${
        toggleMenu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col px-6 gap-8">
        <div className="h-10 flex items-center justify-center mt-10">
          <Image src={logo} alt="Trad Icon" width={120} />
        </div>
        <button>Home</button>
        <button>Dashboard</button>
        <button>Services</button>
        <button>About Us</button>
        <button>Recourses</button>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};
export default Drawer;
