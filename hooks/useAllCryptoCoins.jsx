import { useQuery } from "@tanstack/react-query";
import usePublicAPI from "./usePublicAPI";

const useAllCryptoCoins = () => {
  const usePublic = usePublicAPI();

  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: ["manageCryptos"],
    queryFn: async () => {
      const res = await usePublic.get(`/manageAllCryptoCoins`);
      return res.data;
    },
  });

  return {
    allCryptoCoins: data || [],
    cryptoRefetch: refetch,
    isPending,
    isLoading,
    isError,
  };
};

export default useAllCryptoCoins;
