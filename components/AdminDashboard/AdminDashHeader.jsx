"use client";
// react icons
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCoinFill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import useAdminTotalInvestData from "@/hooks/useAdminTotalInvestdata";
import usePublicAPI from "@/hooks/usePublicAPI";
import { useEffect, useState } from "react";

const AdminDashHeader = () => {

  const [cryptoCoin, setCryptoCoin] = useState(0);
  const [flatCoin, setFlatCoin] = useState(0);
  const publicAPI = usePublicAPI();
  const {purchasedAssets,
    refetch,
    isLoading,
    isPending}= useAdminTotalInvestData();


    // Check if purchasedAssets is an array before using reduce in Total Investment
    const totalAssetInvestment = Array.isArray(purchasedAssets) && purchasedAssets.length > 0
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


  return (
    <div className=" grid xl:grid-cols-4 md:grid-cols-2 gap-4 text-black dark:text-white w-full">
     
     {/* investment */}
      <div className=" p-5 rounded-md flex items-center gap-3 bg-white dark:bg-tertiary dark:shadow-none shadow shadow-gray-200">
      <div className=' bg-primary text-white p-2 rounded-full'><GiTakeMyMoney size={30}/></div>
      <div>
          <p className='font-medium  text-primary'>All Investment</p>
          <h2 className=' text-2xl font-bold '>$ {totalAssetInvestment}</h2>
      </div>
      </div>
      {/* total crypto coin */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-white dark:bg-tertiary dark:shadow-none shadow shadow-gray-200">
      <div className=' bg-[#eb62d0] text-white p-2 rounded-full'><RiCoinFill size={30} /></div>
      <div>
          <p className='font-medium text-[#eb62d0]'>Total Crypto Coin</p>
          <h2 className=' text-2xl font-bold'>{cryptoCoin}</h2>
      </div>
      </div>
      
      {/* total flat coin */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-white dark:bg-tertiary dark:shadow-none shadow shadow-gray-200">
     <div className=' bg-[#9568ff] text-white p-2 rounded-full'><RiCoinFill size={30} /> </div>
      <div>
          <p className='font-medium text-[#9568ff]'>Total Flat Coin</p>
          <h2 className=' text-2xl font-bold'>{flatCoin}</h2>
      </div>
      </div>
      {/* total Post */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-white dark:bg-tertiary dark:shadow-none shadow shadow-gray-200">
      <div className=' bg-[#3aba69] text-white p-2 rounded-full'><MdPostAdd size={30} /></div>
      <div>
          <p className='font-medium text-[#3aba69]'>Total Post</p>
          <h2 className=' text-2xl font-bold '>18</h2>
      </div>
      </div>
      
    </div>
  );
};

export default AdminDashHeader;
