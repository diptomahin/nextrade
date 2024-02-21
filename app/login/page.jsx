import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="relative min-h-[100vh] w-full flex flex-col xl:flex-row-reverse bg-gradient-to-br from-primary to-[#352786]">
      <Link
        href="/"
        className="text-white font-semibold fixed top-8 2xl:top-10 right-8 2xl:right-10 z-10 "
      >
        <ArrowBackIcon />
        Home
      </Link>
      <Link href="/" className="fixed top-8 2xl:top-10 left-8 2xl:left-10 z-10">
        <Image src={logo} alt="Logo" className="w-36 lg:w-40 z-10" />
      </Link>
      <div className="flex-1 h-full xl:min-h-[100vh] flex items-center justify-center py-12">
        {/* image field */}
      </div>
      <div className="flex-1 min-h-[100vh] flex items-center justify-center xl:bg-white">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
