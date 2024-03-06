"use client"
// Import necessary components and hooks
import React, { useState, useEffect } from "react";
import HistoryCard from "@/components/traders_comp/history/HistoryCard";
import MarketHistory from "@/components/traders_comp/history/MarketHistory";
import useInvestmentHistory from "@/hooks/useInvestmentHistory";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const CustomTab = styled(Tab)({
  color: '#a1a1aa',
  fontWeight: 'bold',
  '&.Mui-selected': {
    backgroundColor: "#40a0ff",
    color: 'white',
    borderRadius: "10px 10px 0px 0px",
  },
});

const AllHistory = () => {
  const [value, setValue] = useState("1");
  const [isOpenDot, setIsOpenDot] = useState(false);

  const {
    investmentHistoryData,
    investmentHistoryLoading,
    investmentHistoryPending,
    investmentHistoryError,
  } = useInvestmentHistory();

  // State variables for storing filtered history data
  const [bought, setBought] = useState([]);
  const [sold, setSold] = useState([]);

  // Effect to filter bought and sold history data when 'history' changes
  useEffect(() => {
    const findBought = investmentHistoryData.filter((data) => data.action === "bought");
    const findSold = investmentHistoryData.filter((data) => data.action === "sold");

    // Update state variables with filtered data
    setBought(findBought);
    setSold(findSold);
  }, [investmentHistoryData]);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Render the component
  return (
    <div className="p-5 bg-white dark:bg-tertiary rounded-xl shadow">
      <div className="flex flex-col 2xl:flex-row items-center justify-between pb-10 gap-6">
        <h1 className="text-xl font-bold">All History</h1>

        <div className="flex items-center gap-1">
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
                  // onClick={() =>handleDeleteAll()}
                  className="whitespace-nowrap w-full btn btn-sm text-sm dark:text-white/80 justify-start bg-transparent hover:bg-septenary hover:text-white/80 border-none rounded-none pl-4 shadow-none"
                >
                  Delete all history
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "#2c3750",
            marginBottom: "20px",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <CustomTab
              label="Investment History"
              sx={{ px: { xs: 1.5, md: 3 }, py: { xs: 0, md: 0 } }}
              value="1"
            />
            <CustomTab
              label="Trading History"
              sx={{ px: { xs: 1.5, md: 3 }, py: { xs: 0, md: 0 } }}
              value="2"
            />
          </TabList>
        </Box>

        {/* all users */}
        <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
          {investmentHistoryData.length !== 0 ? (
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
                      NO.
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                      className="text-black dark:text-white dark:border-b-darkThree"
                    >
                      Date/Time
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: "500",
                        fontSize: "17px",
                      }}
                      className="text-black dark:text-white dark:border-b-darkThree"
                    >
                      Details
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
                  {investmentHistoryData?.map((history, index) => (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        className="text-black dark:text-white dark:border-b-darkThree"
                      >
                        {parseFloat(index) + 1}
                      </TableCell>
                      <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                        <div className="flex gap-4"> 
                          {/* Date */}
                        <span>
                          {history?.date?.day || " "}-{history?.date?.month || " "}-
                          {history?.date?.year || " "}
                        </span>
                        {/* Time */}
                        <span>
                          {formatTime(history?.date?.hours || " ")}:
                          {padZero(history?.date?.minutes || " ")}{" "}
                          {getAmPm(history?.date?.hours || " ")}
                        </span>
                        </div>

                      </TableCell>
                      <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                        {history.detail}
                      </TableCell>

                      <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                        <button
                          // onClick={() => handleDelete(history._id)}
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
              Currently, no investment history is available.
            </div>
          )}
        </TabPanel>

        <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">

        </TabPanel>

      </TabContext>
    </div>

  );
};

// Export the component
export default AllHistory;
