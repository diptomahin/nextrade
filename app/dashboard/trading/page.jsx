"use client";

import React, { useEffect } from "react";
import { useState } from "react";

//button

//image imports
import imageBTC from "../../../assets/coinImages/bitcoin.png";
import imageETH from "../../../assets/coinImages/ethereum.png";
import imageLTC from "../../../assets/coinImages/ltc.png";
import imageQTUM from "../../../assets/coinImages/QTUM.png";
import imageDOGE from "../../../assets/coinImages/DOGE.png";
import imageBNB from "../../../assets/coinImages/BNB.png";
import imageHOT from "../../../assets/coinImages/HOT.png";
import imageMATIC from "../../../assets/coinImages/MATIC.png";
import imageXRP from "../../../assets/coinImages/XRP.png";
import imageADA from "../../../assets/coinImages/ADA.png";
// material imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Button from "@/components/library/Button/Button";

const Trading = () => {
  const [BTCPrice, setBTCPrice] = useState(0);
  const [LTCPrice, setLTCPrice] = useState(0);
  const [ETHPrice, setETHPrice] = useState(0);
  const [QTUMPrice, setQTUMPrice] = useState(0);
  const [DOGEPrice, setDOGEPrice] = useState(0);
  const [BNBPrice, setBNBPrice] = useState(0);
  const [HOTPrice, setHOTPrice] = useState(0);
  const [MATICPrice, setMATICPrice] = useState(0);
  const [XRPPrice, setXRPPrice] = useState(0);
  const [ADAPrice, setADAPrice] = useState(0);

  React.useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    // Event listener for incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      console.log(data);

      // Find and update prices for BTC, LTC, and ETH
      data.forEach((ticker) => {
        const symbol = ticker.s;

        if (symbol === "BTCUSDT") {
          setBTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "LTCUSDT") {
          setLTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ETHUSDT") {
          setETHPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "QTUMUSDT") {
          setQTUMPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "DOGEUSDT") {
          setDOGEPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "BNBUSDT") {
          setBNBPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "HOTUSDT") {
          setHOTPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "MATICUSDT") {
          setMATICPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "XRPUSDT") {
          setXRPPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ADAUSDT") {
          setADAPrice(parseFloat(ticker.c).toFixed(2));
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
    createData("Bit Coin (BTC)", BTCPrice, imageBTC),
    createData("Ethereum (ETC)", ETHPrice, imageETH),
    createData("Binance Coin (BNB)", BNBPrice, imageBNB),
    createData("LiteCoin (LTC)", LTCPrice, imageLTC),
    createData("QTUM Coin", QTUMPrice, imageQTUM),
    createData("DOGE Coin", DOGEPrice, imageDOGE),
    createData("HOT Coin", HOTPrice, imageHOT),
    createData("MATIC Coin", MATICPrice, imageMATIC),
    createData("ADA Coin", ADAPrice, imageADA),
    createData("XRP Coin", XRPPrice, imageXRP)
  ];

  return (
    <div>
      {/* Table boat  */}
      <div className="mt-20 ">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="bg-primary mx-auto">
              <TableRow className="text-center">
                <TableCell sx={{ color: "white" }} className="font-semibold ">
                  Icon
                </TableCell>
                <TableCell sx={{ color: "white" }} className=" font-semibold">
                  Crypto
                </TableCell>
                <TableCell sx={{ color: "white" }} className="font-semibold">
                  Current Price
                </TableCell>
                <TableCell
                  sx={{ color: "white" }}
                  className="font-semibold"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset) => (
                <TableRow
                  key={asset.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Image
                      width={100}
                      height={100}
                      src={asset.icon}
                      alt="coin-icon"
                    />
                  </TableCell>
                  <TableCell>
                    <p className={`text-lg`}>{asset.name}</p>
                  </TableCell>
                  <TableCell>
                    <p className={`text-lg font-semibold`}>{asset.price}</p>
                  </TableCell>
                  <TableCell>
                    <Button>Trade</Button>
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