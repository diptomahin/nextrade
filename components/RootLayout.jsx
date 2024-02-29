"use client";
import React from "react";
import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "./common/RootNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";

const queryClient = new QueryClient();

const MainLayout = ({ children }) => {
  const pathname = usePathname();
  const { loading } = useAuth();
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard") ||
    pathname.includes("success");

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-quaternary">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-quaternary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-montserrat bg-quaternary">
        {noHeaderFooter || <RootNav />}

        {children}
        {noHeaderFooter || <Footer></Footer>}
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
