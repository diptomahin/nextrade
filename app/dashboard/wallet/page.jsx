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
import Button from "@/components/library/Button/Button";
import DepositForm from "@/components/dashboard-comp/wallet/DepositForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OcLnwB6RMsoXbxVtHu6thbvRXkoM5hYmM60zlvPZu7kr6bdIyG1vZs6G1ZiJYtf0pT8pmRgu4GDlL0d7edJPAIW00iHrYjfqo"
);

// Table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  return (
    <div className="flex justify-between gap-5 w-full p-2 ">
      <div className="w-9/12 flex flex-col gap-5">
        <div className="p-4 bg-[#E6E9F2] border rounded-lg">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-bold">Wallet</h1>
              <p className="text-sm">Update 16/02/2022 at 02:30PM</p>
            </div>
            <div>
              <button>
                {" "}
                <BorderColorIcon className=" text-gryPbg-grayPrimary" /> Edit
              </button>
              <button className="ml-5">
                {" "}
                <AddIcon className=" text-gryPbg-grayPrimary" /> Add New Wallet
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <p className="text-sm pb-2">
                <CardTravelOutlinedIcon className=" text-gray-500" /> Wallet
                Balance
              </p>
              <div className="flex gap-5 justify-center">
                <h1 className="text-3xl font-bold">$30,455.00</h1>
                <button className="button-sm">
                  Edit{" "}
                  <VisibilityOffOutlinedIcon className=" text-gryPbg-grayPrimary" />
                </button>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-2">
              <h6>
                <AddCardOutlinedIcon className=" text-gray-500" /> Total
                Deposited{" "}
                <span className="text-xl font-semibold ml-5">
                  <FileDownloadOutlinedIcon className=" text-green-600" />{" "}
                  $32,455.12
                </span>
              </h6>

              <h6>
                <AvTimerOutlinedIcon className=" text-gray-500" /> Total
                Withdrawals{" "}
                <span className="text-xl font-semibold ml-5">
                  <FileUploadOutlinedIcon className=" text-red-600" /> $2,455.12
                </span>
              </h6>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="border p-4 bg-[#E6E9F2] rounded-lg">
          <div className="flex justify-between pb-10">
            <div>
              <h1 className="text-xl font-bold">Transaction History</h1>
            </div>
            <div>
              <Search className="mr-5">
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-primary">
                <TableRow>
                  <TableCell sx={{ color: "white" }} className=" font-semibold">
                    Action
                  </TableCell>
                  <TableCell
                    sx={{ color: "white" }}
                    align="right"
                    className="font-semibold"
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    sx={{ color: "white" }}
                    align="right"
                    className="font-semibold"
                  >
                    Date/Time
                  </TableCell>
                  <TableCell
                    sx={{ color: "white" }}
                    align="right"
                    className="font-semibold"
                  >
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
      <div className="w-4/12 h-fit border p-6 bg-[#E6E9F2] rounded-lg">
        <h1 className="text-xl text-center font-bold">
          Select Currency & Payment
        </h1>
        <Elements stripe={stripePromise}>
          <DepositForm />
        </Elements>
      </div>
    </div>
  );
};

export default Wallet;
