"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import PrivateRoute from "@/routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TradersDashboardNavbar from "@/components/navigation/trader_nav/TradersNav";
import TradersDashboardSidebar from "@/components/navigation/trader_nav/TradersSideNav";
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
          <div className="fixed top-0 w-full h-[70px] pl-3 2xl:pl-[234px] pr-3 py-[10px] z-40 bg-zinc-100">
            <TradersDashboardNavbar
              setMobileOpen={setMobileOpen}
              mobileOpen={mobileOpen}
            />
          </div>
          <div className="hidden 2xl:block fixed left-3 top-3 pr-3 pb-6 h-full w-[222px] z-50 bg-zinc-100">
            <TradersDashboardSidebar />
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
              <TradersDashboardSidebar />
            </Drawer>
          </div>

          <div className="mx-5 2xl:ml-[242px] pt-[82px] pb-10 bg-zinc-100">
            {children}
          </div>
        </div>
      </PrivateRoute>
    </QueryClientProvider>
  );
};

export default Dashboard;
