import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const TopAssets = () => {
  return (
    <div className="md:col-span-6 xl:col-span-4 h-80">
      <div className="w-full flex justify-between">
        <h3>Top assets</h3>
        <Link href="/dashboard/market">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>
    </div>
  );
};

export default TopAssets;
