"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { background } from "../../utils/anim";
import "./root_nav.css";
import Links from "../nav_comp/link/Links";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import logo from "../../../assets/logo/NexTrade-Logo-White.png";
import logo2 from "../../../assets/logo/NexTrade_Favicon-White.png";
import { IoMdArrowDropup } from "react-icons/io";
import React from "react";
import Container from "../../library/Container";
import RootButton from "../../library/buttons/root_button/RootButton";
import Language from "../../library/Language";

export default function RootNav() {
  const [isActive, setIsActive] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
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
    <>
      <nav
        className={`w-full h-auto box-border fixed transition-all duration-200 ease-out ${
          scrolled ? "py-3 bg-darkTwo/50 backdrop-blur-sm" : "py-10"
        } z-50`}
      >
        <Container className="bar flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Magnetic>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className="el w-12 h-12 z-50"
              >
                <div className={`burger ${isActive && "burgerActive"}`}></div>
              </div>
            </Magnetic>
            <Language className=" text-white" />
          </div>
          <Magnetic>
            <Link href="/">
              {scrolled ? (
                <Image src={logo2} alt="Logo" className="w-12" />
              ) : (
                <Image src={logo} alt="Logo" className="w-36 lg:w-40" />
              )}
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/dashboard">
              <RootButton>Trade Now</RootButton>
            </Link>
          </Magnetic>
        </Container>
      </nav>
      <Magnetic>
        <button
          onClick={handleScrollToTop}
          className={`p-2 fixed bottom-10 right-5 md:right-10 bg-primary text-white border-none rounded-full z-[99] ${
            !scrolled && "hidden"
          }`}
        >
          <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
        </button>
      </Magnetic>
      <div className="fixed w-full h-auto z-[100] bg-primary">
        <Container>
          <motion.div
            variants={background}
            initial="initial"
            animate={isActive ? "open" : "closed"}
            className="background"
          ></motion.div>
          <AnimatePresence mode="wait">
            {isActive && <Links setIsActive={setIsActive} />}
          </AnimatePresence>
        </Container>
      </div>
    </>
  );
}
