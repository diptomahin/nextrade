"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import { TickerTape } from "react-ts-tradingview-widgets";

//banner image impost asset
import bannerImg from "../../../assets/Trading-PNG-Photo.png";
import banner from '../../../assets/Banner/banner.png'

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants";

const Banner = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      // style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Container 
      
      className="relative min-h-[100vh] flex flex-col items-center justify-center gap-8 py-32 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" lg:flex flex-row-reverse items-center justify-between gap-10"
        >
          <Magnetic>
            <motion.div
              variants={fadeIn("left", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image src={bannerImg} alt="" />
            </motion.div>
          </Magnetic>

          <div>
            <motion.h1
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=" text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-5xl font-extrabold text-secondary md:mb-5 mb-4 flex flex-wrap items-center  "
            >
              <Magnetic>
                <span className="text-primary">Innovation</span>
              </Magnetic>
              .
              <Magnetic>
                <span className="text-primary">Integrity</span>
              </Magnetic>
              .
              <Magnetic>
                <span className="text-primary">Investment</span>
              </Magnetic>
              .
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=" text-sm md:text-md lg:text-lg xl:text-xl mb-8 font-medium text-secondary "
            >
              {" "}
              Join world&apos;s biggest & trusted Exchange. Trade in Bitcoin,
              Ethereum, LiteCoin, DOGE coin and many more currencies.
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

        <div className="absolute bottom-5 w-full">
          <TickerTape displayMode="adaptive"></TickerTape>
        </div>
      </Container>
    </motion.div>
  );
};

export default Banner;
