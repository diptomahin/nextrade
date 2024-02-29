import * as MuiIcons from "@mui/icons-material";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
const PortfolioAssetTable = ({cryptoData,calculateDifference,setCurrentPage}) => {
     return (
          <div className=" bg-gradient-to-bl overflow-x-auto from-darkOne to-darkTwo  ">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Coin
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Asset Name
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Buying Price
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Investment
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Current Price
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                    >
                      Profit / Loss
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cryptoData.map((asset, index) => (
                    <TableRow key={index}>
                      {/* 1st row */}
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <Image
                          height={45}
                          width={45}
                          src={asset.assetImg}
                          alt="coin logo"
                        ></Image>
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
                        <h2 className="font-medium ">{asset.assetName}</h2>
                      </TableCell>
                      {/* 3rd row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.assetBuyingPrice).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 4th row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.totalInvestment).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 5th row */}
                      <TableCell
                        className="font-medium"
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <span
                          className={`${
                            asset.currentPrice <
                            parseFloat(asset.assetBuyingPrice)
                              ? "text-red-700"
                              : "text-green-700"
                          }`}
                        >
                          ${parseFloat(asset.currentPrice).toFixed(2)}
                        </span>
                        {asset.currentPrice >
                        parseFloat(asset.assetBuyingPrice) ? (
                          <MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" />
                        ) : (
                          <MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" />
                        )}
                      </TableCell>
                      {/* 6th row */}
                      <TableCell
                        sx={{
                          color: "white",
                          borderBottom: "1px solid #2c3750",
                        }}
                      >
                        <span
                          className={`font-medium ${
                            calculateDifference(
                              asset.currentPrice,
                              parseFloat(asset.assetBuyingPrice),
                              asset.assetPortion
                            ).toFixed(2) > 0
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          $
                          {calculateDifference(
                            asset.currentPrice,
                            parseFloat(asset.assetBuyingPrice),
                            asset.assetPortion
                          ).toFixed(2)}
                          {calculateDifference(
                            asset.currentPrice,
                            parseFloat(asset.assetBuyingPrice),
                            asset.assetPortion
                          ).toFixed(2) > 0 ? (
                            <MuiIcons.ArrowDropUpSharp className="text-green-700 ml-1" />
                          ) : (
                            <MuiIcons.ArrowDropDownSharp className="text-red-700 ml-1" />
                          )}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {/* Pagination */}
              <div className="my-6 flex justify-center flex-wrap">
                        <Pagination
                            color="primary" sx={{
                                '& .MuiPaginationItem-page': { color: 'white', marginY: "5px" },
                                '& .MuiPaginationItem-icon': {
                                    color: 'white', // Change arrow color
                                }
                            }}
                            count={cryptoData.length}
                            onChange={(event, v) => setCurrentPage(parseInt(v) - 1)}
                            variant="outlined"
                            shape="rounded"
                        />
                    </div>
            </div>
     );
};

export default PortfolioAssetTable;