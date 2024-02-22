"use client";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FeedbackForm from './FeedbackForm';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal() {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

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
        console.log("Rating:", rating);
        console.log("Feedback:", feedback);
        handleClose(); // Close the modal after submission
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Button onClick={handleOpen}>Feedback</Button> {/* Changed button text to "Feedback" */}
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
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Feedback Form {/* Changed modal title */}
                        </Typography>
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
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                            <Button onClick={handleClose} color="primary" variant="contained" sx={{ mr: 1 }}>
                                Close
                            </Button>
                            <Button onClick={handleSubmit} color="primary" variant="contained">
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}