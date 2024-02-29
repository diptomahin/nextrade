'use client'
import useHistory from "@/hooks/useHistory";
import React, { useState, useEffect } from "react";

//Material Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const History = () => {
  const { data: history = [],
    isPending,
    isLoading,
    refetch, } = useHistory(["history"]);

  const [bought, setBought] = useState([])
  const [sold, setSold] = useState([])
  const [boughtAmount, setBoughtAmount] = useState([])
  const [sellAmount, setSellAmount] = useState([])
  useEffect(() => {
    const findBought = history.filter(data => data.action == "bought");

    const findSold = history.filter(data => data.action == "sold");

    setBought(findBought);
    setSold(findSold);

  }, [history])

  const formatTime = (hours) => {
    return hours % 12 || 12; // Convert to 12-hour format
  };

  // Helper function to pad zero for single-digit minutes
  const padZero = (minutes) => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  // Helper function to determine AM or PM
  const getAmPm = (hours) => {
    return hours >= 12 ? "PM" : "AM";
  };

  return (
    <div>

      <div>
        <h1 className="text-xl font-bold text-white my-5">Buying History . . . .</h1>
        <hr />
        <div className="grid grid-cols-2 gap-2 my-5">
          {
            bought.map(history => (
              <div key={history._id} className=" border-b border-x-4 border-y-4 p-5 rounded-lg pb-2 border-x-darkThree border-y-darkThree">
                <div>
                  <h3 className="text-xl font-bold">{history.assetName} <br /> <span className="text-sm font-semibold">
                    ({history.assetKey})</span></h3>
                </div>
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-sm font-bold"> <span className="text-lg font-bold text-green-500" >{history.Price}</span></h3>
                  </div>
                  <div>
                    <p className="text-darkGray text-[12px] flex gap-2 items-center justify-end">
                      {/* Date */}
                      <span>
                        {history?.date?.day || " "}-
                        {history?.date?.month || " "}-
                        {history?.date?.year || " "}
                      </span>
                      {/* Time */}
                      <span>
                        {formatTime(history?.date?.hours || " ")}:
                        {padZero(history?.date?.minutes || " ")}{" "}
                        {getAmPm(history?.date?.hours || " ")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      <div>
        <h1 className="text-xl font-bold text-white my-5">Selling History . . . .</h1>
        <hr />
        <div className="grid grid-cols-2 gap-2 my-5">
          {
            sold.map(history => (
              <div key={history._id} className=" border-b border-x-4 border-y-4 p-5 rounded-lg pb-2 border-x-darkThree border-y-darkThree">
                <div>
                  <h3 className="text-xl font-bold">{history.assetName} <br /> <span className="text-sm font-semibold">
                    ({history.assetKey})</span></h3>
                </div>
                <div className="flex flex-col">
                  <div>
                    <h3 className="text-sm font-bold"> <span className="text-lg font-bold text-red-500" >{history.Price}</span></h3>
                  </div>
                  <div>
                    <p className="text-darkGray text-[12px] flex gap-2 items-center justify-end">
                      {/* Date */}
                      <span>
                        {history?.date?.day || " "}-
                        {history?.date?.month || " "}-
                        {history?.date?.year || " "}
                      </span>
                      {/* Time */}
                      <span>
                        {formatTime(history?.date?.hours || " ")}:
                        {padZero(history?.date?.minutes || " ")}{" "}
                        {getAmPm(history?.date?.hours || " ")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
};

export default History;
