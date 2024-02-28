'use client'
import useHistory from "@/hooks/useHistory";
import React, { useState, useEffect } from "react";

//Material Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const History = () => {
  const {data: history=[],     
    isPending,
    isLoading,
    refetch,} = useHistory(["history"]);

    const [bought, setBought]=useState([])
    const [sold, setSold]=useState([])
    useEffect(()=>{
      const findBought = history.filter(data=> data.action=="bought");
      
      const findSold = history.filter(data=> data.action=="sold");

      setBought(findBought);
      setSold(findSold);

    },[history])

    // console.log(bought,sold)
  return (
<div>

<div>
    <h1 className="text-xl font-bold text-white my-5">Buying History . . . .</h1>
    <hr/>
    {
      bought ? (
        <TableContainer >
        <div className=" bg-gradient-to-bl overflow-x-auto from-darkOne to-darkTwo  ">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            sx={{
                              color: "white",
                              borderBottom: "1px solid #2c3750",
                              fontWeight: "700",
                              fontSize: "1.25rem",
                            }}
                          >
                            Coin Name
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              borderBottom: "1px solid #2c3750",
                              fontWeight: "700",
                              fontSize: "1.25rem",
                            }}
                          >
                            Code
                          </TableCell>
                          <TableCell
                            sx={{
                              color: "white",
                              borderBottom: "1px solid #2c3750",
                              fontWeight: "700",
                              fontSize: "1.25rem",
                            }}
                          >
                            Buying Price
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bought.map((data) => (
                          <TableRow key={data._id}>
                            {/* 1st row */}
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                color: "white",
                                fontWeight: "700",
                                borderBottom: "1px solid #2c3750",
                              }}
                            >
                             {data.assetName}
                            </TableCell>
                            {/* 2nd row */}
                            <TableCell
                              component="th"
                              scope="row"
                              sx={{
                                color: "white",
                                borderBottom: "1px solid #2c3750",
                              }}
                            >
                              <h2 className="font-medium ">{data.assetKey}</h2>
                            </TableCell>
                            {/* 3rd row */}
                            <TableCell
                              sx={{
                                color: "green",
                                fontWeight: "700",
                                borderBottom: "1px solid #2c3750",
                              }}
                            >
                            {data.Price}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
        </TableContainer>
      ):
      (
        <h3 className="text-4xl text-center my-auto p-10 border-primary border-x-4 border-y-4 font-bold text-white">
        No Buying History
       </h3> 
      )
    }
   </div>
   <div>
    <h1 className="text-xl font-bold text-white my-5">Selling History . . . .</h1>
    <hr/>
  {
    sold ? (
      <TableContainer >
      <div className=" bg-gradient-to-bl overflow-x-auto from-darkOne to-darkTwo  ">
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            color: "white",
                            borderBottom: "1px solid #2c3750",
                            fontWeight: "700",
                            fontSize: "1.25rem",
                          }}
                        >
                          Coin Name
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            borderBottom: "1px solid #2c3750",
                            fontWeight: "700",
                            fontSize: "1.25rem",
                          }}
                        >
                          Code
                        </TableCell>
                        <TableCell
                          sx={{
                            color: "white",
                            borderBottom: "1px solid #2c3750",
                            fontWeight: "700",
                            fontSize: "1.25rem",
                          }}
                        >
                          Selling Price
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sold.map((data) => (
                        <TableRow key={data._id}>
                          {/* 1st row */}
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              color: "white",
                              fontWeight: "700",
                              borderBottom: "1px solid #2c3750",
                            }}
                          >
                           {data.assetName}
                          </TableCell>
                          {/* 2nd row */}
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{
                              color: "white",
                              borderBottom: "1px solid #2c3750",
                            }}
                          >
                            <h2 className="font-medium ">{data.assetKey}</h2>
                          </TableCell>
                          {/* 3rd row */}
                          <TableCell
                            sx={{
                              color: "red",
                              fontWeight: "700",
                              borderBottom: "1px solid #2c3750",
                            }}
                          >
                          {data.Price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
      </TableContainer>
    ) :
    (
      <h3 className="text-4xl text-center my-auto p-10 border-primary border-x-4 border-y-4 font-bold text-white">
      No Selling History
     </h3>
    )
  }

   </div>
</div>
  )
};

export default History;
