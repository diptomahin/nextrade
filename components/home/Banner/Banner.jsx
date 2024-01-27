"use client";
import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import CompanyStock from "../CompanyStock/CompanyStock";
import Magnetic from "@/components/library/Magnetic/Magnetic";

const Banner = () => {
  return (
    <Container>
      <div className="min-h-[90vh] flex items-center justify-center gap-5 lg:gap-10 py-32">
        <div className="">
          <div className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-extrabold  text-secondary md:mb-5 mb-4 flex flex-wrap items-center justify-center overflow-hidden">
            <Magnetic>
              <h1 className="text-primary">Innovation</h1>
            </Magnetic>
            .
            <Magnetic>
              <h1 className="text-primary">Integrity</h1>
            </Magnetic>
            .
            <Magnetic>
              <h1 className="text-primary">Investment</h1>
            </Magnetic>
            .
          </div>
          <p className="xl:w-11/12 mx-auto text-lg lg:text-2xl xl:text-3xl font-medium text-secondary text-justify md:text-center">
            {" "}
            Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
            Ethereum, LiteCoin, DOGE coin and many more currencies.
          </p>
          {/* Tow  Button start and download  */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:my-10 md:my-6 my-5">
            <Button>Trade Now</Button>
          </div>
        </div>
      </div>
      <CompanyStock />
    </Container>
  );
};

export default Banner;
