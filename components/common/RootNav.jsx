"use client";
import Link from "next/link";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import logo from "../../assets/logo/NexTrade-Logo-White.png";
import logo2 from "../../assets/logo/NexTrade_Favicon-White.png";
import { IoMdArrowDropup } from "react-icons/io";
import React from "react";
import Container from "../library/Container";
import Language from "../library/Language";
import useAuth from "@/hooks/useAuth";
import DarkButton from "@/components/library/buttons/DarkButton";
import useSecureFetch from "@/hooks/useSecureFetch";
import RootNavDrawer from "./nav_comp/RootNavDrawer";
import { RiMenu5Fill } from "react-icons/ri";

export default function RootNav() {
  const [isActive, setIsActive] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const { user, loading } = useAuth();

  const { data, isPending, isLoading } = useSecureFetch(
    `/all-users/${user?.email}`,
    user?.email,
    "user"
  );

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

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

  if (isLoading || isPending || loading || !data) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-5xl text-primary font-semibold">
          Loading
          <span className="text-secondary">
            .<span className="text-primary">.</span>.
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav
        className={`w-full h-auto box-border fixed transition-all duration-200 ease-out z-[1000] ${
          scrolled ? "py-3 bg-darkTwo/50 backdrop-blur-sm" : "py-8"
        } z-50`}
      >
        <Container className="bar flex items-center justify-between ">
          <div className="flex items-center gap-3 md:gap-6">
            <Magnetic>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                <button className="btn btn-sm bg-transparent hover:bg-transparent w-10 h-10 rounded-full border-primary hover:border-primary text-primary p-1">
                  <RiMenu5Fill className="w-full h-full " />
                </button>
              </div>
            </Magnetic>
            <Language className="md:text-xl text-white" />
          </div>
          <Magnetic>
            <Link href="/" className="hidden xl:block">
              {scrolled ? (
                <Image src={logo2} alt="Logo" className="w-12" />
              ) : (
                <Image src={logo} alt="Logo" className="w-36 lg:w-40" />
              )}
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/" className="hidden md:block xl:hidden">
              <Image src={logo2} alt="Logo" className="w-12" />
            </Link>
          </Magnetic>
          {user?.email ? (
            <Magnetic>
              {data[0]?.role === "admin" ? (
                <Link href="/admin_dashboard">
                  <DarkButton>Go Dashboard</DarkButton>
                </Link>
              ) : (
                <Link href="/dashboard">
                  <DarkButton>Trade Now</DarkButton>
                </Link>
              )}
            </Magnetic>
          ) : (
            <div className="flex items-center gap-2 md:gap-6">
              <Magnetic>
                <Link href="/login">
                  <button className="btn btn-sm md:btn-md bg-transparent hover:bg-primary/20 border-transparent hover:border-darkThree md:text-lg font-medium rounded-xl text-primary">
                    Login
                  </button>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/register">
                  <DarkButton className="py-1 px-2 text-sm md:py-[6px] md:px-4 md:text-lg rounded-md md:rounded-xl">
                    {" "}
                    Register
                  </DarkButton>
                </Link>
              </Magnetic>
            </div>
          )}
        </Container>
      </nav>

      {/* click to top button */}
      <Magnetic>
        <button
          onClick={handleScrollToTop}
          className={`p-2 fixed bottom-10 right-5 md:right-10 bg-primary text-white border-none rounded-full z-[99] ${
            !scrolled && "hidden"
          }`}
        >
          <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
        </button>
      </Magnetic>

      {/* root drawer */}
      <RootNavDrawer setIsActive={setIsActive} isActive={isActive} />
    </>
  );
}