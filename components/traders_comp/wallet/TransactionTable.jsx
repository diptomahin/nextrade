"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { BiSearchAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import useSpecificTransactionData from "@/hooks/useSpecificTransactionData";

const TransactionTable = () => {
  const [isOpenDot, setIsOpenDot] = useState(false);
  const [dynamicSearch, setDynamicSearch] = useState("");

  const {
    specificTransactionsData,
    refetchSpecificTransactionsData,
    SpecificTransactionsDataLoading,
    SpecificTransactionsDataPending,
    SpecificTransactionsDataError,
  } = useSpecificTransactionData(dynamicSearch);
  refetchSpecificTransactionsData();
  if (
    SpecificTransactionsDataLoading ||
    SpecificTransactionsDataPending ||
    SpecificTransactionsDataError
  ) {
    return;
  }

  // Helper function to format time in 12-hour format
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

  const Search = () => {
    refetchSpecificTransactionsData();
  };
  return (
    <div className="p-5 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded">
      <div className="flex flex-col xl:flex-row items-center justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">Transaction History</h1>

        <div className="flex items-center gap-1">
          {/* search form */}
          <div className="relative flex items-center">
            <input
              onChange={(e) => setDynamicSearch(e.target.value)}
              type="text"
              name="search"
              placeholder="Search..."
              className="w-28 focus:w-48 bg-white/5 hover:bg-white/10 transition-all duration-200 ease-in-out text-sm pl-3 pr-9 py-[6px] outline-none rounded font-medium"
            />
            <button
              onClick={Search}
              className="absolute right-0 bg-transparent text-lg text-white mix-blend-difference hover:bg-transparent btn btn-sm rounded-l-none shadow-none border-none"
            >
              <BiSearchAlt />
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsOpenDot(!isOpenDot)}
              className="btn btn-sm text-base text-white bg-transparent hover:bg-transparent border-none outline-none flex items-center"
            >
              <BsThreeDotsVertical />
            </button>
            {isOpenDot && (
              <div className="absolute right-0 top-10 flex flex-col py-4 rounded bg-darkBG border border-darkThree font-medium">
                <button className="w-full btn btn-sm text-sm text-white/80 justify-end bg-transparent hover:bg-white/10 border-none pr-6 pl-8  rounded-none">
                  Download
                </button>
                <button className="w-full btn btn-sm text-sm text-white/80 justify-end bg-transparent hover:bg-fourthPink border-none pr-6 pl-8  rounded-none">
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {specificTransactionsData.length !== 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            color: "white",
            borderRadius: "0.75rem",
            boxShadow: "none",
          }}
          className="bg-gradient-to-bl from-darkOne to-darkTwo border-none shadow-none outline-none"
        >
          <Table
            sx={{ minWidth: 650, color: "white" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Action
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Currency
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  sx={{
                    color: "white",
                    borderBottom: "1px solid #2c3750",
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {specificTransactionsData?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    {row?.action}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  >
                    <span
                      className={
                        row.action === "Deposit"
                          ? "text-[#78c350]"
                          : "text-[#ff5252]"
                      }
                    >
                      $ {row?.amount}
                    </span>
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  >
                    USD
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    {row?.date?.day}/{row?.date?.month}/{row?.date?.year}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    {/* Time */}
                    <span>
                      {formatTime(row?.date?.hours || " ")}:
                      {padZero(row?.date?.minutes || " ")}{" "}
                      {getAmPm(row?.date?.hours || " ")}
                    </span>
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                    }}
                  >
                    Complete
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="text-center font-bold">
          Currently, no transaction history is available.
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
