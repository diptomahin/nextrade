"use client";
import React from "react";
import investImage from "../../assets/invest-solution.png";
import Image from "next/image";
import Container from "@/components/library/Container";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";

const InvestSolutions = () => {
  return (
    <Container className="py-20">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-20">
        {/* Image side */}
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-1"
        >
          <Image src={investImage} alt="Invest" className="w-full h-full" />
        </motion.div>

        {/* Content side */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-1"
        >
          <Title className="text-start pt-10">
            {" "}
            Trading snd investment solutions
          </Title>
          <motion.ul
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-sm mt-5 font-medium text-darkGray"
          >
            <motion.li
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <span className="font-semibold text-primary">
                Intuitive Interface :{" "}
              </span>{" "}
              Navigate with ease through a lightning-fast platform, optimized
              for desktop and mobile. Crystal-clear data visualization puts
              everything you need at your fingertips.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="my-5"
            >
              <span className="font-semibold text-primary">
                Personalized Solutions :{" "}
              </span>{" "}
              Tailor your experience to your unique goals and risk tolerance.
              Get matched with the right resources and educational materials to
              accelerate your learning.
            </motion.li>
            <motion.li
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <span className="font-semibold text-primary">
                Unwavering Security :
              </span>{" "}
              Your data and funds are protected by industry-leading encryption
              and security protocols. Rest assured, your investments are in safe
              hands.
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </Container>
  );
};

export default InvestSolutions;
