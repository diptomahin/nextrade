"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/NexTrade-Logo-White.png";
import Container from "@/components/library/Container";
import { usePathname } from "next/navigation";
import { FaAmazonPay, FaPaypal, FaStripe } from "react-icons/fa";

const Footer = () => {
  const router = usePathname();
  return (
    <footer
      className={`bg-gradient-to-br from-primary to-[#352786] text-white font-inter mt-10 ${
        router === "/register" ||
        router === "/login" ||
        router.includes("/dashboard")
          ? "hidden"
          : "block"
      }`}
    >
      <Container className="pt-10">
        <Link href={"/"}>
          <Image src={logo} alt="" width={150} />
        </Link>
        <div className="flex flex-wrap justify-between gap-8 my-10">
          {/* Contact Us */}
          <nav className="flex flex-col gap-2">
            <header className="font-semibold border-b mb-3">About Us</header>
            <Link
              className="hover:underline opacity-80"
              href={"/about_nextrade"}
            >
              About NexTrade
            </Link>
            <Link
              className="hover:underline opacity-80"
              href={"/why_choose_us"}
            >
              Why Choose Us
            </Link>
          </nav>
          {/* products */}
          <nav className="flex flex-col gap-2">
            <header className="font-semibold border-b mb-3">
              Contact With Us
            </header>
            <Link className="hover:underline opacity-80" href={"/help_center"}>
              Help Center
            </Link>
            <Link className="hover:underline opacity-80" href={"/contact_us"}>
              {" "}
              Contact Us
            </Link>
          </nav>
          {/* Services*/}
          <nav className="flex flex-col gap-2">
            <header className="font-semibold border-b mb-3">Services</header>
            <Link className="hover:underline opacity-80" href={"/services"}>
              {" "}
              Subscription
            </Link>
            <Link
              className="hover:underline opacity-80"
              href={"/payment_method"}
            >
              Payment Method
            </Link>
          </nav>
          {/* 100% SECURE PAYMENT */}{" "}
          <nav className="flex flex-col gap-2">
            <header className="font-semibold border-b mb-3">
              100% SECURE PAYMENT
            </header>
            <div className="flex flex-wrap items-center gap-5 lg:mx-auto ">
              <Link href={"/payment"}>
                <FaStripe className="w-10 h-10" />
              </Link>
              <Link href={"/payment"}>
                <FaAmazonPay className="w-10 h-10" />
              </Link>
              <Link href={"/payment"}>
                <FaPaypal className="w-10 h-10" />
              </Link>
            </div>
          </nav>
        </div>
        <div className="border-t text-center p-4 text-white">
          <small>
            Copyright © 2024 - All right reserved by{" "}
            <Link href="/" className="hover:underline font-medium">
              NexTrade
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
