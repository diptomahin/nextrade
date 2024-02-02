"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import PrivateRoute from "@/routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TradersNav from "@/components/common/traders_nav/TradersNav";
import TradersSideNav from "@/components/common/traders_nav/TradersSideNav";
const queryClient = new QueryClient();

const Dashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PrivateRoute>
        <div className="min-h-screen bg-zinc-100 font-inter">
          <div className="fixed top-0 w-full h-[70px] 2xl:pl-[230px] p-2 z-40 bg-zinc-100">
            <TradersNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
          </div>
          <div className="hidden 2xl:block fixed left-2 top-2 pr-3 pb-4 h-full w-[222px] z-50 bg-zinc-100">
            <TradersSideNav />
          </div>
          <div className="block 2xl:hidden">
            <Drawer
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                  border: "none",
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

          <div className="mx-5 2xl:ml-[238px] pt-[82px] pb-10 bg-zinc-100">
            {children}
          </div>
        </div>
      </PrivateRoute>
    </QueryClientProvider>
  );
};

export default Dashboard;
