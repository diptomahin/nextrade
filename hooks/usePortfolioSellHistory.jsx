import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const usePortfolioSellHistory = () => {
     const useSecure = useSecureAPI();

     const { data, isPending, isLoading, isError, refetch } = useQuery({
         queryKey: ["profitLoss"],
         queryFn: async () => {
             const res = await useSecure.get(`/profitLoss`);
             return res.data;
         },
     });
 
     return {
          profitLossData: data || [],
         refetch,
         isLoading,
         isPending
     };
};

export default usePortfolioSellHistory;




