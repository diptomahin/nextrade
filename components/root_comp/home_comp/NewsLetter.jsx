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
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="mt-20 mb-40"
    >
      <Container className="bg-gradient-to-br from-darkOne to-darkTwo border-x border-t border-darkThree shadow-xl flex items-center justify-between rounded-xl p-10">
        <div>
          <h1 className="text-xl md:text-2xl font-medium pb-4">
            Get Daily Updates
          </h1>
          <p className="text-sm text-gray font-montserrat font-medium">
            Join now with NexTrade to get the latest news and bonuses
          </p>
        </div>
        <div className=" flex items-center gap-10">
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
        </div>
      </Container>
    </motion.div>
  );
};

export default NewsLetter;
