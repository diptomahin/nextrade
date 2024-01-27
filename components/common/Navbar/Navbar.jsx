"use client";
import * as React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import "@/components/common/Navbar/navbarStyle.css";
import useAuth from "@/utils/useAuth";
import Navigation from "./navigation/Navigation";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { user, logOut } = useAuth();

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

  return (
    <nav>
      <Navigation />
      <button
        onClick={handleScrollToTop}
        className={`p-2 bg-gradient-to-r  from-[#239FFE] to-[#0272E5] hover:bg-gradient-to-r  hover:from-[#0272E5] hover:to-[#239FFE] border-none text-white fixed bottom-10 right-5 md:right-10 rounded-full ${
          !scrolled && "hidden"
        }`}
      >
        <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
      </button>
    </nav>
  );
};

export default Navbar;
