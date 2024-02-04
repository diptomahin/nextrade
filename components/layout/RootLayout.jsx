"use client";
import React from "react";
import Footer from "../common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "../common/RootNav";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard");
  return (
    <div className="font-montserrat">
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
