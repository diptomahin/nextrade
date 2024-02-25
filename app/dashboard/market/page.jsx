import MarketHeadLine from "@/components/traders_comp/market/MarketHeadLine";
import MarketAllProducts from "@/components/traders_comp/market/MarketAllProducts";
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";


// add title in metadata
export const metadata = {
  title: "Market - Dashboard",
  description: 'About page from Nextrade',
};


const MarketPage = () => {

  return (
    <div>
      <div className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree  p-4 rounded">
        <h2 className=" text-2xl font-semibold mb-3">Market Coins</h2>
        <p>
          Choose from a wide range of trade options with hundreds of different
          instruments available.
        </p>
        {/* market headline */}
        <MarketHeadLine></MarketHeadLine>
      </div>
      <div className="flex flex-col xl:flex-row gap-5 my-4">
        <MarketAllProducts />
        {/* side watchlist */}
          <SideWatchlist />
      </div>
    </div>
  );
};

export default MarketPage;
