/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import styles from './style.module.scss';
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";
import "./index.css";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Trade",
    href: "/dashboard",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About NexTrade",
    href: "/about_nextrade",
  },
  {
    title: "Why Choose Us",
    href: "/why_choose_us",
  },
  {
    title: "Contact",
    href: "/contact_us",
  },
  {
    title: "Payment Method",
    href: "/payment_method",
  },
  {
    title: "Help Centre",
    href: "/help_centre",
  },
  {
    title: "Login",
    href: "/login",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
