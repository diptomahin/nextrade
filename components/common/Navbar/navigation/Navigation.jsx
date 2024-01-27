/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import "./navigation.css";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import Magnetic from "@/components/library/Magnetic/Magnetic";

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  console.log(isActive);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  return (
    <>
      <div className="main">
        <div className="header w-[60px] h-[60px]">
          <Magnetic>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="button w-14 h-14 md:w-[60px] md:h-[60px]"
            >
              <div className={`burger ${isActive && "burgerActive"}`}></div>
            </div>
          </Magnetic>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navigation;
