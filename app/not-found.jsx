import Link from "next/link";
import DarkButton from "@/components/library/buttons/DarkButton";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-montserrat text-primary">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-xl font-semibold mb-5">Page not found</p>
      <Link href="/">
        <DarkButton>Go Home</DarkButton>
      </Link>
    </div>
  );
};

export default NotFound;
