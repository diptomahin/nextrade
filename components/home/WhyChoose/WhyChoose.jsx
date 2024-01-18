import React from "react";
import logo from "../../../assets/nextrade-logo.png";
import Image1 from "../../../assets/metrics-concept-illustration_114360-3455.png";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const WhyChoose = () => {
  return (
    <div className="my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <Image width={400} height={400} src={Image1} alt="Invest" />
        </div>
        <div className="py-10">
          <Image src={logo} alt="logo" width={80} className="my-4" />
          <h1 className="text-2xl my-4 font-bold text-primary">
            Why Choose NexTrade ???
          </h1>
          <p className="text-lg my-4 text-slate-500">
            At NexTrade, your trading experience is our top priority, and we
            stand out for several compelling reasons.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <p>
              <CheckCircleRoundedIcon className="text-primary " />
              Safety Comes First
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary" />
              Bonus And Offers
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary" />
              Low Charges
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary" />
              Fast Transaction
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary" />
              Easy Deposit And Withdraw
            </p>
            <p>
              <CheckCircleRoundedIcon className="text-primary" />
              24/7 Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
