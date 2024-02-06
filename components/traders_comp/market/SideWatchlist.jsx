"use client"
import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

    useEffect(() => {
        const keys = watchlistData.map(asset => {
            return asset.assetKey
        })
        const prices = {};
        const priceChange = {};
        assets.forEach((asset) => {
            const symbol = asset.key;
            if (keys.includes(symbol)) {
                prices[symbol] = parseFloat(asset.price).toFixed(2);
                priceChange[symbol] = parseFloat(asset.changePrice).toFixed(1)
            }
        });
        setCurrentPrices(prices);
        setChangedPrices(priceChange)

    }, [assets, watchlistData]);
    //   console.log(currentPrice)


    return (
        <div className="flex-1 bg-sky-100 rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3 font-semibold">
            <h1>Watchlist</h1>

            {
                watchlistData.length > 0 ?
                    <TableContainer
                        component={Paper}
                        sx={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Link href="/dashboard/watchlist">
                            <Table aria-label="simple table">
                                <TableHead className="mx-auto bg-primary">
                                    <TableRow className="text-center">
                                        <TableCell sx={{ fontWeight: 700, color: "white" }}>Coin Name</TableCell>
                                        <TableCell sx={{ fontWeight: 700, color: "white" }}>Price</TableCell>
                                        <TableCell sx={{ fontWeight: 700, color: "white" }}>24%</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {watchlistData.map((asset, idx) => (
                                        <TableRow
                                            key={asset.name}
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
                                                    <p className={`font-semibold text-xs`}>{asset.assetName}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <p className={` font-semibold text-xs`}>${currentPrice[asset.assetKey]}</p>
                                            </TableCell>
                                            <TableCell>
                                                <p className={` font-semibold text-xs ${changedPrice[asset.assetKey] < 0 ? "text-red-700" : "text-green-700"}`}>${changedPrice[asset.assetKey]}</p>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Link>
                    </TableContainer>
                    :
                    <div>
                        <h3 className='text-red-500 text-lg font-semibold text-center mt-6'>empty !!</h3>
                    </div>
            }

        </div>
    );
};

export default SideWatchlist;