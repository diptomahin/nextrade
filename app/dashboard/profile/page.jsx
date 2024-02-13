"use client";
import React from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Avatar, Box } from "@mui/material";

//material imports
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DarkButton from "@/components/library/buttons/DarkButton";
import MyProfile from "@/components/traders_comp/profile/MyProfile";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ProfilePage = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, display: "flex", gap: 2}}>
        <div className="p-4  rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
          <Avatar
            alt="profile Image"
            src={user.photoURL}
            className="mx-auto "
            sx={{ width: 60, height: 60 }}
          />
          <h3 className=" text-center font-semibold my-2">
            {user.displayName}
          </h3>
          <p className=" text-center text-base text-gray-500 mb-5 ">
            {user.email}
          </p>
          <Tabs
  orientation="vertical"
  variant="scrollable"
  value={value}
  onChange={handleChange}
  aria-label="Vertical tabs example"
  sx={{ textAlign: "start", height: "100vh" }}
>
  <Tab
    label="My Profile"
    {...a11yProps(0)}
    style={{
      textTransform: 'none',
      textAlign: 'start',
      fontWeight: 700,
      color: value === 0 ? "primary.main" : "white",
      backgroundColor: value === 0 ? "rgba(255, 255, 255, 0.1)" : "transparent",
    }}
  />
  <Tab
    label="Security"
    {...a11yProps(1)}
    style={{
      textTransform: 'none',
      textAlign: 'start',
      fontWeight: 700,
      color: value === 1 ? "primary.main" : "white",
      backgroundColor: value === 1 ? "rgba(255, 255, 255, 0.1)" : "transparent",
    }}
  />
  <Tab
  className="h-full"
    label="Notification Preferences"
    {...a11yProps(2)}
    style={{
      textTransform: 'none',
      textAlign: 'start',
      fontWeight: 700,
      color: value === 2 ? "primary.main" : "white",
      backgroundColor: value === 2 ? "rgba(255, 255, 255, 0.1)" : "transparent",
    }}
  />
  <Tab
    label="Currency Preferences"
    {...a11yProps(3)}
    style={{
      textTransform: 'none',
      textAlign: 'start',
      fontWeight: 700,
      color: value === 3 ? "primary.main" : "white",
      backgroundColor: value === 3 ? "rgba(255, 255, 255, 0.1)" : "transparent",
    }}
  />
  <Tab
    label="KYC Verification"
    {...a11yProps(4)}
    style={{
      textTransform: 'none',
      textAlign: 'start',
      fontWeight: 700,
      color: value === 4 ? "primary.main" : "white",
      backgroundColor: value === 4 ? "rgba(255, 255, 255, 0.1)" : "transparent",
    }}
  />
</Tabs>



        </div>

        <TabPanel
          value={value}
          index={0}
          className="p-4 rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-full"
        >
          <MyProfile></MyProfile>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          className="p-4 rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-full"
        >
          Item Two
        </TabPanel>
        <TabPanel
          value={value}
          index={2}
          className="p-4 rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-full"
        >
          Item Three
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          className="p-4 rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-full"
        >
          Item Four
        </TabPanel>
        <TabPanel
          value={value}
          index={4}
          className="p-4 rounded-xl bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree w-full"
        >
          Item Five
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProfilePage;
