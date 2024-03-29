import Link from "next/link";
import { fadeIn } from "../../utils/variants";
import { GrClose } from "react-icons/gr";
import Container from "@/components/library/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import logo from "../../../assets/logo/NexTrade_Favicon-White.png";
import logo2 from "../../../assets/logo/NexTrade-Logo-White.png";
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import "./RootNavDrawer.css";

const RootNavDrawer = ({ setIsActive, user, logOut }) => {
  const [activeTab, setActiveTab] = React.useState("");
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-primary text-white z-[1000]">
      <div className="ripple-background">
        <div className="circle xxl shade1"></div>
        <div className="circle xl shade2"></div>
        <div className="circle lg shade3"></div>
        <div className="circle md shade4"></div>
        <div className="circle sm shade5"></div>
      </div>
      <Container className="h-full z-10">
        <div className="flex items-center justify-between gap-6 py-8">
          <div className="flex-1">
            <button
              onClick={() => {
                setIsActive(false);
                setActiveTab("");
              }}
              className="btn btn-sm h-10 w-10  bg-transparent hover:bg-transparent text-white px-0 py-0 border-none shadow-none"
            >
              <GrClose className="text-3xl" />
            </button>
          </div>

          <Link
            href="/"
            className="hidden md:flex items-center justify-center gap-[5px] h-fit w-fit"
          >
            <Image src={logo2} alt="Logo" width={140} height={"auto"} />
          </Link>

          {/* logo */}
          <Link href="/" className="flex justify-center md:hidden">
            <Image src={logo} alt="Logo" width={40} height={"auto"} />
          </Link>

          {user?.email ? (
            <div className="flex-1 flex items-center justify-end">
              <button
                onClick={() => {
                  logOut();
                  setIsActive(false);
                }}
                className="btn btn-sm w-24 md:w-28 h-9 pl-5 pr-0 bg-white hover:bg-white text-black text-nowrap text-xs md:text-sm font-medium shadow-none border-none rounded-md justify-start hover:gap-4 transition-all duration-300 ease-in-out"
              >
                Logout
                <IoIosLogOut />
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex-1 flex items-center justify-end"
            >
              <button
                onClick={() => {
                  logOut();
                  setIsActive(false);
                }}
                className="btn btn-sm w-28 h-9 pl-5 pr-0 bg-white hover:bg-white text-black text-nowrap text-xs md:text-sm font-medium shadow-none border-none rounded-md justify-start hover:gap-4 transition-all duration-300 ease-in-out"
              >
                Login
                <IoIosArrowForward />
              </button>
            </Link>
          )}
        </div>

        <div className="relative my-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute left-0 top-0 flex flex-col items-start gap-8 text-2xl font-medium transform md:transform-none ${
              activeTab === "" ? "translate-x-0" : "-translate-x-[200%]"
            } duration-700 ease-in-out`}
          >
            <Link
              href="/"
              onClick={() => setIsActive(false)}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-linear"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsActive(false)}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200 ease-linear"
            >
              Services
            </Link>
            <button
              onClick={() => setActiveTab("resources")}
              className={`hover:opacity-100 flex items-center  transition-all duration-200 ease-linear ${
                activeTab === "resources"
                  ? "opacity-100 gap-6"
                  : "opacity-70 gap-1"
              }`}
            >
              <span>Resources</span> <IoIosArrowForward />
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`hover:opacity-100 flex items-center transition-all duration-200 ease-linear ${
                activeTab === "company"
                  ? "opacity-100 gap-6"
                  : "opacity-70 gap-1"
              }`}
            >
              <span>Company</span> <IoIosArrowForward />
            </button>
          </motion.div>
          <AnimatePresence mode="wait">
            {activeTab === "market" && (
              <motion.div
                key="market"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full top-0 left-0 md:left-60 flex flex-col gap-5 items-start text-xl font-medium"
              >
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                  animate={activeTab === "" ? "close" : "open"}
                  onClick={() => setActiveTab("")}
                  className="flex items-center gap-1 text-2xl md:hidden mb-3 font-semibold"
                >
                  <IoChevronBack />
                  Back
                </motion.div>
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
                    Cryptocurrencies
                  </Link>
                </motion.h1>
                <motion.h1
                  variants={fadeIn("left", 0.25)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={() => setIsActive(false)}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Stocks & indices
                  </Link>
                </motion.h1>
                <motion.h1
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    href="/"
                    onClick={() => setIsActive(false)}
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Commodities
                  </Link>
                </motion.h1>
              </motion.div>
            )}
            {activeTab === "resources" && (
              <motion.div
                key="resources"
                className="absolute h-full top-0 left-0 md:left-60 flex flex-col gap-5 items-start text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                  animate={activeTab === "" ? "close" : "open"}
                  onClick={() => setActiveTab("")}
                  className="flex items-center gap-1 text-2xl md:hidden mb-3 font-semibold"
                >
                  <IoChevronBack />
                  Back
                </motion.div>
                <motion.h1
                  variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/payment_method"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Payment Methods
                  </Link>
                </motion.h1>
              </motion.div>
            )}
            {activeTab === "company" && (
              <motion.div
                key="company"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute h-full top-0 left-0 md:left-60 flex flex-col gap-5 items-start text-xl font-medium"
              >
                <motion.div
                  variants={fadeIn("left", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                  animate={activeTab === "" ? "close" : "open"}
                  onClick={() => setActiveTab("")}
                  className="flex items-center gap-1 text-2xl md:hidden mb-3 font-semibold"
                >
                  <IoChevronBack />
                  Back
                </motion.div>
                <motion.h1
                  variants={fadeIn("left", 0.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/about_nextrade"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    About NexTrade
                  </Link>
                </motion.h1>
                <motion.h1
                  variants={fadeIn("left", 0.25)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/why_nextrade"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    {" "}
                    Why NexTrade
                  </Link>
                </motion.h1>
                <motion.h1
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/contact_us"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Contact Us
                  </Link>
                </motion.h1>
                <motion.h1
                  variants={fadeIn("left", 0.55)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/help_center"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Help Center
                  </Link>
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default RootNavDrawer;
