import cn from "@/components/utils/cn";
import React from "react";

const DarkButton = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={cn(
        "btn btn-sm h-10 bg-primary/5 hover:bg-primary/15 border-primary hover:border-primary font-medium text-primary text-nowrap text-sm md:text-base rounded-md md:rounded-xl",
        className
      )}
    >
      {children}
    </button>
  );
};

export default DarkButton;
