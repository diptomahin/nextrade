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
      <div className="min-h-[90vh] flex flex-col-reverse xl:flex-row items-center justify-center gap-5 lg:gap-10">
        <div className="flex-1">
          {" "}
          <p className="text-primary mb-5 font-semibold">Next Level Trading</p>
          <h1 className="lg:text-5xl text-primary  md:text-3 text-2xl  font-bold lg:mb-8 md:mb-4 mb-4 text-center xl:text-left">
            Start Trading In Crypto{" "}
            <span className="text-primary">Instant</span>
          </h1>
          <p className="font-semibold text-gray-500 text-center xl:text-left">
            {" "}
            Unleash the power of advanced tools and market insights. From
            beginners to pro traders, we have the resources you need.
          </p>
          {/* Tow  Button start and download  */}
          <div className="flex flex-wrap items-center xl:justify-start justify-center gap-4 lg:my-10 md:my-6 my-5">
            <Button> Start Trading</Button>
            <Link href={"register"}>
              <Button> Register</Button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="Banner"
            className="md:w-[600px]  md:mb-0  mb-10"
            src={bannerImg}
          />
        </div>
      </div>
      <CompanyStock />
    </Container>
  );
};

export default Banner;
