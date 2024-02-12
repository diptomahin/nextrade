import { useQuery } from "@tanstack/react-query";
import usePublicAPI from "./usePublicAPI";

const usePublicFetch = async ( url, ...key ) => {
  const usePublic = usePublicAPI();

  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: [...key],
    queryFn: async () => {
      const res = await usePublic.get(url);

      return res.data;
    },
  });

  return [data, isPending, isLoading, refetch, isError];
};

export default usePublicFetch;
