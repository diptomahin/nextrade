import React from 'react';
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useExchangeHistory = () => {
    const useSecure = useSecureAPI();
    const { user, loading } = useAuth();
    
    const {
        data = [],
        isPending,
        isLoading,
        isError,
        refetch,
      } = useQuery({
        queryKey: [user?.email, "exchange history"],
        queryFn: async () => {
          if (loading) {
            return;
          }
          const res = await useSecure.get(`/exchangeHistory?email=${user.email}`);
          return res.data;
        },
      });
    return {
        exchangeHistoryData: data,
        refetchExchangeHistory: refetch,
        exchangeHistoryLoading: isLoading,
        exchangeHistoryPending: isPending,
        exchangeHistoryError: isError,
    }
};

export default useExchangeHistory;