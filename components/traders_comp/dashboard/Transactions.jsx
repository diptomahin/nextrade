"use client";
import useSpecificTransactionData from "@/hooks/useSpecificTransactionData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Link from "next/link";

const Transactions = () => {
  const {
    specificTransactionsData,
    SpecificTransactionsDataLoading,
    SpecificTransactionsDataPending,
    SpecificTransactionsDataError,
  } = useSpecificTransactionData();
  if (
    SpecificTransactionsDataLoading ||
    SpecificTransactionsDataPending ||
    SpecificTransactionsDataError
  ) {
    return;
  }

  console.log(specificTransactionsData);
  return (
    <div className="xl:col-span-6 3xl:col-span-4 w-full bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
      <div className="flex flex-wrap items-center justify-between  border-b pb-2 dark:border-b-darkThree mb-5">
        <h3 className="text-xl font-semibold">Recent Transactions</h3>
        <Link
          href="/dashboard/wallet"
          className="btn btn-sm h-10 bg-primary/10 hover:bg-primary/20 active:bg-primary/30 border-none shadow-none font-medium text-primary rounded-xl"
        >
          See all
        </Link>
      </div>

      {/* content */}
      {specificTransactionsData.length !== 0 ? (
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            padding: "0px",
            background: "none",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    paddingX: "0px",
                    paddingY: "10px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                  Action
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    paddingX: "0px",
                    paddingY: "10px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "16px",
                    paddingX: "0px",
                    paddingY: "10px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {specificTransactionsData?.slice(0, 3).map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ border: "none", paddingX: "0px" }}
                    className="text-black dark:text-white"
                  >
                    {row?.action}
                  </TableCell>
                  <TableCell
                    sx={{ border: "none", paddingX: "0px" }}
                    className="text-black dark:text-white"
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
                    sx={{ border: "none", paddingX: "0px" }}
                    className="text-black dark:text-white"
                  >
                    {row?.date?.day +
                      "/" +
                      row?.date?.month +
                      "/" +
                      row?.date?.year}
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

export default Transactions;
