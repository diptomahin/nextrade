"use client";
import Container from "../library/Container";
import { TickerTape } from "react-ts-tradingview-widgets";
//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../utils/variants";

const LiveCoinPrice = () => {
  return (
    <Container>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="absolute bottom-5 w-full"
      >
        <TickerTape displayMode="adaptive"></TickerTape>
      </motion.div>
    </Container>
  );
};

export default LiveCoinPrice;
