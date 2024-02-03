"use client";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Icon1 from "../../../assets/Services/icon-1.png";
import Icon2 from "../../../assets/Services/icon-2.png";
import Icon3 from "../../../assets/Services/icon-3.png";
import Icon4 from "../../../assets/Services/icon-4.png";
import Icon5 from "../../../assets/Services/icon-5.png";
import Icon6 from "../../../assets/Services/icon-6.png";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Title from "@/components/library/Title";

const Services = () => {
  return (
    <Container className="py-20">
      <Title> Service We Offer</Title>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center text-gray font-medium"
      >
        We offer the best services around from installations to repairs,
        maintenance, and more!
      </motion.p>

      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-10 text-gray">
        {/* cart 1  */}
        <motion.Card
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon1}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">
              Trading Education and Training
            </h3>
          </div>
          <p className="text-sm text-justify font-medium mt-5">
            Equip yourself with the knowledge and skills needed for successful
            trading through comprehensive educational programs, workshops, and
            training sessions.
          </p>
        </motion.Card>
        {/* cart 2  */}
        <motion.Card
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon3}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">
              Market Analysis and Insights
            </h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5">
            Stay ahead of market trends with in-depth analysis and actionable
            insights, enabling informed decision-making for your trading
            activities.
          </p>
        </motion.Card>
        {/* cart 3  */}
        <motion.Card
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon2}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">
              Cryptocurrency Investment Strategies
            </h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5">
            Navigate the complexities of the cryptocurrency market with
            specialized strategies designed to maximize returns and minimize
            volatility.
          </p>
        </motion.Card>
        {/* cart 4  */}
        <motion.Card
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon4}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">Real-time Market Alerts</h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5">
            Receive timely alerts on market movements, news, and key events,
            ensuring you stay informed and can act promptly to capitalize on
            emerging opportunities.
          </p>
        </motion.Card>
        {/* cart 5  */}
        <motion.Card
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon6}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">
              Customized Portfolio Management
            </h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5">
            Equip yourself with the knowledge and skills needed for successful
            trading through comprehensive educational programs, workshops, and
            training sessions.
          </p>
        </motion.Card>
        {/* cart 6  */}
        <motion.Card
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="h-60 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-8 rounded-xl text-white"
        >
          <div className="w-full flex items-center justify-start gap-5">
            <Image
              src={Icon5}
              alt="Trad Icon"
              width={60}
              height={60}
              placeholder="blur"
            />
            <h3 className="text-lg font-semibold">
              Algorithmic Trading Solutions
            </h3>
          </div>

          <p className="text-sm text-justify font-medium mt-5">
            Leverage cutting-edge algorithms to automate your trading
            strategies, ensuring precise execution and optimal returns.
          </p>
        </motion.Card>
      </div>
    </Container>
  );
};

export default Services;
