"use client"
import Link from "next/link";
import { useState } from "react";

const SectionTitle = ({ title, btnText, btnUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h2 className="lg:text-[30px] text-xl font-semibold">{title}</h2>
      <Link href={btnUrl ?? "#"}>
        <button
          className="relative font-semibold uppercase border-b-[2px] border-white transition-all duration-300 hover:border-transparent lg:text-normal text-[14px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ padding: "0", overflow: "hidden" }}
        >
          <span
            className="absolute bottom-0 left-0 bg-white h-[2px] transition-all duration-300"
            style={{
              width: isHovered ? "100%" : "2px", // Adjusted width based on hover
              transform: "translateX()",
            }}
          />
          {btnText}
        </button>
      </Link>
    </div>
  );
};

export default SectionTitle;