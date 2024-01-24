"use client"

import React from 'react';
import { useState } from "react";
//log
import logo from "../../../assets/nextrade-logo.png";

//button

//image imports
import imageBTC from "../../../assets/coinImages/bitcoin.png"
import imageETH from "../../../assets/coinImages/ethereum.png"
import imageLTC from "../../../assets/coinImages/ltc.png"
// material imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';


const Trading = () => {

    const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
    const [currentLTCPrice, setCurrentLTCPrice] = useState(0);
    const [currentETHPrice, setCurrentETHPrice] = useState(0);
    
    const buyingBTCPrice = parseInt('40020')
    const buyingETHPrice = parseInt('2050')
    const buyingLTCPrice = parseInt('60')


    React.useEffect(() => {
        // Create a WebSocket connection
        const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

        // Event listener for incoming messages
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            // console.log(data)

            // Find and update prices for BTC, LTC, and ETH
            data.forEach((ticker) => {
                const symbol = ticker.s;

                if (symbol === 'BTCUSDT') {
                    setCurrentBTCPrice(parseFloat(ticker.c).toFixed(2));
                } else if (symbol === 'LTCUSDT') {
                    setCurrentLTCPrice(parseFloat(ticker.c).toFixed(2));
                } else if (symbol === 'ETHUSDT') {
                    setCurrentETHPrice(parseFloat(ticker.c).toFixed(2));
                }
            });
        });

        // Clean up the WebSocket connection when the component unmounts
        return () => {
            socket.close();
        };
    }, []);

    function createData(name, price, icon) {
        return { name, price, icon };
    }

    const assets = [
        createData('Bitcoin (BTC)', currentBTCPrice, imageBTC),
        createData('Ethereum (ETC)', currentETHPrice, imageETH),
        createData('LiteCoin (LTC)', currentLTCPrice, imageLTC),
    ];


    return (
        <div>

            {/* Table boat  */}
            <div className="mt-20 ">
                <Image className="ml-5 " width={70} height={70} src={logo} alt='logo'/>
                <h2 className=" text-4xl font-bold text-primary mb-3 font-sans">Start Trading. . . . . </h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="bg-primary ">
                            <TableRow className='text-center' >
                                <TableCell sx={{color:"white"}}  className="font-semibold ">Icon</TableCell>
                                <TableCell  sx={{color:"white"}}  className=" font-semibold">Crypto</TableCell>
                                <TableCell sx={{color:"white"}}  className="font-semibold">Current Price</TableCell>
            
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {assets.map((asset) => (
                                <TableRow
                                    key={asset.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <Image width={100} height={100} src={asset.icon} alt='coin-icon'/>
                                    </TableCell>
                                    <TableCell  >
                                        <p className={`text-lg`}>{asset.name}</p>
                                    </TableCell>                              
                                    <TableCell >
                                        <p className={`text-lg font-semibold`}>{asset.price}</p>
                                    </TableCell>
                                    <TableCell>
                                        
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
};

export default Trading;