import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";

import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh] text-primary text-xl font-semibold font-dm">
        Loading...
      </div>
    );
  }

  if (user) {
    return children;
  }

  const redirectToLogin = () => {
    router.push("/login", undefined, {
      shallow: true,
      query: { from: router.pathname },
    });
  };

  return redirectToLogin();
};

export default PrivateRoute;
