"use client";
import Image from "next/image";

//import image from assets file
import logo from "../../../assets/nextrade-logo.png";
import Container from "@/components/library/Container";

// material icon import
import DoneIcon from "@mui/icons-material/Done";
import Button from "@/components/library/buttons/root_button/RootButton";

//framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../utils/variants";

const Subscription = () => {
  return (
    <Container>
      <div className=" py-10">
        <div className=" text-center">
          <Image src={logo} alt="logo" width={80} className="my-2 mx-auto" />
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="lg:text-3xl md:text-3xl text-4xl my-4 text-primary font-bold"
          >
            Get More Benefits With Subscription
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-lg my-4 text-slate-500 font-medium"
          >
            Monthly and yearly Subscription Sell
          </motion.p>
        </div>
        <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-16">
          {/* cart 1 basic plan */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-200  shadow p-6 py-8  rounded-lg "
          >
            <h3 className=" text-xl font-bold text-gray-600">Basic Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $99.99{" "}
              <sub className="text-base text-gray-500 font-medium">
                / monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7 h-[380px]">
              {/*criteria 1 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>2 charts per tab</span>
              </h3>
              {/*criteria 2 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>5 indicators per chart</span>
              </h3>
              {/*criteria 3 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>10K historical bars</span>
              </h3>
              {/*criteria 4 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>20 price alerts</span>
              </h3>
              {/*criteria 5 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>20 technical alerts</span>
              </h3>
              {/*criteria 6 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>10 parallel chart connections</span>
              </h3>
            </div>
            <div className=" flex items-center justify-center">
              <Button>Continue With Basic</Button>
            </div>
          </motion.div>
          {/* cart 2 Standard plan */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border  border-gray-200 shadow p-6 py-8  rounded-lg "
          >
            <h3 className=" text-xl font-bold text-gray-600">Standard Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $800{" "}
              <sub className="text-base text-gray-500 font-medium">
                / monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7 h-[380px]">
              {/*criteria 1 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>4 charts per tab</span>
              </h3>
              {/*criteria 2 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>10 indicators per chart</span>
              </h3>
              {/*criteria 3 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>10K historical bars</span>
              </h3>
              {/*criteria 4 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>100 price alerts</span>
              </h3>
              {/*criteria 5 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>100 technical alerts</span>
              </h3>
              {/*criteria 6 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>20 parallel chart connections</span>
              </h3>
              {/*criteria 7 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>Multiple watchlists</span>
              </h3>
            </div>
            <div className=" flex items-center justify-center">
              <Button>Continue With Standard</Button>
            </div>
          </motion.div>
          {/* cart 1 Premium  plan */}
          <motion.div
            variants={fadeIn("left", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className=" border border-gray-200 shadow p-6 py-8  rounded-lg "
          >
            <h3 className=" text-xl font-bold text-gray-600">Premium Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $1200{" "}
              <sub className="text-base text-gray-500 font-medium">
                / monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7 h-[380px]">
              {/*criteria 1 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>8 charts per tab</span>
              </h3>
              {/*criteria 2 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>25 indicators per chart</span>
              </h3>
              {/*criteria 3 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>20K historical bars</span>
              </h3>
              {/*criteria 4 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>400 price alerts</span>
              </h3>
              {/*criteria 5 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>400 technical alerts</span>
              </h3>
              {/*criteria 6 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>50 parallel chart connections</span>
              </h3>
              {/*criteria 7 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>Custom timeframes</span>
              </h3>
              {/*criteria 8 */}
              <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500">
                <DoneIcon className="text-white p-1 bg-primary rounded-full" />
                <span>Multiple watchlists</span>
              </h3>
            </div>
            <div className=" flex items-center justify-center">
              <Button>Continue With Premium</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
