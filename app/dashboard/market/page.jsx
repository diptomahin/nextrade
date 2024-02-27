import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketAllProducts from "@/components/traders_comp/market/MarketAllProducts";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";
import SidePortfolio from "@/components/traders_comp/market/SidePortfolio";


// add title in metadata
export const metadata = {
  title: "Market - Dashboard",
  description: "Explore the dynamic world of cryptocurrency trading on NexTrade's Market Dashboard. Stay updated with real-time data on a wide range of cryptocurrencies, including prices, trading volumes, and market trends. Analyze and compare crypto assets effortlessly to make informed investment decisions and seize opportunities in the ever-evolving crypto market landscape.",
};


const MarketPage = () => {

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-5">

        <div className="w-full xl:w-[68%] 2xl:w-[73%]">
          <h2 className=" text-2xl font-semibold mb-3">Market Coins</h2>
          <p className="">
            Choose from a wide range of trade options with hundreds of different
            instruments available.
          </p>
          <div className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree p-3 rounded-lg my-6">
            <MarketHeadLine></MarketHeadLine>
          </div>
          <MarketAllProducts />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row  xl:flex-col gap-6 w-full xl:w-[32%] 2xl:w-[27%]">
          <SidePortfolio />
          <SideWatchlist />
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
