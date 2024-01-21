import Image from "next/image";

//import image from assets file
import logo from "../../../assets/nextrade-logo.png";
import Container from "@/components/library/Container";

// material icon import
import DoneIcon from '@mui/icons-material/Done';
import Button from "@/components/library/Button/Button";

const Subscription = () => {
  return (
    <Container>
      <div className=" py-10">
        <div className=" text-center">
          <Image src={logo} alt="logo" width={80} className="my-2 mx-auto" />
          <h1 className="lg:text-3xl md:text-3xl text-4xl my-4 text-primary font-bold">
            Get More Benefits With Subscription
          </h1>
          <p className="text-lg my-4 text-slate-500 font-medium">
            Monthly and yearly Subscription Sell
          </p>
        </div>
        <div className=" grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 mt-16">
          {/* cart 1 basic plan */}
          <div className=" border border-gray-200 shadow p-6 py-8  rounded-lg "> 
            <h3 className=" text-xl font-bold text-gray-600">Basic Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $00{" "}
              <sub className="text-base text-gray-500 font-medium">/ monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7">
               {/*criteria 1 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            </div>
            <div className=" flex items-center justify-center"><Button>Continue With Basic</Button></div>
          </div>
          {/* cart 2 Standard plan */}
          <div className=" border border-gray-200 shadow p-6 py-8  rounded-lg ">
            <h3 className=" text-xl font-bold text-gray-600">Standard Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $800{" "}
              <sub className="text-base text-gray-500 font-medium">/ monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7">
               {/*criteria 1 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            </div>
            <div className=" flex items-center justify-center"><Button>Continue With Standard</Button></div>
          </div>
          {/* cart 1 Premium  plan */}
          <div className=" border border-gray-200 shadow p-6 py-8  rounded-lg ">
            <h3 className=" text-xl font-bold text-gray-600">Premium Plan</h3>
            <h1 className=" text-3xl font-extrabold py-3 ">
              $1200{" "}
              <sub className="text-base text-gray-500 font-medium">/ monthly
              </sub>
            </h1>
            <div className=" w-full border bg-gray-500 my-3"></div>
            {/* Cart criteria */}
            <div className=" space-y-3 py-7">
               {/*criteria 1 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 2 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 3 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 4 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            {/*criteria 5 */}
            <h3 className=" flex items-center gap-1 text-base font-medium text-gray-500"><DoneIcon className="text-secondary "/><span>Lorem ipsum dolor sit amet consectetur.</span></h3>
            </div>
            <div className=" flex items-center justify-center"><Button>Continue With Premium</Button></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
