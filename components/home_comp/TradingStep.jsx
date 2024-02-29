"use client";

import Container from "@/components/library/Container";
import { RiLuggageDepositFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { MdAreaChart } from "react-icons/md";
import { BsCreditCard2FrontFill } from "react-icons/bs";

// variants
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";

const TradingStep = () => {
  return (
    <Container className="py-20">
      {/* Trading step section content */}

      <Title> Start trading in few steps</Title>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray">
        {/* 1st cart */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="bg-senary/80 shadow-xl px-10 py-5 rounded text-white"
        >
          <div className="flex items-center gap-2">
            <RiLuggageDepositFill className="w-8 h-8 text-white" />
            <h1 className="text-xl font-medium">Deposit</h1>
          </div>
          <p className="text-sm mt-3">
            Open real account and add funds. We work with more than 20 payment
            systems.
          </p>
        </motion.div>
        {/* 2nd cart */}
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="bg-primary/80 shadow-xl px-10 py-5 rounded text-white"
        >
          <div className="flex items-center gap-2">
            <MdAreaChart className="w-8 h-8 text-white" />
            <h1 className="text-xl font-medium">Trade</h1>
          </div>
          <p className="text-sm mt-3 text-white">
            Trade any of 100 assets and stocks. Use technical analysis and trade
            the news
          </p>
        </motion.div>
        {/* 3rd cart */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="bg-septenary/80 shadow-xl px-10 py-5 rounded text-white"
        >
          <div className="flex items-center gap-2">
            <BsCreditCard2FrontFill className="w-8 h-8 text-white" />
            <h1 className="text-xl font-medium">Withdraw</h1>
          </div>
          <p className="text-sm mt-3 text-white">
            Get funds easily to your bank card or e-wallet. We take no
            commission.
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default TradingStep;
