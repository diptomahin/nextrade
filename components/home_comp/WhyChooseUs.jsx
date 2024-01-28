import React from "react";
import logo from "../../assets/nextrade-logo.png";
import Image1 from "../../assets/metrics-concept-illustration_114360-3455.png";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Container from "@/components/library/Container";
const WhyChooseUs = () => {
  return (
    <Container className="my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Image side  */}
        <div className="">
          <Image width={500} height={500} src={Image1} alt="Invest" />
        </div>
        {/* Content side */}
        <div className="pt-20">
          <Image src={logo} alt="logo" width={80} className="my-4" />
          <h1 className="lg:text-3xl md:text-3xl text-4xl my-4 font-bold text-primary">
            Why Choose NexTrade ???
          </h1>
          <p className="text-lg my-4 text-slate-500">
            At NexTrade, your trading experience is our top priority, and we
            stand out for several compelling reasons.
          </p>
          <div className="grid grid-cols-2 gap-3 font-semibold text-gray-500">
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2 " />
              Safety Comes First
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Bonus And Offers
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Low Charges
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Fast Transaction
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              Easy Deposit And Withdraw
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary mr-2" />
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhyChooseUs;
