"use client"
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Button from "@/components/library/Button/Button";
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// material imports
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useAllUsers from "@/app/hooks/useAllUsers";


const Portfolio = () => {
    
    const [allUsers] = useAllUsers();
    const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
    const [currentLTCPrice, setCurrentLTCPrice] = useState(0);
    const [currentETHPrice, setCurrentETHPrice] = useState(0);
    const [currentQTUMPrice, setCurrentQTUMPrice] = useState(0);
    const [currentDOGEPrice, setCurrentDOGEPrice] = useState(0);
    const [setBuyingPriceInfo, setSetBuyingPriceInfo] = useState([]);
    
    React.useEffect(() => {
        const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');
        
        socket.addEventListener('message', (event) => {
            const data = JSON.parse(event.data);
            
            data.forEach((ticker) => {
                const symbol = ticker.s;
                if (symbol === 'BTCUSDT') {
                    setCurrentBTCPrice(parseFloat(ticker.c).toFixed(2));
                } else if (symbol === 'LTCUSDT') {
                    setCurrentLTCPrice(parseFloat(ticker.c).toFixed(2));
                } else if (symbol === 'ETHUSDT') {
                    setCurrentETHPrice(parseFloat(ticker.c).toFixed(2));
                }
                 else if (symbol === 'QTUMUSDT') {
                    setCurrentQTUMPrice(parseFloat(ticker.c).toFixed(2));
                }
                 else if (symbol === 'DOGEUSDT') {
                    setCurrentDOGEPrice(parseFloat(ticker.c).toFixed(2));
                }
            });
        });

        return () => {
            socket.close();
        };
    }, []);

    React.useEffect(() => {
        const userBTCData = allUsers.flatMap(user => user.portfolio);
        const filteredAssets = userBTCData.filter(asset => 
            asset.assetKey === "BTCUSDT" || 
            asset.assetKey === "ETHUSDT" || 
            asset.assetKey === "LTCUSDT" ||
            asset.assetKey === "QTUMUSDT" ||
            asset.assetKey === "DOGEUSDT"
        );
        setSetBuyingPriceInfo(filteredAssets);
    }, [allUsers]);

    const calculateDifference = (currentPrice, buyingPrice) => {
        return (currentPrice - buyingPrice).toFixed(2);
    };



    return (
        <div>


            {/* Current balance */}

            <div className="  flex items-center justify-between bg-grayPrimary p-4 rounded-md gap-12 xl:gap-5 lg:gap-32">
                <div>
                    <p className="font-semibold text-gray-500">Current Balance <RemoveRedEyeOutlinedIcon className="text-base ml-2" /></p>
                    <h1 className=" lg:text-3xl text-xl font-extrabold my-2">${10 + 10 + 10}</h1>
                    <p className=" text-red-600 font-semibold ">-$1200.78 (-1.89%)</p>
                </div>
                <div className="  ">

                    <Button> <BorderColorIcon className=" text-white" /> Edit</Button>
                    <Button className="lg:ml-5 mt-2 p-1"> <AddIcon className=" text-white" /> Add Transaction</Button>

                </div>
            </div>

            {/* Table boat  */}
           {/* Table */}
           <div className="mt-20">
                <h2 className="text-3xl font-bold mb-2 font-sans">Your Holdings . . . </h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className="bg-primary">
                            <TableRow>
                                <TableCell className="font-semibold">Company</TableCell>
                                <TableCell align="right" className="font-semibold">Buying Price</TableCell>
                                <TableCell align="right" className="font-semibold">Current Price</TableCell>
                                <TableCell align="right" className="font-semibold">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right" className="font-semibold">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {setBuyingPriceInfo.map((asset, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {asset.assetName}
                                    </TableCell>
                                    <TableCell align="right">
                                        $ {asset.assetBuyingPrice}
                                    </TableCell>
                                    <TableCell align="right">
                                        {asset.assetKey === "BTCUSDT" ? (
                                            <span className={currentBTCPrice < parseFloat(asset.assetBuyingPrice) ? 'text-red-700' : 'text-green-700'}>
                                                ${currentBTCPrice}
                                            </span>
                                        ) : asset.assetKey === "ETHUSDT" ? (
                                            <span className={currentETHPrice < parseFloat(asset.assetBuyingPrice) ? 'text-red-700' : 'text-green-700'}>
                                                ${currentETHPrice}
                                            </span>
                                        ) : asset.assetKey === "LTCUSDT" ? (
                                            <span className={currentLTCPrice < parseFloat(asset.assetBuyingPrice) ? 'text-red-700' : 'text-green-700'}>
                                                ${currentLTCPrice}
                                            </span>
                                        ) : asset.assetKey === "QTUMUSDT" ? (
                                            <span className={currentQTUMPrice < parseFloat(asset.assetBuyingPrice) ? 'text-red-700' : 'text-green-700'}>
                                                ${currentQTUMPrice}
                                            </span>
                                        ) : asset.assetKey === "DOGEUSDT" ? (
                                            <span className={currentDOGEPrice < parseFloat(asset.assetBuyingPrice) ? 'text-red-700' : 'text-green-700'}>
                                                ${currentDOGEPrice}
                                            </span>
                                        ) : (
                                            <span>-</span>
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
    <span className={
        asset.assetBuyingPrice ? 
        `font-semibold ${
            calculateDifference(
                asset.assetKey === "BTCUSDT" ? currentBTCPrice :
                asset.assetKey === "ETHUSDT" ? currentETHPrice :
                asset.assetKey === "LTCUSDT" ? currentLTCPrice :
                asset.assetKey === "QTUMUSDT" ? currentQTUMPrice :
                asset.assetKey === "DOGEUSDT" ? currentDOGEPrice : 0,
                parseFloat(asset.assetBuyingPrice)
            ) > 0 ? 'text-green-700' : 'text-red-700'
        }` 
        : ''
    }>
        ${asset.assetBuyingPrice ? calculateDifference(
            asset.assetKey === "BTCUSDT" ? currentBTCPrice :
            asset.assetKey === "ETHUSDT" ? currentETHPrice :
            asset.assetKey === "LTCUSDT" ? currentLTCPrice :
            asset.assetKey === "QTUMUSDT" ? currentQTUMPrice :
            asset.assetKey === "DOGEUSDT" ? currentDOGEPrice : 0,
            parseFloat(asset.assetBuyingPrice)
        ) : '-'}
    </span>
</TableCell>

                                    <TableCell align="right">
                                        {/* {rows[index]?.protein} */}
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

export default Portfolio;