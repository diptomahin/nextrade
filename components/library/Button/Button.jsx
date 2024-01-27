"use client";

import cn from "@/utils/cn";
import "./button.css";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Magnetic from "../Magnetic/Magnetic";

const Button = ({ children, className, ...restProps }) => {
  return (
    <Magnetic>
      <button
        className={cn(
          "scroll-text px-10 rounded-full font-dm font-medium text-white h-8 md:h-10 text-sm md:text-base bg-primary ",
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
    </Magnetic>
  );
};
export default Button;
