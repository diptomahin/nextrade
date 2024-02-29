import { useEffect, useState } from "react";
import BuyLimit from "./BuyLimit";
import BuyMarket from "./BuyMarket";
import useAllCryptoCoins from "@/hooks/useAllCryptoCoins";
import useAllFlatCoins from "@/hooks/useAllFlatCoins";
import useUserData from "@/hooks/useUserData";

const QuickBuy = () => {
  const [isLimitOpen, setIsLimitOpen] = useState(true);
  const [cryptoCurrency, setCryptoCurrency] = useState([]);
  const [flatCurrency, setFlatCurrency] = useState([]);

  // get currency data from hook
  const { allCryptoCoins, cryptoRefetch } = useAllCryptoCoins();
  const { allFlatCoins, flatRefetch } = useAllFlatCoins();

  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  // data without real time price
  useEffect(() => {
    if (allCryptoCoins.length > 0 && allFlatCoins.length > 0) {
      setCryptoCurrency(allCryptoCoins);
      setFlatCurrency(allFlatCoins);
    }
  }, [allCryptoCoins, allFlatCoins]);

  // createData function for adding real time prices
  const createData = (
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon
  ) => ({
    _id,
    name,
    key,
    price,
    type,
    changePrice,
    highPrice,
    lowPrice,
    icon,
  });

  // fetch real time crypto data from binance api and create data
  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (cryptoCurrency.length > 0) {
        const updatedAssets = cryptoCurrency.map((asset) => {
          const ticker = data.find((item) => item.s === asset.key);
          if (ticker) {
            return createData(
              asset._id,
              asset.name,
              asset.key,
              parseFloat(ticker.c).toFixed(3),
              asset.type,
              parseFloat(ticker.p).toFixed(3),
              parseFloat(ticker.h).toFixed(2),
              parseFloat(ticker.l).toFixed(2),
              asset.icon
            );
          }
          return asset;
        });
        setCryptoCurrency(updatedAssets);
      }
    });
    return () => socket.close();
  }, [cryptoCurrency]);

  // createFlatCurrencyData function for adding current price
  const createFlatCurrencyData = (_id, name, key, type, price, icon) => ({
    _id,
    name,
    key,
    type,
    price,
    icon,
  });

  // fetch current flat coin prices from exchange rate api and create data
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        if (flatCurrency.length > 0) {
          const response = await axios.get(
            "https://api.exchangerate-api.com/v4/latest/USD"
          );
          // Access the data property of the response to get the currency rates
          const data = response.data.rates;
          const updatedAssets = flatCurrency.map((cur) => {
            const currencyKey = cur.key;
            // console.log(currencyKey)
            return createFlatCurrencyData(
              cur._id,
              cur.name,
              cur.key,
              cur.type,
              data[currencyKey],
              cur.icon
            );
          });
          setFlatCurrency(updatedAssets);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, [flatCurrency]);

  if (userDataLoading || userDataPending || userDataError) {
    return;
  }

  console.log(cryptoCurrency);
  console.log(flatCurrency);
  return (
    <div className="w-full mt-10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLimitOpen(true)}
            className={`btn btn-sm h-10 ${
              isLimitOpen
                ? "bg-primary hover:bg-primary"
                : "bg-transparent hover:bg-primary "
            } border-primary hover:border-primary text-white text-xs rounded-full px-5`}
          >
            Limit
          </button>
          <button
            onClick={() => setIsLimitOpen(false)}
            className={`btn btn-sm h-10 ${
              !isLimitOpen
                ? "bg-primary hover:bg-primary"
                : "bg-transparent hover:bg-primary "
            } border-primary hover:border-primary text-white text-xs rounded-full px-5`}
          >
            Market
          </button>
        </div>
        <div className="flex items-center gap-2 font-medium">
          Balance : ${userData?.balance}
        </div>
      </div>
      {isLimitOpen ? (
        <BuyLimit
          cryptoCurrency={cryptoCurrency}
          flatCurrency={flatCurrency}
          cryptoRefetch={cryptoRefetch}
          flatRefetch={flatRefetch}
        />
      ) : (
        <BuyMarket
          cryptoCurrency={cryptoCurrency}
          flatCurrency={flatCurrency}
          cryptoRefetch={cryptoRefetch}
          flatRefetch={flatRefetch}
        />
      )}
    </div>
  );
};

export default QuickBuy;
