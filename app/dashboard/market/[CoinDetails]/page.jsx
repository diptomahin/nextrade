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

const CoinDetails = ({ params }) => {
  const [tickerData, setTickerData] = useState(null);
  const [coinImage, setCoinImage] = useState(null);
  const [coinName, setCoinName] = useState("");
  const { user } = useAuth();
  const publicAPI = usePublicAPI();
  const { data: allUsers = [], isPending, isLoading, refetch } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

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

  const handleBuyCoin = (ast) => {
    const assetInfo = {
      assetName: coinName,
      assetKey: params.CoinDetails,
      assetImg: coinImage,
      assetBuyingPrice: ast.c,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };

    const usersBalance = parseFloat(allUsers[0].balance).toFixed(2);
    const remainingBalance = usersBalance - parseFloat(ast.c).toFixed(2);

    if (usersBalance < parseFloat(ast.c)) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    publicAPI
      .put(`/all-users/${remainingBalance}`, assetInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: `Coin Purchase successful!`,
            text: `Best of luck`,
            icon: "success",
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
        <TopBanner tickerData={tickerData} coinImage={coinImage} coinName={coinName} />
      ) : (
        <p>Loading...</p>
      )}

      <div className="flex flex-col xl:flex-row gap-5 my-10">
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 ">
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
          coinImage &&
          <div className="flex-1 bg-sky-100 rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-7">
            <DashButton className="w-full" onClick={() => handleAddToWatchlist(tickerData)}>Add to Watchlist</DashButton>
            <DashButton className="w-full" onClick={() => handleBuyCoin(tickerData)}>Buy {params.CoinDetails.slice(0, -4)}</DashButton>
          </div>
        }

      </div>
    </div>
  );
};

export default CoinDetails;
