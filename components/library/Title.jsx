import cn from "../utils/cn";
import { fadeIn } from "../utils/variants";
import { motion } from "framer-motion";

const Title = ({ children, className }) => {
  return (
    <motion.h2
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className={cn(
        "text-3xl md:text-4xl text-center font-semibold text-zinc-100 pt-16 pb-5",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default Title;
