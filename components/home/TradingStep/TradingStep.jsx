"use client";
import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
//material icon import
import PersonIcon from "@mui/icons-material/Person";
import WalletIcon from "@mui/icons-material/Wallet";

const TradingStep = () => {
  return (
    <Container className=" md:flex items-center justify-between  lg:mt-32 ">
      {/* Trading step section content */}
      <div className="md:w-[600px]">
        <h1 className=" lg:text-4xl md:text-3xl text-4xl font-bold text-primary mb-5">
          Start Trading in <br /> Few Step
        </h1>
        <Button>Start Trading</Button>
      </div>
      <div className="md:mt-0 mt-10">
        <div className=" flex gap-6">
          <div className="space-y-6">
            {/* 1st cart */}
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-blue-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3 ">
                <PersonIcon className=" text-primary" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Add Fund wallet</h1>
                <p className=" text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* 2nd cart */}
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-red-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <WalletIcon className=" text-primary-red" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Add Fund wallet</h1>
                <p className=" text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 -mt-14">
            {/* 3rd cart */}
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-red-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <WalletIcon className=" text-primary-red" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Add Fund wallet</h1>
                <p className=" text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* 4th cart */}
            <div className=" lg:flex items-center gap-7 shadow-md lg:p-5 p-4   rounded-lg bg-slate-200">
              <div className=" bg-red-200  rounded-full w-16 h-16  flex justify-center items-center lg:mb-0 mb-3">
                <WalletIcon className=" text-primary-red" />
              </div>
              <div className=" flex-1  ">
                <h1 className=" font-bold text-lg">Add Fund wallet</h1>
                <p className=" text-gray-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TradingStep;
