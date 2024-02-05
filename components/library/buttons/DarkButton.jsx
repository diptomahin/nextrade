import cn from "@/components/utils/cn";
import React from "react";

const DarkButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "bg-primary/5 hover:bg-primary/15 border border-primary py-2 px-4  font-medium rounded-xl text-primary",
        className
      )}
    >
      {children}
    </button>
  );
};

export default DarkButton;
