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
import { usePathname } from "next/navigation";

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

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const dateWithName = `${day} ${
  month === 1
    ? "January"
    : month === 2
    ? "February"
    : month === 3
    ? "March"
    : month === 4
    ? "April"
    : month === 5
    ? "May"
    : month === 6
    ? "June"
    : month === 7
    ? "July"
    : month === 8
    ? "August"
    : month === 9
    ? "September"
    : month === 10
    ? "October"
    : month === 11
    ? "November"
    : "December"
} ${year}`;

const TradersDashboardNavbar = ({ setMobileOpen, mobileOpen }) => {
  const pathname = usePathname();

  const breadcrumbs = pathname.includes("/dashboard/market")
    ? "Market"
    : pathname.includes("/dashboard/trading")
    ? "Trading"
    : pathname.includes("/dashboard/portfolio")
    ? "Portfolio"
    : pathname.includes("/dashboard/watchlist")
    ? "Watchlist"
    : pathname.includes("/dashboard/academy")
    ? "Academy"
    : pathname.includes("/dashboard/profile")
    ? "Profile"
    : pathname.includes("/dashboard/wallet")
    ? "Wallet"
    : pathname.includes("/dashboard/settings")
    ? "Settings"
    : "Dashboard";

  return (
    <div className="h-full w-full flex items-center justify-between gap-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl px-5">
      <div className="flex items-center gap-5">
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            "@media (min-width: 1280px)": {
              display: "none",
            },
          }}
        >
          <Magnetic>
            <MenuIcon sx={{ color: "white" }} />
          </Magnetic>
        </IconButton>

        <div>
          <h1 className="text-lg font-semibold">{breadcrumbs}</h1>
          <p className="text-sm opacity-70">Updated on {dateWithName}</p>
        </div>

        {/* search  */}
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

export default TradersDashboardNavbar;
