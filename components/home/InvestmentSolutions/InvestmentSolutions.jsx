import React from "react";

//images
import logo from "../../../assets/nextrade-logo.png";
import investImage from "../../../assets/stockImage1.png";
import Image from "next/image";

const InvestmentSolutions = () => {
  return (
    <div className="my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-2">
          <Image src={investImage} alt="Invest" />
        </div>
        <div className="py-10">
          <Image src={logo} alt="logo" width={80} className="my-2" />
          <h1 className="text-2xl font-bold text-primary">
            Trading And Investment Solutions Build in MOdern Platform
          </h1>
          <ul>
            <li className="text-xs my-2">
              <span className="text-sm font-semibold text-primary">
                Intuitive Interface:
              </span>{" "}
              Navigate with ease through a lightning-fast platform, optimized
              for desktop and mobile. Crystal-clear data visualization puts
              everything you need at your fingertips.
            </li>
            <li className="text-xs my-2">
              <span className="text-sm font-semibold text-primary">
                Personalized Solutions:
              </span>{" "}
              Tailor your experience to your unique goals and risk tolerance.
              Get matched with the right resources and educational materials to
              accelerate your learning.
            </li>
            <li className="text-xs my-2">
              <span className="text-sm font-semibold text-primary">
                Unwavering Security:
              </span>
              Your data and funds are protected by industry-leading encryption
              and security protocols. Rest assured, your investments are in safe
              hands.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSolutions;
