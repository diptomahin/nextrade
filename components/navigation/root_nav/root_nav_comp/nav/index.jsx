/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../../../../utils/anim";
import "./index.css";
import NavLink from "../nav_link/NavLink";
import FooterLink from "../footer_link/FooterLink";
import Curve from "../curve/Curve";

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

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu pl-[60px] pr-5 sm:px-[70px] md:px-[100px] py-8"
    >
      <div className="body">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="nav"
        >
          <div className="font-extralight text-zinc-400 border-b border-primary mt-10 md:mt-[90px] pb-2 mb-4 uppercase">
            Navigation
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                className="xs:text-xl md:text-3xl font-bold"
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
        <FooterLink />
      </div>
      <Curve />
    </motion.div>
  );
}
