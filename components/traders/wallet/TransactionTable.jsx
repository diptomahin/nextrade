"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const TransactionTable = ({ userBalanceDetails }) => {
  return (
    <div className="p-4 xl:p-6 bg-white rounded-xl border">
      <div className="flex flex-col xl:flex-row justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">Transaction History</h1>
      </div>

      {/* Table Data */}
      <TableContainer
        component={Paper}
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className=" font-semibold">Action</TableCell>
              <TableCell align="right" className="font-semibold">
                Amount
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Date
              </TableCell>
              <TableCell align="right" className="font-semibold">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userBalanceDetails[0]?.depositWithdrawData?.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <p>{row?.deposit ? "Deposit" : "Withdraw"}</p>
                </TableCell>
                <TableCell align="right">
                  <p
                    className={`font-semibold ${
                      row?.deposit >= 0 ? "text-green-700" : "text-red-700"
                    }`}
                  >
                    {row?.deposit >= 0
                      ? `$${row?.deposit}`
                      : `-$${-row?.deposit}`}
                  </p>
                </TableCell>
                <TableCell align="right">
                  <p>
                    {row?.date.day}-{row?.date.month}-{row?.date.year}
                  </p>
                </TableCell>
                <TableCell align="right">Complete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
