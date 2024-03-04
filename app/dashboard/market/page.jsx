import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketAllProducts from "@/components/traders_comp/market/MarketAllProducts";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import SidePortfolio from "@/components/traders_comp/market/SidePortfolio";

// add title in metadata
export const metadata = {
  title: "Market - Dashboard",
  description:
    "Explore the dynamic world of cryptocurrency trading on NexTrade's Market Dashboard. Stay updated with real-time data on a wide range of cryptocurrencies, including prices, trading volumes, and market trends. Analyze and compare crypto assets effortlessly to make informed investment decisions and seize opportunities in the ever-evolving crypto market landscape.",
};

const MarketPage = () => {
  return (
    <div>
      <div className="flex flex-col 2xl:flex-row gap-5">
        <div className="w-full 2xl:w-[68%]  3xl:w-[73%]">
          <h2 className=" text-2xl font-semibold mb-3">Market Coins</h2>
          <p className="">
            Choose from a wide range of trade options with hundreds of different
            instruments available.
          </p>
          <div className="bg-white dark:bg-tertiary p-3 shadow rounded-xl my-6">
            <MarketHeadLine></MarketHeadLine>
          </div>
          <MarketAllProducts />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row  2xl:flex-col gap-5 w-full 2xl:w-[32%]  3xl:w-[27%]">
          <SidePortfolio />
          <SideWatchlist />
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
