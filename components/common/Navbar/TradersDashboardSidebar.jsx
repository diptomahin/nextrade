"use client";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/logo-no-background.png";
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
            borderRadius: "70px",
            color: "white",
            marginRight: "5px",
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
            borderRadius: "70px",
            color: "white",
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
            borderRadius: "70px",
            color: "white",
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
            borderRadius: "70px",
            color: "white",
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
            borderRadius: "70px",
            color: "white",
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
            borderRadius: "70px",
            color: "white",
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
            borderRadius: "70px",
            color: "white",
            width: "35px",
            height: "35px",
            padding: "8px",
          }}
        />
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full bg-[#1D366F]">
      <Stack sx={{ width: "100%", paddingX: "16px" }}>
        <Link href={"/"} className=" flex items-center justify-center">
          <Image
            src={logo}
            width={150}
            className="mx-auto my-4"
            alt="logo"
          ></Image>
        </Link>
        <List>
          {dashboardUpperLinkForUser.map((link, idx) => (
            <ListItem
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
                borderRadius: "70px",
                color: "white",
                marginBottom: "10px",
                overflow: "hidden",
              }}
              key={idx}
              disablePadding
            >
              <Link href={link.pathname} className="w-full">
                <ListItemButton className="w-full">
                  <ListItemIcon className="text-transparent">
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText primary={link.route} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Stack>

      <Stack className="px-4 bg-[#1D366F]">
        <Link href={"/"}>
          <ListItemButton
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
              borderRadius: "70px",
              color: "white",
              marginBottom: "10px",
              overflow: "hidden",
            }}
            className="w-full"
          >
            <ListItemIcon>
              <HomeIcon
                sx={{
                  borderRadius: "70px",
                  color: "white",
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
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
            borderRadius: "70px",
            color: "white",
            marginBottom: "10px",
            overflow: "hidden",
          }}
          className="w-full"
        >
          <ListItemIcon>
            <LogoutIcon
              sx={{
                borderRadius: "70px",
                color: "white",
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
