"use client";

import Container from "@/components/library/Container";
// material icon import
import DoneIcon from "@mui/icons-material/Done";
//framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../../utils/variants";
import Title from "@/components/library/Title";
import Link from "next/link";
import "./subscription.css";
import DarkButton from "@/components/library/Button";

const Subscription = () => {
  return (
    <Container className="py-20">
      <div className="text-center">
        <Title>Get more benefits with subscription</Title>
        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" text-darkGray font-medium"
        >
          Monthly subscription sell
        </motion.p>
      </div>
      <div className="relative grid  3xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-10 text-darkGray">
        {/* cart 1 basic plan */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Basic Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              Free
              <sub className="text-sm text-darkGray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className=" space-y-5 py-5 lg:h-96">
            {/*criteria 1 */}
            <p className="flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Limited market data</span>
            </p>
            {/*criteria 2 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Basic charting tools</span>
            </p>
            {/*criteria 3 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Limited trading features</span>
            </p>
            {/*criteria 4 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Basic portfolio tracking</span>
            </p>
            {/*criteria 5 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Basic research tools</span>
            </p>
            {/*criteria 6 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Basic customer support</span>
            </p>
            {/*criteria 7 */}
            <p className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Limited educational recourses</span>
            </p>
          </div>
          <Link
            href="/dashboard"
            className="w-full flex items-center justify-center"
          >
            <DarkButton className="w-full lg:h-10 lg:text-sm bg-primary/90 hover:bg-primary text-white">
              Get Started
            </DarkButton>
          </Link>
        </motion.div>

        {/* cart 2 Standard plan */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Standard Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              $4.99{" "}
              <sub className="text-sm text-darkGray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className="space-y-5 py-5 lg:h-96">
            {/*criteria 1 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Enhanced market data</span>
            </h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced charting tools</span>
            </h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced trading features</span>
            </h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Enhanced portfolio tracking</span>
            </h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Additional research tools</span>
            </h3>
            {/*criteria 6 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Priority customer support</span>
            </h3>
            {/*criteria 7 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white  w-5 h-5 p-1 bg-primary rounded-full" />
              <span>expanded educational recourses</span>
            </h3>
          </div>
          <Link
            href="https://buy.stripe.com/test_28og2n9AQcVf7DOeUU"
            className="w-full flex items-center justify-center"
          >
            <DarkButton className="w-full lg:h-10 lg:text-sm bg-primary/90 hover:bg-primary text-white">
              Continue With Standard
            </DarkButton>
          </Link>
        </motion.div>

        {/* cart 3 Premium  plan */}
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl border border-darkThree shadow-xl px-8 py-5 rounded z-10"
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">Premium Plan</h3>
            <h1 className="text-2xl font-bold py-3">
              $9.99{" "}
              <sub className="text-sm text-darkGray font-medium">/ monthly</sub>
            </h1>
          </div>
          <div className="w-full border border-darkThree"></div>
          {/* Cart criteria */}
          <div className=" space-y-5 py-5 lg:h-96">
            {/*criteria 1 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Full market data access</span>
            </h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Comprehensive charting tools</span>
            </h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced trading strategies</span>
            </h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced portfolio analysis</span>
            </h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Exclusive research tools</span>
            </h3>
            {/*criteria 6 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced priority support</span>
            </h3>
            {/*criteria 7 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Advanced educational recourses</span>
            </h3>
            {/*criteria 8 */}
            <h3 className=" flex items-center gap-2 text-base font-medium text-darkGray">
              <DoneIcon className="text-white w-5 h-5 p-1 bg-primary rounded-full" />
              <span>Customizable alert</span>
            </h3>
          </div>
          <Link
            href="https://buy.stripe.com/test_14kbM7dR68EZ0bm7st"
            className=" flex items-center justify-center"
          >
            <DarkButton className="w-full lg:h-10 lg:text-sm bg-primary/90 hover:bg-primary text-white">
              Continue With Premium
            </DarkButton>
          </Link>
        </motion.div>

        {/* left */}

        <div className="animate-move1 absolute left-[5%] top-[0%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move2 absolute -left-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move3 absolute -left-5 top-[35%] bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move4 absolute left-[5%] bottom-0 bg-primary w-32 h-32 rounded-full blur-[100px]"></div>

        {/* right */}

        <div className="animate-move5 absolute right-[5%] top-[0%] bg-quinary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move6 absolute -right-5 top-[35%] bg-quinary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move7 absolute -right-5 top-[35%] bg-quinary w-32 h-32 rounded-full blur-[100px]"></div>

        <div className="animate-move8 absolute right-[5%] bottom-0 bg-quinary w-32 h-32 rounded-full blur-[100px]"></div>
      </div>
    </Container>
  );
};

export default Subscription;
