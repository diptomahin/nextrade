"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import DashButton from "@/components/library/buttons/DashButton";
import TopBanner from "@/components/traders_comp/market/TopBanner";
import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import usePublicAPI from "@/hooks/usePublicAPI";
import Swal from "sweetalert2";
import { Divider, TextField } from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Image from "next/image";

const CoinDetails = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState("");
  const [coinName, setCoinName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const { user } = useAuth();
  const publicAPI = usePublicAPI();
  const { data: allUsers = [], isPending, isLoading, refetch } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);
  // console.log(usersRemainingBalance)

  // fetch real-time data for crypto currency
  useEffect(() => {
    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${params.CoinDetails.toLowerCase()}@ticker`);
    socket.addEventListener("message", (event) => setTickerData(JSON.parse(event.data)));

    const fetchCoinImage = async () => {
      const coinDetailsMap = {
        BTCUSDT: "bitcoin",
        LTCUSDT: "litecoin",
        ETHUSDT: "ethereum",
        QTUMUSDT: "qtum",
        DOGEUSDT: "dogecoin",
        XRPUSDT: "ripple",
        BCHUSDT: "bitcoin-cash",
        ADAUSDT: "cardano",
        DOTUSDT: "polkadot",
        BNBUSDT: "binancecoin",
        MATICUSDT: "matic-network",
        UNIUSDT: "uniswap",
        LINKUSDT: "chainlink",
        SOLUSDT: "solana",
        XLMUSDT: "stellar",
        EOSUSDT: "eos",
      };

      const coinDetailsResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinDetailsMap[params.CoinDetails]}`);
      // console.log(coinDetailsResponse.data.image.large)
      setCoinImage(coinDetailsResponse.data.image.large);
      setCoinName(coinDetailsResponse.data.name);
    };

    fetchCoinImage();
  }, [params.CoinDetails]);

  // fetch real-time data for flat currencies
  const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${baseCurrency.toLowerCase()}${quoteCurrency.toLowerCase()}@ticker`);
  socket.addEventListener("message", (event) => console.log(JSON.parse(event.data)));

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const handleBuyCoin = (ast) => {
    const assetInfo = {
      assetName: coinName,
      assetKey: params.CoinDetails,
      assetImg: coinImage,
      assetBuyingPrice: ast.c,
      assetQuantity: quantity,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };

    const totalCost = parseFloat(ast.c) * parseFloat(quantity)
    const usersBalance = parseFloat(allUsers[0].balance).toFixed(2);
    const remainingBalance = usersBalance - totalCost.toFixed(2);



    if (usersBalance < parseFloat(ast.c)) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: `Are you sure to purchase ${quantity} ${coinName}?`,
      text: `It will cost $${totalCost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        publicAPI
          .put(`/all-users/${remainingBalance}`, assetInfo)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
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

  const handleAddToWatchlist = (ast) => {
    const assetInfo = {
      assetName: coinName,
      assetKey: params.CoinDetails,
      assetImg: coinImage,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };

    publicAPI
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
        <TopBanner tickerData={tickerData} coinImage={coinImage} coinName={coinName} coinKey={params.CoinDetails} />
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex flex-col xl:flex-row gap-5 my-10">
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 p-3 bg-white rounded ">
          <AdvancedRealTimeChart
            width="100%"
            height="100%"
            autosize
            symbol={`${params.CoinDetails}`}
            interval={20}
            range="1M"
            timezone="UTC"
            theme="light"
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
        {
          coinImage ?
            <div className="flex-1 bg-white rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-4 max-h-max">
              <div className="flex justify-between">
                <h1 className="text-lg font-semibold">Buy {params.CoinDetails.slice(0, -4)}</h1>
                <button onClick={() => handleAddToWatchlist(tickerData)} className="px-2 py-1 bg-primary text-white rounded hover:scale-110 1s transition-transform">Add to watchlist</button>
              </div>
              <Divider sx={{ border: "1px solid #40a0ff" }}></Divider>
              <div className="flex justify-between">
                <p><AccountBalanceWalletOutlinedIcon />   ${usersRemainingBalance}</p>
                <div className="flex gap-1 items-center">
                  {coinImage && (
                    <Image src={coinImage} width={30} height={30} alt="Logo" />
                  )}
                  ${parseFloat(tickerData?.c).toFixed(2)}
                </div>
              </div>
              <TextField
                required
                fullWidth
                defaultValue={1}
                id="outlined-number"
                label={`Quantity (${params.CoinDetails.slice(0, -4)})`}
                type="number"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleQuantityChange}
              />
              <DashButton className="w-full" onClick={() => handleBuyCoin(tickerData)}>Buy {params.CoinDetails.slice(0, -4)}</DashButton>
            </div>
            :
            <p>Loading...</p>
        }

      </div>
    </div>
  );
};

export default CoinDetails;
