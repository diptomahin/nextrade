"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/utils/variants";
import NotStartedOutlinedIcon from "@mui/icons-material/NotStartedOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import WebhookOutlinedIcon from "@mui/icons-material/WebhookOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";

const HelpCenterCard = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-10 text-darkGray">
      {/* card 1  */}

      <motion.div
        variants={fadeIn("right", 0.03)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <NotStartedOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold">Getting started</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
        New to our platform? This section provides step-by-step guidance to help you get up and running quickly. From account setup to initial configuration, we&apos;ve got you covered.
        </p>
      </motion.div>

      {/* card tow */}
      <motion.div
        variants={fadeIn("down", 0.06)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <VerifiedUserOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold"> Authentication</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
        Learn about our authentication methods and best practices for securing your account. Whether it&apos;s setting up two-factor authentication or managing access controls, find everything you need here.
        </p>
      </motion.div>

      {/* card three */}
      <motion.div
        variants={fadeIn("left", 0.09)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <PriceChangeOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold">Limits & pricing</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
        Understand the usage limits and pricing structure of our services. Get clarity on subscription tiers, usage thresholds, and any associated costs to make informed decisions for your needs.
        </p>
      </motion.div>

      {/* card four */}
      <motion.div
        variants={fadeIn("right", 0.12)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <ConstructionOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold"> Advanced settings</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
        Customize your experience with our advanced settings. Explore features beyond the basics and tailor the platform to suit your specific requirements for enhanced functionality.
        </p>
      </motion.div>

      {/* card five */}
      <motion.div
        variants={fadeIn("up", 0.15)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <WebhookOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold"> API endpoints</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
        Developers, rejoice! Discover our API endpoints for seamless integration with your applications. From data retrieval to automation, leverage our APIs to extend the capabilities of your solutions.
        </p>
      </motion.div>

      {/* card six */}
      <motion.div
        variants={fadeIn("left", 0.18)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="2xl:h-72 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl p-5 rounded text-white"
      >
        <div className="flex flex-col items-center justify-center gap-3 border-b border-darkThree pb-2">
          <ApiOutlinedIcon className="w-14 h-14 text-primary" />
          <h3 className="text-lg font-semibold"> Enterprise features</h3>
        </div>
        <p className="text-sm text-justify font-medium mt-5 text-darkGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          tempore ex commodi eligendi expedita soluta rerum doloribus minus
          adipisci.
        </p>
      </motion.div>
    </div>
  );
};

export default HelpCenterCard;
