import React from 'react';


//material
import Button from '@mui/material/Button';


//other imports
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import useSecureFetch from "@/hooks/useSecureFetch";
import useSecureAPI from "@/hooks/useSecureAPI";
import useTrading from '@/hooks/useTrading';


const TradingSidebar = (params) => {

  const { user, loading } = useAuth();
  const {value, assets, trader} = params
  const {data: trading=[],     
    isPending,
    isLoading,
    refetch,} = useTrading(["trading"]);

  const secureAPI = useSecureAPI();
  
  const usersBalance = parseFloat(trader.balance).toFixed(2);

  const selectedAsset = assets.filter(asset => asset.key == value);
  
  //sorting data for buy function
  const availableAssets = trading.filter(asset => asset.assetKey == value)
  // console.log(trading)
  // console.log(availableAssets)
  
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
      const usersBalance = parseFloat(trader.balance).toFixed(2);
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
        // console.log(res)
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
      // secureAPI
      // .put(`/all-users`, )
      // .then((res) => {
      //   console.log(res)
      //   if (res.data.insertedId) {
      //     Swal.fire({
      //       title: `${ast.name} Purchase successful!`,
      //       text: `Best of luck`,
      //       icon: "success",
      //     });
      //     refetch();

      //   }
      // })
     }
    };

    //handleSellCoin
    const handleSellCoin =(ast)=>{
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "sell",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await secureAPI.delete(`/spotTrading/${ast._id}`);
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Sold",
              text: `${ast.assetName} has been sold.`,
              icon: "success",
              confirmButtonText: "Share your feedback",
            }).then(async(result)=>{
              if(result.isConfirmed){
                const { value: formData } = await Swal.fire({
                  title: "Tell Us How We're Doing",
                  html:
                      '<div>' +
                      '<select id="feedbackType" class="swal2-select">' +
                      '<option value="1">Rating: 1</option>' +
                      '<option value="2">Rating: 2</option>' +
                      '<option value="3">Rating: 3</option>' +
                      '<option value="4">Rating: 4</option>' +
                      '<option value="5">Rating: 5</option>' +
                      '</select>' +
                      '<textarea id="swal-input1" class="swal2-input" placeholder="Feedback" aria-label="Feedback"></textarea>' +
                      '</div>',
                  showCancelButton: true,
                  focusConfirm: false,
                  preConfirm: () => {
                      const feedbackType = document.getElementById('feedbackType').value;
                      const feedback = document.getElementById('swal-input1').value;
                      return { feedbackType: feedbackType, feedback: feedback };
                  }
              });
              
              if (formData && formData.feedback) {
                const rating = parseInt(formData.feedbackType)
                const feedbackData = {
                  reviewerName: user.displayName,
                  reviewerEmail: user.email,
                  photo: user.photoURL,
                  rating: rating,
                  feedback: formData.feedback,
              }
              // console.log(feedbackData)
              secureAPI.post(`/feedback`, feedbackData)
                  .then(res => {
                      if (res.data.insertedId) {
                          Swal.fire({
                              title: "Feedback sent !",
                              text: "Thank you for your feedback.",
                              icon: "success",
                              timer: 1500,
                          });
                      }
                  })
                  .catch((error) => {
                      console.log(error);
                      Swal.fire({
                          title: `failed!`,
                          text: `Please try again`,
                          icon: "error",
                      });
                  });
              }
              }
            });
          }
        }
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
                              <Button variant="contained" onClick={()=>handleSellCoin(availableAssets[0])}>Sell</Button>
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