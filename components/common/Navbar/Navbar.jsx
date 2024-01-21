"use client";
import * as React from "react";
import logo from "../../../assets/nextrade-logo.png";
import Button from "@/components/library/Button/Button";
import { IoMdArrowDropup } from "react-icons/io";
import Container from "@/components/library/Container";
import Image from "next/image";
import Drawer from "./Drawer";
import { RiCloseLine, RiMenu5Fill } from "react-icons/ri";
import Link from "next/link";
import "@/components/common/Navbar/navbarStyle.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // showing active navlink
  const pathname = usePathname();

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const navLinks = (
    <>
      <Link href={"/"} className={clsx("activeStyle", {'text-primary border-b-4 border-b-primary font-semibold': pathname === "/"})}>Home</Link>
      <Link href={"/dashboard"} className={clsx("activeStyle", {'text-primary border-b-4 border-b-primary font-semibold': pathname === "/dashboard"})}>Dashboard</Link>
      <Link href={"/services"} className={clsx("activeStyle", {'text-primary border-b-4 border-b-primary font-semibold': pathname === "/services"})}>Services</Link>
      <div
        className="p-3 relative activeStyle flex flex-col justify-center items-center"
      >
        <button className={clsx("activeStyle", {'text-primary border-b-4 border-b-primary font-semibold': pathname === "/aboutus" || pathname === "/why-choose-us" || pathname ==="/contactUs"})}>About Us </button>

        <div className="activeMenu text-center min-w-max overflow-hidden rounded-t-none border border-t-4 border-t-[#35c07c] bg-blue-50 text-black flex flex-col justify-center items-center rounded-md text-sm">
          <Link href={"/aboutus"} className="px-4 py-[10px] w-full">About NexTrade</Link>
          <Link href={"/why-choose-us"} className="px-4 py-[10px] w-full">Why Choose Us</Link>
          <Link href={"/contactUs"} className="px-4 py-[10px] w-full">Contact Us</Link>
        </div>

      </div>
      <div
        className="p-3 relative activeStyle flex flex-col justify-center items-center"
      >
        <button className={clsx("activeStyle", {'text-primary border-b-4 border-b-primary font-semibold': pathname === "/payment" || pathname === "/helpCenter"})}>Recourses</button>
          <div className="activeMenu text-center min-w-max overflow-hidden rounded-t-none border border-t-4 border-t-[#35c07c] bg-blue-50 text-black flex flex-col justify-center items-center rounded-md text-sm">
            <Link href={"/payment"} className="px-4 py-[10px] w-full">Payment Methods</Link>
            <Link href={"/helpCenter"} className="px-4 py-[10px] w-full">Help Centre</Link>
          </div>
      </div>
    </>
  );

  return (
    <nav
      className={`fixed z-[100] top-0 w-full ${scrolled
        ? "bg-[#E9EEF1] py-4 transition-all duration-700 ease-in-out"
        : "bg-transparent py-6 transition-all duration-700 ease-in-out"
        }`}
    >
      <div>
        <button
          onClick={handleScrollToTop}
          className={`p-2 bg-secondary hover:bg-secondary border-none text-white fixed bottom-10 right-5 md:right-10 rounded-full ${!scrolled && "hidden"
            }`}
        >
          <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
        </button>
      </div>
      <Container className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} alt="Trad Icon" width={140} placeholder="blur" />
        </Link>
        <div
          className='hidden xl:flex items-center gap-10 text-lg font-medium '
        >
          {navLinks}
        </div>
        <div className="hidden xl:flex items-center gap-5">
          <Link href={"/login"}>
            <Button> Login</Button>
          </Link>
          <Link href={"/register"}>
            <Button> Register</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <Button onClick={() => setToggleMenu(!toggleMenu)} className="px-3">
            {toggleMenu ? <RiCloseLine /> : <RiMenu5Fill />}
          </Button>
        </div>
      </Container>

      {toggleMenu && <Drawer toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
