import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";
import useAuth from "@/hooks/useAuth";

const useHistory = () => {
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
    queryKey: [user?.email, "history"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/history?email=${user.email}`);
      return res.data;
    },
  });
  return {
    historyData: data,
    refetchHistory: refetch,
    historyLoading: isLoading,
    historyPending: isPending,
    historyError: isError,
  };
};

export default useHistory;
