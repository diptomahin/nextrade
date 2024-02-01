import "./index.css";
import { translate } from "../../../../utils/anim";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href="https://github.com/diptomahin/nextrade"
            className="flex items-center gap-1 group"
          >
            Github{" "}
            <span className="style text-sm transition-transform group-hover:text-secondary group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
              <PiArrowRightThin />
            </span>
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href="⁠Code Commandents⁠chit-chat"
            className="flex items-center gap-1 group"
          >
            Discord{" "}
            <span className="style text-sm transition-transform group-hover:text-secondary group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
              <PiArrowRightThin />
            </span>
          </Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link
            href="https://www.youtube.com/"
            className="flex items-center gap-1 group"
          >
            Youtube{" "}
            <span className="style text-sm transition-transform group-hover:text-secondary group-hover:-rotate-45 group-hover:translate-x-[3px] duration-300 ease-in-out">
              <PiArrowRightThin />
            </span>
          </Link>
        </motion.li>
      </ul>
    </div>
  );
}
