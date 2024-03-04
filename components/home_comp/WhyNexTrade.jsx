"use client";
import Container from "@/components/library/Container";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import Title from "@/components/library/Title";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrResources } from "react-icons/gr";
import Image from "next/image";
import bg from "../../assets/why-nextrade.webp";
import Subtitle from "../library/Subtitle";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { FaArrowDownShortWide } from "react-icons/fa6";

const WhyChooseUs = () => {
  return (
    <Container className="flex items-center justify-between gap-10 py-20 text-zinc-200">
      {/* content */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex-[3]"
      >
        <Title animation={false} className="text-start text-primary">
          Why NexTrade
        </Title>
        <Subtitle animation={false} className="text-start w-5/6">
          {" "}
          At NexTrade, your trading experience is our top priority, and we stand
          out for several compelling reasons.
        </Subtitle>

        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="flex gap-3">
            <MdOutlineSettingsSuggest className="text-6xl text-primary" />

            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Ease of Use</h3>
              <p className="text-sm font-medium text-gray-400">
                Intuitive platform design for seamless trading experiences.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <SiSpringsecurity className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Safety</h3>
              <p className="text-sm font-medium text-gray-400">
                Strong security protocols safeguarding assets with utmost
                reliability.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaArrowDownShortWide className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Low Charges</h3>
              <p className="text-sm font-medium text-gray-400">
                Competitive fees to maximize your investment returns.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <FaMoneyBillTransfer className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Fast Transaction</h3>
              <p className="text-sm font-medium text-gray-400">
                Efficient trade execution ensuring timely transactions.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <GrResources className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">Educational Recourses</h3>
              <p className="text-sm font-medium text-gray-400">
                Accessible tutorials and tools to enhance trading skills.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <MdOutlineSupportAgent className="text-6xl text-primary" />
            <div className="">
              {" "}
              <h3 className="text-lg font-semibold">24/4 Support</h3>
              <p className="text-sm font-medium text-gray-400">
                24/7 support available for instant assistance and guidance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex-[2] flex justify-end"
      >
        <Image
          alt="why-nextrade-image"
          src={bg}
          style={{ width: "80%", height: "auto" }}
          className="-scale-x-100"
        />
      </motion.div>
    </Container>
  );
};

export default WhyChooseUs;
