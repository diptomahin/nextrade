import useAuth from "@/hooks/useAuth";
import useSecureFetch from "@/hooks/useSecureFetch";
import { useRouter } from "next/navigation";

const AdminChecker = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { data, isPending, isLoading } = useSecureFetch(
    `/all-users/${user?.email}`,
    user?.email,
    "userRole"
  );

  if (isLoading || isPending || loading || !data) {
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

  if (data[0]?.role !== "admin") {
    return;
  }

  return children;
};

export default AdminChecker;
