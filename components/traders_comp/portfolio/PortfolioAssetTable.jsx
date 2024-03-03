import * as MuiIcons from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";
const PortfolioAssetTable = ({cryptoData,calculateDifference,purchasedRefetch}) => {
  purchasedRefetch()
     return (
          <div className=" overflow-x-auto text-white dark:text-black">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
                    >
                      Coin
                    </TableCell>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
                    >
                      Asset Name
                    </TableCell>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
                    >
                      Buying Price
                    </TableCell>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
                    >
                      Investment
                    </TableCell>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
                    >
                      Current Price
                    </TableCell>
                    <TableCell
                      sx={{
                        
                        borderBottom: "1px solid #2c3750",
                        fontWeight: "600",
                      }}
                      className=" dark:text-white"
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
                          
                          borderBottom: "1px solid #2c3750",
                        }}
                        className=" dark:text-white"
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
                          
                          borderBottom: "1px solid #2c3750",
                        }}
                        className=" dark:text-white"
                      >
                        
                        <h2 className="font-medium ">{asset.assetName}</h2>
                      </TableCell>
                      {/* 3rd row */}
                      <TableCell
                        sx={{
                          
                          borderBottom: "1px solid #2c3750",
                        }}
                        className=" dark:text-white"
                      >
                        
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.assetBuyingPrice).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 4th row */}
                      <TableCell
                        sx={{
                          
                          borderBottom: "1px solid #2c3750",
                        }}
                        className=" dark:text-white"
                      >
                        
                        <h2 className="font-medium ">
                          $ {parseFloat(asset.totalInvestment).toFixed(2)}
                        </h2>
                      </TableCell>
                      {/* 5th row */}
                      <TableCell
                        className="font-medium"
                        sx={{
                          
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
              
            </div>
     );
};

export default PortfolioAssetTable;