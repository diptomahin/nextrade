"use client";
import TradersDashboardNavbar from "@/components/common/Navbar/TradersDashboardNavbar";
import TradersDashboardSidebar from "@/components/common/Navbar/TradersDashboardSidebar";
import { Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const Dashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="min-h-screen">
      {/* navbar */}
      <div className="left-0 top-0 fixed w-full h-[82px] 2xl:pl-[250px] z-40 bg-primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="xl:block 2xl:hidden mr-2"
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton >
          Dashboard
        </Toolbar>
        <TradersDashboardNavbar />
      </div>

      {/* drawer */}
      <div className="hidden 2xl:block h-full left-0 top-0 fixed w-[250px] z-50 border-r-2">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "250px" } }}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="mr-2 2xl:hidden"
            >
              <CloseIcon sx={{ color: "blue" }} />
            </IconButton >
          </Toolbar>
          <TradersDashboardSidebar />
        </Drawer>
        <Drawer
          sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "250px" } }}
          variant="permanent"
          open
        >
          <TradersDashboardSidebar />
        </Drawer>
      </div>

      <div className="min-h-full 2xl:ml-[250px] px-5 sm:px-8 md:px-10 pt-[116px] pb-10">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
