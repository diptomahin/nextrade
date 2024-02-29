import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import RegisterForm from "./RegisterForm";

// add title in metadata
export const metadata = {
  title: "Register  - NexTrade",
  description: "Register page from Nextrade",
};

const Register = () => {
  return (
    <div className="relative min-h-[100vh] w-full flex flex-col 2xl:flex-row bg-gradient-to-br from-primary to-[#352786]">
      <Link
        href="/"
        className="text-white font-semibold fixed top-8  3xl:top-10 left-8  3xl:left-10 z-10"
      >
        <ArrowBackIcon />
        Home
      </Link>
      <Link
        href="/"
        className="fixed top-8  3xl:top-10 right-8  3xl:right-10 z-10"
      >
        <Image src={logo} alt="Logo" className="w-36 lg:w-40 z-10" />
      </Link>
      <div className="flex-1 h-full 2xl:min-h-[100vh] flex items-center justify-center py-12">
        {/* image field */}
      </div>
      <div className="flex-1 min-h-[100vh] flex items-center justify-center 2xl:bg-white">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
