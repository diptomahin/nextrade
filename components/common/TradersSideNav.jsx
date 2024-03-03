"use client";

import Image from "next/image";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import SideNavLinks from "./nav_comp/SideNavLinks";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import { usePathname } from "next/navigation";
import ThemeMode from "../library/ThemeMode";

const TradersDashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="relative h-full w-full bg-[#21212f] flex flex-col gap-3 py-3 border-t border-dashed border-darkThree">
      <div className="flex items-center justify-center mb-3">
        <Magnetic>
          <div className="">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 h-fit w-fit"
            >
              {" "}
              <Image src={logo} width={35} alt="logo" />
              <h1 className="text-lg font-semibold">NexTrade</h1>
            </Link>
          </div>
        </Magnetic>
      </div>
      <SideNavLinks pathname={pathname} />
      <div className="absolute left-0 bottom-0 w-full flex items-center justify-center h-20">
        <ThemeMode />
      </div>
    </div>
  );
};

export default TradersDashboardSidebar;
