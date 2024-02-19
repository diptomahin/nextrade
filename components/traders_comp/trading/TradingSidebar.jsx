import React from 'react';


//material
import Button from '@mui/material/Button';


//other imports
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import useSecureFetch from "@/hooks/useSecureFetch";
import useSecureAPI from "@/hooks/useSecureAPI";


const TradingSidebar = (params) => {

  const { user, loading } = useAuth();
  const {value, assets} = params
  const secureAPI = useSecureAPI();
  const {
    data: allUsers = [],
    isPending,
    isLoading,
    refetch,
  } = useSecureFetch(`/all-users/${user.email}`, ["all-users"]);

  const usersBalance = parseFloat(allUsers[0]?.balance).toFixed(2);
    
    // console.log(value, assets);

    const selectedAsset = assets.filter(asset => asset.key == value);
    // console.log(selectedAsset[0])


    //Buy coin
    const handleBuyCoin = (ast) => {
      const assetInfo = {
        assetName: ast.name,
        assetKey: ast.key,
        assetBuyingPrice: ast.price,
        assetBuyerUID: user.uid,
        assetBuyerEmail: user.email,
      };
      //calculate remaining balance after buying a coin
      const usersBalance = parseFloat(allUsers[0].balance).toFixed(2);
      const remainingBalance = usersBalance - parseFloat(ast.price).toFixed(2);
      if (usersBalance < parseFloat(ast.price)) {
        Swal.fire({
          title: `You Don't have enough balance!`,
          text: `Please deposit to your account`,
          icon: "error",
        });
        return;
      }
     else
     {
      secureAPI
      .post(`/spotTrading`, assetInfo)
      .then((res) => {
        console.log(res)
        if (res.data.insertedId) {
          Swal.fire({
            title: `${ast.name} Purchase successful!`,
            text: `Best of luck`,
            icon: "success",
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `Coin Purchase failed!`,
          text: `Please try again`,
          icon: "error",
        });
      });
     }
    };

    //handleSellCoin
    const handleSellCoin =(ast)=>{
      Swal.fire({
        title: `${ast.name} sold successful!`,
        text: `Best of luck`,
        icon: "success",
      });
    }
    return (
        <div className=" w-full md:w-1/3  p-5 rounded-lg border-x-4 border-y-4 border-primary">
            <h1 className="text-xl font-bold my-3">Trading Data For :  <span className="text-primary">{selectedAsset[0]?.name}</span></h1>
                {
                    selectedAsset[0] ? (
                        <div className="flex flex-col gap-2 text-lg font-semibold">
                              <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">{selectedAsset[0].name}</h3>
                              <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-primary">{selectedAsset[0].key}</h3>
                              <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">{selectedAsset[0].price}</h3>
                              <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-green-500">{selectedAsset[0].heighPrice}</h3>
                              <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-red-500">{selectedAsset[0].lowPrice}</h3>
                              <div className="flex gap-3 mt-2">
                              <Button  variant="contained" onClick={()=>handleBuyCoin(selectedAsset[0])}>Buy</Button>
                              <Button variant="contained" onClick={()=>handleSellCoin(selectedAsset[0])}>Sell</Button>
                              </div>
                        </div> )
                        :
                    <div className="flex flex-col gap-2 text-lg font-semibold">
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Asset Name</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-primary">Asset Key</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-green-500">High Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-red-500">Low Price</h3>
                        <div>
                              
                        </div>
                  </div>  
                }
        </div>
    );
};

export default TradingSidebar;