"use client";

import cn from "@/utils/cn";
import "./button.css";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "scroll-text px-10 rounded-full font-semibold font-dm text-white h-10 bg-primary",
        className
      )}
      {...restProps}
    >
      <span className="text1">{children}</span>
      <span className="text2">{children}</span>
    </button>
  );
};
export default Button;
