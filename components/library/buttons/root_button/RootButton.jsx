"use client";

import cn from "@/components/utils/cn";
import "./RootButton.css";
import Magnetic from "../../Magnetic";
//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../utils/variants";

const RootButton = ({ children, className, ...restProps }) => {
  return (
    <Magnetic>
      <motion.button
        //framer motion
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        // scroll-text
        className={cn(
          "px-10 rounded-full font-dm font-medium text-white h-12 lg:h-14 text-sm lg:text-lg bg-primary",
          className
        )}
        {...restProps}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
};
export default RootButton;
