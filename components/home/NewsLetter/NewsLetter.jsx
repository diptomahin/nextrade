import Container from "@/components/library/Container.jsx";
import Button from "../../library/Button/Button.jsx";
import TextField from "@mui/material/TextField";
import React from "react";

const NewsLetter = () => {
  const inputStyle = {
    color: "white",
    borderColor: "white",
  };

  const labelStyle = {
    color: "white",
  };

  return (
    <Container className=" text-white bg-secondary md:flex justify-between rounded-xl px-10 py-10">
      <div className="mb-10 md:mb-0">
        <h1 className="lg:text-3xl md:text-3xl text-4xl font-bold pb-4">Get Daily Updates</h1>
        <p className="font-light">
          Join now with NexTrade to get the latest news and bonuses
        </p>
      </div>
      <div className=" flex items-center gap-8">
        <TextField
          id="standard-basic"
          label="Enter your email"
          placeholder="example@gmail.com"
          variant="standard"
          InputLabelProps={{
            style: labelStyle,
          }}
          InputProps={{
            style: inputStyle,
          }}
        />
        <Button>Subscribe</Button>
      </div>
    </Container>
  );
};

export default NewsLetter;
