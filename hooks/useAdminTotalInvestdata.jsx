import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useAdminTotalInvestData = () => {
  const useSecure = useSecureAPI();

  const {
    data = [],
    isPending,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["purchasedAssets"],
    queryFn: async () => {
      const res = await useSecure.get(`/purchasedAssets`);
      return res.data;
    },
  });

  return {
    purchasedAssets: data,
    refetch,
    isLoading,
    isPending,
  };
};

export default useAdminTotalInvestData;
