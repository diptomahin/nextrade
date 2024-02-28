import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";
import SideWatchlist from "../market/SideWatchlist";

const Watchlist = () => {
  return (
    <div className="h-96 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>Watchlist</h3>
        <Link href="/dashboard/watchlist">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>
      <div className="">
        <SideWatchlist />
      </div>
    </div>
  );
};

export default Watchlist;
