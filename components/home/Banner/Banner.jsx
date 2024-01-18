"use client";
// next js basic Image component
import Image from "next/image";
// Image import the asset file
import bannerImg from "../../../assets/banner.png";
import Button from "@/components/library/Button/Button";
import Link from "next/link";
import Container from "@/components/library/Container";

const Banner = () => {
  return (
    <div className="">
      <Container className="flex gap-10 justify-between items-center">
        <div className="flex-1">
          {" "}
          <h1 className="lg:text-5xl  md:text-3 text-2xl  font-bold lg:mb-8 md:mb-4 mb-4 text-primary ">
            Trade Smarter, Grow Faster
          </h1>
          <p className="font-semibold text-gray-500 ">
            {" "}
            Unleash the power of advanced tools and market insights. From
            beginners to pro traders, we have the resources you need.
          </p>
          {/* Tow  Button start and download  */}
          <div className=" flex items-center md:justify-start justify-center gap-4 lg:my-10 md:my-6 my-5">
            <Button> Start Trading</Button>
            <Button> Register</Button>
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
