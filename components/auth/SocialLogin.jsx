import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import usePublicAPI from "@/hooks/usePublicAPI";
import Button from "../library/Button";
import getDate from "../utils/date";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const publicAPI = usePublicAPI();
  const router = useRouter();
  const { from } = router.query || { from: "/" };

  const date = getDate();

  const handleSocialLogin = (login) => {
    login()
      .then((res) => {
        const loggedUser = res.user;

        const userInfo = {
          userID: loggedUser.uid,
          email: loggedUser.email,
          name: loggedUser.displayName,
          createdAt: date,
          balance: 0,
          deposit: 0,
          withdraw: 0,
          role: "trader",
          photo: loggedUser.photoURL || "",
          phone: "",
          address: "",
          username: loggedUser.email,
          currency: "",
        };

        publicAPI.post("/all-users", userInfo).then((res) => {
          toast.success("Register Successful!");
          router.push(from);
        });
      })
      .catch((error) => {
        toast.error(error.message.slice(10));
      });
  };
  return (
    <>
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="w-full flex items-center justify-center py-2 gap-3 rounded-full text-black  border border-zinc-400 hover:border-primary hover:bg-primary/30  bg-transparent"
        >
          <FcGoogle className="text-2xl"></FcGoogle> <p className="text-sm">Log in with Google</p>
        </button>
    </>
  );
};

export default SocialLogin;
