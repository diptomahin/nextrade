"use client"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';
import useSecureAPI from '@/hooks/useSecureAPI';
import toast from 'react-hot-toast';
import axios from 'axios';
import "./manageCoin.css"

const image_hosting_key = `4696195291e937983db500161bc852ce`;
const ManageCrypto = ({ assets, refetch }) => {
    const [open, setOpen] = React.useState(false);
    const secureAPI = useSecureAPI();

    const [assetId, setAssetId] = useState();
    const [defaultName, setDefaultName] = useState()
    const [defaultType, setDefaultType] = useState()
    const [defaultKey, setDefaultKey] = useState()
    const [defaultIcon, setDefaultIcon] = useState()

    const handleClickOpen = (asset) => {
        // console.log(asset)
        setAssetId(asset._id)
        setDefaultName(asset.name)
        setDefaultKey(asset.key)
        setDefaultType(asset.type)
        setDefaultIcon(asset.icon)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleTypeChange = (event) => {
        setDefaultType(event.target.value);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await secureAPI.delete(`/allCryptoCoins/${id}`)
                refetch()
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "product has been deleted.",
                        icon: "success",
                        timer: 1500
                    });
                }
            }
        });
    }


    const handleCoinChange = (e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const key = formData.key.value.toUpperCase();
        const type = defaultType;
        const icon = defaultIcon

        if (type === "crypto coin") {
            const coinInfo = {
                name,
                key,
                price: 0,
                type,
                changePrice: 0,
                highPrice: 0,
                lowPrice: 0,
                icon
            }
            // console.log(coinInfo)
            secureAPI.put(`/allCryptoCoins/${assetId}`, coinInfo)
                .then((res) => {
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            title: `Edit successful!`,
                            text: `${name} has been edited!`,
                            icon: "success",
                        });
                        refetch();
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
        } else {
            const coinInfo = {
                name,
                key,
                type,
                price: 0,
                icon
            }
            // console.log(coinInfo)
            secureAPI.put(`/allFlatCoins/${assetId}`, coinInfo)
                .then((res) => {
                    refetch();
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            title: `Edit successful!`,
                            text: `${name} has been edited!`,
                            icon: "success",
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
        }
        handleClose();

    }



    // image hosting 
    const handleIconChange = async (e) => {
        const coinImgFile = { image: e.target.files[0] };

        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
                coinImgFile,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.data.success) {
                setDefaultIcon(response.data.data.url);

            } else {
                toast.error("Failed to upload image");
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Failed to upload image");
        }
    };


    return (
        <div className='gap-6 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-6'>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (e) => handleCoinChange(e)
                }}
            >
                <DialogTitle>Edit {defaultName}</DialogTitle>
                <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <TextField
                            defaultValue={defaultName}
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Coin Name"
                            type="text"
                            fullWidth
                        // variant="standard"
                        />
                        <TextField
                            defaultValue={defaultKey}
                            autoFocus
                            required
                            margin="dense"
                            id="key"
                            name="key"
                            label="Coin Key"
                            type="text"
                            fullWidth
                        // variant="standard"
                        />
                    </div>
                    <FormControl required sx={{ width: "100%" }}>
                        <InputLabel id="demo-simple-select-helper-label">Coin Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={defaultType}
                            label="Coin type"
                            onChange={handleTypeChange}
                        >
                            <MenuItem value={"crypto coin"}>crypto coin</MenuItem>
                            <MenuItem value={"flat coin"}>flat coin</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        // required
                        margin="dense"
                        id="icon"
                        name="icon"
                        label=""
                        type="file"
                        fullWidth
                        onChange={handleIconChange}
                        sx={{ display: "none" }}
                    // variant="standard"
                    />
                    <label htmlFor="icon">
                        <p className='border-2 p-2 rounded w-max cursor-pointer'> <Image
                            width={50}
                            height={50}
                            src={defaultIcon}
                            alt="coin-icon"
                        />Change Icon</p>
                    </label>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant='outlined'>Cancel</Button>
                    <Button  type="submit" variant='outlined'>Update</Button>
                </DialogActions>
            </Dialog>
            {assets.map((asset, idx) => (
                // <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                <div key={idx} className='coinBg rounded-lg p-6 space-y-4  relative bg-darkOne border border-darkThree text-white'>
                    <p className='absolute top-4 left-4'>{idx + 1}.</p>
                    <div >
                        <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                            className='mx-auto'
                        />
                        <p className='text-center text-lg font-semibold mt-3'>{asset.name}</p>
                    </div>
                    <p className='flex justify-between items-center font-semibold'>Price: ${parseFloat(asset.price).toFixed(2)}<span className={`${asset.changePrice < 0 ? "text-red-700" : "text-green-700"}`}>{asset.changePrice}%</span></p>
                    <div className='flex justify-between items-center'>
                        <p>24h High: <span className='text-green-700 font-semibold'>${parseFloat(asset.highPrice).toFixed(2)}</span></p>
                        <IconButton aria-label="delete" onClick={() => handleClickOpen(asset)}>
                            <EditIcon className='text-gray-500' />
                        </IconButton>

                    </div>
                    <div className='flex justify-between items-center'>
                        <p>24h Low: <span className='text-red-700 font-semibold'>${parseFloat(asset.lowPrice).toFixed(2)}</span></p>
                        <IconButton aria-label="delete" onClick={() => handleDelete(asset._id)}>
                            <DeleteIcon className='text-gray-500' />
                        </IconButton>
                    </div>
                </div>
            ))
            }
        </div >
    );
};

export default ManageCrypto;