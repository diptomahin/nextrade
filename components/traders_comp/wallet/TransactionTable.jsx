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
    <div className="p-4 xl:p-6 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl">
      <div className="flex flex-col xl:flex-row justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">Transaction History</h1>
      </div>

      {!userBalanceDetails && !userBalanceDetails[0].depositWithdrawData ? (
        <div className="text-center font-bold">
          No transaction history available
        </div>
      ) : (
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
                  sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  className="font-semibold"
                >
                  Action
                </TableCell>
                <TableCell
                  sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  className="font-semibold"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  className="font-semibold"
                >
                  Currency
                </TableCell>
                <TableCell
                  sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  className="font-semibold"
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  className="font-semibold"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userBalanceDetails[0]?.depositWithdrawData?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                      fontWeight: "medium",
                    }}
                  >
                    {row?.deposit ? "Deposit" : "Withdraw"}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", borderBottom: "1px solid #2c3750" }}
                  >
                    {row?.deposit ? (
                      <span className="text-green-500">${row?.deposit}</span>
                    ) : (
                      <span className="text-red-500">${row?.withdraw}</span>
                    )}
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
                      fontWeight: "medium",
                    }}
                  >
                    {row?.date.day}-{row?.date.month}-{row?.date.year}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                      borderBottom: "1px solid #2c3750",
                      fontWeight: "medium",
                    }}
                  >
                    Complete
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default TransactionTable;
