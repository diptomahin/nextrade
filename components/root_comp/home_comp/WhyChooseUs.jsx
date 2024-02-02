"use client";
import React from "react";
import logo from "../../../assets/nextrade-logo.png";
import Image1 from "../../../assets/metrics-concept-illustration_114360-3455.png";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Container from "@/components/library/Container";
//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants";

const WhyChooseUs = () => {
  return (
    <Container className="my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image side  */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=""
        >
          <Image width={500} height={500} src={Image1} alt="Invest" />
        </motion.div>
        {/* Content side */}
        <div className="pt-20">
          <Image src={logo} alt="logo" width={80} className="my-4" />
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:text-3xl md:text-3xl text-4xl my-4 font-bold text-primary"
          >
            Why Choose NexTrade ???
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-lg my-4 text-slate-500"
          >
            At NexTrade, your trading experience is our top priority, and we
            stand out for several compelling reasons.
          </motion.p>
          <div className="grid grid-cols-2 gap-3 font-semibold text-gray-500">
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2 " />
              Safety Comes First
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Bonus And Offers
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Low Charges
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Fast Transaction
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Easy Deposit And Withdraw
            </motion.p>
            <motion.p
              variants={fadeIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              24/7 Support
            </motion.p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
