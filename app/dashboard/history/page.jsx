'use client'
import HistoryCard from "@/components/traders_comp/history/HistoryCard";
import MarketHistory from "@/components/traders_comp/history/MarketHistory";
import useHistory from "@/hooks/useHistory";
import React, { useState, useEffect } from "react";

//Material Imports

const History = () => {
  const { data: history = [],
    isPending,
    isLoading,
    refetch, } = useHistory(["history"]);

  const [bought, setBought] = useState([])
  const [sold, setSold] = useState([])
  const [boughtAmount, setBoughtAmount] = useState([])
  const [sellAmount, setSellAmount] = useState([])
  useEffect(() => {
    const findBought = history.filter(data => data.action == "bought");

    const findSold = history.filter(data => data.action == "sold");

    setBought(findBought);
    setSold(findSold);

  }, [history])


  return (
    <div>
      <div>
        <h1 className="text-xl font-bold text-white my-5">Buying History . . . .</h1>
        <hr />
        <div className="grid grid-cols-2 gap-2 my-5">
          {
            bought.map(history => 
              <HistoryCard  key={history._id} history={history}></HistoryCard>
            )
          }
        </div>

      </div>
      <div>
        <h1 className="text-xl font-bold text-white my-5">Selling History . . . .</h1>
        <hr />
        <div className="grid grid-cols-2 gap-2 my-5">
          {
            sold.map(history => 
              <HistoryCard key={history._id} history={history}></HistoryCard>
            )
          }
        </div>

      </div>
      <div>
        <MarketHistory></MarketHistory>
      </div>
    </div>
  )
};

export default History;
