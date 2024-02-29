"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo/NexTrade-Logo-White.png";
import Container from "@/components/library/Container";
import { usePathname } from "next/navigation";
import {
  FaAmazonPay,
  FaDiscord,
  FaFacebook,
  FaPaypal,
  FaStripe,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const router = usePathname();
  return (
    <footer
      className={`bg-quaternary border border-darkThree text-darkGray ${
        router === "/register" ||
        router === "/login" ||
        router.includes("/dashboard")
          ? "hidden"
          : "block"
      }`}
    >
      <Container className="grid grid-cols-1 md:grid-cols-2  3xl:grid-cols-6  justify-between gap-10 py-10">
        <div className="md:col-span-2  3xl:col-span-2 flex flex-col gap-3">
          <Link href={"/"}>
            <Image
              src={logo}
              alt=""
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
          <p className="text-sm  3xl:max-w-80">
            The Company does not provide services to citizens and/or residents
            of Australia, Austria, Belarus, Belgium, Bulgaria, Canada, Croatia,
            Republic of Cyprus, Czech Republic, Denmark, Estonia, Finland,
            France, Germany, Greece, Hungary, Iceland, Iran, Ireland, Israel,
            Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Myanmar,
            Netherlands, New Zealand, North Korea, Norway, Poland, Portugal,
            Puerto Rico, Romania, Russia, Singapore, Slovakia, Slovenia, South
            Sudan, Spain, Sudan, Sweden, Switzerland, UK, Ukraine, the USA,
            Yemen.
          </p>
        </div>
        {/* Contact Us */}
        <div className="flex flex-col gap-2">
          <header className="text-zinc-200 font-semibold mb-3">About Us</header>
          <Link className="hover:underline" href={"/about_nextrade"}>
            About NexTrade
          </Link>
          <Link className="hover:underline" href={"/why_choose_us"}>
            Why Choose Us
          </Link>
        </div>
        {/* products */}
        <div className="flex flex-col gap-2">
          <header className="text-zinc-200 font-semibold mb-3">
            Contact With Us
          </header>
          <Link className="hover:underline" href={"/help_center"}>
            Help Center
          </Link>
          <Link className="hover:underline" href={"/contact_us"}>
            {" "}
            Contact Us
          </Link>
        </div>
        {/* Services*/}
        <div className="flex flex-col gap-2">
          <header className="text-zinc-200 font-semibold mb-3">Services</header>
          <Link className="hover:underline" href={"/services"}>
            {" "}
            Subscription
          </Link>
          <Link className="hover:underline" href={"/payment_method_method"}>
            Payment Method
          </Link>
        </div>
        {/* 100% SECURE PAYMENT */}{" "}
        <div className="flex flex-col gap-2">
          <header className="text-zinc-200 font-semibold mb-3">
            100% SECURE PAYMENT
          </header>
          <div className="flex flex-wrap items-center gap-5 text-white">
            <Link href={"/payment_method"}>
              <FaStripe className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
            </Link>
            <Link href={"/payment_method"}>
              <FaAmazonPay className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
            </Link>
            <Link href={"/payment_method"}>
              <FaPaypal className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-darkThree text-sm text-darkGray py-10">
        <Container className="flex flex-col 2xl:flex-row justify-between gap-10">
          <p className="flex-1">
            Trading and investing involves significant level of risk and is not
            suitable and/or appropriate for all clients. Please make sure you
            carefully consider your investment objectives, level of experience
            and risk appetite before buying or selling. Buying or selling
            entails financial risks and could result in a partial or complete
            loss of your funds, therefore, you should not invest funds you
            cannot afford to lose. You should be aware of and fully understand
            all the risks associated with trading and investing, and seek advice
            from an independent financial advisor if you have any doubts. You
            are granted limited non-exclusive rights to use the IP contained in
            this site for personal, non-commercial, non-transferable use only in
            relation to the services offered on the site.{" "}
            <span className="2xl:block">
              Since EOLabs LLC is not under the supervision of the JFSA, it is
              not involved with any acts considered to be offering financial
              products and solicitation for financial services to Japan and this
              website is not aimed at residents in Japan.
            </span>{" "}
            <span className="2xl:block">
              EOLabs LLC, Company No 377 LLC 2020, having its registered address
              at: First Floor, First St. Vincent Bank Ltd., James Street, PO Box
              1574, Kingstown, St. Vincent and the Grenadines. Merchant Company:
              Techsmarty Ltd, company No:120906, MOL: 5-9 Main Street, Gibraltar
              GX11 1AA, Gibraltar.
            </span>
          </p>
          <div className="text-center 2xl:text-start">
            <p>© 2023–2024 NexTrade</p>
            <p className="text-xs">NexTrade All rights reserved.</p>
            <div className="flex items-center justify-center 2xl:justify-start gap-5 mt-5 text-white">
              <FaFacebook className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />{" "}
              <FaXTwitter className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />{" "}
              <FaYoutube className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
              <FaDiscord className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-linear" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
