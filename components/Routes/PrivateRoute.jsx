"use client"
import useAuth from "@/utils/useAuth";
import { usePathname } from "next/navigation";
import { ThreeCircles } from "react-loader-spinner";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const pathname = usePathname();

    if (loading) {
        return <div className="flex justify-center items-center h-[100vh]">
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
    }
    if (user) {
        return children;
    }

    return router.push({
        pathname: '/login',
        query: { from: router.pathname },
    }, undefined, { shallow: true });
    
};

export default PrivateRoute;