import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import RootButton from "../library/buttons/root_button/RootButton";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const router = useRouter();
    const { from } = router.query || { from: "/dashboard" };

    const handleSocialLogin = async (login) => {
        try {
            await login();
            toast.success("Register Successful!");
            router.push(from);
        } catch (error) {
            toast.error(error.message.slice(10));
        }
    };
    return (
        <>
            <div className="flex items-center gap-2 w-full my-4">
                <div className="h-[1px] w-full bg-black"></div>
                <div className="min-w-max">Or Login With</div>
                <div className="h-[1px] w-full bg-black"></div>
            </div>
            <div className="flex items-center gap-4 justify-center flex-wrap">
                <RootButton
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="py-2 px-4 rounded-xl border border-primary bg-transparent"
                >
                    <FcGoogle className="text-2xl"></FcGoogle>
                </RootButton>
            </div>
        </>
    );
};

export default SocialLogin;