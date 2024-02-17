"use client";
import ManageCrypto from "@/components/admins_comp/ManageCrypto";
import ManageFlatCoins from "@/components/admins_comp/ManageFlatCoins";
import DashButton from "@/components/library/buttons/DashButton";
import usePublicFetch from "@/hooks/usePublicFetch";
import useSecureAPI from "@/hooks/useSecureAPI";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Avatar,
  AvatarGroup,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageCoins = () => {
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [typeValue, setTypeValue] = useState("");
  const secureAPI = useSecureAPI();

  const {
    data: allCoins = [],
    isPending,
    isLoading,
    refetch,
  } = usePublicFetch(`/allCoins`, ["allCoins"]);

  // console.log(allCoins)
  useEffect(() => {
    if (allCoins.length > 0) {
      setAssets(allCoins.filter((coin) => coin.type === "crypto coin"));
      setFlatCurrency(allCoins.filter((coin) => coin.type === "flat coin"));
    }
  }, [allCoins]);

  const createData = (
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon
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
  });

  // console.log(assets)

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
              asset.icon
            );
          }
          return asset;
        });
        setAssets(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assets]);

  const createFlatCurrencyData = (_id, name, key, type, price, icon) => ({
    _id,
    name,
    key,
    type,
    price,
    icon,
  });

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const response = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
          );
          // Access the data property of the response to get the currency rates
          const data = response.data.rates;
          const updatedAssets = flatCurrency.map((cur) => {
            const currencyKey = cur.key;
            // console.log(currencyKey)
            return createFlatCurrencyData(
              cur._id,
              cur.name,
              cur.key,
              cur.type,
              data[currencyKey],
              cur.icon
            );
          });
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);
  // console.log(flatCurrency)

  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };

  return (
    <div>
      {/* <div className='flex flex-col xl:flex-row gap-6 justify-between p-6 rounded-lg bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'> */}
      <div className="flex flex-col xl:flex-row gap-6 justify-between p-6 rounded-lg bg-gradient-to-bl from-indigo-200 to-sky-200">
        <h1 className="text-3xl font-semibold">Manage Coins</h1>
        <DashButton className="w-full" onClick={handleClickOpen}>
          + Add new
        </DashButton>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = event.target;
              const name = formData.name.value;
              const key = formData.key.value.toUpperCase();
              const type = typeValue;
              const icon = formData.icon.value;

              if (type === "crypto coin") {
                const coinInfo = {
                  name,
                  key,
                  price: 0,
                  type,
                  changePrice: 0,
                  highPrice: 0,
                  lowPrice: 0,
                  icon,
                };
                // console.log(coinInfo)
                secureAPI
                  .post(`/allCoins`, coinInfo)
                  .then((res) => {
                    if (res.data.insertedId) {
                      Swal.fire({
                        title: `Successfully added to market!`,
                        text: `${name} has been added to market!`,
                        icon: "success",
                      });
                      refetch();
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    Swal.fire({
                      title: `failed!`,
                      text: `Please try again`,
                      icon: "error",
                    });
                  });
              } else {
                const coinInfo = {
                  name,
                  key,
                  type,
                  price: 0,
                  icon,
                };
                // console.log(coinInfo)
                secureAPI
                  .post(`/allCoins`, coinInfo)
                  .then((res) => {
                    if (res.data.insertedId) {
                      Swal.fire({
                        title: `Successfully added to market!`,
                        text: `${name} has been added to market!`,
                        icon: "success",
                      });
                      refetch();
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                    Swal.fire({
                      title: `failed!`,
                      text: `Please try again`,
                      icon: "error",
                    });
                  });
              }
              handleClose();
            },
          }}
        >
          <DialogTitle>Add new coin</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="name"
                label="Coin Name"
                type="text"
                fullWidth
                // variant="standard"
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="key"
                name="key"
                label="Coin Key"
                type="text"
                fullWidth
                // variant="standard"
              />
            </div>
            <FormControl required sx={{ width: "100%", marginTop: "15px" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Coin Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={typeValue}
                label="Coin type"
                onChange={handleTypeChange}
              >
                <MenuItem value={"crypto coin"}>crypto coin</MenuItem>
                <MenuItem value={"flat coin"}>flat coin</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              required
              margin="dense"
              id="icon"
              name="icon"
              label="Coin Icon URL"
              type="text"
              fullWidth
              // variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <DashButton onClick={handleClose}>Cancel</DashButton>
            <DashButton type="submit">Add</DashButton>
          </DialogActions>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5 my-6">
        {/* total users */}
        <div className="w-full p-5 bg-[#40a0ff] rounded flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className="text-lg font-semibold">Total Coins</h3>
            <h3 className="text-2xl font-semibold">{allCoins.length}</h3>
          </div>
          <AvatarGroup max={4}>
            <Avatar
              alt="bitcoin"
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            />
            <Avatar
              alt="litecoin"
              src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
            />
            <Avatar alt="Cindy Baker" src="https://i.ibb.co/hFGM72Y/eur.png" />
          </AvatarGroup>
        </div>

        {/* total traders */}
        <div className="w-full p-5 bg-[#5dad3e] rounded flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className="text-lg font-semibold">Crypto Coin</h3>
            <h3 className="text-2xl font-semibold">{assets.length}</h3>
          </div>
          <AvatarGroup max={3}>
            <Avatar
              alt="bitcoin"
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            />
            <Avatar
              alt="litecoin"
              src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
            />
          </AvatarGroup>
        </div>

        {/* total admins */}
        <div className="w-full p-5 bg-[#6c52ff] rounded flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className="text-lg font-semibold">Flat Coin</h3>
            <h3 className="text-2xl font-semibold">{flatCurrency.length}</h3>
          </div>
          <AvatarGroup max={3}>
            <Avatar alt="euro" src="https://i.ibb.co/hFGM72Y/eur.png" />
            <Avatar alt="doller" src="https://i.ibb.co/GnGpCGY/aed.png" />
            <Avatar alt="Cindy Baker" src="https://i.ibb.co/x3tp4RB/idr.png" />
          </AvatarGroup>
        </div>
      </div>

      <Box className="w-full my-6">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 2,
              borderColor: "divider",
              marginBottom: "10px",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab sx={{}} label="Crypto Coins" value="1" />
              <Tab sx={{}} label="Flat Coins" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
            <div className="w-full">
              <ManageCrypto refetch={refetch} assets={assets}></ManageCrypto>
            </div>
          </TabPanel>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
            <div className="w-full">
              <ManageFlatCoins
                refetch={refetch}
                assets={flatCurrency}
              ></ManageFlatCoins>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ManageCoins;
