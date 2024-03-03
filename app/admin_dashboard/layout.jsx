"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import AdminNav from "@/components/common/AdminNav";
import AdminSideNav from "@/components/common/AdminSideNav";
import AdminChecker from "@/routes/AdminChecker";

const AdminDashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <AdminChecker>
      <div className="min-h-screen bg-secondary text-zinc-100  font-montserrat">
        <div className="fixed top-0 w-full h-16  3xl:pl-[220px] z-40 bg-secondary">
          <AdminNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </div>
        <div className="hidden  3xl:block fixed h-full w-[220px] z-50 bg-secondary">
          <AdminSideNav />
        </div>
        <div className="block  3xl:hidden bg-secondary">
          <Drawer
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "200px",
                border: "none",
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
            <AdminSideNav />
          </Drawer>
        </div>

        <div className="mx-5  3xl:ml-[240px] pt-[84px] pb-5 bg-secondary">
          {children}
        </div>
      </div>
    </AdminChecker>
  );
};

export default AdminDashboard;
