"use client";
import usePublicAPI from "@/hooks/usePublicAPI";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./AdminManageCoin.css";
const AdminDashManageCoin = () => {
  const [cryptoCoin, setCryptoCoin] = useState(0);

  const publicAPI = usePublicAPI();

  // total asset
  useEffect(() => {
    publicAPI
      .get("/manageAllCryptoCoins")
      .then((res) => {
        console.log("CryptoCoin response:", res.data); // Add this line
        setCryptoCoin(res.data);
      })
      .catch((error) => console.log(error));
  }, [publicAPI]);

  console.log(cryptoCoin);

  return (
    <div className="  p-4 mt-5 w-full rounded text-black dark:text-white shadow bg-white dark:bg-tertiary">
      <h2 className="font-semibold ">Manage Coin</h2>
      <div className=" grid grid-cols-3 gap-4 mt-4">
        {cryptoCoin ? (
          cryptoCoin.slice(0, 6).map((asset, idx) => (
            // Your map logic here
            <div
              key={idx}
              className="coinBg shadow rounded-lg p-6 space-y-4  relative bg-sky-200/30 dark:bg-darkOne dark:border  dark:border-darkThree dark:text-white"
            >
              <p className="absolute top-4 left-4">{idx + 1}.</p>
              <div>
                <Image
                  width={40}
                  height={40}
                  src={asset.icon}
                  alt="coin-icon"
                  className="mx-auto"
                />
                <p className="text-center text-lg font-semibold mt-3">
                  {asset.name}
                </p>
              </div>
              <p className="flex justify-between items-center font-semibold">
                Price: ${parseFloat(asset.price).toFixed(2)}
                <span
                  className={`${
                    asset.changePrice < 0 ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {asset.changePrice}%
                </span>
              </p>
              <div className="flex justify-between items-center">
                <p>
                  24h High:{" "}
                  <span className="text-green-700 font-semibold">
                    ${parseFloat(asset.highPrice).toFixed(2)}
                  </span>
                </p>
                {/* <IconButton
              aria-label="delete"
              onClick={() => handleClickOpen(asset)}
            >
              <EditIcon className="text-gray-500" />
            </IconButton> */}
              </div>
              <div className="flex justify-between items-center">
                <p>
                  24h Low:{" "}
                  <span className="text-red-700 font-semibold">
                    ${parseFloat(asset.lowPrice).toFixed(2)}
                  </span>
                </p>
                {/* <IconButton
              aria-label="delete"
              onClick={() => handleDelete(asset._id)}
            >
              <DeleteIcon className="text-gray-500" />
            </IconButton> */}
              </div>
            </div>
          ))
        ) : (
          <>
            <h2 className=" text-center font-semibold my-5">Data Not Found</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashManageCoin;
