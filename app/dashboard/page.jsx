import Balance from "@/components/traders_comp/dashboard/Balance";
import QuickTrade from "@/components/traders_comp/dashboard/quick-trade/QuickTrade";
import TopAssets from "@/components/traders_comp/dashboard/TopAssets";
import Transactions from "@/components/traders_comp/dashboard/Transactions";
import SideHistory from "@/components/traders_comp/market/SideHistory";
import SidePortfolio from "@/components/traders_comp/market/SidePortfolio";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";

// add title in metadata
export const metadata = {
  title: "Dashboard - NexTrade",
  description: "Dashboard page from Nextrade",
};

const page = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-7">
      {/* total balance */}
      <Balance />

      {/* trending assets */}
      <QuickTrade />

      {/* top assets slider */}
      <TopAssets />

      {/* trending assets */}
      <Transactions />

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
