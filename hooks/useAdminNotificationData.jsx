import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useAdminNotificationData = () => {
  const useSecure = useSecureAPI();

  const { data, isPending, isLoading, isError, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await useSecure.get(`/notifications/adminNotification`);
      return res.data;
    },
  });

  return {
    notificationsData: data || [],
    refetchNotificationsData: refetch,
    notificationsDataLoading: isLoading,
    notificationsDataPending: isPending,
    notificationsDataError: isError,
  };
};

export default useAdminNotificationData;
