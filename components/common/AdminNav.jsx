"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Magnetic from "@/components/library/Magnetic";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "./nav_comp/UserMenu";
import TradersNotification from "./nav_comp/TradersNotification";
import Language from "@/components/library/Language";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const AdminNav = ({ setMobileOpen, mobileOpen }) => {
  return (
    <div className="h-full w-full flex items-center justify-between gap-6 bg-white rounded-xl px-5 border">
      <div className="flex items-center gap-5">
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            color: "black",
            "@media (min-width: 1280px)": {
              display: "none",
              color: "black",
              backgroundColor: "black",
            },
          }}
        >
          <Magnetic>
            <MenuIcon sx={{ color: "black" }} />
          </Magnetic>
        </IconButton>
        {/*  */}
        <Search
          sx={{
            borderRadius: "50px",
            backgroundColor: "rgba(0,0,0,0.06)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
            "@media (max-width: 640px)": {
              display: "none",
            },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div className="flex items-center gap-6">
        {/* language */}
        <Language />
        {/* notification */}
        <TradersNotification />

        {/* user menubar */}
        <UserMenu />
      </div>
    </div>
  );
};

export default AdminNav;
