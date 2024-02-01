'use client'
import Container from "@/components/library/Container.jsx";
import Button from "../library/buttons/root_button/RootButton.jsx";
import TextField from "@mui/material/TextField";
import React from "react";
//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../utils/variants";


const NewsLetter = () => {
  const inputStyle = {
    color: "white",
    borderColor: "white",
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <Container className=" text-white bg-primary md:flex justify-between rounded-xl px-10 py-10">
      <div className="mb-10 md:mb-0">
        <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="lg:text-3xl md:text-3xl text-4xl font-bold pb-4">
          Get Daily Updates
        </motion.h1>
        <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="font-light">
          Join now with NexTrade to get the latest news and bonuses
        </motion.p>
      </div>
      <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className=" flex items-center gap-8">
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
