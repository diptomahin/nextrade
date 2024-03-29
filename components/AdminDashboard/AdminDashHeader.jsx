"use client";
// react icons
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCoinFill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import useAdminTotalInvestData from "@/hooks/useAdminTotalInvestdata";
import usePublicAPI from "@/hooks/usePublicAPI";
import { useEffect, useState } from "react";
import useArticleData from "@/hooks/useArticleData";

const AdminDashHeader = () => {
  const [cryptoCoin, setCryptoCoin] = useState(0);
  const [flatCoin, setFlatCoin] = useState(0);
  const publicAPI = usePublicAPI();
  const { purchasedAssets, refetch, isLoading, isPending } =
    useAdminTotalInvestData();

  // articles data
  const { articles, refetch: articleRefetch } = useArticleData();

  // Check if purchasedAssets is an array before using reduce in Total Investment
  const totalAssetInvestment =
    Array.isArray(purchasedAssets) && purchasedAssets.length > 0
      ? purchasedAssets.reduce(
          (total, asset) => total + parseFloat(asset.totalInvestment),
          0
        )
      : 0;

  // total asset
  useEffect(() => {
    publicAPI
      .get("/totalCryptoCount")
      .then((res) => setCryptoCoin(res.data.count))
      .catch((error) => console.log(error));
  }, [publicAPI]);

  useEffect(() => {
    publicAPI
      .get("/totalFlatCount")
      .then((res) => setFlatCoin(res.data.count))
      .catch((error) => console.log(error));
  }, [publicAPI]);

  // const numberOfCryptoPages = cryptoCoin + flatCoin;

  refetch();
  articleRefetch();

  return (
    <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-7 text-zinc-950 dark:text-zinc-100 w-full">
      {/* investment */}
      <div className="flex items-center gap-3 bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
        <div className=" bg-primary text-white p-2 rounded-full">
          <GiTakeMyMoney size={30} />
        </div>
        <div>
          <p className="font-medium  text-primary">All Investment</p>
          <h2 className=" text-2xl font-bold ">$ {totalAssetInvestment}</h2>
        </div>
      </div>
      {/* total crypto coin */}
      <div className="flex items-center gap-3 bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
        <div className=" bg-[#eb62d0] text-white p-2 rounded-full">
          <RiCoinFill size={30} />
        </div>
        <div>
          <p className="font-medium text-[#eb62d0]">Total Crypto Coin</p>
          <h2 className=" text-2xl font-bold">{cryptoCoin}</h2>
        </div>
      </div>

      {/* total flat coin */}
      <div className="flex items-center gap-3 bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
        <div className=" bg-[#9568ff] text-white p-2 rounded-full">
          <RiCoinFill size={30} />{" "}
        </div>
        <div>
          <p className="font-medium text-[#9568ff]">Total Flat Coin</p>
          <h2 className=" text-2xl font-bold">{flatCoin}</h2>
        </div>
      </div>
      {/* total Post */}
      <div className="flex items-center gap-3 bg-white dark:bg-quaternary rounded-xl shadow-md dark:shadow-xl p-5">
        <div className=" bg-[#3aba69] text-white p-2 rounded-full">
          <MdPostAdd size={30} />
        </div>
        <div>
          <p className="font-medium text-[#3aba69]">Total Post</p>
          <h2 className=" text-2xl font-bold ">{articles.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashHeader;
