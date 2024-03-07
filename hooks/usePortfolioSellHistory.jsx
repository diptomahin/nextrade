import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import useAuth from "./useAuth";

const usePortfolioSellHistory = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  const {
    data = [],
    isPending,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profitLoss", user?.email],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/profitLoss/${user.email}`);
      return res.data;
    },
  });

  return {
    profitLossData: data,
    refetch,
    isLoading,
    isPending,
  };
};

export default usePortfolioSellHistory;
