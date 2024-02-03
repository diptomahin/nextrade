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

const StartTrading = () => {
  return (
    <Container className="grid lg:grid-cols-2 md:grid-cols-0 item-center justify-center gap-4">
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="w-full py-10"
      >
        <h1 className="lg:text-3xl md:text-3xl text-4xl my-4 text-primary font-bold">
          Embark on Your Trading Journey with NexTrade: Start Trading Today
        </h1>
        <p className="text-lg my-4 text-slate-500">
          Ready to dive in? Navigate to the trading interface, choose the asset
          you want to trade
        </p>
        <Link href="/dashboard/trading">
          {" "}
          <Button>Start Trading</Button>
        </Link>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="md:mt-0 mt-10"
      >
        <CryptoCurrencyMarket width="100%" height={320}></CryptoCurrencyMarket>
      </motion.div>
    </Container>
  );
};

export default StartTrading;
