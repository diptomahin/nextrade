"use client";
import Container from "@/components/library/Container";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Link from "next/link";
import Title from "@/components/library/Title";
import DarkButton from "../library/Button";

const StartTrading = () => {
  return (
    <Container className="py-20">
      <Title>Explore Market</Title>
      <motion.p
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center font-medium text-darkGray"
      >
        Ready to dive in? Navigate to the trading interface, choose the asset
        you want to trade
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="mt-10"
      >
        <CryptoCurrencyMarket
          width="100%"
          height={700}
          colorTheme="dark"
        ></CryptoCurrencyMarket>
      </motion.div>
      <Link
        href="/dashboard/trading"
        className="flex items-center justify-center mt-10"
      >
        {" "}
        <DarkButton>Start Trading</DarkButton>
      </Link>
    </Container>
  );
};

export default StartTrading;
