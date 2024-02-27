import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const Balance = () => {
  return (
    <div className="md:col-span-6 xl:col-span-2 w-full h-72 bg-gradient-to-tl from-darkOne to-darkTwo p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>Total Balance</h3>
        <Link href="/dashboard/market">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>
    </div>
  );
};

export default Balance;
