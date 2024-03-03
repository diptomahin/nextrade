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
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import DarkButton from "@/components/library/buttons/DarkButton";
import "./market.css";

const MarketTable = ({ assets }) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        bgcolor: "transparent",
      }}
      className=" border-none"
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto ">
          <TableRow className="text-center">
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
            <p className="dark:text-white">No.</p>
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">Coin Name</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">Current Price</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">24%</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">24h High Price</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">24h Low Price</p> 
            </TableCell>
            <TableCell
              sx={{
                fontWeight: 700,
                borderBottom: "2px solid #a1a1aa",
                borderTop: "2px solid #a1a1aa",
              }}
            >
             <p className="dark:text-white">Option</p> 
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
                <p className="dark:text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`font-semibold dark:text-white`}>{asset.name}</p>
                  <span className="bg-primary/40 dark:bg-sky-100/10 px-1 py-[2px] rounded text-black dark:text-primary text-xs">
                    {asset.key.slice(0, -4)}
                  </span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p className={` font-semibold dark:text-white`}>
                  $ {parseFloat(asset.price).toFixed(2)}
                </p>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <p
                  className={` font-semibold ${asset.changePrice < 0
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
                <DarkButton className="font-medium normal-case h-8 2xl:text-sm bg-primary hover:bg-primary border-none text-white">
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
