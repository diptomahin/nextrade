import AdminArticle from "@/components/AdminDashboard/AdminArticle";
import AdminDashHeader from "@/components/AdminDashboard/AdminDashHeader";
import AdminDashManageCoin from "@/components/AdminDashboard/AdminDashManageCoin";
import AdminDashUserCount from "@/components/AdminDashboard/AdminDashUserCount";
import AdminDashUserProfile from "@/components/AdminDashboard/AdminDashUserProfile";
import AdminDashboardChart from "@/components/AdminDashboard/AdminDashboardChart";
import AdminReviews from "@/components/AdminDashboard/AdminReviews";


// add title in metadata
export const metadata = {
  title: "Admin Dashboard - Nextrade",
  description: "Admin Dashboard page from Nextrade",
};

const page = () => {
  return (
    <div className="w-full">
      {/* Header slide */}
      <AdminDashHeader/>

      <div className=" grid xl:grid-cols-12 gap-4 mt-5">
        {/* Admin dashboard chart   */}
        <div className=" xl:col-span-8 ">
          

        {/* <AdminDashboardChart/> */}
        <AdminArticle/>
        <AdminDashManageCoin/>
        </div>
        {/* user Profile */}
        <div className=" xl:col-span-4 ">

        <AdminDashUserProfile/>
        <AdminDashUserCount/>
        </div>

      </div>
      

      {/* user Reviews */}
      <AdminReviews/>
      
    </div>
  );
};

export default page;