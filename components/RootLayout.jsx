"use client";
import React from "react";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "./common/root_nav/RootNav";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
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
        {/* <div
        className="cursor blur-[50px] bg-primary rounded-full"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div> */}
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
