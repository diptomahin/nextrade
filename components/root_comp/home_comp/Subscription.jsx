"use client";

import Container from "@/components/library/Container";
// material icon import
import DoneIcon from "@mui/icons-material/Done";
import Button from "@/components/library/buttons/root_button/RootButton";
//framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import Title from "@/components/library/Title";
import Link from "next/link";
import "./subscription.css";

const Subscription = () => {
  return (
    <Container className="py-20">
      <div className="text-center">
        <Title>Get More Benefits With Subscription</Title>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-gray font-medium"
        >
          Monthly and yearly Subscription Sell
        </motion.p>
      </div>
      <div className="relative flex flex-col xl:flex-row items-center justify-between gap-10 mt-10">
        {/* cart 1 basic plan */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded-xl z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Free Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              $0 <sub className="text-sm text-gray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className=" space-y-5 py-5 h-96">
            {/*criteria 1 */}
            <p className="flex items-center gap-2 text-sm font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>2 charts per tab</span>
            </p>
            {/*criteria 2 */}
            <p className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>5 indicators per chart</span>
            </p>
            {/*criteria 3 */}
            <p className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>10K historical bars</span>
            </p>
            {/*criteria 4 */}
            <p className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>20 price alerts</span>
            </p>
            {/*criteria 5 */}
            <p className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>20 technical alerts</span>
            </p>
            {/*criteria 6 */}
            <p className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>10 parallel chart connections</span>
            </p>
          </div>
          <Link href="/dashboard" className=" flex items-center justify-center">
            <Button className="w-full lg:h-10 lg:text-sm">
              Continue With Free
            </Button>
          </Link>
        </motion.div>

        {/* cart 2 Standard plan */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded-xl z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Standard Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              $9.99{" "}
              <sub className="text-sm text-gray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className="space-y-5 py-5 h-96">
            {/*criteria 1 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>4 charts per tab</span>
            </h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>10 indicators per chart</span>
            </h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>10K historical bars</span>
            </h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>100 price alerts</span>
            </h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>100 technical alerts</span>
            </h3>
            {/*criteria 6 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>20 parallel chart connections</span>
            </h3>
            {/*criteria 7 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Multiple watchlists</span>
            </h3>
          </div>
          <div className=" flex items-center justify-center">
            <Button className="w-full lg:h-10 lg:text-sm">
              Continue With Standard
            </Button>
          </div>
        </motion.div>

        {/* cart 3 Premium  plan */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded-xl z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Premium Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              $14.99{" "}
              <sub className="text-sm text-gray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className=" space-y-5 py-5 h-96">
            {/*criteria 1 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>8 charts per tab</span>
            </h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>25 indicators per chart</span>
            </h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>20K historical bars</span>
            </h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>400 price alerts</span>
            </h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>400 technical alerts</span>
            </h3>
            {/*criteria 6 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>50 parallel chart connections</span>
            </h3>
            {/*criteria 7 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Custom timeframes</span>
            </h3>
            {/*criteria 8 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-gray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Multiple watchlists</span>
            </h3>
          </div>
          <div className=" flex items-center justify-center">
            <Button className="w-full lg:h-10 lg:text-sm">
              Continue With Premium
            </Button>
          </div>
        </motion.div>

        {/* left */}

        <div className="animate-move1 absolute left-[5%] top-[0%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move2 absolute -left-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move3 absolute -left-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move4 absolute left-[5%] bottom-0 bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        {/* right */}

        <div className="animate-move5 absolute right-[5%] top-[0%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move6 absolute -right-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move7 absolute -right-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move8 absolute right-[5%] bottom-0 bg-primary w-32 h-32 rounded-full blur-[100px]"></div>
      </div>
    </Container>
  );
};

export default Subscription;
