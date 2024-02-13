"use client"

import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import emptyIcon from '../../../assets/emptyIcon.png';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const SideWatchlist = ({ assets, flatCurrency }) => {
    const { user, loading } = useAuth();
    const [currentPrice, setCurrentPrices] = useState({});
    const [changedPrice, setChangedPrices] = useState({});
    const [flatCurrencyPrice, setFlatCurrencyPrice] = useState({});

    const { data: watchlistData = [], isPending, isLoading, refetch } = useSecureFetch(
        `/watchlist?email=${user.email}`,
        ["watchlist", user.email]
    );
    // console.log(watchlistData)
    // console.log(assets)
    // console.log(flatCurrency)

    const cryptoWatchlistData = watchlistData.filter(crypto => crypto.type === "crypto coin")
    const currencyWatchlistData = watchlistData.filter(flat => flat.type === "flat coin")
    // console.log(currencyWatchlistData)
    // console.log(cryptoWatchlistData)

    useEffect(()=>{
        const flatCurrencyKeys = currencyWatchlistData.map(asset => {
            return asset.key
        });
        // console.log(flatCurrencyKeys)
    
        flatCurrency.forEach((asset) => {
            const symbol = asset.key;
            // console.log(symbol)
            if (flatCurrencyKeys.includes(symbol)) {
                flatCurrencyPrice[symbol] = parseFloat(asset.price).toFixed(2);
            }
        });
    
        setFlatCurrencyPrice(flatCurrencyPrice)
    },[currencyWatchlistData, flatCurrencyPrice, flatCurrency])
    // console.log(flatCurrencyPrice)


    useEffect(() => {
        const cryptoKeys = cryptoWatchlistData.map(asset => {
            return asset.key
        });

        assets.forEach((asset) => {
            const symbol = asset.key;
            if (cryptoKeys.includes(symbol)) {
                currentPrice[symbol] = parseFloat(asset.price).toFixed(2);
                changedPrice[symbol] = parseFloat(asset.changePrice).toFixed(1)
            }
        });

        setCurrentPrices(currentPrice);
        setChangedPrices(changedPrice)
    }, [cryptoWatchlistData, assets, changedPrice, currentPrice]);
    // console.log(currentPrice)

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="flex-1 w-full bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3 font-semibold">
            <h1>Watchlist</h1>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider', marginBottom: "10px" }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
                            <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel sx={{ padding: "0px" }} value="1">
                        {
                            cryptoWatchlistData.length > 0 ?
                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        border: "1px solid rgba(0, 0, 0, 0.1)",
                                    }}
                                    className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree"
                                >
                                    <Link href="/dashboard/watchlist">
                                        <Table aria-label="simple table">
                                            <TableHead className="mx-auto">
                                                <TableRow className="text-center">
                                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Coin Name</TableCell>
                                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Price</TableCell>
                                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24%</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                {cryptoWatchlistData.map((asset, idx) => (
                                                    <TableRow
                                                        key={asset._id}
                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                    >
                                                        <TableCell>
                                                            <div className="flex items-center gap-1">
                                                                <Image
                                                                    width={30}
                                                                    height={30}
                                                                    src={asset.icon}
                                                                    alt="coin-icon"
                                                                />
                                                                <p className={`text-xs text-white`}>{asset.name}</p>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <p className={` text-xs text-white`}>${currentPrice[asset.key]}</p>
                                                        </TableCell>
                                                        <TableCell>
                                                            <p className={`text-xs ${changedPrice[asset.key] < 0 ? "text-red-600" : "text-green-600"}`}>{changedPrice[asset.key]}%</p>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Link>
                                </TableContainer>
                                :
                                <div className='border-2 w-full border-primary rounded flex flex-col items-center justify-center gap-2 py-8'>
                                    <Image src={emptyIcon} width={70} height={70} alt="BTC/USDT Logo" />
                                    <h3 className='text-primary text-lg font-semibold text-center'>empty !!</h3>
                                </div>
                        }
                    </TabPanel>
                    <TabPanel sx={{ padding: "0px" }} value="2">
                    {
                            currencyWatchlistData.length > 0 ?
                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        border: "1px solid rgba(0, 0, 0, 0.1)",
                                    }}
                                    className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree"
                                >
                                    <Link href="/dashboard/watchlist">
                                        <Table aria-label="simple table">
                                            <TableHead className="mx-auto">
                                                <TableRow className="text-center">
                                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Coin Name</TableCell>
                                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Price/USD</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody >
                                                {currencyWatchlistData.map((asset, idx) => (
                                                    <TableRow
                                                        key={asset._id}
                                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                    >
                                                        <TableCell>
                                                            <div className="flex items-center gap-1">
                                                                <Image
                                                                    width={30}
                                                                    height={30}
                                                                    src={asset.icon}
                                                                    alt="coin-icon"
                                                                />
                                                                <p className={`text-xs text-white`}>{asset.name}</p>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <p className={` text-xs text-white`}>{flatCurrencyPrice[asset.key]} <span className='text-[8px] text-white'>{asset.key}</span></p>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Link>
                                </TableContainer>
                                :
                                <div className='border-2 w-full border-primary rounded flex flex-col items-center justify-center gap-2 py-8'>
                                    <Image src={emptyIcon} width={70} height={70} alt="BTC/USDT Logo" />
                                    <h3 className='text-primary text-lg font-semibold text-center'>empty !!</h3>
                                </div>
                        }
                    </TabPanel>
                </TabContext>
            </Box>



        </div>
    );
};

export default SideWatchlist;