"use client";
import React from "react";
//images
import logo from "../../assets/nextrade-logo.png";
import investImage from "../../assets/stockImage1.png";
import Image from "next/image";
import Container from "@/components/library/Container";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../utils/variants";

const InvestSolutions = () => {
  return (
    <Container className="my-24">
      <div className="xl:flex items-center justify-between gap-20 ">
        {/* Image side */}
        <motion.div
          variants={fadeIn("right", 0.9)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image src={investImage} alt="Invest" className=" mx-auto" />
        </motion.div>
        {/* Content side */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-1"
        >
          <Image src={logo} alt="logo" width={80} className="my-2" />
          <h1 className="lg:text-3xl md:text-3xl text-4xl font-bold text-primary">
            Trading And Investment Solutions Build in MOdern Platform
          </h1>
          <motion.ul
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm mt-8 font-semibold"
          >
            <li className=" my-2">
              <span className=" text-primary">Intuitive Interface:</span>{" "}
              Navigate with ease through a lightning-fast platform, optimized
              for desktop and mobile. Crystal-clear data visualization puts
              everything you need at your fingertips.
            </li>
            <li className=" my-2">
              <span className=" text-primary">Personalized Solutions:</span>{" "}
              Tailor your experience to your unique goals and risk tolerance.
              Get matched with the right resources and educational materials to
              accelerate your learning.
            </li>
            <li className=" my-2">
              <span className=" font-semibold text-primary">
                Unwavering Security:
              </span>
              Your data and funds are protected by industry-leading encryption
              and security protocols. Rest assured, your investments are in safe
              hands.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </Container>
  );
};

export default InvestSolutions;
