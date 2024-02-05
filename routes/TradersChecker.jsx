import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import { useRouter } from "next/navigation";

const TradersChecker = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { data, isPending, isLoading } = useSecureFetch(
    `/all-users/${user?.email}`,
    user?.email,
    "all-users"
  );

  if (isLoading || isPending || loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
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

  if (data[0]?.role !== "trader") {
    return;
  }

  return children;
};

export default TradersChecker;
