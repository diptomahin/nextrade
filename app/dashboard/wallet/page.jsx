"use client";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AddIcon from "@mui/icons-material/Add";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CardTravelOutlinedIcon from "@mui/icons-material/CardTravelOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";
import DepositForm from "@/components/dashboard-comp/wallet/DepositForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DashboardButton from "@/components/library/DashboardButton";
import React from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import axios from "axios";
import useAuth from "@/utils/useAuth";

const stripePromise = loadStripe(
  "pk_test_51OcLnwB6RMsoXbxVtHu6thbvRXkoM5hYmM60zlvPZu7kr6bdIyG1vZs6G1ZiJYtf0pT8pmRgu4GDlL0d7edJPAIW00iHrYjfqo"
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const staticRows = [
  {
    action: "Deposit",
    amount: 500,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -150,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  {
    action: "Deposit",
    amount: 1000,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -500,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  {
    action: "Deposit",
    amount: 200,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -750,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  {
    action: "Deposit",
    amount: 800,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -1000,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  {
    action: "Deposit",
    amount: 1000,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -500,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  {
    action: "Deposit",
    amount: 1300,
    dateTime: "2022-02-16 14:30",
    status: "Success",
  },
  {
    action: "Withdrawal",
    amount: -1050,
    dateTime: "2022-02-15 12:45",
    status: "Pending",
  },
  // Add more static rows as needed
];

const Wallet = () => {
  const [hidePrice, setHidePrice] = React.useState(false);
  const [userBalanceDetails, setUserBalanceDetails] = React.useState(null);
  const { user } = useAuth();

  React.useEffect(() => {
    axios
      .get(
        `https://nex-trade-server.vercel.app/v1/api/all-users/${user?.email}`
      )
      .then((res) => {
        setUserBalanceDetails(res.data[0]);
      });
  }, [user?.email]);
  return (
    <div className="flex justify-between gap-5 w-full p-3">
      <div className="w-9/12 flex flex-col gap-5">
        <div className="p-6 bg-white rounded-md">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Wallet</h1>
              <p className="text-sm opacity-70">Update 16/02/2022 at 02:30PM</p>
            </div>
            <div className="flex items-center gap-5">
              <DashboardButton>
                <BorderColorIcon className="w-5 h-5" /> Edit
              </DashboardButton>
              <DashboardButton>
                <AddIcon /> Add New Wallet
              </DashboardButton>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="flex items-center gap-10">
              {!hidePrice && (
                <div>
                  <p className="text-sm pb-2 opacity-70 flex items-center gap-3">
                    <CardTravelOutlinedIcon className="w-5 h-5" /> Wallet
                    Balance
                  </p>
                  <h1 className="text-3xl font-bold">
                    ${userBalanceDetails?.balance}
                  </h1>
                </div>
              )}
              <button
                onClick={() => setHidePrice(!hidePrice)}
                className="button-sm text-xs flex items-center gap-1 bg-secondary/40 px-2 py-1 rounded-full"
              >
                {hidePrice ? (
                  <span>
                    Show Price <VisibilityOutlined className=" w-4 h-4" />
                  </span>
                ) : (
                  <span>
                    Hide Price{" "}
                    <VisibilityOffOutlinedIcon className=" w-4 h-4" />
                  </span>
                )}
              </button>
            </div>
            <div className="bg-secondary/40 rounded-md p-3">
              <h6>
                <AddCardOutlinedIcon /> Total Deposited{" "}
                <span className="font-semibold ml-5">
                  <FileDownloadOutlinedIcon className=" text-green-600" />{" "}
                  $32,455.12
                </span>
              </h6>

              <h6 className="mt-4">
                <AvTimerOutlinedIcon /> Total Withdrawals{" "}
                <span className="font-semibold ml-10">
                  <FileUploadOutlinedIcon className=" text-red-600" /> $2,455.12
                </span>
              </h6>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="p-6 bg-white rounded-md">
          <div className="flex justify-between pb-10">
            <div>
              <h1 className="text-xl font-bold">Transaction History</h1>
            </div>
            <div>
              <Search
                className="mr-5 bg-black/10 rounded-full"
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0,0, 0, 0.15)",
                  },
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
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
                    Date/Time
                  </TableCell>
                  <TableCell align="right" className="font-semibold">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staticRows.map((row) => (
                  <TableRow
                    key={row.action}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <p>{row.action}</p>
                    </TableCell>
                    <TableCell align="right">
                      <p
                        className={`font-semibold ${
                          row.amount >= 0 ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {row.amount >= 0
                          ? `$${row.amount}`
                          : `-$${-row.amount}`}
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <p>{row.dateTime}</p>
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* Select Currency & Payment */}
      <div className="w-4/12 h-fit p-6 bg-white rounded-md">
        <h1 className="text-xl text-center font-bold">
          Select Currency & Payment
        </h1>
        <Elements stripe={stripePromise}>
          <DepositForm setUserBalanceDetails={setUserBalanceDetails} />
        </Elements>
      </div>
    </div>
  );
};

export default Wallet;
