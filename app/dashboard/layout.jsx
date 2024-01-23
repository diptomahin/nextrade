"use client";
import AdminDashboardNavbar from "@/components/common/Navbar/AdminDashboardNavbar";
import TradersDashboardNavbar from "@/components/common/Navbar/TradersDashboardNavbar";
import TradersDashboardSidebar from "@/components/common/Navbar/TradersDashboardSidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="left-0 top-0 fixed w-full h-[82px] 2xl:pl-[250px] z-40 bg-primary">
        <TradersDashboardNavbar />
      </div>
      <div className="hidden 2xl:block h-full left-0 top-0 fixed w-[250px] z-50 border-r-2">
        <TradersDashboardSidebar />
      </div>

      <div className="min-h-full 2xl:ml-[250px] px-5 sm:px-8 md:px-10 pt-[116px] pb-10">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
