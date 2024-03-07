
import { useState } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


// logo
import bitLogo from "../../../assets/btc-logo.png";
import DarkButton from "@/components/library/Button";
import Swal from "sweetalert2";
import useSecureAPI from "@/hooks/useSecureAPI";
import useAuth from "@/hooks/useAuth";
import getDate from "@/components/utils/date";
import useNotificationData from "@/hooks/useNotificationData";
import useAdminNotificationData from "@/hooks/useAdminNotificationData";
import useUserData from "@/hooks/useUserData";
import useInvestmentHistory from "@/hooks/useInvestmentHistory";


const BuyAndExchange = ({
  cryptoData,
  remainingBalance,
  refetch,
  totalRefetch,
}) => {
  const [tabValue, setTabValue] = useState("1");

  // exchange state
  const [firstCoinId, setFirstCoinId] = useState();
  const [secondCoinId, setSecondCoinId] = useState();
  const [firstCoinName, setFirstCoinName] = useState();
  const [secondCoinName, setSecondCoinName] = useState();

  // sell state
  const [sellCoinId, setSellCoinId] = useState();
  const [sellCoinName, setSellCoinName] = useState();
  const [sellCoinProfit, setSellCoinProfit] = useState();
  const [sellCoinLoss, setSellCoinLoss] = useState();
  const [sellCoinKey, setSellCoinKey] = useState();
  const [sellCoinImg, setSellCoinImg] = useState();
  const [totalInvestment, setTotalInvestment] = useState();
  const [isBuyOpen, setIsBuyOpen] = useState(true);

  const secureAPI = useSecureAPI();
  const { user } = useAuth();
  const date = getDate();
  const { refetchNotificationsData } = useNotificationData();
  const { adminRefetchNotificationsData } = useAdminNotificationData();
  const { refetchUserData } = useUserData();
  const { refetchInvestmentHistory } = useInvestmentHistory();

  //---------exchange functionality start----------

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
              refetchUserData();
              // post to  notification data in database
              secureAPI
                .post("/notifications", notificationInfo)
                .then((res) => {
                  console.log("success post to notification");
                  secureAPI.post("/adminNotifications", notificationInfo);
                  refetchNotificationsData();
                  adminRefetchNotificationsData();
                  refetch();
                  totalRefetch();
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

  //-------------exchange functionality ends -----------

  //------------- sell functionality starts -----------

  const calculateDifference = (currentPrice, buyingPrice, portion) => {
    const profitLoss =
      (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
    const profitLossInt = parseFloat(profitLoss).toFixed(3);
    return profitLossInt;
  };

  const handleSellCoin = (event) => {
    const getSellCoin = cryptoData.find(
      (asset) => asset._id === event.target.value
    );
    setTotalInvestment(getSellCoin.totalInvestment);
    setSellCoinId(getSellCoin._id);
    setSellCoinKey(getSellCoin.assetKey);
    setSellCoinImg(getSellCoin.assetImg);
    setSellCoinName(getSellCoin.assetName);
    if (
      calculateDifference(
        getSellCoin.currentPrice,
        getSellCoin.assetBuyingPrice,
        getSellCoin.assetPortion
      ) > 0
    ) {
      setSellCoinProfit(
        calculateDifference(
          getSellCoin.currentPrice,
          getSellCoin.assetBuyingPrice,
          getSellCoin.assetPortion
        )
      );
      setSellCoinLoss(0);
    }
    if (
      calculateDifference(
        getSellCoin.currentPrice,
        getSellCoin.assetBuyingPrice,
        getSellCoin.assetPortion
      ) < 0
    ) {
      setSellCoinLoss(
        calculateDifference(
          getSellCoin.currentPrice,
          getSellCoin.assetBuyingPrice,
          getSellCoin.assetPortion
        )
      );
      setSellCoinProfit(0);
    }
  };

  const handleSell = () => {
    const sellingData = {
      sellCoinName,
      sellCoinImg,
      sellCoinKey,
      sellCoinProfit,
      sellCoinLoss,
      totalInvestment,
      email:user.email
    };

    const historyInfo = {
      assetName: sellCoinName,
      assetKey: sellCoinKey,
      assetImg: sellCoinImg,
      assetType: "crypto coin",
      totalInvestment,
      sellCoinProfit,
      sellCoinLoss,
      action: "sold",
      detail: `You have sold ${sellCoinName} and achieved $${sellCoinProfit} profit, $${sellCoinLoss}`,
      assetBuyerEmail: user.email,
      date: date,
      action: "sold",
    };

    const notificationInfo = {
      title: "Coin Sell Successfully",
      description: `Coin sold with $${sellCoinProfit} profit and $${sellCoinLoss} loss`,
      assetKey: "",
      assetImg: "",
      assetBuyerUID: "",
      email: user.email,
      postedDate: date,
      location: "/dashboard/portfolio",
      read: false,
      type: "admin",
    };

    Swal.fire({
      title: `Are you sure to sell ${sellCoinName}?`,
      text: `It will bring $${sellCoinProfit} profit and $${sellCoinLoss} loss`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        secureAPI
          .put(
            `/allSoldCoin/${sellCoinId}/${remainingBalance}/${user.email}`,
            sellingData
          )
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire({
                title: `Coin sold successfully!`,
                text: `Best of luck`,
                icon: "success",
                timer: 1500,
              });

               //Selling History in database
                secureAPI.post(`/investmentHistory`, historyInfo).then((res) => {
                  refetchInvestmentHistory()
                });

              // post to  notification data in database
              secureAPI
                .post("/notifications", notificationInfo)
                .then((res) => {
                  console.log("success post to notification");
                  secureAPI.post("/adminNotifications", notificationInfo);
                  refetchNotificationsData();
              adminRefetchNotificationsData();
              refetch();
              
              totalRefetch();
                })
                .catch((error) => {
                  console.error("Error sending notification:", error);
                });
             
            }
          })
          .catch((error) => {
            Swal.fire({
              title: `Coin sells failed!`,
              text: `Please try again`,
              icon: "error",
            });
          });
      }
    });
  };
  //------------- sell functionality ends -----------

  return (
   
    <div className="w-full bg-white dark:bg-quaternary rounded-xl shadow">
      <div className="flex items-center justify-center">
        <div className="relative md:w-72 w-52 h-10 flex items-center text-black  bg-gray-100 dark:bg-secondary rounded-xl">
          <div
            className={`w-1/2 h-full rounded-xl bg-primary  transition-transform ${
              isBuyOpen ? "translate-x-0" : "translate-x-full"
            } duration-200 ease-in-out`}
          ></div>
          <button
            onClick={() => setIsBuyOpen(true)}
            className={`absolute w-1/2 h-full whitespace-nowrap bg-transparent transition-all ${
              isBuyOpen ? "text-white" : "dark:text-gray-300"
            } duration-200 ease-in-out font-semibold text-sm z-10`}
          >
            Exchange Coin
          </button>
          <button
            onClick={() => setIsBuyOpen(false)}
            className={`absolute w-1/2 whitespace-nowrap transform translate-x-full h-full bg-transparent transition-all ${
              !isBuyOpen ? "text-white" : "dark:text-gray-300"
            } duration-100 font-semibold text-sm z-10`}
          >
            Sell Coin
          </button>
        </div>
      </div>
      {isBuyOpen ? (
        <>
          {/* ----------Exchange Coin------------- */}
      <div >
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
              style={{ color: "#40a0ff" }}
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
              {cryptoData?.map((asset, idx) => (
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
              style={{ color: "#40a0ff" }}
            >
              To:
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="To"
              onChange={handleChangeExchange}
              sx={{ color: "white", border: "black" }}
            >
              <p className="mx-4 my-2">Asset Name-Invested amount</p>
              {cryptoData?.map((asset, idx) => (
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
      </div>
        </>
      ): (
        <>
          {/* ----------- Sell Coin------------- */}
      <div >
        <p className="my-3">Choose your coin for sell</p>
        <FormControl
          fullWidth
          sx={{
            borderBottom: "1px solid white",
            borderLeft: "1px solid white",
            borderRight: "1px solid white",
            borderRadius: "5px",
          }}
        >
          <InputLabel id="demo-simple-select-label" style={{ color: "#40a0ff" }}>
            Select
          </InputLabel>
          <Select
            sx={{ border: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Form"
            onChange={handleSellCoin}
          >
            <div className="mx-3 my-2 flex justify-between text-sm font-semibold">
              <p>Asset Name</p>
              <p>-Investment-</p>
              <p>
                <span className="text-green-700">Profit</span>/
                <span className="text-red-700">Loss</span>
              </p>
            </div>
            {cryptoData.map((asset, idx) => (
              <MenuItem key={idx} value={asset._id}>
                <div className="flex justify-between gap-6 items-center w-full text-primary">
                  <div className="flex items-center gap-1">
                    <Image
                      src={asset.assetImg}
                      height={25}
                      width={25}
                      alt="logo"
                    ></Image>
                    <p className="text-sm">{asset.assetName}</p>
                  </div>
                  <p>${asset.totalInvestment} </p>
                  <p
                    className={` font-medium ${
                      calculateDifference(
                        asset.currentPrice,
                        parseFloat(asset.assetBuyingPrice),
                        asset.assetPortion
                      ) > 0
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {calculateDifference(
                      asset.currentPrice,
                      asset.assetBuyingPrice,
                      asset.assetPortion
                    )}
                  </p>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <DarkButton className={"w-full mt-5 md:rounded"} onClick={handleSell}>
          {" "}
          Sell Coin
        </DarkButton>
      </div>
        </>
      )}
    </div>


  );
};

export default BuyAndExchange;
