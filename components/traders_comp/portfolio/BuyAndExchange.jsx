import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import emptyIcon from "../../../assets/emptyIcon.png";

// logo
import bitLogo from "../../../assets/btc-logo.png";
import DarkButton from "@/components/library/buttons/DarkButton";
import Swal from "sweetalert2";
import useSecureAPI from "@/hooks/useSecureAPI";
import useAuth from "@/hooks/useAuth";
import getDate from "@/components/utils/date";
import useNotificationData from "@/hooks/useNotificationData";
import useAdminNotificationData from "@/hooks/useAdminNotificationData";

const BuyAndExchange = ({ cryptoData, remainingBalance, refetch }) => {
  const [tabValue, setTabValue] = useState("1");
  const [firstCoinId, setFirstCoinId] = useState();
  const [secondCoinId, setSecondCoinId] = useState();
  const [firstCoinName, setFirstCoinName] = useState();
  const [secondCoinName, setSecondCoinName] = useState();
  const secureAPI = useSecureAPI();
  const { user } = useAuth();
  const date = getDate();
  const { refetchNotificationsData } = useNotificationData();
  const { adminRefetchNotificationsData } = useAdminNotificationData();

  const handleChangeCoins = (event) => {
    setFirstCoinId(event.target.value);
    setFirstCoinName(
      cryptoData.find((asset) => asset._id === event.target.value).assetName
    );
  };

  const handleChangeExchange = (event) => {
    setSecondCoinId(event.target.value);
    setSecondCoinName(
      cryptoData.find((asset) => asset._id === event.target.value).assetName
    );
  };

  const handleExChange = () => {
    // post notification data sen database
    const notificationInfo = {
      title: "Coin Exchange Successfully",
      description: `Coin exchange ${firstCoinName} to ${secondCoinName}`,
      assetKey: "",
      assetImg: "",
      assetBuyerUID: "",
      email: user.email,
      postedDate: date,
      location: "/dashboard/portfolio",
      read: false,
      type: "admin",
    };
    if (firstCoinId === secondCoinId) {
      Swal.fire({
        title: `You Can't exchange same coins`,
        icon: "error",
      });
      return;
    }
    Swal.fire({
      title: `Are you sure to exchange ${firstCoinName} to ${secondCoinName}?`,
      text: `You won't be able to revert this!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        secureAPI
          .put(`/exchangeAssets/${firstCoinId}/${secondCoinId}`)
          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                title: `Coin exchange successful!`,
                text: `Best of luck`,
                icon: "success",
                timer: 1500,
              });

              // post to  notification data in database
              secureAPI
                .post("/notifications", notificationInfo)
                .then((res) => {
                  console.log("success post to notification");
                  secureAPI.post("/adminNotifications", notificationInfo);
                  refetch();
                  refetchNotificationsData();
                  adminRefetchNotificationsData();
                })
                .catch((error) => {
                  console.error("Error sending notification:", error);
                });
            }
          })
          .catch((error) => {
            Swal.fire({
              title: `Coin exchange failed!`,
              text: `Please try again`,
              icon: "error",
            });
          });
      }
    });
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
          <div className=" font-semibold 2xl:flex items-center justify-between gap-4 my-4 px-3 ">
            <h2>
              <WalletIcon /> <span>$ {remainingBalance}</span>{" "}
            </h2>
            <div className="flex items-center gap-2 2xl:mt-0 mt-2">
              <Image
                src={bitLogo}
                alt="bitCoin"
                className="rounded-full 2xl:w-8 w-5 2xl:h-8 h-5 "
              />{" "}
              <span>$ 70,000</span>
            </div>
            <div></div>
          </div>
          {/* input field */}

          {/* 1st input */}
          <FormControl
            fullWidth
            sx={{
              borderBottom: "1px solid white",
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              borderRadius: "5px",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "white" }}
            >
              From:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Form"
              onChange={handleChangeCoins}
              sx={{ color: "white", border: "black" }}
            >
              <p className="mx-4 my-2">Asset Name-Invested amount</p>
              {cryptoData.map((asset, idx) => (
                <MenuItem key={idx} value={asset._id}>
                  <p className="flex justify-between gap-6 items-center">
                    {asset.assetName}-${asset.totalInvestment}{" "}
                    <Image
                      src={asset.assetImg}
                      height={30}
                      width={30}
                      alt="logo"
                    ></Image>
                  </p>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className=" text-center my-2">
            <CachedSharpIcon style={{ fontSize: "2rem" }} />
          </div>
          {/* 2nd input */}
          <FormControl
            fullWidth
            sx={{
              borderBottom: "1px solid white",
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
              borderRadius: "5px",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              style={{ color: "white" }}
            >
              To:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="To"
              onChange={handleChangeExchange}
              style={{ color: "white" }}
            >
              <p className="mx-4 my-2">Asset Name-Invested amount</p>
              {cryptoData.map((asset, idx) => (
                <MenuItem key={idx} value={asset._id}>
                  <p className="flex justify-between gap-6 items-center">
                    {asset.assetName}-${asset.totalInvestment}{" "}
                    <Image
                      src={asset.assetImg}
                      height={30}
                      width={30}
                      alt="logo"
                    ></Image>
                  </p>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <h3 className=" font-semibold my-2 text-gray-500">No Extra Fees :</h3>

          <DarkButton
            className={"w-full mt-5 md:rounded"}
            onClick={handleExChange}
          >
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
