"use client";
import React from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { Avatar, Box, } from '@mui/material'

//material imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

const ProfilePage = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const profilePic = user.photoURL;
  // const updateProfileInfo = (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const name = form.get("name");
  //   const photo = form.get("photo");
  //   const updatedProfileInfo = { name };
  //   console.log(updatedProfileInfo);

  //   updateUserProfile(name, photo).then(() => { });
  // };

  return (
    <Box>
      <Card className="grid grid-cols-1 " sx={{  }}>
        <div >
        <Avatar
          alt="profile Image"
          src={user.photoURL}
          className="my-10"
          sx={{ width: 100, height: 100, }}
        />
        <CardActions>
          <Button size="large">
          <Typography variant="h6" className="hover:bg-primary hover:text-white p-3 text-primary border-primary rounded-lg border-2">
          <EditIcon className=""/>
            Edit
          </Typography></Button>
        </CardActions>
        </div>
        <CardContent className="mt-5">
          <Typography gutterBottom variant="h4" className=" p-3 text-primary border-primary rounded-lg border-2">
            Profile Information
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className="p-3 text-primary border-primary rounded-lg border-2">
          Name: {user.displayName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" className="p-3 text-primary border-primary rounded-lg border-2">
          Email: {user.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>

  );
};

export default ProfilePage;
