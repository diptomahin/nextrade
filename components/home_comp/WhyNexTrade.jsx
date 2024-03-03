"use client";
import React from "react";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import Link from "next/link";
import { MdOutlineSupportAgent, MdOutlineSecurity } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { SiRetool } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import DarkButton from "../library/Button";

const WhyChooseUs = () => {
  return (
    <Container className="py-20">
      <Title>Why NexTrade</Title>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center text-darkGray font-medium"
      >
        At NexTrade, your trading experience is our top priority, and we stand
        out for several compelling reasons.
      </motion.p>

      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray">
        {/* cart 1  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <FaUserCheck className="w-12 h-12 text-primary" />
            <h3 className="text-lg font-semibold">Ease of Use</h3>
          </div>
          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Look for a user-friendly interface that makes it easy to navigate
            the platform, execute trades, and access essential information.
            Intuitive design is particularly important for beginners.
          </p>
        </motion.div>
        {/* cart 2  */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <MdOutlineSupportAgent className="w-12 h-12  text-primary" />
            <h3 className="text-lg font-semibold">Customer Support</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Check the availability and responsiveness of customer support. A
            platform with excellent customer service can be crucial, especially
            during technical issues or if you have questions about your account.
          </p>
        </motion.div>
        {/* cart 3  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <MdOutlineSecurity className="w-12 h-12  text-primary" />
            <h3 className="text-lg font-semibold">Security Measures</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Ensure the platform employs robust security measures to protect your
            personal information and funds. Look for features like two-factor
            authentication and encryption.
          </p>
        </motion.div>
        {/* cart 4  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <SiRetool className="w-12 h-12  text-primary" />
            <h3 className="text-lg font-semibold">Research Tools</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Assess the platform&apos;s research and analysis tools. Real-time
            market data, charts, and technical analysis features can be
            essential for making informed trading decisions.
          </p>
        </motion.div>
        {/* cart 5  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <FaMoneyBillTransfer className="w-12 h-12  text-primary" />
            <h3 className="text-lg font-semibold">Fees and Charges</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Understand the fee structure, including transaction costs,
            commissions, spreads, and any other charges associated with trading.
            Low fees can significantly impact your overall returns.
          </p>
        </motion.div>
        {/* cart 6  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-64 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
        >
          <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
            <GrResources className="w-12 h-12  text-primary" />
            <h3 className="text-lg font-semibold">Educational Resources</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5 text-darkGray">
            Consider platforms that provide educational resources, tutorials,
            and tools to help you understand the basics of trading and improve
            your skills over time.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Link
          href="/why_choose_us"
          className="flex items-center justify-center mt-10"
        >
          {" "}
          <DarkButton>More</DarkButton>
        </Link>
      </motion.div>
    </Container>
  );
};

export default WhyChooseUs;
