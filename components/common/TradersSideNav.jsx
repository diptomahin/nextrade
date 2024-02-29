"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import { usePathname } from "next/navigation";

const TradersDashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full w-full bg-[#21212f] flex flex-col gap-3 py-3 border-t border-dashed border-darkThree">
      <div className="flex items-center justify-center mb-1">
        <Magnetic>
          <div className="flex items-center justify-center gap-2 h-fit w-fit">
            <Link href="/" className="">
              {" "}
              <Image src={logo} width={35} alt="logo" />
            </Link>
            <h1 className="text-lg font-semibold">NexTrade</h1>
          </div>
        </Magnetic>
      </div>
      <SideNavLinks pathname={pathname} />
    </div>
  );
};

export default TradersDashboardSidebar;
