import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import logo2 from "../../assets/logo/NexTrade_Favicon-Original.png";
import React from "react";
import Container from "../library/Container";
import DarkButton from "@/components/library/Button";
import RootNavDrawer from "./nav_comp/RootNavDrawer";
import { RiMenu5Fill } from "react-icons/ri";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import useUserData from "@/hooks/useUserData";
import useAuth from "@/hooks/useAuth";
import ThemeMode from "../library/ThemeMode";

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
          scrolled
            ? "py-3 bg-white/30 dark:bg-darkTwo/50 backdrop-blur-sm"
            : "py-8"
        } z-50`}
      >
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="btn btn-sm bg-transparent hover:bg-transparent  text-white px-0 border-none"
            >
              <RiMenu5Fill className="text-3xl" />
            </button>
            {/* dark/light mode*/}
            <ThemeMode />
          </div>

          <Link href="/" className="hidden 2xl:block">
            {scrolled ? (
              <Image
                src={logo2}
                alt="Logo"
                style={{ width: "50px", height: "auto" }}
              />
            ) : (
              <Image
                src={logo}
                alt="Logo"
                style={{ width: "160px", height: "auto" }}
              />
            )}
          </Link>
          <Link href="/" className="hidden md:block 2xl:hidden">
            <Image
              src={logo2}
              alt="Logo"
              style={{ width: "50px", height: "auto" }}
            />
          </Link>
          {user?.email ? (
            userData.role === "admin" ? (
              <Link href="/admin_dashboard">
                <DarkButton>Go Dashboard</DarkButton>
              </Link>
            ) : (
              <Link href="/dashboard">
                <DarkButton>Trade Now</DarkButton>
              </Link>
            )
          ) : (
            <div className="flex items-center gap-2 md:gap-6">
              <Link href="/login">
                <button className="btn btn-sm h-10 font-medium text-nowrap text-sm md:text-base rounded-md bg-transparent hover:bg-primary text-black hover:text-white dark:text-white border-none shadow-none">
                  {" "}
                  Login
                </button>
              </Link>
              <Link href="/register">
                <DarkButton> Register</DarkButton>
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
