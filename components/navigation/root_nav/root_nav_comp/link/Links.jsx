"use client";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../../../../utils/anim";
import Body from "../body/Body";
import Footer from "../footer/Footer";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
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
    title: "Payment Method",
    href: "/payment_method",
  },
  {
    title: "Contact Us",
    href: "/contact_us",
  },
  {
    title: "Help Centre",
    href: "/help_center",
  },
  {
    title: "Login",
    href: "/login",
  },
];

export default function Links({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit">
      <div className="wrapper">
        <Body
          setIsActive={setIsActive}
          links={links}
          selectedLink={selectedLink}
          setSelectedLink={setSelectedLink}
        />
        <Footer />
      </div>
    </motion.div>
  );
}
