"use client";
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
import Magnetic from "@/components/library/Magnetic";
import Image from "next/image";
import styles from './page.module.scss'
import { useRef } from 'react';
import gsap from 'gsap';
import { TickerTape } from "react-ts-tradingview-widgets";


//banner image impost asset
import bannerImg from "../../../assets/Trading-PNG-Photo.png";

import floating1 from '../../../assets/Banner/floating_1.jpg';
import floating2 from '../../../assets/Banner/floating_2.jpg';
import floating3 from '../../../assets/Banner/floating_3.jpg';
import floating4 from '../../../assets/Banner/image1.png';
import floating5 from '../../../assets/Banner/floating_5.jpg';
import floating6 from '../../../assets/Banner/floating_6.jpg';
import floating7 from '../../../assets/Banner/floating_7.jpg';
import floating8 from '../../../assets/Banner/floating_8.jpg';

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../Animations/variants";

const Banner = () => {

  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);
  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }

  return (
    <motion.main
    onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      
    >
      <div ref={plane1} className={styles.plane}>
          <Image 
            src={floating1}
            alt='image'
            width={300}
          />
           <Image 
            src={floating2}
            alt='image'
            width={300}
          />
          <Image 
            src={floating7}
            alt='image'
            width={225}
          />
      </div>
      <div ref={plane2} className={styles.plane}>
          <Image 
            src={floating4}
            alt='image'
            width={250}
          />
           <Image 
            src={floating6}
            alt='image'
            width={200}
          />
          <Image 
            src={floating8}
            alt='image'
            width={225}
          />
      </div>
      <div ref={plane3} className={styles.plane}>
          <Image 
            src={floating3}
            alt='image'
            width={150}
          />
           <Image 
            src={floating5}
            alt='image'
            width={200}
          />
      </div>
      <Container className="relative min-h-[100vh] flex flex-col items-center justify-center gap-8 py-32 ">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" lg:flex flex-row-reverse items-center justify-between gap-10"
        >
          
            <motion.div
              variants={fadeIn("left", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className=""
            >
              <Image src={bannerImg} alt="" />
            </motion.div>
          

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

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="absolute bottom-5 w-full"
        >
          <TickerTape displayMode="adaptive"></TickerTape>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default Banner;
