"use client";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/nextrade-logo.svg";
import HomeIcon from "@mui/icons-material/Home";

import GridViewIcon from "@mui/icons-material/GridView";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TollIcon from "@mui/icons-material/Toll";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import useAuth from "@/utils/useAuth";

const TradersDashboardSidebar = () => {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    window.location.pathname = "/";
  };

  // dashboard route for user
  const dashboardUpperLinkForUser = [
    {
      route: "Dashboard",
      pathname: "/dashboard",
      icon: (
        <GridViewIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Portfolio",
      pathname: "/dashboard/portfolio",
      icon: (
        <ShowChartIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Trading",
      pathname: "/dashboard/trading",
      icon: (
        <TollIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Watchlist",
      pathname: "/dashboard/watchlist",
      icon: (
        <VisibilityOutlinedIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Academy",
      pathname: "/dashboard/academy",
      icon: (
        <MenuBookOutlinedIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Profile",
      pathname: "/dashboard/profile",
      icon: (
        <PersonOutlinedIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
    {
      route: "Wallet",
      pathname: "/dashboard/wallet",
      icon: (
        <WalletOutlinedIcon
          sx={{
            borderRadius: "50px",
            backgroundColor: "white",
            color: "#21366c",
            marginRight: "14px",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#E6E9F2] ">
      <Stack>
        <Link href={"/"} className="h-[82px] flex items-center justify-center">
          <Image
            src={logo}
            width={120}
            className="mx-auto my-4"
            alt="logo"
          ></Image>
        </Link>
        <List className="p-3 ">
          {dashboardUpperLinkForUser.map((link, idx) => (
            <ListItem
              className="duration-300"
              sx={{
                "&:hover": { backgroundColor: "#21366c", color: "white" },
                borderRadius: "50px",
              }}
              key={idx}
              disablePadding
            >
              <Link href={link.pathname} className="w-full duration-300">
                <ListItemButton className="w-full p-[8px] duration-200">
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.route} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Stack>

      <Divider />

      <Stack className="p-[8px]">
        <Link href={"/"}>
          <ListItemButton
            sx={{
              "&:hover": { backgroundColor: "#21366c", color: "white" },
              borderRadius: "50px",
              marginTop: "20px",
            }}
            className="w-full p-[10px]"
          >
            <ListItemIcon>
              <HomeIcon
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "white",
                  color: "#21366c",
                  marginRight: "14px",
                  width: "35px",
                  height: "35px",
                  padding: "8px",
                }}
              />
            </ListItemIcon>
            <ListItemText primary={"Back to Home"} />
          </ListItemButton>
        </Link>
        <ListItemButton
          onClick={handleLogOut}
          sx={{
            "&:hover": { backgroundColor: "#21366c", color: "white" },
            borderRadius: "50px",
          }}
          className="w-full p-[10px]"
        >
          <ListItemIcon>
            <LogoutIcon
              sx={{
                borderRadius: "50px",
                backgroundColor: "white",
                color: "#21366c",
                marginRight: "14px",
                width: "35px",
                height: "35px",
                padding: "8px",
              }}
            />
          </ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItemButton>
      </Stack>
    </div>
  );
};

export default TradersDashboardSidebar;
