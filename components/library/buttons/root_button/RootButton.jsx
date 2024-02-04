"use client";

import cn from "@/components/utils/cn";
import "./RootButton.css";

const RootButton = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "px-10 rounded-full font-dm font-medium text-white h-12 text-sm lg:text-lg bg-primary",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
export default RootButton;
