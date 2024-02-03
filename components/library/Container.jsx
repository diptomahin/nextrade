import cn from "@/components/utils/cn";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-7xl 2xl:mx-auto", className)}>{children}</div>
  );
};
export default Container;
