"use client";
// next js basic Image component
import Image from "next/image";
// Image import the asset file
import bannerImg from "../../../assets/banner.png";
import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import Link from "next/link";
import CompanyStock from "../CompanyStock/CompanyStock";

const Banner = () => {
  return (
    <Container>
      <div className="min-h-[90vh] flex flex-col-reverse xl:flex-row justify-center gap-5 lg:gap-10 py-28">
        <div className="flex-1">
          {/* <p className="text-primary mb-5 font-semibold">Next Level Trading</p> */}
          <h1 className="text-2xl md:text-3xl lg:text-9xl font-extrabold text-primary md:mb-5 mb-4 text-center">
            Innovation. Integrity. Investment.
          </h1>
          <p className="xl:w-10/12 mx-auto text-4xl font-medium text-zinc-700 text-center">
            {" "}
            Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
            Ethereum, LiteCoin, DOGE coin and many more currencies.
          </p>
          {/* Tow  Button start and download  */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:my-10 md:my-6 my-5">
            <Button>Trading Now</Button>
            <Link href={"register"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
      <CompanyStock />
    </Container>
  );
};

export default Banner;
