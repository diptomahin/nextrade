import cn from "@/components/utils/cn";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-5 md:mx-10 2xl:mx-20", className)}>{children}</div>
  );
};
export default Container;
