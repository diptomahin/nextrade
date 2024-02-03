"use client";
import React from "react";
import Container from "@/components/library/Container";
import Button from "@/components/library/buttons/root_button/RootButton";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants";
import Link from "next/link";
import Title from "@/components/library/Title";

const StartTrading = () => {
  return (
    <Container className="py-20">
      <Title>Start Your Trading Journey with NexTrade</Title>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center font-medium text-gray"
      >
        Ready to dive in? Navigate to the trading interface, choose the asset
        you want to trade
      </motion.p>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="mt-10"
      >
        <CryptoCurrencyMarket width="100%" height={320}></CryptoCurrencyMarket>
      </motion.div>
      <Link
        href="/dashboard/trading"
        className="flex items-center justify-center mt-10"
      >
        {" "}
        <Button>Start Trading</Button>
      </Link>
    </Container>
  );
};

export default StartTrading;
