import { useQuery } from "@tanstack/react-query";
import usePublicAPI from "./usePublicAPI";

const useAllFlatCoins = () => {
    const usePublic = usePublicAPI();

    const { data, isPending, isLoading, isError, refetch } = useQuery({
        queryKey: ["manageFlats"],
        queryFn: async () => {
            const res = await usePublic.get(`/manageAllFlatCoins`);
            return res.data;
        }
    });

    return {
        allFlatCoins: data || [],
        flatRefetch: refetch
    };
};

export default useAllFlatCoins;