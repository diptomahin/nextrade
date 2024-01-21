"use client";

import cn from "@/utils/cn";
import "./button.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "scroll-text px-10 rounded-full font-dm font-medium text-white h-8 md:h-10 text-sm md:text-base bg-gradient-to-r  from-[#239FFE] to-[#0272E5] ",
        className
      )}
      {...restProps}
    >
      <span className="text1 flex items-center gap-1">
        <span className="whitespace-nowrap">{children} </span>
        <span className="icon1">
          <RiArrowRightDoubleLine />
        </span>
      </span>
      <span className="text2 flex items-center gap-1">
        <span className="whitespace-nowrap">{children} </span>
        <span className="icon2">
          <RiArrowRightDoubleLine />
        </span>
      </span>
    </button>
  );
};
export default Button;
