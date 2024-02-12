import React from 'react';


//material
import Button from '@mui/material/Button';

// buy
const handleBuyCurrency = (ast) => {
    const assetInfo = {
      assetName: currencyName,
      assetKey: coinKey,
      assetImg: coinImage,
      assetBuyingPrice: ast,
      assetQuantity: quantity,
      assetBuyerUID: user.uid,
      assetBuyerEmail: user.email,
    };

    const totalCost = parseFloat(ast) * parseFloat(quantity)
    const usersBalance = usersRemainingBalance
    const remainingBalance = usersBalance - totalCost.toFixed(2);



    if (usersBalance < parseFloat(ast.c)) {
      Swal.fire({
        title: `You Don't have enough balance!`,
        text: `Please deposit to your account`,
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: `Are you sure to purchase ${quantity} ${currencyName}?`,
      text: `It will cost $${totalCost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        secureAPI
          .post(`/purchasedAssets/${remainingBalance}`, assetInfo)
          .then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: `Coin Purchase successful!`,
                text: `Best of luck`,
                icon: "success",
                timer: 1500
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
    });

  };

const TradingSidebar = (params) => {
    const {value, assets} = params
    // console.log(value, assets);

    const selectedAsset = assets.filter(asset => asset.key == value);
    // console.log(selectedAsset[0])
    return (
        <div className="w-1/3 p-5 rounded-lg border-x-4 border-y-4 border-primary">
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
                              <Button  variant="contained">Buy</Button>
                              <Button variant="contained">Sell</Button>
                              </div>
                        </div> )
                        :
                    <div className="flex flex-col gap-2 text-lg font-semibold">
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Asset Name</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-primary">Asset Key</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-green-500">High Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-red-500">Low Price</h3>
                        <div classname="flex gap-3">
                              <Button variant="contained">Buy</Button>
                              <Button variant="contained">Sell</Button>
                        </div>
                  </div>  
                }
        </div>
    );
};

export default TradingSidebar;