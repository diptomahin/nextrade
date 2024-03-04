"use client";
import ManageCrypto from "@/components/admins_comp/ManageCrypto";
import ManageFlatCoins from "@/components/admins_comp/ManageFlatCoins";
import useSecureAPI from "@/hooks/useSecureAPI";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Autocomplete,
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
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import addImgIcon from "@/assets/addIconImg.png";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import Button from "../library/Button";

const image_hosting_key = `4696195291e937983db500161bc852ce`;

const ManageCoinsBody = () => {
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [typeValue, setTypeValue] = useState("");
  const secureAPI = useSecureAPI();
  const [coinKeys, setCoinKeys] = useState();
  const [selectedKey, setSelectedKey] = useState();
  const { allCryptoCoins, cryptoRefetch } = useAllCryptoCoins();
  const { allFlatCoins, flatRefetch } = useAllFlatCoins();

  // fetch crypto keys
  useEffect(() => {
    axios.get("/cryptoKeys.json").then((res) => {
      if (typeValue === "crypto coin") {
        setCoinKeys(res.data);
      }
    });
  }, [typeValue]);

  // fetch currency keys
  useEffect(() => {
    axios.get("/currencyKeys.json").then((res) => {
      if (typeValue === "flat coin") {
        setCoinKeys(res.data);
      }
    });
  }, [typeValue]);

  const handleKeyChange = (event, value) => {
    // console.log(value.key)
    setSelectedKey(value.key);
  };

  // console.log(allCoins)
  useEffect(() => {
    if (allCryptoCoins.length > 0 && allFlatCoins.length > 0) {
      setAssets(allCryptoCoins);
      setFlatCurrency(allFlatCoins);
    }
  }, [allCryptoCoins, allFlatCoins]);

  // createData function for adding real time prices
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

  // fetch real time crypto data from binance api and create data
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

  // createFlatCurrencyData function for adding current price
  const createFlatCurrencyData = (_id, name, key, type, price, icon) => ({
    _id,
    name,
    key,
    type,
    price,
    icon,
  });

  // fetch current flat coin prices from exchange rate api and create data
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

  const [hostedImage, setHostedImage] = useState("");

  // image hosting
  const handleIconChange = async (e) => {
    const coinImgFile = { image: e.target.files[0] };

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${image_hosting_key}`,
        coinImgFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setHostedImage(response.data.data.url);
      } else {
        toast.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image");
    }
  };

  return (
    <div>
      <div className="flex flex-col 2xl:flex-row gap-6 justify-between p-6 rounded-lg bg-gradient-to-bl from-indigo-400 to-sky-400">
        <h1 className="text-3xl font-semibold">Manage Coins</h1>
        <Button className="w-full" onClick={handleClickOpen}>
          + Add new
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = event.target;
              const name = formData.name.value;
              const key = selectedKey;
              const type = typeValue;
              const icon = hostedImage;

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
                  .post(`/allCryptoCoins`, coinInfo)
                  .then((res) => {
                    if (res.data.insertedId) {
                      Swal.fire({
                        title: `Successfully added to market!`,
                        text: `${name} has been added to market!`,
                        icon: "success",
                      });
                      cryptoRefetch();
                      setHostedImage("");
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
                  .post(`/allFlatCoins`, coinInfo)
                  .then((res) => {
                    if (res.data.insertedId) {
                      Swal.fire({
                        title: `Successfully added to market!`,
                        text: `${name} has been added to market!`,
                        icon: "success",
                      });
                      flatRefetch();
                      setHostedImage("");
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
              <FormControl required sx={{ width: "100%", marginTop: "7px" }}>
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
            </div>
            <Autocomplete
              disablePortal
              disabled={!typeValue}
              options={coinKeys} // step-2) display all division in options
              getOptionLabel={(option) => option.key}
              sx={{ width: "100%" }}
              onChange={handleKeyChange}
              renderInput={(params) => (
                <TextField required {...params} label="CoinKey" />
              )}
            />

            <TextField
              autoFocus
              required
              margin="dense"
              id="icon"
              name="icon"
              label=""
              type="file"
              fullWidth
              onChange={handleIconChange}
              sx={{ display: "none" }}
              // variant="standard"
            />
            <label htmlFor="icon">
              {hostedImage ? (
                <p className="border-2 p-2 rounded w-max cursor-pointer">
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={hostedImage}
                    alt="coin-icon"
                  />
                  Change Icon
                </p>
              ) : (
                <p className="border-2 p-2 rounded w-max cursor-pointer">
                  {" "}
                  <Image
                    width={50}
                    height={50}
                    src={addImgIcon}
                    alt="coin-icon"
                  />
                  Coin Icon
                </p>
              )}
            </label>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outlined" disabled={hostedImage.length == 0}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 5xl:grid-cols-3 justify-between gap-5 my-6">
        {/* total users */}
        <div className="w-full p-5 bg-[#40a0ff] rounded-xl flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className="text-lg font-semibold">Total Coins</h3>
            <h3 className="text-2xl font-semibold">
              {allCryptoCoins.length + allFlatCoins.length}
            </h3>
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
        <div className="w-full p-5 bg-[#5dad3e] rounded-xl flex justify-between items-center text-white">
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
        <div className="w-full p-5 bg-[#6c52ff] rounded-xl flex justify-between items-center text-white">
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
              <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
              <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
            </TabList>
          </Box>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
            <div className="w-full">
              <ManageCrypto
                refetch={cryptoRefetch}
                assets={assets}
              ></ManageCrypto>
            </div>
          </TabPanel>
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
            <div className="w-full">
              <ManageFlatCoins
                refetch={flatRefetch}
                assets={flatCurrency}
              ></ManageFlatCoins>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default ManageCoinsBody;
