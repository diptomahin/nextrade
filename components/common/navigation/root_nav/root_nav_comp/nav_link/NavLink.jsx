import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../../../../../utils/anim";
import "./index.css";

export default function NavLink({
  data,
  isActive,
  setSelectedIndicator,
  className,
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className={`link ${className}`}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={`indicator ${isActive && "active"}`}
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}
