"use client";
import DarkButton from "@/components/library/Button";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const WatchlistCryptoTable = ({ assets, handleDelete }) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        padding: "none",
        background: "none",
      }}
      className=" border-none"
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto ">
          <TableRow className="text-center">
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Sl No.
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Coin Name
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Current Price
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              24%
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              24h High Price
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              24h Low Price
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Option
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow key={asset.name}>
              <TableCell
                className="text-black dark:text-white dark:border-b-darkThree"
                component="th"
                scope="row"
              >
                <p className="dark:text-white">{idx + 1}</p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`font-medium dark:text-white`}>{asset.name}</p>
                  <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">
                    {asset.key.slice(0, -4)}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p>$ {parseFloat(asset.price).toFixed(2)}</p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p
                  className={` font-medium ${
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
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p className={` font-medium text-green-700`}>
                  $ {asset.highPrice}
                </p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p className={` font-medium text-red-600`}>
                  $ {asset.lowPrice}
                </p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree ">
                <DarkButton className="font-medium normal-case h-8 2xl:text-sm bg-primary hover:bg-primary border-none text-white">
                  <Link href={`/dashboard/market/${asset.key}`}>Explore</Link>
                </DarkButton>
                <DarkButton
                  className="font-medium normal-case h-8 2xl:text-sm bg-septenary hover:bg-septenary border-none text-white ml-3"
                  onClick={() => handleDelete(asset._id)}
                >
                  Delete
                </DarkButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WatchlistCryptoTable;
