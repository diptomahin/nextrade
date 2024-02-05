"use client";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";

//material Icon
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";

// material imports
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useSecureFetch from "@/hooks/useSecureFetch";
import useAuth from "@/hooks/useAuth";
import DashButton from "@/components/library/buttons/DashButton";
import PortfolioAssetChart from "@/components/traders_comp/portfolio/PortfolioAssetChart";
import PortfolioTopBanner from "@/components/traders_comp/portfolio/PortfolioTopBanner";

const Portfolio = () => {
  const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
  const [currentLTCPrice, setCurrentLTCPrice] = useState(0);
  const [currentETHPrice, setCurrentETHPrice] = useState(0);
  const [currentQTUMPrice, setCurrentQTUMPrice] = useState(0);
  const [currentDOGEPrice, setCurrentDOGEPrice] = useState(0);
  const [currentXRPPrice, setCurrentXRPPrice] = useState(0);
  const [currentBCHPrice, setCurrentBCHPrice] = useState(0);
  const [currentADAPrice, setCurrentADAPrice] = useState(0);
  const [currentDOTPrice, setCurrentDOTPrice] = useState(0);
  const [currentBNBPrice, setCurrentBNBPrice] = useState(0);
  const [currentMATICPrice, setCurrentMATICPrice] = useState(0);
  const [buyingPriceInfo, setBuyingPriceInfo] = useState([]);

  const { user, loading } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);

  // console.log(allUsers)

  // Websocket to fetch real-time currency balance
  React.useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      data.forEach((ticker) => {
        const symbol = ticker.s;
        if (symbol === "BTCUSDT") {
          setCurrentBTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "LTCUSDT") {
          setCurrentLTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ETHUSDT") {
          setCurrentETHPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "QTUMUSDT") {
          setCurrentQTUMPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "DOGEUSDT") {
          setCurrentDOGEPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "XRPUSDT") {
          setCurrentXRPPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "BCHUSDT") {
          setCurrentBCHPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ADAUSDT") {
          setCurrentADAPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "DOTUSDT") {
          setCurrentDOTPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "BNBUSDT") {
          setCurrentBNBPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "MATICUSDT") {
          setCurrentMATICPrice(parseFloat(ticker.c).toFixed(2));
        }
      });
    });
  }, []);

  // Map user buying coins to data
  React.useEffect(() => {
    const userBTCData = allUsers.flatMap((user) => user.portfolio);
    const filteredAssets = userBTCData.filter(
      (asset) =>
        asset.assetKey === "BTCUSDT" ||
        asset.assetKey === "ETHUSDT" ||
        asset.assetKey === "LTCUSDT" ||
        asset.assetKey === "QTUMUSDT" ||
        asset.assetKey === "DOGEUSDT" ||
        asset.assetKey === "XRPUSDT" ||
        asset.assetKey === "BCHUSDT" ||
        asset.assetKey === "ADAUSDT" ||
        asset.assetKey === "DOTUSDT" ||
        asset.assetKey === "BNBUSDT" ||
        asset.assetKey === "MATICUSDT"
    );
    if (filteredAssets.length > 0) {
      setBuyingPriceInfo(filteredAssets);
    }
  }, [allUsers]);

  // Calculate the difference between current price and buying price
  const calculateDifference = (currentPrice, buyingPrice) => {
    // If buying price is 0 or current price is 0, return 0
    if (buyingPrice === 0 || currentPrice === 0) {
      return 0;
    }
    // Otherwise, calculate the difference
    return (currentPrice - buyingPrice).toFixed(2);
  };

  // Calculate total profit
  const calculateTotalProfit = buyingPriceInfo.reduce((total, asset) => {
    const difference = calculateDifference(
      asset.assetKey === "BTCUSDT"
        ? currentBTCPrice
        : asset.assetKey === "ETHUSDT"
          ? currentETHPrice
          : asset.assetKey === "LTCUSDT"
            ? currentLTCPrice
            : asset.assetKey === "QTUMUSDT"
              ? currentQTUMPrice
              : asset.assetKey === "DOGEUSDT"
                ? currentDOGEPrice
                : asset.assetKey === "XRPUSDT"
                  ? currentXRPPrice
                  : asset.assetKey === "BCHUSDT"
                    ? currentBCHPrice
                    : asset.assetKey === "ADAUSDT"
                      ? currentADAPrice
                      : asset.assetKey === "DOTUSDT"
                        ? currentDOTPrice
                        : asset.assetKey === "BNBUSDT"
                          ? currentBNBPrice
                          : asset.assetKey === "MATICUSDT"
                            ? currentMATICPrice
                            : 0,
      parseFloat(asset.assetBuyingPrice)
    );
    return total + (parseFloat(difference) > 0 ? parseFloat(difference) : 0);
  }, 0);

  // Calculate total loss
  const calculateTotalLoss = () => {
    const totalLoss = buyingPriceInfo.reduce((total, asset) => {
      const difference = calculateDifference(
        asset.assetKey === "BTCUSDT"
          ? currentBTCPrice
          : asset.assetKey === "ETHUSDT"
            ? currentETHPrice
            : asset.assetKey === "LTCUSDT"
              ? currentLTCPrice
              : asset.assetKey === "QTUMUSDT"
                ? currentQTUMPrice
                : asset.assetKey === "DOGEUSDT"
                  ? currentDOGEPrice
                  : asset.assetKey === "XRPUSDT"
                    ? currentXRPPrice
                    : asset.assetKey === "BCHUSDT"
                      ? currentBCHPrice
                      : asset.assetKey === "ADAUSDT"
                        ? currentADAPrice
                        : asset.assetKey === "DOTUSDT"
                          ? currentDOTPrice
                          : asset.assetKey === "BNBUSDT"
                            ? currentBNBPrice
                            : asset.assetKey === "MATICUSDT"
                              ? currentMATICPrice
                              : 0,
        parseFloat(asset.assetBuyingPrice)
      );
      return total + (parseFloat(difference) < 0 ? parseFloat(difference) : 0);
    }, 0);
    return Math.abs(totalLoss).toFixed(2);
  };

  // Calculate total buying balance
  const totalBuyingPrice = buyingPriceInfo.reduce(
    (total, asset) => total + parseFloat(asset.assetBuyingPrice),
    0
  );

  if (loading || isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center text-primary">
        <span> loading...</span>
      </p>
    );
  }

  return (
    <div>
      {/* Current balance */}
      <PortfolioTopBanner
        totalBuyingPrice={totalBuyingPrice}
        calculateTotalProfit={calculateTotalProfit}
        usersRemainingBalance={usersRemainingBalance}
        calculateTotalLoss={calculateTotalLoss}
      ></PortfolioTopBanner>

      {/* pie chart */}

      {
        totalBuyingPrice && <PortfolioAssetChart allUsers={allUsers}></PortfolioAssetChart>
      }


      {/* Table */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-2 font-sans">
          Your Holdings . . .{" "}
        </h2>
        {totalBuyingPrice ?
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-primary">
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "600" }}>
                    Company
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Buying Price
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Current Price
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    Profit / Loss
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ color: "white", fontWeight: "600" }}
                  >
                    -
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {buyingPriceInfo.map((asset, index) => (
                  <TableRow key={index}>
                    {/* row 1 */}
                    <TableCell
                      component="th"
                      scope="row"

                    >
                      <h2 className="font-semibold">{asset.assetName}</h2>
                    </TableCell>
                    {/* row 2 */}
                    <TableCell align="right" >
                      <h2 className="font-semibold">$ {asset.assetBuyingPrice}</h2>
                    </TableCell>
                    {/* row 3 */}
                    <TableCell align="right" className="font-semibold">
                      {asset.assetKey === "BTCUSDT" ? (
                        <span
                          className={
                            currentBTCPrice < parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700 font-semibold"
                              : "text-green-700 font-semibold"
                          }
                        >
                          ${currentBTCPrice}
                          {/* Render up arrow icon if current price is higher than buying price */}
                          {currentBTCPrice >
                            parseFloat(asset.assetBuyingPrice) ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            // Render down arrow icon if current price is lower than buying price
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : asset.assetKey === "ETHUSDT" ? (
                        <span
                          className={
                            currentETHPrice < parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700 font-semibold"
                              : "text-green-700 font-semibold"
                          }
                        >
                          ${currentETHPrice}
                          {currentETHPrice >
                            parseFloat(asset.assetBuyingPrice) ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : asset.assetKey === "LTCUSDT" ? (
                        <span
                          className={
                            currentLTCPrice < parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700 font-semibold"
                              : "text-green-700 font-semibold"
                          }
                        >
                          ${currentLTCPrice}
                          {currentLTCPrice >
                            parseFloat(asset.assetBuyingPrice) ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : asset.assetKey === "QTUMUSDT" ? (
                        <span
                          className={
                            currentQTUMPrice < parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700 font-semibold"
                              : "text-green-700 font-semibold"
                          }
                        >
                          ${currentQTUMPrice}
                          {currentQTUMPrice >
                            parseFloat(asset.assetBuyingPrice) ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : asset.assetKey === "DOGEUSDT" ? (
                        <span
                          className={
                            currentDOGEPrice < parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700 font-semibold"
                              : "text-green-700 font-semibold"
                          }
                        >
                          ${currentDOGEPrice}
                          {currentDOGEPrice >
                            parseFloat(asset.assetBuyingPrice) ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : (
                        <span>-</span>
                      )}
                    </TableCell>

                    {/* row 4 */}
                    <TableCell align="right">
                      {asset.assetBuyingPrice ? (
                        <span
                          className={`font-semibold ${calculateDifference(
                            asset.assetKey === "BTCUSDT"
                              ? currentBTCPrice
                              : asset.assetKey === "ETHUSDT"
                                ? currentETHPrice
                                : asset.assetKey === "LTCUSDT"
                                  ? currentLTCPrice
                                  : asset.assetKey === "QTUMUSDT"
                                    ? currentQTUMPrice
                                    : asset.assetKey === "DOGEUSDT"
                                      ? currentDOGEPrice
                                      : asset.assetKey === "XRPUSDT"
                                        ? currentXRPPrice
                                        : asset.assetKey === "BCHUSDT"
                                          ? currentBCHPrice
                                          : asset.assetKey === "ADAUSDT"
                                            ? currentADAPrice
                                            : asset.assetKey === "DOTUSDT"
                                              ? currentDOTPrice
                                              : asset.assetKey === "BNBUSDT"
                                                ? currentBNBPrice
                                                : asset.assetKey === "MATICUSDT"
                                                  ? currentMATICPrice
                                                  : 0,
                            parseFloat(asset.assetBuyingPrice)
                          ) > 0
                            ? "text-green-700"
                            : "text-red-700"
                            }`}
                        >
                          $
                          {calculateDifference(
                            asset.assetKey === "BTCUSDT"
                              ? currentBTCPrice
                              : asset.assetKey === "ETHUSDT"
                                ? currentETHPrice
                                : asset.assetKey === "LTCUSDT"
                                  ? currentLTCPrice
                                  : asset.assetKey === "QTUMUSDT"
                                    ? currentQTUMPrice
                                    : asset.assetKey === "DOGEUSDT"
                                      ? currentDOGEPrice
                                      : asset.assetKey === "XRPUSDT"
                                        ? currentXRPPrice
                                        : asset.assetKey === "BCHUSDT"
                                          ? currentBCHPrice
                                          : asset.assetKey === "ADAUSDT"
                                            ? currentADAPrice
                                            : asset.assetKey === "DOTUSDT"
                                              ? currentDOTPrice
                                              : asset.assetKey === "BNBUSDT"
                                                ? currentBNBPrice
                                                : asset.assetKey === "MATICUSDT"
                                                  ? currentMATICPrice
                                                  : 0,
                            parseFloat(asset.assetBuyingPrice)
                          )}
                          {/* Render up arrow icon for profit and down arrow icon for loss */}
                          {calculateDifference(
                            asset.assetKey === "BTCUSDT"
                              ? currentBTCPrice
                              : asset.assetKey === "ETHUSDT"
                                ? currentETHPrice
                                : asset.assetKey === "LTCUSDT"
                                  ? currentLTCPrice
                                  : asset.assetKey === "QTUMUSDT"
                                    ? currentQTUMPrice
                                    : asset.assetKey === "DOGEUSDT"
                                      ? currentDOGEPrice
                                      : asset.assetKey === "XRPUSDT"
                                        ? currentXRPPrice
                                        : asset.assetKey === "BCHUSDT"
                                          ? currentBCHPrice
                                          : asset.assetKey === "ADAUSDT"
                                            ? currentADAPrice
                                            : asset.assetKey === "DOTUSDT"
                                              ? currentDOTPrice
                                              : asset.assetKey === "BNBUSDT"
                                                ? currentBNBPrice
                                                : asset.assetKey === "MATICUSDT"
                                                  ? currentMATICPrice
                                                  : 0,
                            parseFloat(asset.assetBuyingPrice)
                          ) > 0 ? (
                            <ArrowDropUpSharpIcon className="text-green-700 ml-1" />
                          ) : (
                            <ArrowDropDownSharpIcon className="text-red-700 ml-1" />
                          )}
                        </span>
                      ) : (
                        <span>0.00</span>
                      )}
                    </TableCell>

                    {/* row 5 */}
                    <TableCell align="right">----</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> :
          <div className="flex justify-center items-center h-[40vh]">
            <h3 className="text-red-500 text-lg 2xl:text-3xl font-semibold">Empty !!</h3>
          </div>
        }
      </div>
    </div>
  );
};

export default Portfolio;
