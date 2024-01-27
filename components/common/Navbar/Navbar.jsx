"use client";
import * as React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import Navigation from "./navigation/Navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../assets/logo/NexTrade-Logo-Original.png";
import Link from "next/link";
import Container from "@/components/library/Container";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
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

  return (
    <nav
      className={`fixed top-[30px] w-full z-[100] ${
        pathname === "/register" ||
        pathname === "/login" ||
        (pathname.includes("/dashboard") && "hidden")
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo" width={150} />
          </Link>

          <Navigation />
        </div>
        <button
          onClick={handleScrollToTop}
          className={`p-2 fixed bottom-10 right-5 md:right-10 bg-primary text-white border-none rounded-full z-[100] ${
            !scrolled && "hidden"
          }`}
        >
          <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
        </button>
      </Container>
    </nav>
  );
};

export default Navbar;
