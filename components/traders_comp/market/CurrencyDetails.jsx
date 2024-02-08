"use client"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import TopBannerNormalCurrency from "./TopBannerNormalCurrency";
import { Divider, TextField } from "@mui/material";
import DashButton from "@/components/library/buttons/DashButton";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import usePublicAPI from "@/hooks/usePublicAPI";
import Swal from "sweetalert2";
import { useState } from "react";
import Image from "next/image";


const CurrencyDetails = ({ currencyRate, coinKey, currencyName, usersRemainingBalance, refetch, user, coinImage }) => {
    const [quantity, setQuantity] = useState(1);
    const publicAPI = usePublicAPI();
    const handleQuantityChange = (event) => {
        const newQuantity = event.target.value;
        setQuantity(newQuantity);
    };

    // regular currency watchlist process
    const handleCurrencyWatchlist = (ast) => {
        const assetInfo = {
            assetName: currencyName,
            assetType: "regular currency",
            assetKey: coinKey,
            assetImg: coinImage,
            assetBuyerUID: user.uid,
            assetBuyerEmail: user.email,
        };

        
        publicAPI.post(`/watchlist`, assetInfo)
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
                    <TextField
                        required
                        fullWidth
                        defaultValue={quantity}
                        id="outlined-number"
                        label={`Quantity (${coinKey})`}
                        type="number"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleQuantityChange}
                    />
                    <DashButton className="w-full">Buy {coinKey}</DashButton>
                </div>
            </div>
        </div>
    );
};

export default CurrencyDetails;