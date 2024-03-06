"use client"
import { useEffect, useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import CryptoSell from "./CryptoSell";
import CurrencySell from "./CurrencySell";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";

const QuickSell = ({userData, refetchUserData}) => {
  const {user} = useAuth()
  const [isCryptoSelected, setIsCryptoSelected] = useState(true);

  // asset Data without search functionality
  const [assetData2, setAssetData2] = useState([]);
  const [currencyData2, setCurrencyData2] = useState([]);

  // fetch data without search functionality
  const { data: totalPurchased = [], refetch: totalRefetch } = useSecureFetch(
    `/sidePortfolio?email=${user.email}`,
    ["purchased-asset", user?.email]
  );

  // filter  coin data
  useEffect(() => {
    if (totalPurchased.length > 0) {
      setAssetData2(
        totalPurchased.filter((data) => data.assetType === "crypto coin")
      );
      setCurrencyData2(
        totalPurchased.filter((data) => data.assetType === "flat coin")
      );
    }
  }, [totalPurchased]);

  // convert static data into real time data
  const createCryptoData = (
    _id,
    assetName,
    assetKey,
    assetImg,
    assetType,
    assetBuyingPrice,
    currentPrice,
    assetPortion,
    totalInvestment,
    assetBuyerUID,
    assetBuyerEmail
  ) => {
    return {
      _id,
      assetName,
      assetKey,
      assetImg,
      assetType,
      assetBuyingPrice,
      currentPrice,
      assetPortion,
      totalInvestment,
      assetBuyerUID,
      assetBuyerEmail,
    };
  };

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (assetData2.length > 0) {
        const updatedAssets = assetData2.map((asset) => {
          const ticker = data.find((item) => item.s === asset.assetKey);
          if (ticker) {
            return createCryptoData(
              asset._id,
              asset.assetName,
              asset.assetKey,
              asset.assetImg,
              asset.assetType,
              asset.assetBuyingPrice,
              parseFloat(ticker.c).toFixed(3),
              asset.assetPortion,
              asset.totalInvestment,
              asset.assetBuyerUID,
              asset.assetBuyerEmail
            );
          }
          return asset;
        });
        setAssetData2(updatedAssets);
      }
    });
    return () => socket.close();
  }, [assetData2]);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (currencyData2.length > 0) {
          const updatedAssets = await Promise.all(
            currencyData2.map(async (asset) => {
              const currencyKey = asset.assetKey;
              const response = await axios.get(
                `https://api.exchangerate-api.com/v4/latest/${currencyKey}`
              );
              return createCryptoData(
                asset._id,
                asset.assetName,
                asset.assetKey,
                asset.assetImg,
                asset.assetType,
                asset.assetBuyingPrice,
                response.data.rates.USD,
                asset.assetPortion,
                asset.totalInvestment,
                asset.assetBuyerUID,
                asset.assetBuyerEmail
              );
            })
          );
          setCurrencyData2(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [currencyData2]);


  return (
    <div>
      <div className="flex items-center gap-5 my-10">
        <div
          onClick={() => {
            setIsCryptoSelected(true);
          }}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer"
        >
          {isCryptoSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Cryptocurrency
        </div>

        <div
          onClick={() => {
            setIsCryptoSelected(false);
          }}
          className="flex items-center gap-1 text-sm font-medium cursor-pointer"
        >
          {!isCryptoSelected ? (
            <MdCheckBox className="text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-xl" />
          )}{" "}
          Currency
        </div>
      </div>

      {isCryptoSelected ? (
        <CryptoSell
          cryptoCurrency={assetData2}
          cryptoRefetch={totalRefetch}
          refetchUserData={refetchUserData}
          userData={userData}
        />
      ) : (
        <CurrencySell flatCurrency={currencyData2} flatRefetch={totalRefetch} refetchUserData={refetchUserData} userData={userData}/>
      )}

      
    </div>
  );
};

export default QuickSell;
