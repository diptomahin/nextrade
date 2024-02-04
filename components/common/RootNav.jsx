/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { background } from "../utils/anim";
import "./root_nav.css";
import Links from "./root_nav_comp/link/Links";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-White.png";
import { IoMdArrowDropup } from "react-icons/io";
import { fadeIn } from "../utils/variants";
import React from "react";
import Container from "../library/Container";
import RootButton from "../library/buttons/root_button/RootButton";

export default function index() {
  const [isActive, setIsActive] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

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
    <>
      <motion.nav
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="header py-6"
      >
        <Container className="bar flex items-center justify-between">
          <Magnetic>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="el w-12 h-12 md:w-14 md:h-14 xl:w-16 xl:h-16 z-[1005]"
            >
              <div className={`burger ${isActive && "burgerActive"}`}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-36 lg:w-40 -z-[100]" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/dashboard">
              <RootButton>Trade Now</RootButton>
            </Link>
          </Magnetic>
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
        </Container>
      </motion.nav>
      <div className="fixed w-full h-auto z-[100] bg-gradient-to-br from-primary to-[#352786]">
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
