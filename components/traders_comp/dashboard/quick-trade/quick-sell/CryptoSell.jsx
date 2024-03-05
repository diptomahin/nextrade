"use client"
import getDate from '@/components/utils/date';
import useAuth from '@/hooks/useAuth';
import useNotificationData from '@/hooks/useNotificationData';
import useSecureAPI from '@/hooks/useSecureAPI';
import useUserData from '@/hooks/useUserData';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';



const CryptoSell = ({ cryptoCurrency, cryptoRefetch }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const secureAPI = useSecureAPI();
    const { user } = useAuth();
    const date = getDate();
    const { refetchNotificationsData } = useNotificationData();
    const { refetchUserData } = useUserData();

    // profit and loss calculator
    const calculateDifference = (currentPrice, buyingPrice, portion) => {
        const profitLoss =
            (currentPrice - buyingPrice) * (parseFloat(portion.slice(0, -1)) / 100);
        return profitLoss.toFixed(3);
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
                    // onChange={handleSelectChange}
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
                <button className={`btn btn-sm h-10 border-none  font-medium rounded-full px-5 bg-primary hover:bg-primary text-white `}>
                    Buy now
                </button>
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