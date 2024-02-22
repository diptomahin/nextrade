import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useTransactionData = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: [user?.email, "transactionsData"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/deposit-withdraw/${user?.email}`);
      return res.data;
    },
  });

  return {
    transactionsData: data || [],
    refetchTransactionsData: refetch,
    transactionsDataLoading: isLoading,
    transactionsDataPending: isPending,
    transactionsDataError: isError,
  };
};

export default useTransactionData;
