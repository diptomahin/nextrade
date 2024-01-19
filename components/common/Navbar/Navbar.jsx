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

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [aboutUsHover, setAboutUsHover] = React.useState(false);
  const [recoursesHover, setRecoursesHover] = React.useState(false);

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
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/services"}>Services</Link>
      <div
        onMouseEnter={() => setAboutUsHover(true)}
        onMouseLeave={() => setAboutUsHover(false)}
        className="p-3 relative"
      >
        <button>About Us</button>
        {aboutUsHover && (
          <div className="absolute w-48 bg-blue-50 text-black -left-[45%] top-10 flex flex-col justify-center items-center gap-5 p-5 rounded-md text-sm">
            <Link href={"/aboutus"}>About NexTrade</Link>
            <Link href={"/why-choose-us"}>Why Choose Us</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        )}
      </div>
      <div
        onMouseEnter={() => setRecoursesHover(true)}
        onMouseLeave={() => setRecoursesHover(false)}
        className="p-3 relative"
      >
        <button>Recourses</button>
        {recoursesHover && (
          <div className="absolute w-48 bg-blue-50 text-black  -left-[45%] top-10 flex flex-col justify-center items-center gap-5 p-5 rounded-md text-sm">
            <Link href={"/payment"}>Payment Methods</Link>
            <Link href={"/"}>Help Centre</Link>
          </div>
        )}
      </div>
    </>
  );

  return (
    <nav
      className={`fixed z-[100] top-0 w-full ${
        scrolled
          ? "bg-secondary py-4 transition-all duration-700 ease-in-out"
          : "bg-transparent py-6 transition-all duration-700 ease-in-out"
      }`}
    >
      <div>
        <button
          onClick={handleScrollToTop}
          className={`p-2 bg-secondary hover:bg-secondary border-none text-white fixed bottom-10 right-5 md:right-10 rounded-full ${
            !scrolled && "hidden"
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
          className={`hidden xl:flex items-center gap-10 text-lg font-medium ${
            scrolled
              ? "text-white transition-all duration-700 ease-in-out"
              : "transition-all duration-700 ease-in-out"
          }`}
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
