"use client"
import DarkButton from '@/components/library/buttons/DarkButton';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import DashboardButton from "@/components/library/buttons/DashButton";
import Link from 'next/link';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Magnetic from '@/components/library/Magnetic';
import useSecureAPI from '@/hooks/useSecureAPI';
import Swal from 'sweetalert2';


const WatchlistCryptoTable = ({ assets, refetch }) => {
    const secureAPI = useSecureAPI();

    const handleDelete = (id) => {
        // console.log(id)
        secureAPI.delete(`/watchlist/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Coin has been deleted successfully.",
                        icon: "success",
                        timer: 1500
                    });
                }
                refetch()
            })
            .catch(err => {
                Swal.fire({
                    title: "Failed!",
                    text: "Something went wrong.",
                    icon: "error",
                    timer: 1500
                });
            })
    };


    return (
        <TableContainer
            sx={{
                borderRadius: "0.75rem",
                boxShadow: "none",
            }}
            className='bg-gradient-to-bl from-darkOne to-darkTwo border-none '
            component={Paper}
        >
            <Table aria-label="simple table">
                <TableHead className="mx-auto ">
                    <TableRow className="text-center">
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Sl No.</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Coin Name</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Current Price</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>24%</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>24h High Price</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>24h Low Price</TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Option</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((asset, idx) => (
                        <TableRow
                            key={asset.name}
                        >
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }} component="th" scope="row">
                                <p className='text-white'>{idx + 1}</p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                                <div className="flex items-center gap-2">
                                    <Image
                                        width={40}
                                        height={40}
                                        src={asset.icon}
                                        alt="coin-icon"
                                    />
                                    <p className={`font-semibold text-white`}>{asset.name}</p>
                                    <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">{asset.key.slice(0, -4)}</span>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                                <p className={` font-semibold text-white`}>$ {parseFloat(asset.price).toFixed(2)}</p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                                <p className={` font-semibold ${asset.changePrice < 0 ? "text-red-600" : asset.changePrice > 0 ? "text-green-600" : ""}`}>{asset.changePrice}% {asset.changePrice < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}</p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                                <p className={` font-semibold text-green-700`}>$ {asset.highPrice}</p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                                <p className={` font-semibold text-red-600`}>$ {asset.lowPrice}</p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: "1px solid #2c3750", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                                <DashboardButton
                                    className="font-semibold normal-case"
                                >
                                    <Link href={`/dashboard/market/${asset.key}`}>
                                        Explore
                                    </Link>
                                </DashboardButton>
                                <Magnetic>
                                    <Button color="error" variant='contained' sx={{ borderRadius: "50px", paddingY: "10px" }} onClick={() => handleDelete(asset._id)}>Delete</Button>
                                </Magnetic>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default WatchlistCryptoTable;