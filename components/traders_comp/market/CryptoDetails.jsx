"use client";
import DashButton from "@/components/library/buttons/DashButton";
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
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

// customized TextField
const CssTextField = styled(TextField)({
  "& label": {
    color: "#E0E3E7",
  },
  "& input": {
    color: "#E0E3E7", // Text color for the input
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
      color: "#E0E3E7",
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
  const {notificationRefetch}= useNotificationData()
  const date = getDate()

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
    };

    const notificationInfo = {
      title: `Purchased Successfully ${coinName}`,
      description: `You Investment ${investment + "$"} in ${
        parseInt(portion) + "%"
      }`,
      assetKey: coinKey,
      assetImg: coinImage,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
      postedDate: getDate,
    };

    if (usersBalance < parseFloat(ast.c)) {
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
        // post to  notification data in database
        secureAPI
          .post("/notifications", notificationInfo)
          .then((res) => {
            console.log("Successfully coin added:", res);
            notificationRefetch();
          })
          .catch((error) => {
            console.error("Error sending notification:", error);
          });

        // post purchasedAssets data in database
        secureAPI
          .post(`/purchasedAssets/${remainingBalance}`, assetInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: `Coin Purchase successful!`,
                text: `Best of luck`,
                icon: "success",
                timer: 1500,
              });
              refetch();
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
    <div>
      {tickerData ? (
        <TopBanner
          tickerData={tickerData}
          coinImage={coinImage}
          coinName={coinName}
          coinKey={coinKey}
        />
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex flex-col xl:flex-row gap-5 my-10">
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 p-3 rounded-lg bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
          <AdvancedRealTimeChart
            width="100%"
            height="100%"
            autosize
            symbol={`${coinKey}`}
            interval={20}
            range="1M"
            timezone="UTC"
            theme="dark"
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
        {coinImage ? (
          <div className="flex-1 rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-4 max-h-max bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
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
              <p>
                <AccountBalanceWalletOutlinedIcon /> ${usersRemainingBalance}
              </p>
              <div className="flex gap-1 items-center">
                {coinImage && (
                  <Image src={coinImage} width={30} height={30} alt="Logo" />
                )}
                ${parseFloat(tickerData?.c).toFixed(2)}
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
                    <p className="text-white">$</p>
                  </InputAdornment>
                ),
              }}
              onChange={handleInvestmentChange}
            />
            <Button
              disabled={investment <= 0}
              sx={{
                backgroundColor: investment <= 0 ? "#ccc" : "#455ce9",
                color: "white",
                borderRadius: "50px",
                padding: "10px 15px",
                "&:hover": {
                  backgroundColor: investment <= 0 ? "#ccc" : "#455ce9",
                },
              }}
              onClick={() => handleBuyCrypto(tickerData)}
            >
              Buy {coinKey}
            </Button>
            {/* <DashButton className="w-full" onClick={() => handleBuyCrypto(tickerData)}>Buy {coinKey.slice(0, -4)}</DashButton> */}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoDetails;
