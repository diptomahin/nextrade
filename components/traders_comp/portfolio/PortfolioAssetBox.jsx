import Image from "next/image";
import Link from "next/link";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

import "./Portfolio.css";
import { Skeleton } from "@mui/material";

const PortfolioAssetBox = ({
  cryptoData,
  loading,
  pending,
  calculateDifference,
  purchasedRefetch
}) => {
  purchasedRefetch()
  if (loading || pending) {
    return (
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-8">
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750"}}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750" }}
          animation="wave"
          variant="rectangular"
        />
        <Skeleton
          sx={{ height: 190, borderRadius: "40px",backgroundColor: "#2c3750" }}
          animation="wave"
          variant="rectangular"
        />
      </div>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-8">
        {cryptoData?.map((asset, idx) => (
          <Link key={idx} href={`/dashboard/market/${asset.assetKey}`}>
            <div className="rounded-[30px] coinBg border border-[#dddde0] dark:border-none  bg-[#f4f4f5] dark:bg-[#17171e] p-6 space-y-4 hover:scale-105 transition-transform cursor-pointer ease-in">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Image
                    width={40}
                    height={40}
                    src={asset.assetImg}
                    alt="coin-icon"
                  />
                  <span className="bg-sky-100/10 px-1 py-[2px] rounded text-primary text-xs">
                    {asset.assetKey.slice(0, -4)}
                  </span>
                </div>
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
                    <TrendingUpIcon className="text-green-700 ml-1" />
                  ) : (
                    <TrendingDownIcon className="text-red-700 ml-1" />
                  )}
                </span>
              </div>
              <div className=" flex justify-between items-center ">
                <h3 className="text-xl font-semibold">{asset.assetName}</h3>
                <p className="text-xs">
                  Buying <br />{" "}
                  <span className="text-green-700 font-semibold">
                    {" "}
                    $ {parseFloat(asset.assetBuyingPrice).toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="text-xs flex justify-between items-center gap-4">
                <p>
                  Investment <br />{" "}
                  <span className="text-green-700 font-semibold">
                    ${asset.totalInvestment}
                  </span>
                </p>

                <p>
                  Current <br />{" "}
                  <span className="text-green-500 font-semibold">
                    ${asset.currentPrice}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
     
    </>
  );
};

export default PortfolioAssetBox;
