"use client";
import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../../../utils/anim";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import useAuth from "@/hooks/useAuth";

export default function Links({ setIsActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const { user } = useAuth();
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
      title: "Payment_Method",
      href: "/payment_method",
    },

    {
      title: "Why_Choose_Us",
      href: "/why_choose_us",
    },
    {
      title: "About_NexTrade",
      href: "/about_nextrade",
    },
    {
      title: "Contact_Us",
      href: "/contact_us",
    },
    {
      title: "Help_Centre",
      href: "/help_center",
    },

    ...(user?.email
      ? []
      : [
          {
            title: "Login",
            href: "/login",
          },
        ]),
  ];

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
