import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import CachedSharpIcon from '@mui/icons-material/CachedSharp';
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// logo
import bitLogo from "../../../assets/btc-logo.png";
import Link from "next/link";
import DarkButton from "@/components/library/buttons/DarkButton";

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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BuyAndExchange = () => {
  const [tabValue, setTabValue] = useState("1");
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
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
      <TabPanel value="1" sx={{ padding: 0, overflow:"hidden" }}>
        <div>
          <div className=" font-semibold xl:flex items-center justify-between gap-4 my-4 px-3 ">
            <h2>
              <WalletIcon /> <span >$ 40,000</span>{" "}
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
            <FormControl sx={{ width: 1, overflow:"hidden",border:'1px solid white' }}>
              <InputLabel id="demo-multiple-name-label"  style={{ color: 'white',  }}>Coin</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div className=" text-center my-2">
              <CachedSharpIcon style={{ fontSize: "2rem" }} />
            </div>
            {/* 2nd input */}
            <FormControl sx={{ width: 1 }}>
              <InputLabel id="demo-multiple-name-label">Change</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <h3 className=" font-semibold my-2 text-gray-500">No Extra Fees :</h3>

            <Link href="/dashboard/market">
              <DarkButton className={'w-full mt-5 md:rounded'}>Exchange</DarkButton>
            </Link>
          
        </div>
      </TabPanel>
      {/* Buy / Sell Coin */}
      <TabPanel value="2">Item Two</TabPanel>
    </TabContext>
  );
};

export default BuyAndExchange;
