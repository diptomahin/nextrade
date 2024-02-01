import "./index.css";
import { translate } from "../../../../utils/anim";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <Link href="/">Github</Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href="/">Discord</Link>
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link href="/">Youtube</Link>
        </motion.li>
      </ul>
    </div>
  );
}
