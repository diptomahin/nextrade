import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";

import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
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
