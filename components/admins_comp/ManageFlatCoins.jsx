"use client"
import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import useSecureAPI from "@/hooks/useSecureAPI";
import Swal from "sweetalert2";
import { useState } from "react";
import DashButton from "../library/buttons/DashButton";

const ManageFlatCoins = ({ assets, refetch }) => {
    const [open, setOpen] = useState(false);
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
                const res = await secureAPI.delete(`/allCoins/${id}`)
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
        const icon = formData.icon.value

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
            secureAPI.put(`/allCoins/${assetId}`, coinInfo)
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
            secureAPI.put(`/allCoins/${assetId}`, coinInfo)
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
        }
        handleClose();

    }
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
                        defaultValue={defaultIcon}
                        autoFocus
                        required
                        margin="dense"
                        id="icon"
                        name="icon"
                        label="Coin Icon URL"
                        type="text"
                        fullWidth
                    // variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <DashButton onClick={handleClose}>Cancel</DashButton>
                    <DashButton type="submit">Update</DashButton>
                </DialogActions>
            </Dialog>
            {assets.map((asset, idx) => (
                // <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-indigo-100 '>
                    <div className="absolute right-2 flex flex-col gap-2">
                        <IconButton aria-label="delete" onClick={() => handleClickOpen(asset)}>
                            <EditIcon className='text-gray-500' />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete(asset._id)}>
                            <DeleteIcon className='text-gray-500' />
                        </IconButton>
                    </div>
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
                                defaultValue={defaultIcon}
                                autoFocus
                                required
                                margin="dense"
                                id="icon"
                                name="icon"
                                label="Coin Icon URL"
                                type="text"
                                fullWidth
                            // variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <DashButton onClick={handleClose}>Cancel</DashButton>
                            <DashButton type="submit">Update</DashButton>
                        </DialogActions>
                    </Dialog>
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
                    <p className='font-semibold'>Current value: {parseFloat(asset.price).toFixed(2)}{" "}<span className="text-xs text-indigo-700">{asset.key}/USD</span></p>
                </div>
            ))}
        </div>
    );
};

export default ManageFlatCoins;