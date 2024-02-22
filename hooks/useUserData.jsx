import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useUserData = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: [user?.email, "userData"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  return {
    userData: data || {},
    refetchUserData: refetch,
    userDataLoading: isLoading,
    userDataPending: isPending,
    userDataError: isError,
  };
};

export default useUserData;
