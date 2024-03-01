import AdminDashHeader from "@/components/AdminDashboard/AdminDashHeader";
import AdminDashManageCoin from "@/components/AdminDashboard/AdminDashManageCoin";
import AdminDashUserCount from "@/components/AdminDashboard/AdminDashUserCount";
import AdminDashUserProfile from "@/components/AdminDashboard/AdminDashUserProfile";
import AdminDashboardChart from "@/components/AdminDashboard/AdminDashboardChart";


// add title in metadata
export const metadata = {
  title: "Admin Dashboard - Nextrade",
  description: "Admin Dashboard page from Nextrade",
};

const page = () => {
  return (
    <div>
      {/* Header slide */}
      <AdminDashHeader/>

      <div className=" grid grid-cols-12 gap-4 mt-5">
        {/* Admin dashboard chart   */}
        <div className=" col-span-8 ">
          

        <AdminDashboardChart/>
        <AdminDashManageCoin/>
        </div>
        {/* user Profile */}
        <div className=" col-span-4 ">

        <AdminDashUserProfile/>
        <AdminDashUserCount/>
        </div>

      </div>
      


      {/* user Reviews */}
      
    </div>
  );
};

export default page;