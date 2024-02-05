"use client";

import React from "react";
import { useState } from "react";

//image imports
import imageBTC from "../../../assets/coinImages/bitcoin.png";
import imageETH from "../../../assets/coinImages/ethereum.png";
import imageLTC from "../../../assets/coinImages/ltc.png";
import imageQTUM from "../../../assets/coinImages/QTUM.png";
import imageDOGE from "../../../assets/coinImages/DOGE.png";
import imageXRP from "../../../assets/coinImages/XRP.png";
import imageBCH from "../../../assets/coinImages/BCH.png";
import imageADA from "../../../assets/coinImages/ADA.png";
import imageDOT from "../../../assets/coinImages/DOT.png";
import imageBNB from "../../../assets/coinImages/BNB.png";
import imageMATIC from "../../../assets/coinImages/MATIC.png";
// material imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import DashboardButton from "@/components/library/buttons/DashButton";
import useSecureFetch from "@/hooks/useSecureFetch";
import Link from "next/link";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { Stack } from "@mui/material";

const MarketPage = () => {
  const { user, loading } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);


  // current prices
  const [BTCPrice, setBTCPrice] = useState(0);
  const [LTCPrice, setLTCPrice] = useState(0);
  const [ETHPrice, setETHPrice] = useState(0);
  const [QTUMPrice, setQTUMPrice] = useState(0);
  const [DOGEPrice, setDOGEPrice] = useState(0);
  const [XRPPrice, setXRPPrice] = useState(0);
  const [BCHPrice, setBCHPrice] = useState(0);
  const [ADAPrice, setADAPrice] = useState(0);
  const [DOTPrice, setDOTPrice] = useState(0);
  const [BNBPrice, setBNBPrice] = useState(0);
  const [MATICPrice, setMATICPrice] = useState(0);

  // 24h Heigh Prices
  const [BTCHighPrice, setBTCHeighPrice] = useState(0);
  const [LTCHighPrice, setLTCHeighPrice] = useState(0);
  const [ETHHighPrice, setETHHeighPrice] = useState(0);
  const [QTUMHighPrice, setQTUMHeighPrice] = useState(0);
  const [DOGEHighPrice, setDOGEHeighPrice] = useState(0);
  const [XRPHeighPrice, setXRPHeighPrice] = useState(0);
  const [BCHHeighPrice, setBCHHeighPrice] = useState(0);
  const [ADAHeighPrice, setADAHeighPrice] = useState(0);
  const [DOTHeighPrice, setDOTHeighPrice] = useState(0);
  const [BNBHeighPrice, setBNBHeighPrice] = useState(0);
  const [MATICHeighPrice, setMATICHeighPrice] = useState(0);

  // 24h Low Prices
  const [BTCLowPrice, setBTCLowPrice] = useState(0);
  const [LTCLowPrice, setLTCLowPrice] = useState(0);
  const [ETHLowPrice, setETHLowPrice] = useState(0);
  const [QTUMLowPrice, setQTUMLowPrice] = useState(0);
  const [DOGELowPrice, setDOGELowPrice] = useState(0);
  const [XRPLowPrice, setXRPLowPrice] = useState(0);
  const [BCHLowPrice, setBCHLowPrice] = useState(0);
  const [ADALowPrice, setADALowPrice] = useState(0);
  const [DOTLowPrice, setDOTLowPrice] = useState(0);
  const [BNBLowPrice, setBNBLowPrice] = useState(0);
  const [MATICLowPrice, setMATICLowPrice] = useState(0);

  // 24h Change
  const [BTCChange, setBTCChange] = useState(0);
  const [LTCChange, setLTCChange] = useState(0);
  const [ETHChange, setETHChange] = useState(0);
  const [QTUMChange, setQTUMChange] = useState(0);
  const [DOGEChange, setDOGEChange] = useState(0);
  const [XRPChange, setXRPChange] = useState(0);
  const [BCHChange, setBCHChange] = useState(0);
  const [ADAChange, setADAChange] = useState(0);
  const [DOTChange, setDOTChange] = useState(0);
  const [BNBChange, setBNBChange] = useState(0);
  const [MATICChange, setMATICChange] = useState(0);



  React.useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    // Event listener for incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      // Find and update prices for BTC, LTC, and ETH
      data.forEach((ticker) => {
        const symbol = ticker.s;

        if (symbol === "BTCUSDT") {
          setBTCPrice(parseFloat(ticker.c).toFixed(2));
          setBTCHeighPrice(parseFloat(ticker.h).toFixed(2));
          setBTCLowPrice(parseFloat(ticker.l).toFixed(2));
          setBTCChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "LTCUSDT") {
          setLTCPrice(parseFloat(ticker.c).toFixed(2));
          setLTCHeighPrice(parseFloat(ticker.h).toFixed(2));
          setLTCLowPrice(parseFloat(ticker.l).toFixed(2));
          setLTCChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "ETHUSDT") {
          setETHPrice(parseFloat(ticker.c).toFixed(2));
          setETHHeighPrice(parseFloat(ticker.h).toFixed(2));
          setETHLowPrice(parseFloat(ticker.l).toFixed(2));
          setETHChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "QTUMUSDT") {
          setQTUMPrice(parseFloat(ticker.c).toFixed(2));
          setQTUMHeighPrice(parseFloat(ticker.h).toFixed(2));
          setQTUMLowPrice(parseFloat(ticker.l).toFixed(2));
          setQTUMChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "DOGEUSDT") {
          setDOGEPrice(parseFloat(ticker.c).toFixed(2));
          setDOGEHeighPrice(parseFloat(ticker.h).toFixed(2));
          setDOGELowPrice(parseFloat(ticker.l).toFixed(2));
          setDOGEChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "XRPUSDT") {             // more coin
          setXRPPrice(parseFloat(ticker.c).toFixed(2));
          setXRPHeighPrice(parseFloat(ticker.h).toFixed(2));
          setXRPLowPrice(parseFloat(ticker.l).toFixed(2));
          setXRPChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "BCHUSDT") {
          setBCHPrice(parseFloat(ticker.c).toFixed(2));
          setBCHHeighPrice(parseFloat(ticker.h).toFixed(2));
          setBCHLowPrice(parseFloat(ticker.l).toFixed(2));
          setBCHChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "ADAUSDT") {
          setADAPrice(parseFloat(ticker.c).toFixed(2));
          setADAHeighPrice(parseFloat(ticker.h).toFixed(2));
          setADALowPrice(parseFloat(ticker.l).toFixed(2));
          setADAChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "DOTUSDT") {
          setDOTPrice(parseFloat(ticker.c).toFixed(2));
          setDOTHeighPrice(parseFloat(ticker.h).toFixed(2));
          setDOTLowPrice(parseFloat(ticker.l).toFixed(2));
          setDOTChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "BNBUSDT") {
          setBNBPrice(parseFloat(ticker.c).toFixed(2));
          setBNBHeighPrice(parseFloat(ticker.h).toFixed(2));
          setBNBLowPrice(parseFloat(ticker.l).toFixed(2));
          setBNBChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "MATICUSDT") {
          setMATICPrice(parseFloat(ticker.c).toFixed(2));
          setMATICHeighPrice(parseFloat(ticker.h).toFixed(2));
          setMATICLowPrice(parseFloat(ticker.l).toFixed(2));
          setMATICChange(parseFloat(ticker.p).toFixed(3));
        } else if (symbol === "MATICUSDT") {
          setHOTPrice(parseFloat(ticker.c).toFixed(2));
          setHOTHeighPrice(parseFloat(ticker.h).toFixed(2));
          setHOTLowPrice(parseFloat(ticker.l).toFixed(2));
          setHOTChange(parseFloat(ticker.p).toFixed(3));
        } 
      });
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);


  function createData(name, key, price, icon, changePrice, heighPrice, lowPrice) {
    return { name, key, price, icon, changePrice, heighPrice, lowPrice };
  }

  const assets = [
    createData("Bitcoin (BTC)", "BTCUSDT", BTCPrice, imageBTC, BTCChange, BTCHighPrice, BTCLowPrice),
    createData("Ethereum (ETC)", "ETHUSDT", ETHPrice, imageETH, ETHChange, ETHHighPrice, ETHLowPrice),
    createData("LiteCoin (LTC)", "LTCUSDT", LTCPrice, imageLTC, LTCChange, LTCHighPrice, LTCLowPrice),
    createData("QTUM coin", "QTUMUSDT", QTUMPrice, imageQTUM, QTUMChange, QTUMHighPrice, QTUMLowPrice),
    createData("DOGE coin", "DOGEUSDT", DOGEPrice, imageDOGE, DOGEChange, DOGEHighPrice, DOGELowPrice),
    createData("Ripple coin", "XRPUSDT", XRPPrice, imageXRP, XRPChange, XRPHeighPrice, XRPLowPrice),
    createData("Bitcoin cash", "BCHUSDT", BCHPrice, imageBCH, BCHChange, BCHHeighPrice, BCHLowPrice),
    createData("Cardano", "ADAUSDT", ADAPrice, imageADA, ADAChange, ADAHeighPrice, ADALowPrice),
    createData("Polkadot", "DOTUSDT", DOTPrice, imageDOT, DOTChange, DOTHeighPrice, DOTLowPrice),
    createData("Binance Coin", "BNBUSDT", BNBPrice, imageBNB, BNBChange, BNBHeighPrice, BNBLowPrice),
    createData("Polkadot", "MATICUSDT", MATICPrice, imageMATIC, MATICChange, MATICHeighPrice, MATICLowPrice),
  ];



  if (loading || isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center text-primary">
        <span> loading...</span>
      </p>
    );
  }

  return (
    <div>
      {/* Table boat  */}
      <div>
        <h2 className=" text-xl font-semibold mb-3">Market</h2>
        <Stack my={5}>
          <Marquee direction='right'>
            {assets.map(asset => (
              <Stack key={asset.name} sx={{ bgcolor: '#ffff',px: 2,py:1,borderRadius: '9 px' }} justifyContent="space-between"  alignItems="center" marginX={4} gap={2} flexDirection="row">
                <Stack>
                  <Image height={80} width={80} src={asset.icon} alt='coin lgog'></Image>
                </Stack>
                <Stack>
                  <p className="">Current Price:{asset.price}</p>
                  <p>Heigh Price: <span className="text-green-700">{asset.heighPrice}</span></p>
                  <p>Low Price: <span className="text-red-700">{asset.lowPrice}</span></p>
                </Stack>
              </Stack>
            ))
            }
          </Marquee>
        </Stack>
        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className="mx-auto">
              <TableRow className="text-center">
                <TableCell sx={{fontWeight:700}}>Icon</TableCell>
                <TableCell sx={{fontWeight:700}}>Coin Name</TableCell>
                <TableCell sx={{fontWeight:700}}>Current Price</TableCell>
                <TableCell sx={{fontWeight:700}}>24%</TableCell>
                <TableCell sx={{fontWeight:700}}>24h Heigh Price</TableCell>
                <TableCell sx={{fontWeight:700}}>24h Low Price</TableCell>
                <TableCell sx={{fontWeight:700}}>Option</TableCell>
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
                      width={80}
                      height={80}
                      src={asset.icon}
                      alt="coin-icon"
                    />
                  </TableCell>
                  <TableCell>
                    <p className={`font-semibold`}>{asset.name}</p>
                  </TableCell>
                  <TableCell>
                    <p className={` font-semibold`}>$ {asset.price}</p>
                  </TableCell>
                  <TableCell>
                    <p className={` font-semibold ${asset.changePrice < 0 ? "text-red-700" : "text-green-700"}`}>$ {asset.changePrice}</p>
                  </TableCell>
                  <TableCell>
                    <p className={` font-semibold text-green-700`}>$ {asset.heighPrice}</p>
                  </TableCell>
                  <TableCell>
                    <p className={` font-semibold text-red-700`}>$ {asset.lowPrice}</p>
                  </TableCell>
                  <TableCell>
                    <DashboardButton
                      className="font-semibold normal-case"
                    >
                      <Link href={`/dashboard/market/${asset.key}`}>
                        Explore
                      </Link>
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

export default MarketPage;

