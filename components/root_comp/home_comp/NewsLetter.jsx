"use client";
import Container from "@/components/library/Container.jsx";
import Button from "../../library/buttons/root_button/RootButton.jsx";
import TextField from "@mui/material/TextField";
import React from "react";
//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants.js";

const NewsLetter = () => {
  const inputStyle = {
    color: "#939db1",
    borderColor: "#939db1",
  };

  const labelStyle = {
    color: "#939db1",
  };

  return (
    <Container className="bg-gradient-to-br from-darkOne to-darkTwo border-x border-t border-darkThree shadow-xl flex items-center justify-between rounded-xl my-20 p-10">
      <div>
        <motion.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-xl md:text-2xl font-medium pb-4"
        >
          Get Daily Updates
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-sm text-gray font-montserrat font-medium"
        >
          Join now with NexTrade to get the latest news and bonuses
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className=" flex items-center gap-10"
      >
        <TextField
          id="standard-basic"
          label="Enter your email"
          placeholder="example@gmail.com"
          variant="standard"
          InputLabelProps={{
            style: labelStyle,
          }}
          InputProps={{
            style: inputStyle,
          }}
        />
        <Button>Subscribe</Button>
      </motion.div>
    </Container>
  );
};

export default NewsLetter;
