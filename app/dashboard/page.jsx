import Balance from "@/components/traders_comp/dashboard/Balance";
import QuickTrade from "@/components/traders_comp/dashboard/quick-trade/QuickTrade";
import RecentlyAdded from "@/components/traders_comp/dashboard/RecentlyAdded";
import TopAssets from "@/components/traders_comp/dashboard/TopAssets";
import Trending from "@/components/traders_comp/dashboard/Trending";
import SideHistory from "@/components/traders_comp/market/SideHistory";
import SidePortfolio from "@/components/traders_comp/market/SidePortfolio";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";

// add title in metadata
export const metadata = {
  title: "Dashboard",
  description: "About page from Nextrade",
};

const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* total balance */}
      <Balance />

      {/* trending assets */}
      <QuickTrade />

      {/* top assets slider */}
      <TopAssets />

      {/* trending assets */}
      <Trending />

      {/* watchlist */}
      <div className="h-full xl:col-span-6 3xl:col-span-4">
        <SidePortfolio />
      </div>

      {/* history */}
      <div className="h-full xl:col-span-6 3xl:col-span-4">
        <SideHistory />
      </div>

      {/* watchlist */}
      <div className="h-full xl:col-span-6 3xl:col-span-4">
        <SideWatchlist />
      </div>
    </div>
  );
};

export default page;
