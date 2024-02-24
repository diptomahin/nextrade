import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const History = () => {
  return (
    <div className="md:col-span-3 w-full h-96 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>History</h3>
        <Link href="/dashboard/market">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>
    </div>
  );
};

export default History;
