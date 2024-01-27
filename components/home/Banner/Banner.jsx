"use client";
import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import CompanyStock from "../CompanyStock/CompanyStock";
import Magnetic from "@/components/library/Magnetic/Magnetic";

const Banner = () => {
  return (
    <Container>
      <div className="min-h-[90vh] flex items-center justify-center gap-5 lg:gap-10 py-28 overflow-hidden">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-9xl font-extrabold  text-secondary md:mb-5 mb-4 flex flex-wrap items-center justify-center">
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
          </h1>
          <p className="xl:w-11/12 mx-auto text-3xl font-medium text-secondary text-center">
            {" "}
            Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
            Ethereum, LiteCoin, DOGE coin and many more currencies.
          </p>
          {/* Tow  Button start and download  */}
          <div className="flex flex-wrap items-center justify-center gap-4 lg:my-10 md:my-6 my-5">
            <Button className="h-16">Trade Now</Button>
          </div>
        </div>
      </div>
      <CompanyStock />
    </Container>
  );
};

export default Banner;
