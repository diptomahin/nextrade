import DarkButton from "@/components/library/buttons/DarkButton";
// import Image from "next/image";
import Link from "next/link";

const History = () => {
  return (
    <div className="md:col-span-3 w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>History</h3>
        <Link href="/dashboard/market">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>

      {/* content */}
      <div className="space-y-5 mt-10">
        {/* 1 */}
        <div className="flex justify-between gap-5">
          <div className="w-12 h-12 border">{/* <Image src={} alt=""/> */}</div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Bitcoin</h4>
              <p className="text-xs">+$35245</p>
            </div>
            <p className="text-sm text-darkGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              nostrum?
            </p>
          </div>
          <p className="whitespace-nowrap text-xs">11 march 23</p>
        </div>
        {/* 1 */}
        <div className="flex justify-between gap-5">
          <div className="w-12 h-12 border">{/* <Image src={} alt=""/> */}</div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Bitcoin</h4>
              <p className="text-xs">+$35245</p>
            </div>
            <p className="text-sm text-darkGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              nostrum?
            </p>
          </div>
          <p className="whitespace-nowrap text-xs">11 march 23</p>
        </div>
        {/* 1 */}
        <div className="flex justify-between gap-5">
          <div className="w-12 h-12 border">{/* <Image src={} alt=""/> */}</div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Bitcoin</h4>
              <p className="text-xs">+$35245</p>
            </div>
            <p className="text-sm text-darkGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              nostrum?
            </p>
          </div>
          <p className="whitespace-nowrap text-xs">11 march 23</p>
        </div>
        {/* 1 */}
        <div className="flex justify-between gap-5">
          <div className="w-12 h-12 border">{/* <Image src={} alt=""/> */}</div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Bitcoin</h4>
              <p className="text-xs">+$35245</p>
            </div>
            <p className="text-sm text-darkGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              nostrum?
            </p>
          </div>
          <p className="whitespace-nowrap text-xs">11 march 23</p>
        </div>
        {/* 1 */}
        <div className="flex justify-between gap-5">
          <div className="w-12 h-12 border">{/* <Image src={} alt=""/> */}</div>
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Bitcoin</h4>
              <p className="text-xs">+$35245</p>
            </div>
            <p className="text-sm text-darkGray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              nostrum?
            </p>
          </div>
          <p className="whitespace-nowrap text-xs">11 march 23</p>
        </div>
      </div>
    </div>
  );
};

export default History;
