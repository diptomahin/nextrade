import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const Trending = () => {
  return (
    <div className="md:col-span-3 xl:col-span-2 w-full h-80 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>Trending</h3>
        <Link href="/dashboard/market">
          <DarkButton>See all</DarkButton>
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

export default Trending;
