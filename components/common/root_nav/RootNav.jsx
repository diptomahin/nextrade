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
import { fadeIn } from "../../utils/variants";
import { GrClose } from "react-icons/gr";
import useAuth from "@/hooks/useAuth";
import DarkButton from "@/components/library/buttons/DarkButton";

export default function RootNav() {
  const [isActive, setIsActive] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(false);

  const { user, loading } = useAuth();

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
        className={`w-full h-auto box-border fixed transition-all duration-200 ease-out z-[1000] ${
          scrolled ? "py-3 bg-darkTwo/50 backdrop-blur-sm" : "py-10"
        } z-50`}
      >
        <Container className="bar flex items-center justify-between ">
          <div className="flex items-center gap-6">
            <Magnetic>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className="el w-10 h-10 z-50"
              >
                <div className={`burger ${isActive && "burgerActive"}`}></div>
              </div>
            </Magnetic>
            <Language className="text-xl text-white" />
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
          {user?.email ? (
            <Magnetic>
              <Link href="/dashboard">
                <DarkButton> Trade Now</DarkButton>
              </Link>
            </Magnetic>
          ) : (
            <div className="flex items-center gap-5 ">
              <Magnetic>
                <Link href="/login">
                  <button className="hover:bg-primary/20 to-darkTwo hover:border border-darkThree py-2 px-4 text-lg font-medium rounded-xl text-primary">
                    Login
                  </button>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/register">
                  <DarkButton> Register</DarkButton>
                </Link>
              </Magnetic>
            </div>
          )}
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
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary text-white transition-transform transform  ${
          isActive ? "translate-y-0" : "-translate-y-full"
        } duration-700 ease-in-out z-[1000]`}
      >
        <Container className="w-full h-full ">
          <div className="flex items-center justify-between gap-6 py-10">
            <Magnetic>
              <button
                onClick={() => {
                  setIsActive(false);
                  setActiveTab("");
                }}
                className="w-10 h-10 rounded-full border border-white p-3"
              >
                <GrClose className="text-white w-full h-full" />
              </button>
            </Magnetic>
            <Magnetic>
              <Link href="/">
                <Image src={logo} alt="Logo" className="w-36 lg:w-40" />
              </Link>
            </Magnetic>
            <div className=""></div>
          </div>

          <div className="flex items-center gap-40 my-10">
            <div className="flex flex-col gap-8 items-start text-2xl font-medium">
              <Link
                href="/"
                onClick={() => setIsActive(false)}
                className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
              >
                Home
              </Link>
              <button
                onClick={() => setActiveTab("market")}
                className={`hover:opacity-100 transition-opacity duration-100 ease-linear ${
                  activeTab === "market" ? "opacity-100" : "opacity-70"
                }`}
              >
                Market
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`hover:opacity-100 transition-opacity duration-100 ease-linear ${
                  activeTab === "resources" ? "opacity-100" : "opacity-70"
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`hover:opacity-100 transition-opacity duration-100 ease-linear ${
                  activeTab === "about" ? "opacity-100" : "opacity-70"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`hover:opacity-100 transition-opacity duration-100 ease-linear ${
                  activeTab === "contact" ? "opacity-100" : "opacity-70"
                }`}
              >
                Contact Us
              </button>
            </div>
            <AnimatePresence mode="wait">
              {activeTab === "market" && (
                <motion.div
                  key="market"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5 items-start text-xl font-medium"
                >
                  <motion.h1
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setIsActive(false)}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      Coming...
                    </Link>
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/"
                      onClick={() => setIsActive(false)}
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      Coming...
                    </Link>
                  </motion.h1>
                  {/* <motion.h1
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.55)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1> */}
                </motion.div>
              )}

              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5 items-start text-xl font-medium"
                >
                  <motion.h1
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/about_nextrade"
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      About NexTrade
                    </Link>
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/why_choose_us"
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      {" "}
                      Why Choose Us
                    </Link>
                  </motion.h1>
                  {/* <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1> */}
                </motion.div>
              )}
              {activeTab === "resources" && (
                <motion.div
                  key="resources"
                  className="flex flex-col gap-5 items-start text-xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.h1
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/payment_method"
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      Payment Methods
                    </Link>
                  </motion.h1>
                  {/* <motion.h1
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1> */}
                  {/* <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1> */}
                </motion.div>
              )}
              {activeTab === "contact" && (
                <motion.div
                  key="contact"
                  className="flex flex-col gap-5 items-start text-xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.h1
                    variants={fadeIn("left", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/help_center"
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      Help Center
                    </Link>
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    <Link
                      href="/contact_us"
                      className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                    >
                      Contact Us
                    </Link>
                  </motion.h1>
                  {/* <motion.h1
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1>
                  <motion.h1
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                  >
                    Lorem ipsum dolor sit amet.
                  </motion.h1> */}
                </motion.div>
              )}

              {/* Repeat similar blocks for other tabs */}
            </AnimatePresence>
          </div>
        </Container>
      </div>
    </>
  );
}
