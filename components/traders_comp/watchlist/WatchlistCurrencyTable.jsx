"use client";
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
import Link from "next/link";
import React from "react";
import DarkButton from "@/components/library/Button";

const WatchlistCurrencyTable = ({ assets, handleDelete }) => {
  return (
    <TableContainer
      sx={{
        boxShadow: "none",
        padding: "none",
        background: "none",
      }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto">
          <TableRow className="text-center">
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Sl No.
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Name
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Code
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Current Value/USD
            </TableCell>
            <TableCell className="text-black dark:text-white dark:border-b-darkThree">
              Option
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow
              key={asset.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                className="text-black dark:text-white dark:border-b-darkThree"
                component="th"
                scope="row"
              >
                <p>{idx + 1}</p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p>{asset.name}</p>
                  <span className="bg-sky-100/15 px-1 py-[2px] rounded text-primary text-xs">
                    {asset.key}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p>{asset.key}</p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
                <p>
                  {asset.price}
                  <span className="text-[8px]"> {asset.key}</span>
                </p>
              </TableCell>
              <TableCell className="text-black dark:text-white dark:border-b-darkThree">
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

export default WatchlistCurrencyTable;
