import cn from "@/utils/cn";
import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1200px] mx-5 md:mx-10 2xl:mx-auto", className)}>
      {children}
    </div>
  );
};
export default Container;
