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

//Pages
const NavLinks = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Services",
    pathName: "/services",
  },
  {
    route: "About",
    pathName: "/about",
  },
  {
    route: "Resources",
    pathName: "/resources",
  },
];
const otherLinks = ["Trade Hub", "Signin/Login"];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  console.log(toggleMenu);

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
          className={`p-2 bg-secondary hover:bg-secondary border-none text-white fixed bottom-10 right-10 rounded-full ${
            !scrolled && "hidden"
          }`}
        >
          <IoMdArrowDropup className="w-10 h-10" />
        </button>
      </div>
      <Container className="flex justify-between items-center">
        <Link href={'/'}><Image src={logo} alt="Trad Icon" width={140} placeholder="blur" /></Link>
        <div className="hidden lg:flex items-center gap-10 text-lg font-medium">
          <Link href={'/login'}><Button> Login</Button></Link>
          <Link href={'/register'}><Button> Register</Button></Link>
        </div>
        <div className="lg:hidden">
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
