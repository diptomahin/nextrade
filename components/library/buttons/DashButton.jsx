"use client";
import { Button } from "@mui/material";

const DashButton = ({ children, className, ...restProps }) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "#455ce9",
        },
        backgroundColor: "#455ce9",
        color: "white",
        borderRadius: "50px",
        padding: "10px 15px",
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};
export default DashButton;
