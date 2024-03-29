import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useUserData = () => {
  const useSecure = useSecureAPI();
  const { user, loading } = useAuth();

  //
  const {
    data = {},
    isPending,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/user/${user?.email}`);
      return res.data;
    },
  });

  return {
    userData: data,
    userDataError: isError,
    userDataPending: isPending,
    userDataLoading: isLoading,
    refetchUserData: refetch,
  };
};

export default useUserData;
