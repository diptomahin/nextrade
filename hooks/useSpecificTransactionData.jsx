import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAPI from "./useSecureAPI";

const useSpecificTransactionData = (dynamicSearch = "") => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: [user?.email, "transactionsData"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(
        `/deposit-withdraw/specific/${user?.email}?search=${dynamicSearch}`
      );
      return res.data;
    },
  });

  return {
    specificTransactionsData: data || [],
    refetchSpecificTransactionsData: refetch,
    SpecificTransactionsDataLoading: isLoading,
    SpecificTransactionsDataPending: isPending,
    SpecificTransactionsDataError: isError,
  };
};

export default useSpecificTransactionData;
