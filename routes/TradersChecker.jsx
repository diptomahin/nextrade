import Loading from "@/components/library/loading/Loading";
import useAuth from "@/hooks/useAuth";
import useUserData from "@/hooks/useUserData";
import { useRouter } from "next/navigation";

const TradersChecker = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError || loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center bg-quaternary">
        <Loading />
      </div>
    );
  }

  if (!user || !user?.email) {
    return router.push("/login", undefined, {
      shallow: true,
      query: { from: router.pathname },
    });
  }

  if (userData?.role !== "trader") {
    return router.push("/login", undefined, {
      shallow: true,
      query: { from: router.pathname },
    });
  }

  return children;
};

export default TradersChecker;
