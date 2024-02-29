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
import Link from "next/link";
import React from "react";
import DashboardButton from "@/components/library/buttons/DashButton";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DarkButton from "@/components/library/buttons/DarkButton";

const MarketTable = ({ assets }) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
      }}
      className="bg-gradient-to-bl from-darkOne to-darkTwo border-none "
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto ">
          <TableRow className="text-center">
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              No.
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Coin Name
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Current Price
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              24%
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              24h High Price
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              24h Low Price
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                color: "white",
                borderBottom: "2px solid #2c3750",
                borderTop: "2px solid #2c3750",
              }}
            >
              Option
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow key={asset.name}>
              <TableCell
                sx={{ borderBottom: "none" }}
                component="th"
                scope="row"
              >
                <p className="text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`font-semibold text-white`}>{asset.name}</p>
                  <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">
                    {asset.key.slice(0, -4)}
                  </span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` font-semibold text-white`}>
                  $ {parseFloat(asset.price).toFixed(2)}
                </p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p
                  className={` font-semibold ${
                    asset.changePrice < 0
                      ? "text-red-600"
                      : asset.changePrice > 0
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  {asset.changePrice}%{" "}
                  {asset.changePrice < 0 ? (
                    <TrendingDownIcon />
                  ) : (
                    <TrendingUpIcon />
                  )}
                </p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` font-semibold text-green-700`}>
                  $ {asset.highPrice}
                </p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` font-semibold text-red-600`}>
                  $ {asset.lowPrice}
                </p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <DarkButton className="font-medium normal-case h-8 2xl:text-sm">
                  <Link href={`/dashboard/market/${asset.key}`}>Explore</Link>
                </DarkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MarketTable;
