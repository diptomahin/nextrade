import Link from "next/link";
import { fadeIn } from "../../utils/variants";
import { GrClose } from "react-icons/gr";
import Container from "@/components/library/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import logo from "../../../assets/logo/NexTrade-Logo-White.png";
import logo2 from "../../../assets/logo/NexTrade_Favicon-White.png";
import DarkButton from "@/components/library/Button";
import { IoChevronBack } from "react-icons/io5";

const RootNavDrawer = ({ isActive, setIsActive, user, logOut }) => {
  const [activeTab, setActiveTab] = React.useState("");
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-primary text-white transition-transform transform  ${
        isActive ? "translate-y-0" : "-translate-y-full"
      } duration-700 ease-in-out z-[1000]`}
    >
      <Container className="h-full">
        <div className="flex items-center justify-between gap-6 py-8">
          <div
            onClick={() => {
              setIsActive(false);
              setActiveTab("");
            }}
          >
            <button className="btn rounded-full bg-transparent hover:bg-transparent border-white hover:border-white text-white  px-2">
              <GrClose className="text-3xl" />
            </button>
          </div>
          <Link href="/" className="hidden 2xl:block">
            <Image
              src={logo}
              alt="Logo"
              style={{ width: "144px", height: "160" }}
            />
          </Link>
          <Link href="/" className="hidden md:block 2xl:hidden">
            <Image
              src={logo2}
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </Link>
          {user?.email && (
            <div
              onClick={() => {
                logOut();
                setIsActive(false);
              }}
            >
              <DarkButton className="bg-white/5 hover:bg-white/15 border-white hover:border-white text-white">
                Logout
              </DarkButton>
            </div>
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
              className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setIsActive(false)}
              className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
            >
              Services
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
              onClick={() => setActiveTab("company")}
              className={`hover:opacity-100 transition-opacity duration-100 ease-linear ${
                activeTab === "company" ? "opacity-100" : "opacity-70"
              }`}
            >
              Company
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
                <motion.h1
                  variants={fadeIn("left", 0.25)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <Link
                    onClick={() => setIsActive(false)}
                    href="/payment_method"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Trader&apos;s Tools
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
                    href="/payment_method"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    NexTrade Blog
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
