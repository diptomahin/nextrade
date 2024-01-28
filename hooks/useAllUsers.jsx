// import useAuth from "@/hooks/useAuth";
// import useSecureFetch from "@/hooks/useSecureFetch";

// export const useAllUsers = () => {
//     const {
//         user
//     } = useAuth();

//     const {
//         data: allUsers = [],
//         isPending,
//         isLoading,
//     } = useSecureFetch(`/all-users/${user.email}`, ["all-users", user.email]);
//     return [allUsers, isPending, isLoading];
// };

// import { useQuery } from "@tanstack/react-query";
// import usePublicAPI from "./usePublicAPI";
import useAuth from "./useAuth";
import useSecureFetch from "./useSecureFetch";

const useAllUsers = () => {
  //   const publicAPI = usePublicAPI();
  const { user } = useAuth();

  //   const {
  //     data: allUsers = [],
  //     isPending: loading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["all-users"],
  //     queryFn: async () => {
  //       const res = await publicAPI.get(`all-users/${user.email}`);

  //       return res.data;
  //     },
  //   });

  const { data: allUsers = [] } = useSecureFetch(`/all-users/${user.email}`, [
    "all-users",
  ]);

  return [allUsers];
};

export default useAllUsers;
