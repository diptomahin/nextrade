"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Magnetic from "@/components/library/Magnetic";
import MenuIcon from "@mui/icons-material/Menu";
import UserMenu from "./nav_comp/UserMenu";
import TradersNotification from "./nav_comp/TradersNotification/TradersNotification";
// import Language from "@/components/library/Language";
import { usePathname } from "next/navigation";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import GoogleTranslate from "../../components/traders_comp/GoogleTranslate/GoogleTranslate";

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: "white",
  width: "250px", // Default width set to 250px
  [theme.breakpoints.down("sm")]: {
    width: "120px", // Reduce width for small devices
  },
  "& .MuiAutocomplete-inputRoot": {
    padding: "3px 15px",
    [theme.breakpoints.down("sm")]: {
      padding: "2px 4px", // Further reduce padding for small devices
    },
    backgroundColor: "#181e2c", // Set background color to white
  },
  "& .MuiInputBase-input": {
    padding: "6px 6px", // Adjusting padding
    [theme.breakpoints.down("sm")]: {
      padding: "2px 4px", // Further reduce padding for small devices
    },
    transition: theme.transitions.create("width"),
    "&::placeholder": {
      color: "white", // Set placeholder color to white
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px", // Adding border radius
    "& fieldset": {
      borderColor: "transparent",
    },
    border: "none",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2c3750", // Remove border color on hover
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #2c3750", // Remove border color when focused
    },
  },
  "& .MuiAutocomplete-input": {
    color: "white", // Set input text color to white
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
  const [searchValue, setSearchValue] = React.useState("");
  const router = useRouter();
  const tradersSearchOptions = [
    { name: "Dashboard page", path: "/dashboard" },
    { name: "Portfolio page", path: "/dashboard/portfolio" },
    { name: "Market page", path: "/dashboard/market" },
    { name: "Wallet page", path: "/dashboard/wallet" },
    { name: "Trading page", path: "/dashboard/trading" },
    { name: "All coins", path: "/dashboard/market" },
    { name: "Trading history", path: "/dashboard/history" },
    { name: "History page", path: "/dashboard/history" },
    { name: "Watchlist page", path: "/dashboard/watchlist" },
    { name: "Academy page", path: "/dashboard/academy" },
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Profile page", path: "/dashboard/profile" },
  ];

  const handleInputChange = (e, newValue) => {
    const getPathName = tradersSearchOptions.find(
      (option) => option.name === newValue
    )?.path;
    setSearchValue(getPathName);
    console.log("Search submitted:", searchValue);
    if (searchValue) {
      router.push(searchValue);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const selectedOption = tradersSearchOptions.find(
      (option) => option.name === searchValue
    );
    if (selectedOption) {
      console.log("Search submitted:", selectedOption.path);
      // Here you can navigate to the selected path
      router.push(selectedOption.path);
    }
  };

  const pathname = usePathname();

  const { user, logOut, loading } = useAuth();
  const {
    data: userDetails = {},
    refetch,
    isPending,
    isLoading,
  } = useSecureFetch(`user/${user?.email}`, "user");

  refetch();

  if (isLoading || isPending || loading) {
    return;
  }

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
    <div className="h-full w-full flex items-center justify-between gap-6 bg-white dark:bg-tertiary border-b dark:border-darkThree px-5">
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

        {/* dynamic tittle and date time */}
        <div className="hidden xl:block">
          <h1 className="font-semibold">{breadcrumbs}</h1>
          <p className="text-xs opacity-70">Updated on {dateWithName}</p>
        </div>

        {/* search  */}
        <form
          className="flex items-center w-40 lg:w-80 relative rounded-full bg-white dark:bg-secondary"
          onSubmit={handleSearchSubmit}
        >
          <Autocomplete
            onChange={(event, newValue) => setSearchValue(newValue)}
            // onSelect={}
            options={tradersSearchOptions.map((option) => option.name)}
            filterOptions={(tradersSearchOptions, { inputValue }) =>
              inputValue.length >= 1
                ? tradersSearchOptions.filter((option) =>
                    option.toLowerCase().includes(inputValue.toLowerCase())
                  )
                : []
            }
            renderInput={(params) => (
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: null,
                }}
              />
            )}
          />
          <button type="submit" className="absolute right-2">
            <SearchIcon style={{ marginRight: "6px", color: "white" }} />
          </button>
        </form>
      </div>
      <div className="flex items-center gap-6">
        {/* <Language /> */}

        {/* <Translate /> */}
        {/* <GoogleTranslate></GoogleTranslate> */}
        <TradersNotification />

        <UserMenu userDetails={userDetails} logOut={logOut} />
      </div>
    </div>
  );
};

export default TradersDashboardNavbar;
