import { useQuery } from "@tanstack/react-query";
import useSecureAPI from "./useSecureAPI";

const useArticleData = () => {
    const useSecure = useSecureAPI();

    const { data, isPending, isLoading, isError, refetch } = useQuery({
        queryKey: ["all-articles"],
        queryFn: async () => {
            const res = await useSecure.get(`/articles`);
            return res.data;
        },
    });

    return {
        articles: data || [],
        refetch,
        isLoading,
        isPending,
    };
};

export default useArticleData;
