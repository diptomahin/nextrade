import Button from "../../library/Button/Button.jsx"
import TextField from '@mui/material/TextField';
import React from 'react';

const NewsLetter = () => {

    const inputStyle = {
        color: 'white',
        borderColor: 'white',
    };

    const labelStyle = {
        color: 'white',
    };

    return (
        <div className='text-white bg-primary-darkBlue md:flex justify-between rounded-xl px-10 py-10'>
            <div className='mb-10 md:mb-0'>
                <h1 className='text-2xl'>Get Daily Updates</h1>
                <p className='font-light'>Join now with NexTrade to get the latest news and bonuses</p>
            </div>
            <div>
                <TextField
                    id="standard-basic"
                    label="Enter your email"
                    variant="standard"
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                    InputProps={{
                        style: inputStyle,
                    }}
                />
                <Button>Subscribe</Button>
                {/* <button className='p-3 mt-2 mx-2 font-bold rounded-xl border-x-2 border-y-2 hover:bg-white hover:text-primary-darkBlue' >Subscribe</button> */}
            </div>
        </div>
    );
};

export default NewsLetter;