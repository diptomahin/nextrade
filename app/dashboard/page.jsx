import Balance from "@/components/traders_comp/dashboard/Balance";
import History from "@/components/traders_comp/dashboard/History";
import QuickTrade from "@/components/traders_comp/dashboard/quick-trade/QuickTrade";
import RecentlyAdded from "@/components/traders_comp/dashboard/RecentlyAdded";
import TopAssets from "@/components/traders_comp/dashboard/TopAssets";
import Trending from "@/components/traders_comp/dashboard/Trending";
import Watchlist from "@/components/traders_comp/dashboard/Watchlist";
import SideHistory from "@/components/traders_comp/market/SideHistory";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";

// add title in metadata
export const metadata = {
  title: "Dashboard",
  description: "About page from Nextrade",
};

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
      {/* total balance */}
      <Balance />

      {/* trending assets */}
      <Trending />

      {/* recently added */}
      <RecentlyAdded />

      {/* top assets slider */}
      <TopAssets />

      {/* watchlist */}
      <div className="hidden xl:block col-span-2">
        <SideWatchlist />
      </div>

      {/* trending assets */}
      <QuickTrade />

      {/* watchlist */}
      <div className="block xl:hidden md:col-span-3">
        <SideWatchlist />
      </div>

      {/* recently added */}

      <div className="h-full xl:col-span-3">
        <SideHistory />
      </div>
    </div>
  );
};

export default page;
