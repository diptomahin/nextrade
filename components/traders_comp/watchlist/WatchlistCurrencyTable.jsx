"use client"
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DashboardButton from "@/components/library/buttons/DashButton";
import Magnetic from '@/components/library/Magnetic';
import Swal from 'sweetalert2';
import useSecureAPI from '@/hooks/useSecureAPI';

const WatchlistCurrencyTable = ({ assets, refetch }) => {

  const secureAPI = useSecureAPI();

  const handleDelete = (id) => {
    // console.log(id)
    secureAPI.delete(`/watchlist/${id}`)
      .then(res => {
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Coin has been deleted successfully.",
            icon: "success",
            timer: 1500
          });
          refetch()
        }
      })
      .catch(err => {
        Swal.fire({
          title: "Failed!",
          text: "Something went wrong.",
          icon: "error",
          timer: 1500
        });
      })
  };
  return (
    <TableContainer
      sx={{
        borderRadius: "0.75rem",
        boxShadow: "none",
      }}
      className='bg-gradient-to-bl from-darkOne to-darkTwo '
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead className="mx-auto">
          <TableRow className="text-center">
            <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>No.</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Code</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Current Value/USD</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "white", borderBottom: "1px solid #2c3750" }}>Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((asset, idx) => (
            <TableRow
              key={asset.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }} component="th" scope="row">
                <p className="text-white">{idx + 1}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <div className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={asset.icon}
                    alt="coin-icon"
                  />
                  <p className={`text-white`}>{asset.name}</p>
                  <span className="bg-sky-100/15 px-1 py-[2px] rounded text-primary text-xs">{asset.key}</span>
                </div>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <p className={`text-white`}>{asset.key}</p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750" }}>
                <p className={` text-white`}>{asset.price}<span className="text-[8px]">  {asset.key}</span></p>
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #2c3750", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px" }}>
                <DashboardButton
                  className="font-semibold normal-case"
                >
                  <Link href={`/dashboard/market/${asset.key}`}>
                    Explore
                  </Link>

                </DashboardButton>
                <Magnetic>
                  <Button color="error" variant='contained' sx={{ borderRadius: "50px", paddingY: "10px" }} onClick={() => handleDelete(asset._id)}>Delete</Button>
                </Magnetic>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WatchlistCurrencyTable;