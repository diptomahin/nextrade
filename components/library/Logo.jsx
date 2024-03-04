import Link from "next/link";
import logo from "../../assets/logo/NexTrade_Favicon-Original.png";
import Image from "next/image";
import cn from "../utils/cn";

const Logo = ({ className }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center justify-center gap-[5px] h-fit w-fit",
        className
      )}
    >
      {" "}
      <Image src={logo} width={40} height={"auto"} alt="logo" />
      <h1 className="text-2xl font-medium ">
        Nex<span className="font-extrabold">Trade</span>
      </h1>
    </Link>
  );
};

export default Logo;
