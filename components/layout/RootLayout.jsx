"use client";
import React from "react";
import Footer from "../common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "../common/RootNav";
import { useEffect, useState } from "react";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);
  return (
    <div className="font-montserrat bg-darkBG">
      {noHeaderFooter || (
        <>
          <RootNav />
        </>
      )}

      {children}
      {noHeaderFooter || (
        <>
          <Footer></Footer>
        </>
      )}
      <div
        className="cursor blur-[90px] bg-primary rounded-full"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
    </div>
  );
};

export default MainLayout;
