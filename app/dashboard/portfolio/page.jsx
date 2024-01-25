"use client";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Button from "@/components/library/Button/Button";
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
import useAuth from "@/utils/useAuth";
import DashboardButton from "@/components/library/DashboardButton";

const Portfolio = () => {
  const { user } = useAuth();
  const [currentBTCPrice, setCurrentBTCPrice] = useState(0);
  const [currentLTCPrice, setCurrentLTCPrice] = useState(0);
  const [currentETHPrice, setCurrentETHPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);

  const buyingBTCPrice = parseInt("40020");
  const buyingETHPrice = parseInt("2050");
  const buyingLTCPrice = parseInt("60");

  // useAxiosPublic.get(`http://localhost:5000/v1/api/all-users/${user.email}`)

  React.useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/!ticker@arr"
    );

    // Event listener for incoming messages
    socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      // console.log(data)

      // Find and update prices for BTC, LTC, and ETH
      data.forEach((ticker) => {
        const symbol = ticker.s;

        if (symbol === "BTCUSDT") {
          setCurrentBTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "LTCUSDT") {
          setCurrentLTCPrice(parseFloat(ticker.c).toFixed(2));
        } else if (symbol === "ETHUSDT") {
          setCurrentETHPrice(parseFloat(ticker.c).toFixed(2));
        }
      });
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "Frozen yoghurt (BTC)",
      buyingBTCPrice,
      currentBTCPrice,
      24,
      4.0
    ),
    createData(
      "Ice cream sandwich (ETC)",
      buyingETHPrice,
      currentETHPrice,
      37,
      4.3
    ),
    createData("Eclair (LTC)", buyingLTCPrice, currentLTCPrice, 24, 6.0),
    // createData('Cupcake', buyingETHPrice, currentETHPrice, 67, 4.3),
    // createData('Gingerbread', buyingBTCPrice, currentBTCPrice, 49, 3.9),
  ];

  return (
    <div>
      {/* Current balance */}

      <div className="flex items-center justify-between bg-white rounded-md gap-12 xl:gap-5 lg:gap-32 p-6">
        <div>
          <p className="font-semibold opacity-70 flex items-center gap-3">
            Current Balance <RemoveRedEyeOutlinedIcon className="w-4 h-4" />
          </p>
          <h1 className=" lg:text-3xl text-xl font-extrabold my-2">
            ${buyingBTCPrice + buyingETHPrice + buyingLTCPrice}
          </h1>
          <p className=" text-red-600 font-semibold ">-$1200.78 (-1.89%)</p>
        </div>
        <div className="flex items-center gap-5 ">
          <DashboardButton>
            <BorderColorIcon className=" w-5 h-5" /> Edit
          </DashboardButton>
          <DashboardButton>
            {" "}
            <AddIcon className=" w-5 h-5" /> Add Transaction
          </DashboardButton>
        </div>
      </div>

      {/* Table boat  */}
      <div className="mt-20 ">
        <h2 className=" text-xl font-semibold mb-2">Your Holdings . . . </h2>
        <TableContainer
          component={Paper}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className=" font-semibold">Company</TableCell>
                <TableCell align="right" className="font-semibold">
                  Buying Price
                </TableCell>
                <TableCell align="right" className="font-semibold">
                  Current Price
                </TableCell>
                <TableCell align="right" className="font-semibold">
                  Carbs&nbsp;(g)
                </TableCell>
                <TableCell align="right" className="font-semibold">
                  Protein&nbsp;(g)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <p className={`text-lg`}>{row.name}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p
                      className={`text-lg font-semibold ${
                        row.fat > row.calories
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {row.calories}
                    </p>
                  </TableCell>
                  <TableCell align="right">
                    <p className={`text-lg font-semibold`}>{row.fat}</p>
                  </TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
