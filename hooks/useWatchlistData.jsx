import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useWatchlistData = () => {
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
    queryKey: [user?.email, "watchlist"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/watchlist?email=${user.email}`);
      return res.data;
    },
  });

  return {
    watchlistData: data,
    refetchWatchlistData: refetch,
    watchlistDataLoading: isLoading,
    watchlistDataPending: isPending,
    watchlistDataError: isError,
  };
};

export default useWatchlistData;
