"use client";

import cn from "@/components/utils/cn";
import "./RootButton.css";
import Magnetic from "../../Magnetic";

const RootButton = ({ children, className, ...restProps }) => {
  return (
    <Magnetic>
      <button
        // scroll-text
        className={cn(
          " px-10 rounded-full font-dm font-medium text-white h-12 lg:h-14 text-sm lg:text-lg bg-primary",
          className
        )}
        {...restProps}
      >
        {children}
      </button>
    </Magnetic>
  );
};
export default RootButton;
