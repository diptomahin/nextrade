"use client";

import cn from "@/utils/cn";
import "./button.css";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "scroll-text px-10 rounded-full font-medium md:font-semibold font-dm text-white h-8 md:h-10 text-sm md:text-base bg-primary",
        className
      )}
      {...restProps}
    >
      <span className="text1 whitespace-nowrap">{children}</span>
      <span className="text2 whitespace-nowrap">{children}</span>
    </button>
  );
};
export default Button;
