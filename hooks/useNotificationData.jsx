import useAuth from "./useAuth";
import useSecureFetch from "./useSecureFetch";


const useNotificationData = () => {
     const { user, loading } = useAuth();
   
     const {
       data,
       refetch: notificationRefetch,
       isPending,
       isLoading,
     } = useSecureFetch(`/notifications?email=${user.email}`, ["notificationsData"]);
   
     if (loading || isLoading || isPending) {
       return { loading: true };
     }
   
     return { notificationsData: data || [], notificationRefetch };
   };
   
   export default useNotificationData;
   