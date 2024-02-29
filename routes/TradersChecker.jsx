import useAuth from "@/hooks/useAuth";
import useUserData from "@/hooks/useUserData";
import { useRouter } from "next/navigation";

const TradersChecker = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  if (userDataLoading || userDataPending || userDataError || loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-quaternary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }

  if (!user) {
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
