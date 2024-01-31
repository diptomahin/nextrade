"use client"
import React from "react";
import RootNav from "../navigation/root_nav/RootNav";
import Footer from "../footer/Footer";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  // console.log(location);
  const noHeaderFooter = pathname.includes('login') || pathname.includes('register') || pathname.includes('dashboard')
  return (
    <div className="font-dm">
      {
        noHeaderFooter || <>
          <RootNav />
        </>
      }
      
      {children}
      {
        noHeaderFooter || <>
          <Footer></Footer>
        </>
      }
    </div>
  );
};

export default MainLayout;
