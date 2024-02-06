import Link from "next/link";
import { fadeIn } from "../../utils/variants";
import { GrClose } from "react-icons/gr";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import logo from "../../../assets/logo/NexTrade-Logo-White.png";

const RootNavDrawer = ({ isActive, setIsActive }) => {
  const [activeTab, setActiveTab] = React.useState(false);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-primary text-white transition-transform transform  ${
        isActive ? "translate-y-0" : "-translate-y-full"
      } duration-700 ease-in-out z-[1000]`}
    >
      <Container className="w-full h-full ">
        <div className="flex items-center justify-between gap-6 py-8">
          <Magnetic>
            <div
              onClick={() => {
                setIsActive(false);
                setActiveTab("");
              }}
            >
              <button className="btn btn-sm w-10 h-10 rounded-full bg-transparent hover:bg-transparent border-white hover:border-white text-white  p-2">
                <GrClose className="w-full h-full" />
              </button>
            </div>
          </Magnetic>
          <Magnetic>
            <Link href="/">
              <Image src={logo} alt="Logo" width={144} height={160} />
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
                    onClick={() => setIsActive(false)}
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
                    onClick={() => setIsActive(false)}
                    href="/why_choose_us"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    {" "}
                    Why Choose Us
                  </Link>
                </motion.h1>
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
                    onClick={() => setIsActive(false)}
                    href="/payment_method"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Payment Methods
                  </Link>
                </motion.h1>
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
                    onClick={() => setIsActive(false)}
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
                    onClick={() => setIsActive(false)}
                    href="/contact_us"
                    className="opacity-70 hover:opacity-100 transition-opacity duration-100 ease-linear"
                  >
                    Contact Us
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
