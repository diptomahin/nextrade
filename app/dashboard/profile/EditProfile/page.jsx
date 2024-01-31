import React from 'react';
import { Avatar } from '@mui/material'

const page = () => {
    return (
           <div className="w-9/12 mx-auto">
       <Avatar
        alt="profile Image" 
        src={user.photoURL}
        className="my-10"
        sx={{ width: 100, height: 100 ,}}
         />
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
    </div>
    );
};

export default page;

