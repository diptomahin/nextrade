"use client";

import React, { useState, useEffect } from "react";
import {
  InputBase,
  Tab,
  ToggleButtonGroup,
  ToggleButton,
  Pagination,
} from "@mui/material";
import MarketTable from "./MarketTable";
import CryptoMarketModuleView from "./CryptoMarketModuleView";
import NormalCurrencyTable from "./NormalCurrencyTable";
import CurrencyMarketModuleView from "./CurrencyMarketModuleView";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import usePublicAPI from "@/hooks/usePublicAPI";
import useSecureFetch from "@/hooks/useSecureFetch";
import axios from "axios";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("xs")]: {
      width: "16ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const MarketAllProducts = () => {
  const [assets, setAssets] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [value, setValue] = useState("1");
  const [cryptoPageCount, setCryptoPageCount] = useState(0);
  const [flatPageCount, setFlatPageCount] = useState(0);
  const [coinPerPage, setCoinPerPage] = useState(6);
  const [currentCryptoPage, setCurrentCryptoPage] = useState(0);
  const [currentFlatPage, setCurrentFlatPage] = useState(0);
  const publicAPI = usePublicAPI();

  useEffect(() => {
    publicAPI
      .get("/totalCryptoCount")
      .then((res) => setCryptoPageCount(res.data.count))
      .catch((error) => console.log(error));
  }, [publicAPI]);

  useEffect(() => {
    publicAPI
      .get("/totalFlatCount")
      .then((res) => setFlatPageCount(res.data.count))
      .catch((error) => console.log(error));
  }, [publicAPI]);

  const numberOfCryptoPages = Math.ceil(cryptoPageCount / coinPerPage);
  const numberOfFlatPages = Math.ceil(flatPageCount / coinPerPage);

  const cryptoPages = [...Array(numberOfCryptoPages).keys()];
  const flatPages = [...Array(numberOfFlatPages).keys()];

  const handleCoinPerPages = (e) => {
    const val = parseInt(e.target.value);
    setCoinPerPage(val);
    setCurrentCryptoPage(0);
    setCurrentFlatPage(0);
  };

  const {
    data: cryptoAssets = [],
    isPending: cryptoPending,
    isLoading: cryptoLoading,
    refetch: cryptoRefetch,
  } = useSecureFetch(
    `/allCryptoCoins?search=${searchText}&page=${currentCryptoPage}&size=${coinPerPage}`,
    "crypto-asset",
    searchText,
    currentCryptoPage,
    coinPerPage
  );

  const {
    data: currencyAssets = [],
    isPending: currencyPending,
    isLoading: currencyLoading,
    refetch: currencyRefetch,
  } = useSecureFetch(
    `/allFlatCoins?search=${searchText}&page=${currentFlatPage}&size=${coinPerPage}`,
    "currency-asset",
    searchText,
    currentFlatPage,
    coinPerPage
  );

  useEffect(() => {
    if (cryptoAssets.length > 0) {
      setAssets(cryptoAssets);
    }
    if (currencyAssets.length > 0) {
      setFlatCurrency(currencyAssets);
    }
  }, [cryptoAssets, currencyAssets]);

  // console.log(assets)

  // create new objects
  const createData = (
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon
  ) => ({ name, key, price, type, changePrice, highPrice, lowPrice, icon });

  // console.log(assets)

  // get real time crypto price and create new array of object with real time crypto price
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

  // create new objects with new data
  const createFlatCurrencyData = (name, key, type, price, icon) => ({
    name,
    key,
    type,
    price,
    icon,
  });

  // get real time currency price and create new array of object with real time currency price
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const updatedAssets = await Promise.all(
            flatCurrency.map(async (cur) => {
              const currencyKey = cur.key;
              const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
              );

              return createFlatCurrencyData(
                cur.name,
                cur.key,
                cur.type,
                response.data.rates.USD,
                cur.icon
              );
            })
          );
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);
  // console.log(flatCurrency)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentCryptoPage(0);
    setCurrentFlatPage(0);
  };

  const [view, setView] = React.useState("module");

  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <div className="w-full p-5 bg-tertiary rounded-xl">
      <TabContext value={value}>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-5 lg:justify-between mb-6 ">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab sx={{ color: "white" }} label="Crypto Coins" value="1" />
            <Tab sx={{ color: "white" }} label="Flat Coins" value="2" />
          </TabList>

          {/* search field */}
          <Search
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "50px",
              border: "1px solid #2c3750",
              backgroundColor: "rgba(0,0,0,0.06)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.1)",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              placeholder="Search by name..."
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </Search>

          {/* show coin count */}
          <div className="flex items-center gap-1 p-2 rounded-md bg-quaternary">
            <p>Show: </p>
            <select
              value={coinPerPage}
              onChange={handleCoinPerPages}
              className="bg-transparent  rounded-md p-1 text-sm "
              name=""
              id=""
            >
              <option className="text-black" value="6">
                6
              </option>
              <option className="text-black" value="12">
                12
              </option>
              <option className="text-black" value="18">
                18
              </option>
              <option className="text-black" value="24">
                24
              </option>
            </select>
          </div>

          {/* view options */}
          <ToggleButtonGroup
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleViewChange}
          >
            <ToggleButton value="module" aria-label="module">
              <ViewModuleIcon className="text-primary" />
            </ToggleButton>
            <ToggleButton value="list" aria-label="list">
              <ViewListIcon className="text-primary" />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        {/* display crypto coins */}
        <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
          {view === "list" ? (
            <MarketTable assets={assets}></MarketTable>
          ) : (
            <CryptoMarketModuleView
              assets={assets}
              loading={cryptoLoading}
            ></CryptoMarketModuleView>
          )}

          {/* Pagination */}
          <div className="my-6 flex justify-center">
            <Pagination
              color="primary"
              sx={{
                "& .MuiPaginationItem-page": { color: "white" },
                "& .MuiPaginationItem-icon": {
                  color: "white", // Change arrow color
                },
              }}
              count={cryptoPages.length}
              onChange={(event, v) => setCurrentCryptoPage(parseInt(v) - 1)}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </TabPanel>

        {/* display flat coin */}
        <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
          {view === "list" ? (
            <NormalCurrencyTable assets={flatCurrency}></NormalCurrencyTable>
          ) : (
            <CurrencyMarketModuleView
              assets={flatCurrency}
              loading={currencyLoading}
              pending={cryptoPending}
            ></CurrencyMarketModuleView>
          )}

          {/* Pagination */}
          <div className="my-6 flex justify-center flex-wrap">
            <Pagination
              color="primary"
              sx={{
                "& .MuiPaginationItem-page": { color: "white", marginY: "5px" },
                "& .MuiPaginationItem-icon": {
                  color: "white", // Change arrow color
                },
              }}
              count={flatPages.length}
              onChange={(event, v) => setCurrentFlatPage(parseInt(v) - 1)}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default MarketAllProducts;
