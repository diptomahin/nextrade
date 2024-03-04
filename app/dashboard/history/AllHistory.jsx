"use client"
// Import necessary components and hooks
import React, { useState, useEffect } from "react";
import HistoryCard from "@/components/traders_comp/history/HistoryCard";
import MarketHistory from "@/components/traders_comp/history/MarketHistory";
import useHistory from "@/hooks/useHistory";

// Define the functional component
const AllHistory = () => {
  // State variables for managing component state
  const [isBuyOpen, setIsBuyOpen] = useState(true);

  // Data fetching using custom hook
  const { data: history = [], isPending, isLoading, refetch } = useHistory(["history"]);

  // State variables for storing filtered history data
  const [bought, setBought] = useState([]);
  const [sold, setSold] = useState([]);

  // Effect to filter bought and sold history data when 'history' changes
  useEffect(() => {
    const findBought = history.filter((data) => data.action === "bought");
    const findSold = history.filter((data) => data.action === "sold");
    
    // Update state variables with filtered data
    setBought(findBought);
    setSold(findSold);
  }, [history]);

  // Render the component
  return (
    <>
      {/* Container for the entire component */}
      <div className="w-full bg-white dark:bg-tertiary rounded-xl shadow">
        {/* Header section with buttons */}
        <div className="flex items-center justify-start">
          <div className="relative w-96 h-10 m-4 flex items-center text-black bg-gray-100 dark:bg-secondary rounded-xl overflow-hidden">
            {/* Background for animation */}
            <div
              className={`w-1/3 h-full rounded-xl bg-primary transition-transform ${
                isBuyOpen === null
                  ? "translate-x-full"
                  : isBuyOpen
                  ? "translate-x-0"
                  : "translate-x-full"
              } duration-200 ease-in-out`}
            ></div>
            {/* Button for Market History */}
            <button
              onClick={() => setIsBuyOpen(true)}
              className={`absolute w-1/3  h-full whitespace-nowrap bg-transparent transition-all ${
                isBuyOpen ? "text-white" : "dark:text-gray-300"
              } duration-200 ease-in-out font-semibold text-sm z-10`}
            >
              Market History
            </button>
            {/* Button for Buying History */}
            {/* <button
              onClick={() => setIsBuyOpen(false)}
              className={`absolute w-1/3  whitespace-nowrap transform translate-x-full h-full bg-transparent transition-all ${
                !isBuyOpen ? "text-white" : "dark:text-gray-300"
              } duration-200 ease-in-out font-semibold text-sm z-10`}
            >
              Buying History
            </button> */}
            {/* Button for Selling History */}

<button
  onClick={() => setIsBuyOpen(null)}
  className={`absolute w-1/3 whitespace-nowrap transform translate-x-full h-full bg-transparent transition-all ${
    isBuyOpen === null ? "text-white" : "dark:text-gray-300"
  } duration-200 ease-in-out font-semibold text-sm z-10`}
>
  Selling History
</button>


          </div>
        </div>
        {/* Content section based on the selected history type */} 
       
        {isBuyOpen ? (
          <>
          {/* Market History */}
          <MarketHistory></MarketHistory>
           
          </>
        ) : !isBuyOpen ? (
          <>
           
            {/* Buying History */}
            <div className="grid grid-cols-2 gap-2 my-5">
              {bought.map((history) => (
                <HistoryCard key={history._id} history={history}></HistoryCard>
              ))}
            </div> 
          </>
        ) : (
          <>
            {/* Selling History */}
            <div className="grid grid-cols-2 gap-2 my-5">
              {sold.map((history) => (
                <HistoryCard key={history._id} history={history}></HistoryCard>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

// Export the component
export default AllHistory;
