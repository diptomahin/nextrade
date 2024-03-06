"use client"
import getDate from '@/components/utils/date';
import useAuth from '@/hooks/useAuth';
import useNotificationData from '@/hooks/useNotificationData';
import useSecureAPI from '@/hooks/useSecureAPI';
import useUserData from '@/hooks/useUserData';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Swal from 'sweetalert2';



const CryptoSell = ({ cryptoCurrency, cryptoRefetch, refetchUserData, userData }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const secureAPI = useSecureAPI();
    const { user } = useAuth();
    const date = getDate();
    const { refetchNotificationsData } = useNotificationData();
    const remainingBalance = parseFloat(userData.balance)

    const [sellCoinId, setSellCoinId] = useState();
    const [sellCoinName, setSellCoinName] = useState();
    const [sellCoinProfit, setSellCoinProfit] = useState();
    const [sellCoinLoss, setSellCoinLoss] = useState();
    const [sellCoinKey, setSellCoinKey] = useState();
    const [sellCoinImg, setSellCoinImg] = useState();
    const [totalInvestment, setTotalInvestment] = useState();


    // profit and loss calculator
    const calculateDifference = (currentPrice, buyingPrice, portion) => {
        const profitLoss =
            (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
        return profitLoss.toFixed(3);
    };

    const handleSelectChange = (event) => {
        const getSellCoin = cryptoCurrency.find(
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
            email: user.email
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
                        // console.log(res.data);
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: `Coin sold successfully!`,
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
                                    cryptoRefetch();
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


    return isOpenSelect ? (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-5">
                <FormControl
                    fullWidth
                    className=""
                    sx={{
                        borderBottom: "1px solid white",
                        borderLeft: "1px solid white",
                        borderRight: "1px solid white",
                        borderRadius: "40px",
                    }}
                >
                    <InputLabel id="demo-simple-select-label" style={{ color: "#40a0ff" }}>
                        Select
                    </InputLabel>
                    <Select
                        sx={{ border: "white", borderRadius: "40px" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Form"
                        size="small"
                        onChange={handleSelectChange}
                    >
                        <div className="mx-3 my-2 flex justify-between text-sm font-semibold">
                            <p>Asset Name</p>
                            <p>-Investment-</p>
                            <p>
                                <span className="text-green-700">Profit</span>/
                                <span className="text-red-700">Loss</span>
                            </p>
                        </div>
                        {cryptoCurrency.map((asset, idx) => (
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
                                        className={` font-medium ${calculateDifference(
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
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => setIsOpenSelect(false)}
                        className="btn btn-sm h-11 border-none bg-red-700 hover:bg-red-800 dark:bg-quaternary dark:hover:bg-quaternary text-white dark:text-tertiary font-medium rounded-full px-5"
                    >
                        Cancel
                    </button>
                </div>
            </div>

            <div className="flex item-center justify-center">
                <Button onClick={handleSell} variant="contained" disabled={!sellCoinName}>Buy now</Button>
            </div>
        </div>
    ) : (
        <div className="flex items-center gap-5">
            <div className="flex-1 border border-black dark:border-none dark:bg-quaternary flex items-center justify-between px-5 py-[10px] rounded-full">
                <p className="text-sm font-medium">Coin Name</p>
                <p className="font-medium">Current price</p>
                <p className="font-medium">Profit/Loss</p>
            </div>
            <button
                onClick={() => setIsOpenSelect(true)}
                className="btn btn-sm h-10 border-none bg-primary hover:bg-primary/65 dark:bg-quaternary dark:hover:bg-quaternary text-white font-medium rounded-full px-5"
            >
                Select
            </button>
        </div>
    );
};

export default CryptoSell;