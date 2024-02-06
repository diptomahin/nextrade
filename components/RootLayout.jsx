"use client";
import React from "react";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "./common/root_nav/RootNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard");
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
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
