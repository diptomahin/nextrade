import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import LoginForm from "./LoginForm";
import loginSideImg from "@/assets/loginSideImg.jpg"

// add title in metadata
export const metadata = {
  title: "Login - NexTrade",
  description: "Login page from Nextrade",
};

const Login = () => {
  return (
    <div style={{  backgroundImage: `url(/loginBg.jpg)`, backgroundSize: "cover", backgroundRepeat: "no-repeat"
    }} className="relative h-[100vh] w-full flex 2xl:flex-row">
      <Link
        href="/"
        className="text-primary font-semibold fixed top-8  3xl:top-10 right-8  3xl:right-10 z-10 "
      >
        <ArrowBackIcon />
        Home
      </Link>
            <div className="hidden 2xl:block w-full 2xl:w-1/3 h-full 2xl:min-h-[100vh] ">
        <Image src={loginSideImg} alt="side" className="w-full h-full" />
      </div>
      <div className="xl:flex-1 w-full flex items-center justify-center 2xl:bg-gray-100 bg-transparent">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
