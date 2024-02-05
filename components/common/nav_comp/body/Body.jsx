import { motion } from "framer-motion";
import Link from "next/link";
import "./index.css";
import { blur, translate } from "../../../utils/anim";
import { usePathname } from "next/navigation";

export default function Body({
  setIsActive,
  links,
  selectedLink,
  setSelectedLink,
}) {
  const pathname = usePathname();
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="body">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link
            key={`l_${index}`}
            href={href}
            className={pathname == href ? "text-purple-600" : ""}
          >
            <motion.p
              onClick={() => setIsActive(false)}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
