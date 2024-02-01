"use client";
import React from "react";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";
import RootNav from "../navigation/root_nav/RootNav";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  // console.log(location);
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard");
  return (
    <div className="font-dm">
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
    </div>
  );
};

export default MainLayout;
