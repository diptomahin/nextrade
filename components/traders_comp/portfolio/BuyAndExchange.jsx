import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import WalletIcon from '@mui/icons-material/Wallet';
import Image from "next/image";

// logo
import bitLogo from '../../../assets/btc-logo.png'

const BuyAndExchange = () => {
     const [tabValue, setTabValue] = useState("1");
     return (
          <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={(event, newValue) => setTabValue(newValue)}
                  aria-label="lab API tabs example"
                  
                >
                  <Tab
                    label="Exchange Coin"
                    value="1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "black",
                      textTransform: 'none',
                    }}
                  />
                  <Tab
                    label="Buy / Sell Coin"
                    value="2"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "black",
                      textTransform: 'none',
                      
                    }}
                  />
                </TabList>
              </Box>
              {/* Exchange Coin */}
              <TabPanel value="1">
                <div>
                    <div className=" font-semibold flex items-center justify-between gap-4">
                      <h2><WalletIcon/> <span>$ 40,000</span> </h2>
                      <div className="flex items-center gap-2"><Image src={bitLogo} alt="bitCoin" className="rounded-full w-8 h-8 " /> <span>$ 70,000</span> </div>
                         
                    </div>
                </div>
              </TabPanel>
              {/* Buy / Sell Coin */}
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
     );
};

export default BuyAndExchange;