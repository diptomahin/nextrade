import Watchlist from "./Watchlist";

// add title in metadata
export const metadata = {
  title: "Watchlist - NexTrade",
  description: "Watchlist page from Nextrade",
};
const page = () => {
  return (
    <div>
      <Watchlist/>
    </div>
  );
};

export default page;