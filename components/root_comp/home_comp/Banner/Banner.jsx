"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";

//banner image impost asset
// import bannerImg from "../../../assets/Trading-PNG-Photo.png";
import banner from "../../../../assets/Banner/banner.png";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../../utils/variants";

const Banner = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="relative h-[100vh]"
      // style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Image src={banner} alt="" className=" w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 px-10 py-32 bg-gradient-to-r from-[#0000002a] to-[#0000005d]">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" lg:flex flex-row-reverse items-center justify-between gap-10"
        >
          {/* <Magnetic>
            <motion.div
              variants={fadeIn("left", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image src={bannerImg} alt="" />
            </motion.div>
          </Magnetic> */}

          <div className=" text-center w-full mx-auto  mt-24">
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=" text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-6xl font-extrabold text-secondary md:mb-5 mb-4   text-center"
            >
              <Magnetic>
                <span className="text-white">Innovation</span>
              </Magnetic>
              .
              <Magnetic>
                <span className="text-white">Integrity</span>
              </Magnetic>
              .
              <Magnetic>
                <span className="text-white">Investment</span>
              </Magnetic>
              .
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=" text-sm md:text-md lg:text-lg xl:text-xl mb-8 font-medium text-[#e4e2e2] "
            >
              {" "}
              Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
              Ethereum, LiteCoin,
              <br /> DOGE coin and many more currencies.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Button>Trade Now</Button>
            </motion.div>
          </div>
        </motion.div>
        <Container>
          <div className="absolute bottom-2 w-full mx-auto left-0  ">
            <TickerTape displayMode="adaptive"></TickerTape>
          </div>
        </Container>
      </div>
    </motion.div>
  );
};

export default Banner;
