"use client";
import cn from "../utils/cn";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";

const Subtitle = ({ children, className, animation = true }) => {
  return (
    <motion.p
      {...(animation && {
        variants: fadeIn("up", 0.05),
        initial: "hidden",
        whileInView: "show",
        viewport: { once: false, amount: 0.1 },
      })}
      className={cn("text-center text-darkGray font-medium", className)}
    >
      {children}
    </motion.p>
  );
};

export default Subtitle;
