"use client";
import cn from "@/utils/cn";
import { Button } from "@mui/material";

const DashboardButton = ({ children, className, ...restProps }) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "#35c07c",
        },
      }}
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-2 bg-secondary/90 text-white rounded-full",
        className
      )}
      {...restProps}
    >
      {children}
    </Button>
  );
};
export default DashboardButton;
