"use client";
import './adminDashboard.css'
// react icons
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCoinFill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { GiProfit } from "react-icons/gi";

const AdminDashHeader = () => {
  return (
    <div className=" grid grid-cols-4 gap-5 text-white">
     
     {/* investment */}
      <div className="cardBg p-5 rounded-md flex items-center gap-3 ">
      <GiTakeMyMoney />
      <div>
          <h2 className=' text-2xl font-bold'>$ 57820</h2>
          <p className='font-medium text-gray-300'>Investment</p>
      </div>
      </div>
      {/* total asset */}
      <div className=" cardBg p-5 rounded-md flex items-center gap-3">
      <RiCoinFill />
      <div>
          <h2 className=' text-2xl font-bold'>$ 57820</h2>
          <p className='font-medium text-gray-300'>Total Asset</p>
      </div>
      </div>
      {/* total post */}
      <div className=" cardBg p-5 rounded-md flex items-center gap-3">
      <MdPostAdd />
      <div>
          <h2 className=' text-2xl font-bold'>$ 57820</h2>
          <p className='font-medium text-gray-300'>Investment</p>
      </div>
      </div>
      {/* total profit */}
      <div className=" cardBg p-5 rounded-md flex items-center gap-3">
      <GiProfit />
      <div>
          <h2 className=' text-2xl font-bold'>$ 57820</h2>
          <p className='font-medium text-gray-300'>Investment</p>
      </div>
      </div>
      
    </div>
  );
};

export default AdminDashHeader;
