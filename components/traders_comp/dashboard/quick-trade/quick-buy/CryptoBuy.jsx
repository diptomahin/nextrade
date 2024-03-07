"use client";
import getDate from "@/components/utils/date";
import useAuth from "@/hooks/useAuth";
import useInvestmentHistory from "@/hooks/useInvestmentHistory";
import useNotificationData from "@/hooks/useNotificationData";
import useSecureAPI from "@/hooks/useSecureAPI";
import useSecureFetch from "@/hooks/useSecureFetch";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

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
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B2BAC2",
      color: "#E0E3E7",
      borderRadius: "40px",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

const CryptoBuy = ({ cryptoCurrency, userData, refetchUserData }) => {
  const [selectedCoin, setSelectedCoin] = useState({});
  const [investment, setInvestment] = useState(0);
  const secureAPI = useSecureAPI();
  const { user } = useAuth();
  const date = getDate();
  const { refetchNotificationsData } = useNotificationData();
  const { refetchInvestmentHistory } = useInvestmentHistory();

  const { refetch } = useSecureFetch(`/sidePortfolio?email=${user.email}`, [
    "purchased-asset",
    user?.email,
  ]);
  const handleInvestmentChange = (event) => {
    const newInvestment = event.target.value;
    setInvestment(newInvestment);
  };

  const handleSelectChange = (event) => {
    const getSelectedCoin = cryptoCurrency.find(
      (asset) => asset._id === event.target.value
    );
    setSelectedCoin(getSelectedCoin);
  };

  // crypto payment process
  const handleBuyCrypto = () => {
    const usersBalance = parseFloat(userData.balance);
    const remainingBalance = usersBalance - parseFloat(investment).toFixed(2);
    const currentPrice = parseFloat(selectedCoin.price).toFixed(2);
    const portion = (parseFloat(investment) / currentPrice) * 100;

    const assetInfo = {
      assetName: selectedCoin.name,
      assetKey: selectedCoin.key,
      assetImg: selectedCoin.icon,
      assetType: "crypto coin",
      assetBuyingPrice: selectedCoin.price,
      currentPrice: 0,
      assetPortion: parseInt(portion) + "%",
      totalInvestment: investment,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
      buyingDate: date,
    };

    const notificationInfo = {
      title: `Investment in ${selectedCoin.name} was successful`,
      description: `You Invested ${investment + "$"} in ${parseInt(
        portion
      )}% of ${selectedCoin.name}`,
      assetKey: selectedCoin.key,
      assetImg: selectedCoin.icon,
      assetBuyerUID: user.uid,
      email: user.email,
      postedDate: date,
      read: false,
      location: "/dashboard/portfolio",
      type: "admin",
    };

    const historyInfo = {
      assetName: selectedCoin.name,
      assetKey: selectedCoin.key,
      assetImg: selectedCoin.icon,
      assetType: "crypto coin",
      assetBuyingPrice: selectedCoin.price,
      currentPrice: 0,
      assetPortion: parseInt(portion) + "%",
      totalInvestment: investment,
      assetBuyerEmail: user.email,
      date: date,
      action: "bought",
      detail: `You have invested ${investment + "$"} in ${parseInt(
        portion
      )}% of ${selectedCoin.name}`,
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
      title: `Are you sure to purchase ${parseInt(portion)}% of a ${
        selectedCoin.name
      }?`,
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
                    refetchUserData();
                    refetchNotificationsData();
                    refetch();
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

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <FormControl
          fullWidth
          className=""
          sx={{
            border: "1px solid #40a0ff",
            borderRadius: "40px",
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            style={{ color: "#40a0ff" }}
          >
            Select
          </InputLabel>
          <Select
            sx={{ border: "#40a0ff", borderRadius: "40px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Form"
            size="small"
            onChange={handleSelectChange}
          >
            {cryptoCurrency.map((asset, idx) => (
              <MenuItem key={idx} value={asset._id}>
                <div className="flex justify-between gap-6 items-center w-full text-primary">
                  <div className="flex items-center gap-1">
                    <Image
                      src={asset.icon}
                      height={25}
                      width={25}
                      alt="logo"
                    ></Image>
                    <p className="text-sm">{asset.name}</p>
                  </div>
                  <p>${asset.price} </p>
                </div>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <CssTextField
        required
        fullWidth
        size="small"
        defaultValue={investment}
        id="outlined-number"
        label={`Investment amount`}
        type="number"
        sx={{
          border: "1px solid #40a0ff",
          borderRadius: "40px",
        }}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <p className="dark:text-white">$</p>
            </InputAdornment>
          ),
        }}
        onChange={handleInvestmentChange}
      />
      <div className="flex item-center justify-center">
        <Button
          onClick={handleBuyCrypto}
          variant="contained"
          disabled={investment <= 0 || !selectedCoin.name}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default CryptoBuy;
