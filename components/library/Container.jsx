import cn from "@/components/utils/cn";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("px-5 md:px-10 2xl:px-20", className)}>{children}</div>
  );
};
export default Container;
