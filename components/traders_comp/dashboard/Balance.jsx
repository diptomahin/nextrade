import DarkButton from "@/components/library/buttons/DarkButton";
import Link from "next/link";

const Balance = () => {
  return (
    <div className="md:col-span-6 2xl:col-span-2 w-full bg-[#21212f] p-5 rounded-xl">
      <div className="flex items-center justify-between  border-b pb-2 border-b-darkThree">
        <h3 className="text-xl font-semibold">Total Balance</h3>
        <Link
          href="/dashboard/market"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default Balance;
