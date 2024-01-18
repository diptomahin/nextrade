import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-white bg-primary flex justify-between rounded-xl px-10 py-10">
      <div>
        <h1>Get Daily Updates</h1>
        <p>Join now with NexTrade to get the latest news and bonuses</p>
      </div>
      <div>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <button className="p-3 mx-2 font-bold rounded-xl border-x-2 border-y-2 hover:bg-white hover:text-primary">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
