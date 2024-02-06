import cn from "@/components/utils/cn";
import React from "react";

const DarkButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "bg-primary/5 hover:bg-primary/15 border border-primary font-medium text-primary text-nowrap py-1 px-2 text-sm md:py-[6px] md:px-4 md:text-lg rounded-md md:rounded-xl",
        className
      )}
    >
      {children}
    </button>
  );
};

export default DarkButton;
