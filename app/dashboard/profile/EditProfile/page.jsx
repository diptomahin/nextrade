"use client"
import React from 'react';
import { useContext } from "react";
import { Avatar, Box, } from '@mui/material'
import { AuthContext } from "@/provider/AuthProvider";

//material imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const EditProfile = () => {

  const { user, updateUserProfile } = useContext(AuthContext);


  const updateProfileInfo = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const updatedProfileInfo = { name };
    console.log(updatedProfileInfo);

    updateUserProfile(name, photo).then(() => { });
  };
  return (
    <Box>
      <Card className="w-10/12 mx-auto " sx={{}}>
      <Typography gutterBottom variant="h4" className=" mt-3 text-center p-3 text-primary border-primary rounded-lg border-2">
           Edit Profile Information
      </Typography>
      <div className='grid grid-cols-2 w-10/12 mx-auto my-10'>
      <div className="grid grid-cols-2">
          <Avatar
            alt="profile Image"
            src={user.photoURL}
            className="my-10 "
            sx={{ width: 200, height: 200, }}
          />
        </div>
        <CardContent className="mt-5">
          <form onSubmit={updateProfileInfo}>
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue={user.displayName}
                size="lg"
                name="name"
                placeholder="User Name"
                className=" w-52 border-primary border-x-2 border-y-2 p-3 rounded-lg text-primary my-3 font-semibold "
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                defaultValue={user.email}
                size="lg"
                name="email"
                placeholder="User Email"
                className=" w-52 border-primary border-x-2 border-y-2 p-3 rounded-lg text-primary my-3 font-semibold "
              />
            </div>
            <div className="flex gap-2">
              <input
                type="url"
                size="lg"
                name="photo"
                placeholder="Enter Photo URL"
                className="w-52  border-primary border-x-2 border-y-2 p-3 rounded-lg text-primary my-3 font-semibold"
              />
            </div>
            <button className="p-3 rounded-lg font-semibold hover:text-primary hover:bg-white hover:border-2 hover:border-primary bg-primary text-white">
              Submit
            </button>
          </form>
        </CardContent>
      </div>
      </Card>
    </Box>

  );
};

export default EditProfile;

