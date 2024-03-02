"use client";

import Footer from "./common/Footer";
import { usePathname } from "next/navigation";
import RootNav from "./common/RootNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useAuth from "@/hooks/useAuth";
import Loading from "./library/loading/Loading";

const queryClient = new QueryClient();

const MainLayout = ({ children }) => {
  const { loading } = useAuth();
  const pathname = usePathname();
  const noHeaderFooter =
    pathname.includes("login") ||
    pathname.includes("register") ||
    pathname.includes("dashboard") ||
    pathname.includes("admin_dashboard") ||
    pathname.includes("success");

  if (loading && !noHeaderFooter) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-quaternary">
        <Loading />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      {noHeaderFooter || <RootNav />}

      {children}
      {noHeaderFooter || <Footer />}
    </QueryClientProvider>
  );
};

export default MainLayout;
