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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TradersChecker>
        <div className="min-h-screen bg-darkBG text-zinc-100 font-montserrat">
          <div className="fixed top-0 w-full h-16  3xl:pl-[220px] z-40 bg-darkBG">
            <TradersNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
          </div>
          <div className="hidden  3xl:block fixed h-full w-[220px] z-50 bg-darkBG">
            <TradersSideNav />
          </div>
          <div className="block  3xl:hidden bg-darkBG">
            <Drawer
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                  border: "none",
                  backgroundColor: "#181e2c",
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
              <TradersSideNav />
            </Drawer>
          </div>

          <div className="mx-5  3xl:ml-[240px] pt-[84px] pb-5">{children}</div>
        </div>
      </TradersChecker>
    </QueryClientProvider>
  );
};

export default Dashboard;
