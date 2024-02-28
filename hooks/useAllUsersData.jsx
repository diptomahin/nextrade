import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useAllUsersData = () => {
    const useSecure = useSecureAPI();

    const { data, isPending, isLoading, isError, refetch } = useQuery({
        queryKey: ["all users account"],
        queryFn: async () => {
            const res = await useSecure.get(`/all-users`);
            return res.data;
        },
    });

    return {
        allUser: data || [],
        refetch,
        isLoading,
        isPending
    };
};

export default useAllUsersData;


