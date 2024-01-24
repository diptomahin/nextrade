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


const Portfolio = () => {
    const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
    const [currentETHPrice, setCurrentETHPrice] = useState(0);
    const [oldPrice, setOldPrice] = useState(0)

    const buyingBTCPrice = parseInt('40600')
    const buyingRTHPrice = parseInt('20850')


    // for bitcoin
    const bws = new WebSocket ("wss://stream.binance.com:9443/ws/btcusdt@trade")

    bws.onmessage = e => {
        const data = JSON.parse(e.data);
        setCurrentBTCPrice(parseFloat(data.p).toFixed(2));

    }

    // for ethereum
    const ews = new WebSocket ("wss://stream.binance.com:9443/ws/etheur@trade")

    ews.onmessage = e => {
        const data = JSON.parse(e.data);
        setCurrentETHPrice(parseFloat(data.p).toFixed(2));

    }

    

    // material style   

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', buyingBTCPrice, currentBTCPrice, 24, 4.0),
        createData('Ice cream sandwich', buyingRTHPrice, currentETHPrice, 37, 4.3),
        createData('Eclair', buyingBTCPrice, currentBTCPrice, 24, 6.0),
        createData('Cupcake', buyingRTHPrice, currentETHPrice, 67, 4.3),
        createData('Gingerbread', buyingBTCPrice, currentBTCPrice, 49, 3.9),
      ];

      

    return (
        <div>
            

            {/* Current balance */}

            <div className="  flex items-center justify-between bg-grayPrimary p-4 rounded-md gap-12 xl:gap-5 lg:gap-32">
                <div>
                <p className="font-semibold text-gray-500">Current Balance <RemoveRedEyeOutlinedIcon className="text-base ml-2"/></p>
                <h1 className=" lg:text-3xl text-xl font-extrabold my-2">$2,77,308.00</h1>
                <p className=" text-red-600 font-semibold ">-$1200.78 (-1.89%)</p>
                </div>
                <div className="  ">
                
                            <Button> <BorderColorIcon className=" text-white" /> Edit</Button>
                            <Button className="lg:ml-5 mt-2 p-1"> <AddIcon className=" text-white" /> Add Transaction</Button>
                        
                </div>
            </div>

            {/* Table boat  */}
            <div className="mt-20 ">
                <h2 className=" text-3xl font-bold mb-2 font-sans">Your Holdings . . . </h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-primary text-white">
          <TableRow  >
            <TableCell className="text-white font-semibold">Company</TableCell>
            <TableCell align="right" className="text-white font-semibold">Buying Price</TableCell>
            <TableCell align="right" className="text-white font-semibold">Current Price</TableCell>
            <TableCell align="right" className="text-white font-semibold">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right" className="text-white font-semibold">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
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