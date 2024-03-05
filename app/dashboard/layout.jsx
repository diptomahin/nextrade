"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TradersNav from "@/components/common/TradersNav";
import TradersSideNav from "@/components/common/TradersSideNav";
import TradersChecker from "@/routes/TradersChecker";
const queryClient = new QueryClient();

const Dashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TradersChecker>
        <div className="min-h-screen bg-gray-100 text-black dark:bg-secondary dark:text-zinc-100 font-montserrat">
          <div
            className={`fixed top-0 w-full h-16 transition-all duration-200 ease-out ${
              isActiveMenu ? "3xl:pl-[80px]" : "3xl:pl-[200px]"
            }  z-40 bg-gray-100 text-black dark:bg-secondary dark:text-zinc-100`}
          >
            <TradersNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
          </div>
          <div
            className={`hidden 3xl:block fixed h-full transition-all duration-200 ease-out ${
              isActiveMenu ? " w-[80px]" : " w-[200px]"
            } z-50 bg-gray-100 text-black dark:bg-secondary dark:text-zinc-100`}
          >
            <TradersSideNav
              isActiveMenu={isActiveMenu}
              setIsActiveMenu={setIsActiveMenu}
            />
          </div>
          <div className="block  3xl:hidden bg-gray-100 text-black dark:bg-secondary dark:text-zinc-100">
            <Drawer
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                  border: "none",
                  // backgroundColor: "#181e2c",
                },
                "@media (min-width: 1280px)": {
                  display: "none",
                },
              }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {/* trader sidebar */}
              <TradersSideNav />
            </Drawer>
          </div>

          <div
            className={`mx-4 lg:mx-7 transition-all duration-200 ease-out  ${
              isActiveMenu ? "3xl:ml-[108px]" : "3xl:ml-[228px]"
            } pt-[93px] pb-7`}
          >
            {children}
          </div>
        </div>
      </TradersChecker>
    </QueryClientProvider>
  );
};

export default Dashboard;
