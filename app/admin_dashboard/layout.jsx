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
      <div className="min-h-screen bg-darkBG font-inter">
        <div className="fixed top-0 w-full h-[70px] 2xl:pl-[230px] p-2 z-40 bg-darkBG">
          <AdminNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </div>
        <div className="hidden 2xl:block fixed left-2 top-2 pr-3 pb-4 h-full w-[222px] z-50 bg-darkBG">
          <AdminSideNav />
        </div>
        <div className="block 2xl:hidden bg-darkBG">
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
            <AdminSideNav />
          </Drawer>
        </div>

        <div className="mx-5 2xl:ml-[238px] pt-[82px] pb-10 bg-darkBG">
          {children}
        </div>
      </div>
    </AdminChecker>
  );
};

export default AdminDashboard;
