import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useAdminNotificationData = () => {
    const useSecure = useSecureAPI();
  
    const { data, isPending, isLoading, isError, error, refetch } = useQuery({
      queryKey: ["notifications"],
      queryFn: async () => {
        try {
          const res = await useSecure.get(`/adminNotifications`);
          return res.data;
        } catch (error) {
          console.error("Error fetching admin notifications:", error);
          throw error;
        }
      },
    });
  
    return {
      notificationsData: data || [],
      adminRefetchNotificationsData: refetch,
      notificationsDataLoading: isLoading,
      notificationsDataPending: isPending,
      notificationsDataError: isError,
      notificationsDataErrorMessage: error?.message,
    };
  };
  
  

export default useAdminNotificationData;
