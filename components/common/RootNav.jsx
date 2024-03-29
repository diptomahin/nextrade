import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import logo2 from "../../assets/logo/NexTrade_Favicon-Original.png";
import React from "react";
import Container from "../library/Container";
import Button from "@/components/library/Button";
import RootNavDrawer from "./nav_comp/RootNavDrawer";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import useUserData from "@/hooks/useUserData";
import useAuth from "@/hooks/useAuth";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";

export default function RootNav() {
  const [isActive, setIsActive] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { user, logOut } = useAuth();
  const { userData } = useUserData();

  // navbar animation after scroll function
  React.useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full h-auto box-border fixed transition-all duration-200 ease-out z-[1000] ${
          scrolled ? "py-3 bg-darkTwo/50 backdrop-blur-sm" : "py-8"
        } z-50`}
      >
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="btn btn-sm h-10 w-10 bg-transparent hover:bg-transparent text-white px-0 py-0 border-none shadow-none"
            >
              <CgMenuGridO className="text-4xl" />
            </button>
          </div>

          <Link href="/" className="hidden md:flex">
            {" "}
            <Image src={logo} alt="Logo" width={140} height={"auto"} />
          </Link>

          <Link href="/" className="flex md:hidden">
            {" "}
            <Image src={logo2} alt="Logo" width={40} height={"auto"} />
          </Link>

          {user?.email ? (
            userData.role === "admin" ? (
              <Link href="/admin_dashboard">
                <Button className="w-36 md:w-40 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-0">
                  Go Dashboard <IoIosArrowForward />
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <Button className="w-32 md:w-36 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-1">
                  Trade Now <IoIosArrowForward />
                </Button>
              </Link>
            )
          ) : (
            <div className="flex items-center gap-2 md:gap-6">
              <Link href="/login">
                <button className="group btn btn-sm h-10 font-medium text-nowrap text-sm md:text-base rounded-md bg-transparent hover:bg-primary hover:text-white text-white border-none shadow-none w-24 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-1">
                  Login{" "}
                  <IoIosArrowForward className="opacity-0 group-hover:opacity-100" />
                </button>
              </Link>
              <Link href="/register">
                <Button className="w-32 justify-start hover:gap-4 transition-all duration-300 ease-in-out pr-2">
                  {" "}
                  Register <IoIosArrowForward />
                </Button>
              </Link>
            </div>
          )}
        </Container>
      </nav>

      {/* click to top button */}
      <div
        onClick={() => window.scrollTo(0, 0)}
        className={` fixed bottom-20 right-5 md:right-10 2xl:right-20 z-[99] ${
          !scrolled && "hidden"
        }`}
      >
        <button className="btn bg-primary hover:bg-primary/90 border-primary hover:border-primary text-white rounded-full px-2">
          <PiArrowFatLinesUpFill className="text-3xl" />
        </button>
      </div>

      {/* <FacebookProvider appId="429056069676911">
        <CustomChat
          pageId="108051777809659"
          loggedInGreeting="Welcome back! Seeking assistance? NexTrade team is here to help."
          loggedOutGreeting="Welcome back! Seeking assistance? NexTrade team is here to help."
        />
      </FacebookProvider> */}

      {/* root drawer */}
      {isActive && (
        <RootNavDrawer
          setIsActive={setIsActive}
          isActive={isActive}
          user={user}
          logOut={logOut}
        />
      )}
    </>
  );
}
