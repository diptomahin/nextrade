"use client";

import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Image from "next/image";
import DashboardButton from "@/components/library/buttons/DashButton";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Stack } from "@mui/material";

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
import SideWatchlist from "@/components/traders_comp/market/SideWatchlist";

const MarketPage = () => {

  const [category, setCategory] = useState('');

  const createData = (name, key, price, icon, changePrice, heighPrice, lowPrice) => ({ name, key, price, icon, changePrice, heighPrice, lowPrice });

  const [assets, setAssets] = useState([
    createData("Bitcoin", "BTCUSDT", 0, imageBTC, 0, 0, 0),
    createData("Ethereum", "ETHUSDT", 0, imageETH, 0, 0, 0),
    createData("LiteCoin", "LTCUSDT", 0, imageLTC, 0, 0, 0),
    createData("QTUM coin", "QTUMUSDT", 0, imageQTUM, 0, 0, 0),
    createData("DOGE coin", "DOGEUSDT", 0, imageDOGE, 0, 0, 0),
    createData("Ripple coin", "XRPUSDT", 0, imageXRP, 0, 0, 0),
    createData("Bitcoin cash", "BCHUSDT", 0, imageBCH, 0, 0, 0),
    createData("Cardano", "ADAUSDT", 0, imageADA, 0, 0, 0),
    createData("Polkadot", "DOTUSDT", 0, imageDOT, 0, 0, 0),
    createData("Binance Coin", "BNBUSDT", 0, imageBNB, 0, 0, 0),
    createData("Polygon", "MATICUSDT", 0, imageMATIC, 0, 0, 0)
    // Add more assets similarly
  ]);

  useEffect(() => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      const updatedAssets = assets.map((asset) => {
        const ticker = data.find((item) => item.s === asset.key);
        if (ticker) {
          return createData(
            asset.name,
            asset.key,
            parseFloat(ticker.c).toFixed(2),
            asset.icon,
            parseFloat(ticker.p).toFixed(3),
            parseFloat(ticker.h).toFixed(2),
            parseFloat(ticker.l).toFixed(2)
          );
        }
        return asset;
      });
      setAssets(updatedAssets);
    });

    return () => socket.close();
  }, [assets]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div>
      {/* Table boat  */}
      <div>
        <h2 className=" text-xl font-semibold mb-3">Market Coins</h2>
        <Stack my={5}>
          <Marquee direction='right'>
            {assets.map((asset) => (
              <Stack key={asset.name} sx={{ bgcolor: '#ffff', px: 2, py: 1, borderRadius: '9 px' }} justifyContent="space-between" alignItems="center" marginX={4} gap={2} flexDirection="row">
                <Stack>
                  <Image height={80} width={80} src={asset.icon} alt='coin lgog'></Image>
                </Stack>
                <Stack>
                  <p className="">Current Price:{asset.price}</p>
                  <p>Heigh Price: <span className="text-green-700">{asset.heighPrice}</span></p>
                  <p>Low Price: <span className="text-red-700">{asset.lowPrice}</span></p>
                </Stack>
              </Stack>
            ))}
          </Marquee>
        </Stack>

        <Stack flexDirection="row" gap={2} marginY={2}>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              <MenuItem value={10} >Crypto</MenuItem>
              <MenuItem value={20} >Currency</MenuItem>
              <MenuItem value={30} >Stocks</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Sort by"
              onChange={handleCategoryChange}
            >
              <MenuItem value={10} >Current Price</MenuItem>
              <MenuItem value={20} >24h Heigh Price</MenuItem>
              <MenuItem value={30} >24h Low Price</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <div className="flex flex-col xl:flex-row gap-5">
          <div className="w-full xl:w-3/4">
            <TableContainer
              component={Paper}
              sx={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <Table aria-label="simple table">
                <TableHead className="mx-auto bg-primary">
                  <TableRow className="text-center">
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>No.</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Coin Name</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Current Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24%</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24h Heigh Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>24h Low Price</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "white" }}>Option</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assets.map((asset, idx) => (
                    <TableRow
                      key={asset.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                          />
                          <p className={`font-semibold`}>{asset.name}</p>
                          <span className="bg-sky-100 px-1 py-[2px] rounded text-primary text-xs">{asset.key.slice(0, -4)}</span>
                        </div>
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
          <SideWatchlist assets={assets}></SideWatchlist>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
