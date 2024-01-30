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
import DepositForm from "@/components/traders_comp/wallet/DepositForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import DashboardButton from "@/components/library/buttons/DashButton";
import DashButton from "@/components/library/buttons/DashButton";

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

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const date = `${day}-${month}-${year}`;
const time = `${hour}:${minute}`;

const Wallet = () => {
  const [hidePrice, setHidePrice] = React.useState(false);
  const [userBalanceDetails, setUserBalanceDetails] = React.useState({});
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

  const totalDepositAmount = userBalanceDetails?.depositWithdrawData?.reduce(
    (accumulator, entry) => accumulator + entry.deposit,
    0
  );

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8 w-full">
      <div className="xl:w-9/12 flex flex-col gap-8">
        <div className="p-4 xl:p-6 bg-white rounded-md">
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-6">
            <div>
              <h1 className="text-xl font-bold">Wallet</h1>
              <p className="text-sm opacity-70">
                Update {date} at {time} PM
              </p>
            </div>
            <div className="flex items-center gap-5">
              <DashButton>
                <BorderColorIcon className="w-5 h-5" /> Edit
              </DashButton>
              <DashButton>
                <AddIcon /> Add New Wallet
              </DashButton>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-between gap-6 mt-10">
            <div className="flex items-center gap-10">
              {!hidePrice && (
                <div>
                  <p className="text-sm pb-2 opacity-70 flex items-center gap-3">
                    <CardTravelOutlinedIcon className="w-5 h-5" /> Wallet
                    Balance
                  </p>
                  <h1 className="text-3xl font-bold">
                    ${parseFloat(userBalanceDetails.balance).toFixed(2) || 0}
                  </h1>
                </div>
              )}
              <button
                onClick={() => setHidePrice(!hidePrice)}
                className="button-sm text-xs flex items-center gap-1 bg-black/5 px-2 py-1 rounded-full"
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
            <div className="bg-black/5 rounded-md p-3">
              <h6>
                <AddCardOutlinedIcon /> Total Deposited{" "}
                <span className="font-semibold ml-5">
                  <FileDownloadOutlinedIcon className=" text-green-600" />$
                  {parseFloat(userBalanceDetails.balance).toFixed(2) || 0}
                </span>
              </h6>

              <h6 className="mt-4">
                <AvTimerOutlinedIcon /> Total Withdrawals{" "}
                <span className="font-semibold ml-10">
                  <FileUploadOutlinedIcon className=" text-red-600" /> $0
                </span>
              </h6>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="p-4 xl:p-6 bg-white rounded-md">
          <div className="flex flex-col xl:flex-row justify-between pb-10 gap-6">
            <h1 className="text-xl font-bold">Transaction History</h1>
            <div>
              <Search
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0,0, 0, 0.1)",
                  },
                  backgroundColor: "rgba(0,0, 0, 0.05)",
                  borderRadius: "50px",
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
                    Date
                  </TableCell>
                  <TableCell align="right" className="font-semibold">
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userBalanceDetails?.depositWithdrawData?.map((row, index) => (
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
      </div>

      {/* Select Currency & Payment */}
      <div className="xl:w-5/12 2xl:w-4/12 h-fit p-4 xl:p-6 bg-white rounded-md">
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
