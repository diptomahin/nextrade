"use client";
// components
import Button from "@/components/library/buttons/root_button/RootButton";
import Container from "@/components/library/Container";
//material icon import
import PersonIcon from "@mui/icons-material/Person";
import WalletIcon from "@mui/icons-material/Wallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InventoryIcon from "@mui/icons-material/Inventory";
import logo from "../../assets/logo/NexTrade-Logo-Original.png";
import Image from "next/image";

import {motion} from 'framer-motion'

// variants
import {fadeIn} from '../../components/Animations/variants'

const TradingStep = () => {
  return (

      <Container className=" md:flex items-center justify-between  lg:mt-24   ">
      {/* Trading step section content */}

      <motion.div
      variants={fadeIn('up',0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false,amount:0.10}}
      className="md:w-[600px]">
        <Image src={logo} alt="logo" width={80} className="my-2 " />
        <h1 className=" lg:text-3xl md:text-3xl text-4xl font-bold text-primary mb-5">
          Start Trading in <br /> Few Step
        </h1>
        <Button>Start Trading</Button>
      </motion.div>
      <div className="md:mt-0 mt-10">
        <div className=" flex gap-6">
          <div className="space-y-6">
            {/* 1st cart */}
            <motion.div
            variants={fadeIn('right',0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.10}}
            className=" xl:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                <PersonIcon className=" text-primary" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Crate Account</h1>
                <p className=" text-gray-400 mt-2">
                  Sign Up With Your Email and Mobile in just 5 Minutes.
                </p>
              </div>
            </motion.div>
            {/* 2nd cart */}
            <motion.div 
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.10}}
            className=" xl:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-[#fff2f2]  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <WalletIcon className=" text-[#ff5668]" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Add Fund wallet</h1>
                <p className=" text-gray-400 mt-2">
                  Quickly Add Money to Your Investment Wallet.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="space-y-6 -mt-14">
            {/* 3rd cart */}
            <motion.div
            variants={fadeIn('left',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.10}}
            className=" xl:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-[#fdf2ff]  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <AccountBalanceIcon className=" text-[#b391ff]" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Verify your Bank</h1>
                <p className=" text-gray-400 mt-2">
                  Verify your bank Account in Easy Way
                </p>
              </div>
            </motion.div>
            {/* 4th cart */}
            <motion.div 
            variants={fadeIn('up',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.10}}
            className=" xl:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-[#fdfee4]  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <InventoryIcon className=" text-[#ffbf3f]" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Start Trading Instantly</h1>
                <p className=" text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>

    
  );
};

export default TradingStep;
