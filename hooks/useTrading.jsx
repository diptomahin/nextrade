import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import useAuth from "@/hooks/useAuth";


const useTrading = ( ) => {
    const useSecure = useSecureAPI();
    const { user, loading } = useAuth();
    const { data, isPending, isLoading, isError, refetch } = useQuery({
        
        queryFn: async () => {
          const res = await useSecure.get("/spotTrading");
          const trading = res.data.filter(trading => trading.assetBuyerEmail == user.email)
          return trading;
        },
      });
      // const trading = data.filter(trading => trading.assetBuyerEmail == user.email)
      return {  data , isPending, isLoading, isError, refetch };
};

export default useTrading;