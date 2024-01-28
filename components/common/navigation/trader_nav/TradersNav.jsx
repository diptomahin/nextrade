"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Menu, MenuItem, Stack, Tooltip } from "@mui/material";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

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

const menuItemsForUser = [
  {
    route: "Profile",
    pathname: "/dashboard",
  },
];

const TradersDashboardNavbar = () => {
  const { user, logOut } = useAuth();

  // user menu related functions
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          marginTop: "8px",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            className="text-white"
          >
            Dashboard
          </Typography>

          {/* search bar */}
          <Search className="mr-5 text-white rounded-full">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <NotificationsRoundedIcon className="mr-5 text-white" />

          {/* user avater */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            className="text-white font-dm"
          >
            <div className="text-right hidden lg:block">
              <p className="">
                {user?.displayName || (
                  <span className=" text-white text-lg">Name</span>
                )}
              </p>
              <p className="font-medium ">Trader</p>
            </div>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user-img" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
          </Stack>

          {/* user menu */}
          <Menu
            sx={{ mt: "45px", py: "0px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {menuItemsForUser.map((menu, idx) => (
              <Link key={idx} href={menu.pathname}>
                <MenuItem
                  sx={{
                    margin: "12px",
                    paddingX: "40px",
                    paddingY: "8px",
                    borderRadius: "6px",
                    "&:hover": { backgroundColor: "#455ce9", color: "white" },
                  }}
                  // className="m-3 px-10 py-2 hover:bg-primary hover:text-white rounded-md"
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center" className=" w-full">
                    {menu.route}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
            <MenuItem
              sx={{
                margin: "12px",
                paddingX: "40px",
                paddingY: "8px",
                borderRadius: "6px",
                "&:hover": { backgroundColor: "#455ce9", color: "white" },
              }}
              // className="m-3 px-10 py-2 hover:bg-primary hover:text-white rounded-md"
              onClick={() => {
                logOut();
                handleCloseUserMenu();
              }}
            >
              <Typography textAlign="center" className="w-full">
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TradersDashboardNavbar;
