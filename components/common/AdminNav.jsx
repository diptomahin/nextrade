"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Magnetic from "@/components/library/Magnetic";
import MenuIcon from "@mui/icons-material/Menu";
import Language from "@/components/library/Language";
import AdminMenu from "./nav_comp/AdminMenu";
import { usePathname, useRouter } from "next/navigation";
import AdminNotification from "./nav_comp/AdminNotification/AdminNotification";

import { Autocomplete, TextField } from "@mui/material";

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
const dateWithName = `${day} ${month === 1
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

const AdminNav = ({ setMobileOpen, mobileOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = React.useState("");

  const breadcrumbs = pathname.includes("/admin_dashboard/manage_users")
    ? "Manage Users"
    : pathname.includes("/admin_dashboard/manage_services")
      ? "Manage Services"
      : pathname.includes("/admin_dashboard/manageCoins")
        ? "Manage Coins"
        : pathname.includes("/admin_dashboard/manage_academy")
          ? "Manage Academy"
          : pathname.includes("/dashboard/academy")
            ? "Academy"
            : pathname.includes("/admin_dashboard/message_box")
              ? " Message Box"
              : "Dashboard";

  // ----------Search functionality-----------
    
    const adminsSearchOptions = [
      { name: "Dashboard page", path: "/admin_dashboard" },
      { name: "Manage Users page", path: "/admin_dashboard/manage_users" },
      { name: "All Users", path: "/admin_dashboard/manage_users" },
      { name: "Manage Coins page", path: "/admin_dashboard/manageCoins" },
      { name: "Manage Academy page", path: "/admin_dashboard/manage_academy" },
      { name: "My profile", path: "/admin_dashboard/profile" },
      { name: "Profile page", path: "/admin_dashboard/profile" },
      { name: "Message box", path: "/admin_dashboard/message_box" },
      { name: "Setting", path: "/admin_dashboard/setting" },
      { name: "Manage services", path: "/admin_dashboard/manage_services" },
    ];
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const selectedOption = adminsSearchOptions.find(
      (option) => option.name === searchValue
    );
    if (selectedOption) {
      console.log("Search submitted:", selectedOption.path);
      // Here you can navigate to the selected path
      router.push(selectedOption.path);
    }
  };



  return (
    <div className="h-full w-full flex items-center justify-between gap-6 bg-white dark:bg-tertiary border-b dark:border-darkThree px-5">
      <div className="flex items-center gap-5">
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            color: "white",
            "@media (min-width: 1280px)": {
              display: "none",
              color: "white",
              backgroundColor: "black",
            },
          }}
        >
          <Magnetic>
            <MenuIcon sx={{ color: "white" }} />
          </Magnetic>
        </IconButton>
        {/*  */}
        {/* dynamic tittle and date time */}
        <div className="hidden 2xl:block">
          <h1 className="font-semibold">{breadcrumbs}</h1>
          <p className="text-xs opacity-70">Updated on {dateWithName}</p>
        </div>

        {/* search  */}
        <form
          className="flex items-center w-[120px] lg:w-[250px] relative"
          onSubmit={handleSearchSubmit}
        >
          <Autocomplete
            onChange={(event, newValue) => setSearchValue(newValue)}
            // onSelect={}
            options={adminsSearchOptions.map((option) => option.name)}
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
        {/* language */}
        <Language />
        {/* notification */}
        <AdminNotification />

        {/* user menubar */}
        <AdminMenu />
      </div>
    </div>
  );
};

export default AdminNav;
