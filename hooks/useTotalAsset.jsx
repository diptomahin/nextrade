import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useTotalAsset = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const { data = [], refetch } = useQuery({
    queryKey: ["totalCoins", user?.email],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(
        `/totalPurchasedAssets?email=${user.email}`
      );
      return res.data;
    },
  });

  return {
    totalAsset: data,
    totalRefetch: refetch,
  };
};

export default useTotalAsset;
