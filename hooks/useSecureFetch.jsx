import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useSecureFetch = (url, ...key) => {
  const useSecure = useSecureAPI();

  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: [...key],
    queryFn: async () => {
      const res = await useSecure.get(url);

      return res.data;
    },
  });

  return { data, isPending, isLoading, isError, refetch };
};

export default useSecureFetch;
