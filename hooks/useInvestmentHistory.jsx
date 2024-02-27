import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useInvestmentHistory = () => {
    const useSecure = useSecureAPI();
    const { user, loading } = useAuth();
  
    //
    const { data, isPending, isLoading, isError, refetch } = useQuery({
      queryKey: [user?.email, "investment history"],
      queryFn: async () => {
        if (loading) {
          return;
        }
        const res = await useSecure.get(`/investmentHistory?email=${user.email}`);
        return res.data;
      },
    });
  
    return {
      investmentHistoryData: data || [],
      refetchInvestmentHistory: refetch,
      investmentHistoryLoading: isLoading,
      investmentHistoryPending: isPending,
      investmentHistoryError: isError,
    };
  };

export default useInvestmentHistory;