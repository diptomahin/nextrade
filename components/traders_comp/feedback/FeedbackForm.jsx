"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FeedbackForm from "./FeedbackForm";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import DarkButton from "@/components/library/Button";
import Swal from "sweetalert2";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

export default function TransitionsModal({ user, secureAPI }) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  // console.log(user)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    const feedbackData = {
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      photo: user.photoURL,
      // address: user?.address,
      rating,
      feedback,
    };
    // console.log(feedbackData)
    secureAPI
      .post(`/feedback`, feedbackData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Feedback sent !",
            text: "Thank you for your feedback.",
            icon: "success",
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `failed!`,
          text: `Please try again`,
          icon: "error",
        });
      });

    handleClose(); // Close the modal after submission
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "top" }}
    >
      <DarkButton onClick={handleOpen}>Feedback </DarkButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Box} // Changed slots to BackdropComponent
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" color={"black"} component="h2">
              Tell Us How We&apos;re Doing {/* Changed modal title */}
            </Typography>
            <p className="text-sm text-black pb-5">
              Your feedback shapes our platform&apos;s future. Share your
              thoughts to enhance your trading experience.
            </p>
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleRatingChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Feedback"
              multiline
              rows={4}
              fullWidth
              value={feedback}
              onChange={handleFeedbackChange}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button
                onClick={handleClose}
                color="primary"
                variant="contained"
                sx={{ mr: 1 }}
              >
                Close
              </Button>
              <Button
                onClick={handleSubmit}
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
