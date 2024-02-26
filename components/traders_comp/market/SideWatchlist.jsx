"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import emptyIcon from "../../../assets/emptyIcon.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import useWatchlistData from "@/hooks/useWatchlistData";
import axios from "axios";
import DarkButton from "@/components/library/buttons/DarkButton";

const SideWatchlist = () => {
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);
  const { watchlistData } = useWatchlistData();



  // console.log(watchlistData)

  useEffect(() => {
    if (watchlistData.length > 0) {
      setAssets(watchlistData.filter((coin) => coin.type === "crypto coin"));
      setFlatCurrency(
        watchlistData.filter((coin) => coin.type === "flat coin")
      );
    }
  }, [watchlistData]);

  const createData = (
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon,
    email
  ) => ({
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon,
    email,
  });

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (assets.length > 0) {
        const updatedAssets = assets.map((asset) => {
          const ticker = data.find((item) => item.s === asset.key);
          if (ticker) {
            return createData(
              asset._id,
              asset.name,
              asset.key,
              parseFloat(ticker.c).toFixed(3),
              asset.type,
              parseFloat(ticker.p).toFixed(3),
              parseFloat(ticker.h).toFixed(2),
              parseFloat(ticker.l).toFixed(2),
              asset.icon,
              asset.email
            );
          }
          return asset;
        });
        setAssets(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assets]);
  // console.log(assets)

  const createFlatCurrencyData = (
    _id,
    name,
    key,
    type,
    price,
    icon,
    email
  ) => ({ _id, name, key, type, price, icon, email });


  // get real time currency price and create new array of object with real time currency price
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const updatedAssets = await Promise.all(flatCurrency.map(async (cur) => {
            const currencyKey = cur.key;
            const response = await axios.get(
              `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
            );

            return createFlatCurrencyData(
              cur._id,
              cur.name,
              cur.key,
              cur.type,
              response.data.rates.USD,
              cur.icon,
              cur.email
            );
          }));
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();

  }, [flatCurrency]);


  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="max-h-min w-full bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-3 font-semibold">
      <div className="flex items-center justify-between">
        <h3>Watchlist</h3>
        <Link href="/dashboard/watchlist">
          <DarkButton>See all</DarkButton>
        </Link>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 2,
              borderColor: "divider",
              marginBottom: "10px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
              <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0px" }} value="1">
            {assets.length > 0 ? (
              <TableContainer
                sx={{
                  boxShadow: "none",
                  padding: "0px"
                }}
                className="bg-gradient-to-bl from-darkOne to-darkTwo border-none "
                component={Paper}
              >

                <Table aria-label="simple table">
                  <TableHead className="mx-auto">
                    <TableRow className="text-center">
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          paddingX: "4px",
                          paddingY: "10px",
                          fontWeight: 500,
                          color: "white",
                          borderBottom: "2px solid #2c3750",
                          borderTop: "2px solid #2c3750",
                        }}>
                        Coin Name
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          paddingX: "4px",
                          paddingY: "10px",
                          fontWeight: 500,
                          color: "white",
                          borderBottom: "2px solid #2c3750",
                          borderTop: "2px solid #2c3750",
                        }}>
                        Price
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "14px",
                          paddingX: "4px",
                          paddingY: "10px",
                          fontWeight: 500,
                          color: "white",
                          borderBottom: "2px solid #2c3750",
                          borderTop: "2px solid #2c3750",
                        }}>
                        24%
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {assets.map((asset, idx) => (
                      <TableRow
                        key={asset._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                          <div className="flex items-center gap-2">
                            <Image
                              width={30}
                              height={30}
                              src={asset.icon}
                              alt="coin-icon"
                            />
                            <p className={`text-xs text-white`}>
                              {asset.name}
                            </p>
                          </div>
                        </TableCell >
                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                          <p className={` text-xs text-white`}>
                            ${asset.price}
                          </p>
                        </TableCell>
                        <TableCell sx={{ borderBottom: "none", paddingX: "4px", }}>
                          <p
                            className={`text-xs ${asset.changePrice < 0
                              ? "text-red-600"
                              : "text-green-600"
                              }`}
                          >
                            {asset.changePrice}%
                          </p>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <div className="border-2 w-full border-primary rounded flex flex-col items-center justify-center gap-2 py-8 xl:py-20">
                <Image
                  src={emptyIcon}
                  width={70}
                  height={70}
                  alt="BTC/USDT Logo"
                />
                <h3 className="text-primary text-lg font-semibold text-center">
                  empty !!
                </h3>
              </div>
            )}
          </TabPanel>
          <TabPanel sx={{ padding: "0px" }} value="2">
            {flatCurrency.length > 0 ? (
              <TableContainer
                component={Paper}
                sx={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
                className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree"
              >
                <Link href="/dashboard/watchlist">
                  <Table aria-label="simple table">
                    <TableHead className="mx-auto">
                      <TableRow className="text-center">
                        <TableCell sx={{ fontWeight: 700, color: "white" }}>
                          Coin Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: 700, color: "white" }}>
                          Current value
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {flatCurrency.map((asset, idx) => (
                        <TableRow
                          key={asset._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Image
                                width={30}
                                height={30}
                                src={asset.icon}
                                alt="coin-icon"
                              />
                              <p className={`text-xs text-white`}>
                                {asset.name}
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            <p className={` text-xs text-white`}>
                              ${asset.price}
                            </p>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Link>
              </TableContainer>
            ) : (
              <div className="border-2 w-full border-primary rounded flex flex-col items-center justify-center gap-2 py-8 xl:py-20">
                <Image
                  src={emptyIcon}
                  width={70}
                  height={70}
                  alt="BTC/USDT Logo"
                />
                <h3 className="text-primary text-lg font-semibold text-center">
                  empty !!
                </h3>
              </div>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default SideWatchlist;
