"use client";
import React from "react";
import Image from "next/image";
import Icon1 from "../../assets/Services/icon-1.png";
import Icon2 from "../../assets/Services/icon-2.png";
import Icon3 from "../../assets/Services/icon-3.png";
import Icon4 from "../../assets/Services/icon-4.png";
import Icon5 from "../../assets/Services/icon-5.png";
import Icon6 from "../../assets/Services/icon-6.png";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import Link from "next/link";
import DarkButton from "../library/Button";

const Services = () => {
  return (
    <Container className="py-20">
      <Title> Service We Offer</Title>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center text-darkGray font-medium"
      >
        We offer the best services around from installations to repairs,
        maintenance, and more!
      </motion.p>

      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray">
        {/* cart 1  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon1}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Trading Education and Training</h3>
          </div>
          <p className="text-sm font-medium mt-3 text-darkGray">
            Equip yourself with the knowledge and skills needed for successful
            trading through comprehensive educational programs, workshops, and
            training sessions.
          </p>
        </motion.div>
        {/* cart 2  */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon3}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Market Analysis and Insights</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Stay ahead of market trends with in-depth analysis and actionable
            insights, enabling informed decision-making for your trading
            activities.
          </p>
        </motion.div>
        {/* cart 3  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon2}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">
              Cryptocurrency Investment Strategies
            </h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Navigate the complexities of the cryptocurrency market with
            specialized strategies designed to maximize returns and minimize
            volatility.
          </p>
        </motion.div>
        {/* cart 4  */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon4}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Real-time Market Alerts</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Receive timely alerts on market movements, news, and key events,
            ensuring you stay informed and can act promptly to capitalize on
            emerging opportunities.
          </p>
        </motion.div>
        {/* cart 5  */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon6}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Customized Portfolio Management</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Equip yourself with the knowledge and skills needed for successful
            trading through comprehensive educational programs, workshops, and
            training sessions.
          </p>
        </motion.div>
        {/* cart 6  */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" 3xl:h-44 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-6 rounded text-white"
        >
          <div className="w-full flex items-center justify-start gap-3">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={40}
              height={40}
              placeholder="blur"
            />
            <h3 className="font-semibold">Algorithmic Trading Solutions</h3>
          </div>

          <p className="text-sm font-medium mt-3 text-darkGray">
            Leverage cutting-edge algorithms to automate your trading
            strategies, ensuring precise execution and optimal returns.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        {" "}
        <Link
          href="/services"
          className="flex items-center justify-center mt-10"
        >
          {" "}
          <DarkButton>More</DarkButton>
        </Link>
      </motion.div>
    </Container>
  );
};

export default Services;
