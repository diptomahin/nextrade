"use client";

import React from "react";
import { useState } from "react";
//log
import logo from "../../../assets/nextrade-logo.png";

//button

//image imports
import imageBTC from "../../../assets/coinImages/bitcoin.png";
import imageETH from "../../../assets/coinImages/ethereum.png";
import imageLTC from "../../../assets/coinImages/ltc.png";
import imageQTUM from "../../../assets/coinImages/QTUM.png";
import imageDOGE from "../../../assets/coinImages/DOGE.png";
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
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAuth from "@/utils/useAuth";
import { data } from "autoprefixer";
import Swal from "sweetalert2";
import DashboardButton from "@/components/library/DashboardButton";

const Trading = () => {
  const { user } = useAuth();

  const [BTCPrice, setBTCPrice] = useState(0);
  const [LTCPrice, setLTCPrice] = useState(0);
  const [ETHPrice, setETHPrice] = useState(0);
  const [QTUMPrice, setQTUMPrice] = useState(0);
  const [DOGEPrice, setDOGEPrice] = useState(0);

  const axiosPublic = useAxiosPublic();

  React.useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    // Event listener for incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      // console.log(data)

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
        }
      });
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  function createData(name, key, price, icon) {
    return { name, key, price, icon };
  }

  const assets = [
    createData("Bitcoin (BTC)", "BTCUSDT", BTCPrice, imageBTC),
    createData("Ethereum (ETC)", "ETHUSDT", ETHPrice, imageETH),
    createData("LiteCoin (LTC)", "LTCUSDT", LTCPrice, imageLTC),
    createData("QTUM coin", "QTUMUSDT", QTUMPrice, imageQTUM),
    createData("DOGE coin", "DOGEUSDT", DOGEPrice, imageDOGE),
  ];

  const handleBuyCoin = (ast) => {
    const assetInfo = {
      assetName: ast.name,
      assetKey: ast.key,
      assetBuyingPrice: ast.price,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };
    // console.log('asset information', assetInfo)
    axiosPublic
      .put("/all-users", assetInfo)
      .then((res) => {
        console.log(res.data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: `Coin Purchase successful!`,
            text: `Best of luck`,
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `Coin Purchase failed!`,
          text: `Please try again`,
          icon: "error",
        });
      });
  };

  return (
    <div>
      {/* Table boat  */}
      <div className="p-3">
        <h2 className=" text-xl font-semibold mb-3">Start Trading. . . . . </h2>
        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="mx-auto">
              <TableRow className="text-center">
                <TableCell className="font-semibold ">Icon</TableCell>
                <TableCell className=" font-semibold">Crypto</TableCell>
                <TableCell className="font-semibold">Current Price</TableCell>
                <TableCell className="font-semibold"></TableCell>
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
                    <DashboardButton
                      onClick={() => handleBuyCoin(asset)}
                      className="font-semibold normal-case"
                    >
                      Trade
                    </DashboardButton>
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
