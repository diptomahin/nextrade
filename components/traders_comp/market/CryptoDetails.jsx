"use client";
import {
  Button,
  Divider,
  InputAdornment,
  Skeleton,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import TopBanner from "./TopBanner";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { useState } from "react";
import Swal from "sweetalert2";
import useSecureAPI from "@/hooks/useSecureAPI";
import styled from "@emotion/styled";
import useNotificationData from "@/hooks/useNotificationData";
import getDate from "../../utils/date";
import SideHistory from "./SideHistory";
import useInvestmentHistory from "@/hooks/useInvestmentHistory";
import useAdminNotificationData from "@/hooks/useAdminNotificationData";

// customized TextField
const CssTextField = styled(TextField)({
  "& label": {
    color: "#40a0ff",
  },
  "& input": {
    color: "#71717a", // Text color for the input
  },
  "& label.Mui-focused": {
    color: "#40a0ff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#21366c",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#40a0ff",
      color: "#71717a",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const CryptoDetails = ({
  tickerData,
  coinImage,
  coinName,
  coinKey,
  usersRemainingBalance,
  user,
  refetch,
}) => {
  const [investment, setInvestment] = useState(0);
  const secureAPI = useSecureAPI();
  const date = getDate();
  const { refetchNotificationsData } = useNotificationData();
  const { refetchInvestmentHistory } = useInvestmentHistory();
  const { adminRefetchNotificationsData } = useAdminNotificationData();

  const handleInvestmentChange = (event) => {
    const newInvestment = event.target.value;
    setInvestment(newInvestment);
  };

  // crypto payment process
  const handleBuyCrypto = (ast) => {
    const usersBalance = usersRemainingBalance;
    const remainingBalance = usersBalance - parseFloat(investment).toFixed(2);
    const currentPrice = parseFloat(tickerData.c).toFixed(2);
    const portion = (parseFloat(investment) / currentPrice) * 100;

    const assetInfo = {
      assetName: coinName,
      assetKey: coinKey,
      assetImg: coinImage,
      assetType: "crypto coin",
      assetBuyingPrice: ast.c,
      currentPrice: 0,
      assetPortion: parseInt(portion) + "%",
      totalInvestment: investment,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
      buyingDate: date,
    };

    const notificationInfo = {
      title: `Investment in ${coinName} was successful`,
      description: `You Invested ${investment + "$"} in ${parseInt(
        portion
      )}% of ${coinName}`,
      assetKey: coinKey,
      assetImg: coinImage,
      assetBuyerUID: user.uid,
      email: user.email,
      postedDate: date,
      read: false,
      location: "/dashboard/portfolio",
      type: "admin",
    };

    const historyInfo = {
      assetName: coinName,
      assetKey: coinKey,
      assetImg: coinImage,
      assetType: "crypto coin",
      assetBuyingPrice: ast.c,
      currentPrice: 0,
      assetPortion: parseInt(portion) + "%",
      totalInvestment: investment,
      assetBuyerEmail: user.email,
      date: date,
      action: "bought",
      detail: `You have invested ${investment + "$"} in ${parseInt(
        portion
      )}% of ${coinName}`,
    };

    if (usersBalance <= 0) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: `Are you sure to purchase ${parseInt(portion)}% of a ${coinName}?`,
      text: `It will cost $${investment}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // post purchasedAssets data in database
        secureAPI
          .post(`/purchasedAssets/${remainingBalance}`, assetInfo)
          .then((res) => {
            if (res.data.insertedId) {
              // post to  notification data in database
              secureAPI
                .post("/notifications", notificationInfo)
                .then((res) => {
                  if (res.data.insertedId) {
                    secureAPI.post("/adminNotifications", notificationInfo);
                    refetch();
                    adminRefetchNotificationsData();
                    refetchNotificationsData();
                    Swal.fire({
                      title: `Coin Purchase successful!`,
                      text: `Best of luck`,
                      icon: "success",
                      timer: 1500,
                    });
                  }
                })
                .catch((error) => {
                  console.error("Error sending notification:", error);
                });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: `Coin Purchase failed!`,
              text: `Please try again`,
              icon: "error",
            });
          });

        // post investment history data in data base
        secureAPI.post(`/investmentHistory`, historyInfo).then((res) => {
          refetchInvestmentHistory();
        });
      }
    });
  };

  // crypto watchlist process
  const handleCryptoWatchlist = (ast) => {
    const assetInfo = {
      name: coinName,
      key: coinKey,
      price: 0,
      type: "crypto coin",
      changePrice: 0,
      highPrice: 0,
      lowPrice: 0,
      icon: coinImage,
      email: user.email,
    };

    secureAPI
      .post(`/watchlist`, assetInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: `Successfully added to watchlist!`,
            text: `Coin has been added to Watchlist!`,
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
  };
  return (
    <div className="flex flex-col 2xl:flex-row gap-5">
      <div className="w-full 2xl:w-3/4 flex flex-col gap-5">
        {tickerData ? (
          <TopBanner
            tickerData={tickerData}
            coinImage={coinImage}
            coinName={coinName}
            coinKey={coinKey}
          />
        ) : (
          <Skeleton
            sx={{ height: 190, borderRadius: "20px" }}
            variant="rectangular"
          />
        )}

        <div className=" h-64 lg:h-96  3xl:h-[65vh] rounded-xl pb-10">
          <h1 className="font-semibold mb-3">
            {coinKey.slice(0, -4)} to USDT Chart
          </h1>
          <AdvancedRealTimeChart
            width="100%"
            height="100%"
            autosize
            symbol={`${coinKey}`}
            interval={20}
            range="1M"
            timezone="UTC"
            theme={localStorage.getItem("theme")}
            style={2}
            locale="en"
            toolbar_bg="#f1f3f6"
            enable_publishing={false}
            hide_top_toolbar={false}
            hide_legend={true}
            withdateranges={false}
            hide_side_toolbar={true}
            details={false}
            hotlist={false}
            calendar={false}
            studies={[]}
            disabled_features={[]}
            enabled_features={[]}
            container_id="advanced-chart-widget-container"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-7 w-full">
        {tickerData ? (
          <div className=" rounded-xl mt-6 2xl:mt-0 flex flex-col gap-4 p-4 max-h-max bg-white dark:bg-quaternary shadow">
            <div className="flex justify-between">
              <h1 className="text-lg font-semibold">
                Buy {coinKey.slice(0, -4)}
              </h1>
              <button
                onClick={() => handleCryptoWatchlist(tickerData)}
                className="px-2 py-1 bg-primary text-white rounded hover:scale-110 1s transition-transform"
              >
                Add to watchlist
              </button>
            </div>
            <Divider sx={{ border: "1px solid #40a0ff" }}></Divider>
            <div className="flex justify-between">
              <div className="space-y-4">
                <p className=" text-primary text-xs  3xl:text-base">
                  Your Balance:
                </p>
                <p>
                  <AccountBalanceWalletOutlinedIcon /> ${usersRemainingBalance}
                </p>
              </div>
              <div className="space-y-4">
                <p className=" text-primary text-xs  3xl:text-base">
                  Current price:
                </p>
                <div className="flex gap-1 items-center">
                  {coinImage && (
                    <Image src={coinImage} width={30} height={30} alt="Logo" />
                  )}
                  ${parseFloat(tickerData?.c).toFixed(2)}
                </div>
              </div>
            </div>
            <CssTextField
              required
              fullWidth
              defaultValue={investment}
              id="outlined-number"
              label={`Investment (${coinKey.slice(0, -4)})`}
              type="number"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <p className="text-zinc-500">$</p>
                  </InputAdornment>
                ),
              }}
              onChange={handleInvestmentChange}
            />
            <Button
              disabled={investment <= 0}
              sx={{
                backgroundColor:
                  investment <= 0
                    ? "rgb(64 160 255 / 0.50)"
                    : "rgb(64 160 255 / 0.05)",
                cursor: investment <= 0 ? "not-allowed" : "pointer",
                color: "#40a0ff",
                border: "1px solid #40a0ff",
                borderRadius: "6px",
                padding: "10px 15px",
                "&:hover": {
                  backgroundColor:
                    investment <= 0 ? "#ccc" : "rgb(64 160 255 / 0.15)",
                },
              }}
              onClick={() => handleBuyCrypto(tickerData)}
            >
              Invest {coinKey}
            </Button>
            {/* <DashButton className="w-full" onClick={() => handleBuyCrypto(tickerData)}>Buy {coinKey.slice(0, -4)}</DashButton> */}
          </div>
        ) : (
          <div className="flex-1 rounded-lg mt-6 2xl:mt-0">
            <Skeleton
              sx={{ height: 350, borderRadius: "20px" }}
              variant="rectangular"
            />
          </div>
        )}

        <SideHistory />
      </div>
    </div>
  );
};

export default CryptoDetails;
