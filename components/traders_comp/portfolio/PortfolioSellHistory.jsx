import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import * as MuiIcons from "@mui/icons-material";
import emptyIcon from "../../../assets/emptyIcon.png";
import usePortfolioSellHistory from "@/hooks/usePortfolioSellHistory";

const PortfolioSellHistory = () => {
  const { profitLossData, refetch, isLoading, isPending } =
    usePortfolioSellHistory();
  return (
    <div className="w-full bg-white mt-4 dark:bg-tertiary flex flex-col gap-5 font-semibold p-5 rounded-xl shadow">
      <div className="flex items-center justify-between  border-b pb-2 dark:border-b-darkThree">
        <h3 className="text-xl font-semibold">Latest 5 Sell Coin History</h3>
      </div>
      {profitLossData.length > 0 ? (
        <TableContainer
          sx={{
            boxShadow: "none",
            padding: "0px",
            background: "none",
          }}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                  Coin Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                  Profit
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    paddingX: "0px",
                    paddingY: "5px",
                    fontWeight: 500,
                    border: "none",
                  }}
                  className="text-black dark:text-white"
                >
                   Loss
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profitLossData.slice(0, 5).map((asset, index) => (
                <TableRow key={index}>
                  {/* 1st row */}
                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <div className="flex items-center gap-2">
                      <Image
                        width={30}
                        height={30}
                        src={asset.sellCoinImg}
                        alt="coin-icon"
                      />
                      <p className={`text-xs dark:text-white`}>
                        {asset.sellCoinName}
                      </p>
                    </div>
                  </TableCell>

                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <h2 className="font-medium text-xs text-green-500">
                      ${parseFloat(asset.sellCoinProfit).toFixed(2)}
                      <MuiIcons.ArrowDropUpSharp className="text-green-700" />
                    </h2>
                  </TableCell>
                  <TableCell sx={{ border: "none", paddingX: "0px" }}>
                    <h2 className="font-medium text-xs text-red-500">
                      ${parseFloat(asset.sellCoinLoss).toFixed(2)}
                      <MuiIcons.ArrowDropDownSharp className="text-red-700" />
                    </h2>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 py-24">
          <Image src={emptyIcon} width={70} height={70} alt=" Logo" />
          <h3 className="text-primary text-lg font-semibold text-center">
            No data available !!!
          </h3>
        </div>
      )}
    </div>
  );
};

export default PortfolioSellHistory;
