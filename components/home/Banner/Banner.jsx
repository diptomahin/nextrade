"use client";
// next js basic Image component
import Image from "next/image";
// Image import the asset file
import bannerImg from "../../../assets/banner.png";
import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF1] ">
      <Container className="min-h-screen flex flex-col-reverse xl:flex-row items-center justify-center gap-5 lg:gap-10 text-white py-28">
        <div className="flex-1">
          {" "}
          <p className="text-[#3671E9] mb-5">Next Level Trading</p>
          <h1 className="lg:text-5xl  md:text-3 text-2xl  font-bold lg:mb-8 md:mb-4 mb-4 text-black text-center xl:text-left">
            Start Trading In Crypto{" "}
            <span className="text-[#3671E9]">Instant</span>
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
      </Container>
    </div>
  );
};

export default Banner;

{
  (" ");
}
{
  /* Banner Image div   */
}
<div>
  <Image
    alt="Banner"
    className="md:w-[600px]  md:mb-0  mb-10"
    src={bannerImg}
  />
</div>;
{
  /* Banner Content div   */
}
<div className="lg:w-[600px]"></div>;
