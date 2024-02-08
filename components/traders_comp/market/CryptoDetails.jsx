"use client"
import DashButton from "@/components/library/buttons/DashButton";
import { Divider, TextField } from "@mui/material";
import Image from "next/image";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import TopBanner from "./TopBanner";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { useState } from "react";
import Swal from "sweetalert2";
import usePublicAPI from "@/hooks/usePublicAPI";


const CryptoDetails = ({tickerData, coinImage , coinName, coinKey, usersRemainingBalance, user , refetch}) => {
    const [quantity, setQuantity] = useState(1);
    const publicAPI = usePublicAPI();


    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        setQuantity(newQuantity);
      };
    
      // crypto payment process
      const handleBuyCrypto = (ast) => {
        const assetInfo = {
          assetName: coinName,
          assetKey: coinKey,
          assetImg: coinImage,
          assetBuyingPrice: ast.c,
          assetQuantity: quantity,
          assetBuyerUID: user.uid,
          assetBuyerEmail: user.email,
        };
    
        const totalCost = parseFloat(ast.c) * parseFloat(quantity)
        const usersBalance = usersRemainingBalance
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
    
      // crypto watchlist process
      const handleCryptoWatchlist = (ast) => {
        const assetInfo = {
          assetName: coinName,
          assetKey: coinKey,
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
          <TopBanner tickerData={tickerData} coinImage={coinImage} coinName={coinName} coinKey={coinKey} />
        ) : (
          <p>Loading...</p>
        )}

        <div className="flex flex-col xl:flex-row gap-5 my-10">
          <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 p-3 rounded ">
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
          {
            coinImage ?
              <div className="flex-1 rounded-lg mt-10 xl:mt-0 flex flex-col gap-4 p-4 max-h-max">
                <div className="flex justify-between">
                  <h1 className="text-lg font-semibold">Buy {coinKey.slice(0, -4)}</h1>
                  <button onClick={() => handleCryptoWatchlist(tickerData)} className="px-2 py-1 bg-primary text-white rounded hover:scale-110 1s transition-transform">Add to watchlist</button>
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
                  label={`Quantity (${coinKey.slice(0, -4)})`}
                  type="number"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleQuantityChange}
                />
                <DashButton className="w-full" onClick={() => handleBuyCrypto(tickerData)}>Buy {coinKey.slice(0, -4)}</DashButton>
              </div>
              :
              <p>Loading...</p>
          }
        </div>
      </div>
    );
};

export default CryptoDetails;