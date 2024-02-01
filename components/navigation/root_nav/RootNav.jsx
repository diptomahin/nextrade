/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "../../utils/anim";
import "./root_nav.css";
import Links from "./root_nav_comp/link/Links";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import logo from "../../../assets/logo/NexTrade-Logo-White.png";
import { IoMdArrowDropup } from "react-icons/io";
import { fadeIn } from "../../utils/variants";
import React from "react";

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
    <motion.nav
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="header px-5 lg:px-10 2xl:px-20 py-6 bg-primary"
    >
      <div className="bar">
        <Link href="/">
          <Magnetic>
            <Image src={logo} alt="Logo" className="w-32 lg:w-40" />
          </Magnetic>
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="el"
        >
          <div className={`burger ${isActive && "burgerActive"}`}></div>
          <div className="label">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
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
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="background"
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Links setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.nav>
  );
}
