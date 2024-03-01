`use client`

import React from 'react';

const HistoryCard = (params) => {
   
  const {history} = params ;
  console.log(history)
  const formatTime = (hours) => {
    return hours % 12 || 12; // Convert to 12-hour format
  };

  // Helper function to pad zero for single-digit minutes
  const padZero = (minutes) => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  // Helper function to determine AM or PM
  const getAmPm = (hours) => {
    return hours >= 12 ? "PM" : "AM";
  };
  
    return (
        <div className=" flex justify-between border-b border-x-4 border-y-4 p-5 rounded-lg pb-2 border-x-darkThree border-y-darkThree">
        <div>
          <h3 className="text-xl font-bold">{history.assetName} <br /> <span className="text-sm font-semibold">
            ({history.assetKey})</span></h3>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            {
              history.action=='bought' ?
              (
                <h3 className="text-sm font-bold"> <span className="text-lg font-bold text-green-500" >{history.Price}</span></h3>
              ) :
              (
                <h3 className="text-sm font-bold"> <span className="text-lg font-bold text-red-500" >{history.Price}</span></h3>
              )
            }
           
          </div>
          <div>
            <p className="text-darkGray text-[12px] flex flex-col gap-1 items-center justify-end">
              {/* Date */}
              <span>
                {history?.date?.day || " "}-
                {history?.date?.month || " "}-
                {history?.date?.year || " "}
              </span>
              {/* Time */}
              <span>
                {formatTime(history?.date?.hours || " ")}:
                {padZero(history?.date?.minutes || " ")}{" "}
                {getAmPm(history?.date?.hours || " ")}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
};

export default HistoryCard;