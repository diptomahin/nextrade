import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const usePurchasedCoinData = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const {
    data = [],
    isPending,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["purchasedCoins", user?.email],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/purchasedAssets?email=${user.email}`);
      return res.data;
    },
  });

  return {
    purchasedAssets: data,
    purchasedPending: isPending,
    purchasedLoading: isLoading,
    purchasedError: isError,
    purchasedRefetch: refetch,
  };
};

export default usePurchasedCoinData;
