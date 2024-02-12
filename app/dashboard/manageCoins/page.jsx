"use client"
import ManageCrypto from '@/components/admins_comp/ManageCrypto';
import ManageFlatCoins from '@/components/admins_comp/ManageFlatCoins';
import DashButton from '@/components/library/buttons/DashButton';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Tab, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageCoins = () => {
    const [assets, setAssets] = useState([]);
    const [flatCurrency, setFlatCurrency] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [typeValue, setTypeValue] = useState("")


    const { data: allCoins = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['allCoins'],
        queryFn: async () => {
            const res = await axios.get('/allCoins.json');
            return res.data
        }
    });

    // console.log(allCoins)
    useEffect(() => {
        if (allCoins.length > 0) {
            setAssets(allCoins.filter(coin => coin.type === "crypto coin"))
            setFlatCurrency(allCoins.filter(coin => coin.type === "flat coin"))
        }
    }, [allCoins])


    const createData = (name, key, price, type, changePrice, highPrice, lowPrice, icon) => ({ name, key, price, type, changePrice, highPrice, lowPrice, icon });


    // console.log(assets)

    useEffect(() => {
        const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

        socket.addEventListener("message", (event) => {
            const data = JSON.parse(event.data);
            if (assets.length > 0) {
                const updatedAssets = assets.map((asset) => {
                    const ticker = data.find((item) => item.s === asset.key);
                    if (ticker) {
                        return createData(
                            asset.name,
                            asset.key,
                            parseFloat(ticker.c).toFixed(3),
                            asset.type,
                            parseFloat(ticker.p).toFixed(3),
                            parseFloat(ticker.h).toFixed(2),
                            parseFloat(ticker.l).toFixed(2),
                            asset.icon,
                        );
                    }
                    return asset;
                });
                setAssets(updatedAssets);
            }
        });
        return () => socket.close();
    }, [assets]);



    const createFlatCurrencyData = (name, key, type, price, icon) => ({ name, key, type, price, icon });

    useEffect(() => {
        const fetchCurrencyRates = async () => {
            try {
                if (flatCurrency.length > 0) {
                    const response = await axios.get(
                        'https://api.exchangerate-api.com/v4/latest/USD'
                    );
                    // Access the data property of the response to get the currency rates
                    const data = response.data.rates;
                    const updatedAssets = flatCurrency.map(cur => {
                        const currencyKey = cur.key
                        // console.log(currencyKey)
                        return createFlatCurrencyData(
                            cur.name,
                            cur.key,
                            cur.type,
                            data[currencyKey],
                            cur.icon,
                        );
                    })
                    setFlatCurrency(updatedAssets)
                }
            } catch (error) {
                console.error('Error fetching currency rates:', error);
            }
        };

        fetchCurrencyRates();
    }, [flatCurrency]);
    // console.log(flatCurrency)

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleTypeChange = (event) => {
        setTypeValue(event.target.value);
    };


    return (
        <div>

            <div className='flex flex-col xl:flex-row gap-6 justify-between p-6 rounded-lg bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                <h1 className='text-3xl font-semibold'>Manage Coins</h1>
                <DashButton className="w-full" onClick={handleClickOpen}>Add new</DashButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            const formData = event.target;
                            const name = formData.name.value;
                            const key = formData.key.value;
                            const type = typeValue;
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
                                console.log(coinInfo)
                            }else{
                                const coinInfo = {
                                    name,
                                    key,
                                    type,
                                    price: 0,
                                    icon
                                }
                                console.log(coinInfo)
                            }
                            handleClose();
                        },
                    }}
                >
                    <DialogTitle>Add new coin</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Coin Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <FormControl variant="standard" required sx={{ width: "100%", marginTop: "15px" }}>
                            <InputLabel id="demo-simple-select-helper-label">Coin Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={typeValue}
                                label="Coin type"
                                onChange={handleTypeChange}
                            >
                                <MenuItem value={"crypto coin"}>crypto coin</MenuItem>
                                <MenuItem value={"flat coin"}>flat coin</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="key"
                            name="key"
                            label="Coin Key"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="icon"
                            name="icon"
                            label="Coin Icon URL"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <DashButton onClick={handleClose}>Cancel</DashButton>
                        <DashButton type="submit">Add</DashButton>
                    </DialogActions>
                </Dialog>
            </div>

            <Box className='w-full my-6'>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider', marginBottom: "10px" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
                            <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
                        <div className='w-full'>
                            <ManageCrypto assets={assets}></ManageCrypto>
                        </div>
                    </TabPanel>
                    <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
                        <div className='w-full'>
                            <ManageFlatCoins assets={flatCurrency}></ManageFlatCoins>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default ManageCoins;