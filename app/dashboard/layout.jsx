"use client";
import TradersDashboardNavbar from "@/components/common/Navbar/TradersDashboardNavbar";
import TradersDashboardSidebar from "@/components/common/Navbar/TradersDashboardSidebar";
import { Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import PrivateRoute from "@/components/Routes/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Dashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <PrivateRoute>
        <div className="min-h-screen bg-[#F1F1F1]">
          {/* navbar */}
          <div className="left-0 top-0 fixed w-full h-[82px] 2xl:pl-[250px] z-40 bg-[#1D366F]">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  "@media (min-width: 1280px)": {
                    display: "none",
                    marginRight: "8px",
                  },
                }}
              >
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
              <TradersDashboardNavbar />
            </Toolbar>
          </div>

          {/* drawer */}
          <div className="hidden 2xl:block h-full left-0 top-0 fixed w-[250px] z-50 border-none">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              sx={{
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px", backgroundColor:"#1D366F" },
              }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
            >

              {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="mr-2 2xl:hidden"
              >
                <CloseIcon sx={{ color: "#1D366F" }} />
              </IconButton> */}


              <TradersDashboardSidebar />
            </Drawer>
            <Drawer
              sx={{
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px"},
              }}
              variant="permanent"
              open
            >
              <TradersDashboardSidebar />
            </Drawer>
          </div>

          <div className="min-h-full 2xl:ml-[250px] mt-[87px] p-4 bg-[#F1F1F1]">
            {children}
          </div>
        </div>
      </PrivateRoute>
    </QueryClientProvider>
  );
};

export default Dashboard;
