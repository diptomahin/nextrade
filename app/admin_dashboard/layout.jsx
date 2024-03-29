"use client";
import { Drawer } from "@mui/material";
import { useState } from "react";
import AdminNav from "@/components/common/AdminNav";
import AdminSideNav from "@/components/common/AdminSideNav";
import AdminChecker from "@/routes/AdminChecker";
import { usePathname } from "next/navigation";

const AdminDashboard = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AdminChecker>
      <div className="min-h-screen bg-whiteBg text-zinc-950 dark:bg-secondary dark:text-zinc-100 font-montserrat">
        <div
          className={`fixed top-0 w-full h-16 transition-all duration-200 ease-out ${
            isActiveMenu ? "3xl:pl-[80px]" : "3xl:pl-[200px]"
          }  z-40 bg-whiteBg text-zinc-950 dark:bg-secondary dark:text-zinc-100`}
        >
          <AdminNav setMobileOpen={setMobileOpen} mobileOpen={mobileOpen} />
        </div>
        <div
          className={`hidden 3xl:block fixed h-full transition-all duration-200 ease-out ${
            isActiveMenu ? " w-[80px]" : " w-[200px]"
          } z-50 bg-whiteBg text-zinc-950 dark:bg-secondary dark:text-zinc-100`}
        >
          <AdminSideNav
            isActiveMenu={isActiveMenu}
            setIsActiveMenu={setIsActiveMenu}
            pathname={pathname}
          />
        </div>
        <div className="block  3xl:hidden bg-whiteBg text-zinc-950 dark:bg-secondary dark:text-zinc-100">
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

        <div
          className={`mx-4 lg:mx-7 transition-all duration-200 ease-out  ${
            isActiveMenu ? "3xl:ml-[108px]" : "3xl:ml-[228px]"
          } pt-[93px] pb-7`}
        >
          {children}
        </div>
      </div>
    </AdminChecker>
  );
};

export default AdminDashboard;
