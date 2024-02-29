"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-White.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import { usePathname } from "next/navigation";

const TradersDashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full w-full bg-[#21212f] border-r border-darkThree pb-2">
      <Magnetic>
        <Link href="/" className="h-16 flex items-center justify-center">
          {" "}
          <Image src={logo} width={110} alt="logo" />
        </Link>
      </Magnetic>
      <div className="flex flex-col gap-3 py-3 border-t border-dashed border-darkThree">
        <SideNavLinks pathname={pathname} />
      </div>
    </div>
  );
};

export default TradersDashboardSidebar;
