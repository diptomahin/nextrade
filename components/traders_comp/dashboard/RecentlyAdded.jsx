import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const RecentlyAdded = () => {
  return (
    <div className="md:col-span-3 xl:col-span-2 w-full bg-[#21212f] p-5 rounded-xl">
      <div className="flex items-center justify-between  border-b pb-2 border-b-darkThree">
        <h3 className="text-xl font-semibold">Recently added</h3>
        <Link
          href="/dashboard/watchlist"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all
        </Link>
      </div>

      {/* content */}
      <div className="space-y-3 mt-5">
        {/* 1 */}
        <div className="flex items-center justify-between bg-darkBG px-4 py-3 rounded">
          <div className="flex items-center gap-3">
            <p>1.</p>
            {/* <img src="" alt="icon" /> */}
            <div className="w-10 h-10 rounded-full border"></div>
            <h4>Bitcoin</h4>
          </div>
          <p>$ 1000000</p>
        </div>

        {/* 2 */}
        <div className="flex items-center justify-between bg-darkBG px-4 py-3 rounded">
          <div className="flex items-center gap-3">
            <p>2.</p>
            {/* <img src="" alt="icon" /> */}
            <div className="w-10 h-10 rounded-full border"></div>
            <h4>Bitcoin</h4>
          </div>
          <p>$ 1000000</p>
        </div>

        {/* 3 */}
        <div className="flex items-center justify-between bg-darkBG px-4 py-3 rounded">
          <div className="flex items-center gap-3">
            <p>3.</p>
            {/* <img src="" alt="icon" /> */}
            <div className="w-10 h-10 rounded-full border"></div>
            <h4>Bitcoin</h4>
          </div>
          <p>$ 1000000</p>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
