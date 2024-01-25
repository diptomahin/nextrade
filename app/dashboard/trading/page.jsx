// import React, { useState, useEffect } from "react";
'use client'
import { useEffect, useState } from "react"; 
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Button from "@/components/library/Button/Button";

// Import coin images
import imageBTC from "../../../assets/coinImages/bitcoin.png";
import imageETH from "../../../assets/coinImages/ethereum.png";
import imageLTC from "../../../assets/coinImages/ltc.png";
import imageQTUM from "../../../assets/coinImages/QTUM.png";
import imageDOGE from "../../../assets/coinImages/DOGE.png";
import imageNEO from "../../../assets/coinImages/neo.png";
import imageBNB from "../../../assets/coinImages/BNB.png";
import imageHOT from "../../../assets/coinImages/HOT.png";
import imageMATIC from "../../../assets/coinImages/MATIC.png";
import imageXRP from "../../../assets/coinImages/XRP.png";
import imageADA from "../../../assets/coinImages/ADA.png";


const Trading = () => {
  const [BTCPrice, setBTCPrice] = useState(0);
  const [LTCPrice, setLTCPrice] = useState(0);
  const [ETHPrice, setETHPrice] = useState(0);
  const [QTUMPrice, setQTUMPrice] = useState(0);
  const [DOGEPrice, setDOGEPrice] = useState(0);
  const [NEOPrice, setNEOPrice] = useState(0);
  const [BNBPrice, setBNBPrice] = useState(0);
  const [HOTPrice, setHOTPrice] = useState(0);
  const [MATICPrice, setMATICPrice] = useState(0);
  const [XRPPrice, setXRPPrice] = useState(0);
  const [ADAPrice, setADAPrice] = useState(0);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      data.forEach((ticker) => {
        const symbol = ticker.s;

        switch (symbol) {
          case "BTCUSDT":
            setBTCPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "LTCUSDT":
            setLTCPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "ETHUSDT":
            setETHPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "QTUMUSDT":
            setQTUMPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "DOGEUSDT":
            setDOGEPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "NEOUSDT":
            setNEOPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "BNBUSDT":
            setBNBPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "HOTUSDT":
            setHOTPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "MATICUSDT":
            setMATICPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "XRPUSDT":
            setXRPPrice(parseFloat(ticker.c).toFixed(2));
            break;
          case "ADAUSDT":
            setADAPrice(parseFloat(ticker.c).toFixed(2));
            break;
          default:
            break;
        }
      });
    });

    return () => {
      socket.close();
    };
  }, []);

  function createData(name, price, icon) {
    return { name, price, icon };
  }

  const assets = [
    createData("Bitcoin (BTC)", BTCPrice, imageBTC),
    createData("Ethereum (ETH)", ETHPrice, imageETH),
    createData("LiteCoin (LTC)", LTCPrice, imageLTC),
    createData("QTUM coin", QTUMPrice, imageQTUM),
    createData("DOGE coin", DOGEPrice, imageDOGE),
    createData("NEO", NEOPrice, imageNEO),
    createData("BNB Coin", BNBPrice, imageBNB),
    createData("HOT Coin", HOTPrice, imageHOT),
    createData("MATIC Coin", MATICPrice, imageMATIC),
    createData("XRP Coin", XRPPrice, imageXRP),
    createData("ADA Coin", ADAPrice, imageADA),
  ];

  const handleBuyCoin = (asset) => {
    console.log("button clicked of asset:", asset.name);
  };

  return (
    <div>
      <div className="mt-20 ">
        <h2 className="text-4xl font-bold text-primary mb-3 font-sans">
          Start Trading. . . . .{" "}
        </h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="bg-primary mx-auto">
              <TableRow className="text-center">
                <TableCell sx={{ color: "white" }} className="font-semibold ">
                  Icon
                </TableCell>
                <TableCell sx={{ color: "white" }} className="font-semibold ">
                  Crypto
                </TableCell>
                <TableCell sx={{ color: "white" }} className="font-semibold ">
                  Current Price
                </TableCell>
                <TableCell sx={{ color: "white" }} className="font-semibold "></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assets.map((asset) => (
                <TableRow
                  key={asset.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Image width={100} height={100} src={asset.icon} alt="coin-icon" />
                  </TableCell>
                  <TableCell>
                    <p className="text-lg">{asset.name}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-lg font-semibold">{asset.price}</p>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleBuyCoin(asset)}>Trade</Button>
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
