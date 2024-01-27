import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "@/utils/useAuth";


const useAllUsers = () => {
     const axiosPublic = useAxiosPublic();
     const {user} = useAuth();

     const {data: allUsers=[], isPending:loading, refetch} = useQuery({
          queryKey:['all-users'],
          queryFn:async()=>{
               const res = await axiosPublic.get(`all-users/${user.email}`);
               
               return res.data
          }
         })
         
     return [allUsers,loading,refetch]
};

export default useAllUsers;


