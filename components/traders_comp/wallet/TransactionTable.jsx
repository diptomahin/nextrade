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
import useSecureFetch from "@/hooks/useSecureFetch";

const TransactionTable = ({ depositWithdrawData, user }) => {
  const [dynamicSearch, setDynamicSearch] = useState("");

  const { data = [] } = useSecureFetch(
    `/deposit-withdraw/specific/${user.email}?search=${dynamicSearch}`,
    user?.email,
    dynamicSearch
  );

  console.log(data);

  const handleSearch = async (e) => {
    e.preventDefault();
    const name = e.target.search.value;

    // const res = await useSecureAPI.get(`/all-users/${user.email}`);
  };
  return (
    <div className="p-5 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded-xl">
      <div className="flex flex-col xl:flex-row items-center justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">Transaction History</h1>

        <div className="">
          {/* search form */}
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              onChange={(e) => setDynamicSearch(e.target.value)}
              type="text"
              name="search"
              placeholder="Search..."
              className="w-28 focus:w-48 bg-white/5 hover:bg-white/10 transition-all duration-200 ease-in-out text-sm pl-3 pr-9 py-[6px] outline-none rounded-xl font-medium"
            />
            <button
              type="submit"
              className="absolute right-0 bg-transparent text-lg text-white mix-blend-difference hover:bg-transparent btn btn-sm rounded-l-none shadow-none border-none"
            >
              <BiSearchAlt />
            </button>
          </form>
          <div className="relative">
            <button></button>
          </div>
        </div>
      </div>

      {depositWithdrawData ? (
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
              {depositWithdrawData?.map((row, index) => (
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
                      <span className="text-[#78c350]">${row?.deposit}</span>
                    ) : (
                      <span className="text-[#ff5252]">${row?.withdraw}</span>
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
      ) : (
        <div className="text-center font-bold">
          Currently, no transaction history is available.
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
