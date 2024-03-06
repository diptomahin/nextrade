import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useSecureAPI from "./useSecureAPI";

const useNotificationData = () => {
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
    queryKey: [user?.email, "notifications"],
    queryFn: async () => {
      if (loading) {
        return;
      }
      const res = await useSecure.get(`/notifications/${user.email}`);
      return res.data;
    },
  });

  return {
    notificationsData: data,
    refetchNotificationsData: refetch,
    notificationsDataLoading: isLoading,
    notificationsDataPending: isPending,
    notificationsDataError: isError,
  };
};

export default useNotificationData;
