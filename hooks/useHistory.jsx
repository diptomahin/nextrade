import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import useAuth from "@/hooks/useAuth";


const useHistory = ( ) => {
    const useSecure = useSecureAPI();
    const { user, loading } = useAuth();
    const { data, isPending, isLoading, isError, refetch } = useQuery({
        
        queryFn: async () => {
          const res = await useSecure.get("/history");
          const history = res.data.filter(trade => trade.Email == user.email)
          return history;
        },
      });
      // const trading = data.filter(trading => trading.assetBuyerEmail == user.email)
      return {  data , isPending, isLoading, isError, refetch };
};

export default useHistory;