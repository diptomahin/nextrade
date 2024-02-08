"use client"

import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import emptyIcon from '../../../assets/emptyIcon.png';

const SideWatchlist = ({ assets }) => {
    const { user, loading } = useAuth();
    const [currentPrice, setCurrentPrices] = useState({});
    const [changedPrice, setChangedPrices] = useState({});

    const { data: watchlistData = [], isPending, isLoading, refetch } = useSecureFetch(
        `/watchlist?email=${user.email}`,
        ["watchlist", user.email]
    );
    // console.log(watchlistData)
    // console.log(assets)

    const cryptoWatchlistData = watchlistData.filter(crypto => crypto.assetType === "crypto currency")
    useEffect(() => {
        
        const cryptoKeys = cryptoWatchlistData.map(asset => {
            return asset.assetKey
        });
        const prices = {};
        const priceChange = {};
        assets.forEach((asset) => {
            const symbol = asset.key;
            if (cryptoKeys.includes(symbol)) {
                prices[symbol] = parseFloat(asset.price).toFixed(2);
                priceChange[symbol] = parseFloat(asset.changePrice).toFixed(1)
            }
        });
        setCurrentPrices(prices);
        setChangedPrices(priceChange)

    }, [assets, cryptoWatchlistData]);
    //   console.log(currentPrice)


    return (
        <div className="flex-1 w-full bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3 font-semibold">
            <h1>Watchlist</h1>
            <p>Crypto:</p>

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
                                                        src={asset.assetImg}
                                                        alt="coin-icon"
                                                    />
                                                    <p className={`text-xs text-white`}>{asset.assetName}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <p className={` text-xs text-white`}>${currentPrice[asset.assetKey]}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p className={`text-xs ${changedPrice[asset.assetKey] < 0 ? "text-red-600" : "text-green-600"}`}>{changedPrice[asset.assetKey]}%</p>
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

        </div>
    );
};

export default SideWatchlist;