import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import RootButton from "../library/buttons/root_button/RootButton";
import usePublicAPI from "@/hooks/usePublicAPI";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const publicAPI = usePublicAPI();
  const router = useRouter();
  const { from } = router.query || { from: "/dashboard" };

  const handleSocialLogin = (login) => {
    login()
      .then((res) => {
        const loggedUser = res.user;

        const userInfo = {
          userID: loggedUser.uid,
          email: loggedUser.email,
          name: loggedUser.displayName,
          createdAt: loggedUser.metadata.creationTime,
          balance: 0,
          portfolio: [],
        };

        publicAPI.post("/all-users", userInfo).then((res) => {
          toast.success("Register Successful!");
          router.push(from);
        });
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
        reset;
      });
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
          className="py-1 px-2 lg:h-10 rounded-xl border border-primary bg-transparent"
        >
          <FcGoogle className="text-xl"></FcGoogle>
        </RootButton>
      </div>
    </>
  );
};

export default SocialLogin;
