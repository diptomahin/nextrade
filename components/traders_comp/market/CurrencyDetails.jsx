"use client"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import TopBannerNormalCurrency from "./TopBannerNormalCurrency";
import { Button, Divider, InputAdornment, TextField } from "@mui/material";
import DashButton from "@/components/library/buttons/DashButton";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Swal from "sweetalert2";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import useSecureAPI from "@/hooks/useSecureAPI";

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
      color: "#E0E3E7"
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});


const CurrencyDetails = ({ currencyRate, coinKey, currencyName, usersRemainingBalance, refetch, user, coinImage }) => {
  const [investment, setInvestment] = useState(0);
  const secureAPI = useSecureAPI();

  const handleInvestmentChange = (event) => {
    const newInvestment = event.target.value;
    setInvestment(newInvestment);
  };

  // crypto payment process
  const handleBuyCurrency = (ast) => {
    const usersBalance = usersRemainingBalance
    const remainingBalance = usersBalance - parseFloat(investment).toFixed(2);
    const portion = (parseFloat(investment) / ast) * 100

    const assetInfo = {
      assetName: currencyName,
      assetKey: coinKey,
      assetImg: coinImage,
      assetType: "flat coin",
      assetBuyingPrice: ast,
      currentPrice:0,
      assetPortion: parseInt(portion) + '%',
      totalInvestment: investment,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };


    if (usersBalance < parseFloat(ast)) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: `Are you sure to purchase  ${parseInt(portion)}% of a ${currencyName}?`,
      text: `It will cost $${investment}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        secureAPI
          .post(`/purchasedAssets/${remainingBalance}`, assetInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: `Coin Purchase successful!`,
                text: `Best of luck`,
                icon: "success",
                timer: 1500
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

  // regular currency watchlist process
  const handleCurrencyWatchlist = () => {
    const assetInfo = {
      name: currencyName,
      key: coinKey,
      type: "flat coin",
      price: 0,
      icon: coinImage,
      email: user.email
    };


    secureAPI.post(`/watchlist`, assetInfo)
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
      <TopBannerNormalCurrency currencyRate={currencyRate} coinKey={coinKey} currencyName={currencyName} coinImage={coinImage}></TopBannerNormalCurrency>

      <div className="flex flex-col gap-6 2xl:flex-row 2xl:justify-between">
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 p-3 rounded-lg bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree ">
          <AdvancedRealTimeChart
            width="100%"
            height="100%"
            autosize
            symbol={`${coinKey + 'USD'}`}
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
        <div className="flex-1 rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-4 max-h-max bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree">
          <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Buy {coinKey}</h1>
            <button onClick={() => handleCurrencyWatchlist()} className="px-2 py-1 bg-primary text-white rounded hover:scale-110 1s transition-transform">Add to watchlist</button>
          </div>
          <Divider sx={{ border: "1px solid #40a0ff" }}></Divider>
          <div className="flex justify-between">
            <p><AccountBalanceWalletOutlinedIcon />   ${usersRemainingBalance}</p>
            <div className="flex gap-1 items-center">
              {coinImage && (
                <Image src={coinImage} width={30} height={30} alt="Logo" />
              )}
              ${parseFloat(currencyRate)}
            </div>
          </div>
          <CssTextField
            required
            fullWidth
            defaultValue={investment}
            id="outlined-number"
            label={`Investment (${coinKey})`}
            type="number"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><p className="text-white">$</p></InputAdornment>,
            }}
            onChange={handleInvestmentChange}
          />
          <Button
            disabled={investment <= 0}
            sx={{
              backgroundColor: investment <= 0 ? '#ccc' : '#455ce9',
              color: "white",
              borderRadius: "50px",
              padding: "10px 15px",
              "&:hover": {
                backgroundColor: investment <= 0 ? '#ccc' : '#455ce9',
              },
            }}
            onClick={() => handleBuyCurrency(currencyRate)}
          >
            Buy {coinKey}
          </Button>
          {/* <DashButton onClick={() => handleBuyCurrency(currencyRate)} disabled className={`w-full ${quantity < 1 ? "disabled bg-slate-700" : ""}`}>Buy {coinKey}</DashButton> */}
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetails;