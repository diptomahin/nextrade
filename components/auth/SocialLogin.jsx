import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import RootButton from "../library/buttons/root_button/RootButton";
import usePublicAPI from "@/hooks/usePublicAPI";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const date = { day: day, month: month, year: year };

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const publicAPI = usePublicAPI();
  const router = useRouter();
  const { from } = router.query || { from: "/" };

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
      <div className="flex items-center gap-2 w-full my-4">
        <div className="h-[1px] w-full bg-black"></div>
        <div className="min-w-max">Or Login With</div>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <div className="flex items-center gap-4 justify-center flex-wrap">
        <RootButton
          onClick={() => handleSocialLogin(googleLogin)}
          className="w-full flex items-center justify-center py-1 px-2 lg:h-10 rounded-xl border border-primary bg-transparent"
        >
          <FcGoogle className="text-xl"></FcGoogle>
        </RootButton>
      </div>
    </>
  );
};

export default SocialLogin;
