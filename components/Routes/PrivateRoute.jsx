
import useAuth from "@/utils/useAuth";
import { usePathname, useRouter } from "next/navigation";


import { ThreeCircles } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <ThreeCircles
                    height="200"
                    width="200"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor="#9e33be"
                    innerCircleColor="#ffee00"
                    middleCircleColor=""
                />
            </div>
        );
    }

    if (user) {
        return children;
    }

    const redirectToLogin = () => {
        router.push('/login', undefined, { shallow: true, query: { from: router.pathname } })
        // console.log(router)

    };

    return redirectToLogin();
};

export default PrivateRoute;