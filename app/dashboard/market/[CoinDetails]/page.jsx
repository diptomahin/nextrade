import CoinDetailsBody from "@/components/traders_comp/market/CoinDetailsBody";

// add title in metadata
export const metadata = {
  title: "Explore coin - Dashboard",
  description: "Discover and invest in cryptocurrencies with NexTrade's Explore Coin Dashboard. Access detailed coin information, interactive charts, and seamless investing options.",
};
const CoinDetails = ({ params }) => {
  return (
    <CoinDetailsBody params={params} />
  )

};

export default CoinDetails;
