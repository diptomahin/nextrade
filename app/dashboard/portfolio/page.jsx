"use client";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";

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
import PortfolioAssetChart from "@/components/charts/portfolioAssetChart";

const Portfolio = () => {
  const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
  const [currentLTCPrice, setCurrentLTCPrice] = useState(0);
  const [currentETHPrice, setCurrentETHPrice] = useState(0);
  const [currentQTUMPrice, setCurrentQTUMPrice] = useState(0);
  const [currentDOGEPrice, setCurrentDOGEPrice] = useState(0);
  const [buyingPriceInfo, setBuyingPriceInfo] = useState([]);

  const { user, loading } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  // console.log(allUsers)

  const usersRemainingBalance = parseFloat(allUsers[0]?.balance).toFixed(2);

  // websocket the real time  currency balance api
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
        }
      });
    });

    return () => {
      socket.close();
    };
  }, []);

  //user buying coins map to data
  React.useEffect(() => {
    const userBTCData = allUsers.flatMap((user) => user.portfolio);
    const filteredAssets = userBTCData.filter(
      (asset) =>
        asset.assetKey === "BTCUSDT" ||
        asset.assetKey === "ETHUSDT" ||
        asset.assetKey === "LTCUSDT" ||
        asset.assetKey === "QTUMUSDT" ||
        asset.assetKey === "DOGEUSDT"
    );
    setBuyingPriceInfo(filteredAssets);
  }, [allUsers, setBuyingPriceInfo]);

  // profit and loss calculation
  const calculateDifference = (currentPrice, buyingPrice) => {
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
          : 0,
        parseFloat(asset.assetBuyingPrice)
      );
      return total + (parseFloat(difference) < 0 ? parseFloat(difference) : 0);
    }, 0);
    return Math.abs(totalLoss).toFixed(2);
  };

  // calculate total buying balance
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

      <PortfolioAssetChart totalBuyingPrice={totalBuyingPrice} calculateTotalProfit={calculateTotalProfit} usersRemainingBalance={usersRemainingBalance} calculateTotalLoss={calculateTotalLoss} allUsers={allUsers}></PortfolioAssetChart>

      <div className="  flex items-center justify-between bg-grayPrimary p-4 rounded-md gap-12 xl:gap-5 lg:gap-32">
        <div>
          <p className="font-semibold text-gray-500">
            Total Asset <RemoveRedEyeOutlinedIcon className="text-base ml-2" />
          </p>
          <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
            $ {totalBuyingPrice.toFixed(2)}
          </h1>
          <div className=" flex items-center justify-between">
            {/* total profit */}
            <p
              className={`font-semibold ${
                calculateTotalProfit >= 0 ? "text-green-700" : "text-red-600"
              }`}
            >
              {calculateTotalProfit >= 0 ? "+" : "-"}$
              {Math.abs(calculateTotalProfit).toFixed(2)}
            </p>

            {/* total loss */}
            <p
              className={`font-semibold ${
                calculateTotalProfit >= 0 ? "text-red-700" : " text-green-700 "
              }`}
            >
              -${calculateTotalLoss()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <DashButton>
            {" "}
            <BorderColorIcon /> Edit
          </DashButton>
          <DashButton>
            {" "}
            <AddIcon /> Add Transaction
          </DashButton>
        </div>
      </div>

      {/* Table */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-2 font-sans">
          Your Holdings . . .{" "}
        </h2>
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
                  <TableCell
                    component="th"
                    scope="row"
                    className="font-semibold"
                  >
                    {asset.assetName}
                  </TableCell>
                  <TableCell align="right" className="font-semibold">
                    $ {asset.assetBuyingPrice}
                  </TableCell>
                  <TableCell align="right" className="font-semibold">
                    {asset.assetKey === "BTCUSDT" ? (
                      <span
                        className={
                          currentBTCPrice < parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }
                      >
                        ${currentBTCPrice}
                      </span>
                    ) : asset.assetKey === "ETHUSDT" ? (
                      <span
                        className={
                          currentETHPrice < parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }
                      >
                        ${currentETHPrice}
                      </span>
                    ) : asset.assetKey === "LTCUSDT" ? (
                      <span
                        className={
                          currentLTCPrice < parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }
                      >
                        ${currentLTCPrice}
                      </span>
                    ) : asset.assetKey === "QTUMUSDT" ? (
                      <span
                        className={
                          currentQTUMPrice < parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }
                      >
                        ${currentQTUMPrice}
                      </span>
                    ) : asset.assetKey === "DOGEUSDT" ? (
                      <span
                        className={
                          currentDOGEPrice < parseFloat(asset.assetBuyingPrice)
                            ? "text-red-700"
                            : "text-green-700"
                        }
                      >
                        ${currentDOGEPrice}
                      </span>
                    ) : (
                      <span>-</span>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <span
                      className={
                        asset.assetBuyingPrice
                          ? `font-semibold ${
                              calculateDifference(
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
                                  : 0,
                                parseFloat(asset.assetBuyingPrice)
                              ) > 0
                                ? "text-green-700"
                                : "text-red-700"
                            }`
                          : ""
                      }
                    >
                      $
                      {asset.assetBuyingPrice
                        ? calculateDifference(
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
                              : 0,
                            parseFloat(asset.assetBuyingPrice)
                          )
                        : "0.00"}
                    </span>
                  </TableCell>

                  <TableCell align="right">----</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Portfolio;
