import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import emptyIcon from "../../../assets/emptyIcon.png";

// logo
import bitLogo from "../../../assets/btc-logo.png";
import Link from "next/link";
import DarkButton from "@/components/library/buttons/DarkButton";
import { Input } from "@mui/material";

// style input
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BuyAndExchange = ({ cryptoData }) => {
  const [tabValue, setTabValue] = useState("1");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [personNameExchange, setPersonNameExchange] = useState([]);

  const coinNames = cryptoData?.map((asset) => asset.assetKey);
  const exchangeNames = cryptoData?.map((asset) => asset.assetKey);

  const handleChangeCoins = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeExchange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonNameExchange(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <TabContext value={tabValue}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={(event, newValue) => setTabValue(newValue)}
          aria-label="lab API tabs example"
          className="mx-auto"
        >
          <Tab
            label="Exchange Coin"
            value="1"
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "white",
              textTransform: "none",
            }}
          />
          <Tab
            label="Buy / Sell Coin"
            value="2"
            sx={{
              fontSize: "13px",
              fontWeight: 600,
              color: "white",
              textTransform: "none",
            }}
          />
        </TabList>
      </Box>
      {/* Exchange Coin */}
      <TabPanel value="1" sx={{ padding: 0, overflow: "hidden" }}>
        <div>
          <div className=" font-semibold xl:flex items-center justify-between gap-4 my-4 px-3 ">
            <h2>
              <WalletIcon /> <span>$ 40,000</span>{" "}
            </h2>
            <div className="flex items-center gap-2 xl:mt-0 mt-2">
              <Image
                src={bitLogo}
                alt="bitCoin"
                className="rounded-full xl:w-8 w-5 xl:h-8 h-5 "
              />{" "}
              <span>$ 70,000</span>
            </div>
          </div>
          {/* input field */}

          {/* 1st input */}
          <FormControl fullWidth sx={{ borderBottom: "1px solid white",borderLeft: "1px solid white",borderRight: "1px solid white",borderRadius:'5px' }}>
            <InputLabel id="demo-simple-select-label"style={{ color: "white" }} >Coin Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Coin Name"
              onChange={handleChangeCoins}
              sx={{ color: "white",border:'black' }}
            >
              {coinNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className=" text-center my-2">
            <CachedSharpIcon style={{ fontSize: "2rem" }} />
          </div>
          {/* 2nd input */}
          <FormControl fullWidth sx={{ borderBottom: "1px solid white",borderLeft: "1px solid white",borderRight: "1px solid white",borderRadius:'5px' }}>
            <InputLabel id="demo-simple-select-label"
            style={{ color: "white" }}>Exchange Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Exchange Name"
              onChange={handleChangeExchange}
              style={{ color: "white" }}
            >
              {exchangeNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <h3 className=" font-semibold my-2 text-gray-500">No Extra Fees :</h3>

          <DarkButton className={"w-full mt-5 md:rounded"}>
            <CachedSharpIcon /> Exchange
          </DarkButton>
        </div>
      </TabPanel>
      {/* Buy / Sell Coin */}
      <TabPanel value="2">
        <div className=" w-full  flex flex-col items-center justify-center gap-2 py-8">
          <Image src={emptyIcon} width={70} height={70} alt="BTC/USDT Logo" />
          <h3 className="text-primary text-lg font-semibold text-center">
            empty !!
          </h3>
        </div>
      </TabPanel>
    </TabContext>
  );
};

export default BuyAndExchange;
