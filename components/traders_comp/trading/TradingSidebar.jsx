import React from 'react';

const TradingSidebar = (params) => {
    const {value, assets} = params
    // console.log(value, assets);

    const selectedAsset = assets.filter(asset => asset.key == value);
    console.log(selectedAsset[0])
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
                        </div> )
                        :
                    <div className="flex flex-col gap-2 text-lg font-semibold">
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Asset Name</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-primary">Asset Key</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary">Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-green-500">High Price</h3>
                        <h3 className="p-3 rounded-lg border-x-2 border-y-2 border-primary text-red-500">Low Price</h3>
                  </div>  
                }
        </div>
    );
};

export default TradingSidebar;