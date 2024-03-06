import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAPI from "./useSecureAPI";

const usePurchasedAssets = (dynamicSearch = "", currentPage, coinPerPage) => {
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
    queryKey: [user?.email, "transactionsData"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(
        `/purchasedAssets/${user?.email}?search=${dynamicSearch}&&page=${currentPage}&size=${coinPerPage}`
      );
      return res.data;
    },
  });
  return {
    purchasedAssets: data,
    purchasedPending: isPending,
    purchasedLoading: isLoading,
    purchasedRefetch: refetch,
  };
};

export default usePurchasedAssets;
