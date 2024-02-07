"use client"
import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Watchlist = () => {

    const { user, loading } = useAuth();
    const [currentPrice, setCurrentPrices] = useState({});
    const [changedPrice, setChangedPrices] = useState({});
    const [heighPrice, setHeighPrices] = useState({});
    const [lowPrice, setLowPrices] = useState({});

    const { data: watchlistData = [], isPending, isLoading, refetch } = useSecureFetch(
        `/watchlist?email=${user.email}`,
        ["watchlist", user.email]
    );
    // console.log(watchlistData)

    useEffect(() => {
        const keys = watchlistData.map(asset => {
            return asset.assetKey
        });
        const prices = {};
        const priceChange = {};
        const priceHeigh = {};
        const priceLow = {};
    
        keys.forEach((symbol) => {
            const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@ticker`);
            socket.addEventListener("message", (event) => {
                const tickerData = JSON.parse(event.data);
                prices[symbol] = tickerData.c;
                priceChange[symbol] = tickerData.p;
                priceHeigh[symbol] = tickerData.h;
                priceLow[symbol] = tickerData.l;
    
                setCurrentPrices(prevPrices => ({ ...prevPrices, [symbol]: tickerData.c }));
                setChangedPrices(prevChanges => ({ ...prevChanges, [symbol]: tickerData.p }));
                setHeighPrices(prevHeighs => ({ ...prevHeighs, [symbol]: tickerData.h }));
                setLowPrices(prevLows => ({ ...prevLows, [symbol]: tickerData.l }));
            });
        });
    
    }, [watchlistData]);



    return (
        <div className="flex-1 bg-white rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3 font-semibold">
            <h1>Watchlist</h1>

            {
                watchlistData.length > 0 ?
                    <TableContainer
                        component={Paper}
                        sx={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Table aria-label="simple table">
                            <TableHead className="mx-auto bg-primary">
                                <TableRow className="text-center">
                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Coin Name</TableCell>
                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Price</TableCell>
                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24%</TableCell>
                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24h heigh price</TableCell>
                                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24h low price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {watchlistData.map((asset, idx) => (
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
                                                <p className={`font-semibold text-xs`}>{asset.assetName}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <p className={` font-semibold text-xs`}>${parseFloat(currentPrice[asset.assetKey]).toFixed(2)}</p>
                                        </TableCell>
                                        <TableCell>
                                            <p className={` font-semibold text-xs ${changedPrice[asset.assetKey] < 0 ? "text-red-700" : "text-green-700"}`}>{parseFloat(changedPrice[asset.assetKey]).toFixed(3)}%</p>
                                        </TableCell>
                                        <TableCell>
                                            <p className={` font-semibold text-xs text-green-700`}>${parseFloat(heighPrice[asset.assetKey]).toFixed(2)}</p>
                                        </TableCell>
                                        <TableCell>
                                            <p className={` font-semibold text-xs text-red-700`}>${parseFloat(lowPrice[asset.assetKey]).toFixed(2)}</p>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <div>
                        <h3 className='text-red-500 text-lg font-semibold text-center mt-6'>empty !!</h3>
                    </div>
            }

        </div>
    );
};

export default Watchlist;