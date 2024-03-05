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
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const TransactionTable = ({
  secureAPI,
  setDynamicSearch,
  specificTransactionsData,
  refetchSpecificTransactionsData,
}) => {
  const [isOpenDot, setIsOpenDot] = useState(false);

  // deposit-withdraw/delete-specific/:id
  const handleDeleteAll = async (email) => {
    if (!email) {
      return;
    }
    Swal.fire({
      title: `Are you sure you want to delete all transaction history?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting all transaction history...", {
          duration: 10000,
        });
        try {
          // Send a DELETE request to your backend API
          const res = await secureAPI.delete(
            `deposit-withdraw/delete-all/${email}`
          );
          if (res.data.deletedCount > 0) {
            refetchSpecificTransactionsData();
            setIsOpenDot(false);
            toast.success("Deleted successful", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          toast.error("Something wrong. Please try again", {
            id: toastId,
            duration: 3000,
          });
        }
      }
    });
  };

  const handleDelete = async (_id) => {
    Swal.fire({
      title: `Are you sure you want to delete it?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("Deleting transaction history...", {
          duration: 10000,
        });
        try {
          // Send a DELETE request to your backend API
          const res = await secureAPI.delete(
            `deposit-withdraw/delete-specific/${_id}`
          );
          if (res.data.deletedCount > 0) {
            refetchSpecificTransactionsData();
            toast.success("Deleted successful", {
              id: toastId,
              duration: 3000,
            });
          }
        } catch (error) {
          toast.error("Something wrong. Please try again", {
            id: toastId,
            duration: 3000,
          });
        }
      }
    });
  };

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

  console.log(specificTransactionsData);
  return (
    <div className="p-5 bg-white dark:bg-tertiary rounded-xl shadow">
      <div className="flex flex-col 2xl:flex-row items-center justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">Transaction History</h1>

        <div className="flex items-center gap-1">
          {/* search form */}
          <div
            onClick={() => setIsOpenDot(false)}
            className="relative flex items-center"
          >
            <input
              onChange={(e) => setDynamicSearch(e.target.value)}
              type="text"
              name="search"
              placeholder="Search..."
              className="w-28 focus:w-48 bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-all duration-200 ease-in-out text-sm pl-3 pr-9 py-[6px] outline-none rounded-xl font-medium"
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
              className="btn btn-sm h-8 text-lg px-2 dark:text-white bg-transparent hover:bg-black/10 active:bg-black/20 dark:hover:bg-white/10 dark:active:bg-white/20 border-none outline-none flex items-center rounded-full"
            >
              <BsThreeDotsVertical />
            </button>
            {isOpenDot && (
              <div className="absolute w-40 right-0 top-10 flex flex-col py-4 rounded bg-gray-100 dark:bg-secondary font-medium rounded-s-2xl rounded-b-2xl">
                <button
                  onClick={() =>
                    handleDeleteAll(specificTransactionsData[0]?.email)
                  }
                  className="whitespace-nowrap w-full btn btn-sm text-sm dark:text-white/80 justify-start bg-transparent hover:bg-septenary hover:text-white/80 border-none rounded-none pl-4 shadow-none"
                >
                  Delete all history
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {specificTransactionsData.length !== 0 ? (
        <TableContainer
          onClick={() => setIsOpenDot(false)}
          component={Paper}
          sx={{
            boxShadow: "none",
            padding: "0px",
            background: "none",
          }}
          className="border-none outline-none"
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="simple table"
            className="text-black dark:text-white"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Action
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Currency
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Time
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "500",
                    fontSize: "17px",
                  }}
                  className="text-black dark:text-white dark:border-b-darkThree"
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {specificTransactionsData?.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className="text-black dark:text-white dark:border-b-darkThree"
                  >
                    {row?.action}
                  </TableCell>
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
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
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                    USD
                  </TableCell>
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                    {row?.date?.day}/{row?.date?.month}/{row?.date?.year}
                  </TableCell>
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                    {/* Time */}
                    <span>
                      {formatTime(row?.date?.hours || " ")}:
                      {padZero(row?.date?.minutes || " ")}{" "}
                      {getAmPm(row?.date?.hours || " ")}
                    </span>
                  </TableCell>
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                    Complete
                  </TableCell>
                  <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                    <button
                      onClick={() => handleDelete(row?._id)}
                      className="btn btn-sm text-xl px-2 text-white/80 bg-[#ff5252] hover:bg-[#ff5252] border-none justify-start font-normal rounded"
                    >
                      <MdDelete />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          onClick={() => setIsOpenDot(false)}
          className="text-center font-bold py-10"
        >
          Currently, no transaction history is available.
        </div>
      )}
    </div>
  );
};

export default TransactionTable;
