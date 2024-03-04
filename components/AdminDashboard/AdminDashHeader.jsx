"use client";
// react icons
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCoinFill } from "react-icons/ri";
import { MdPostAdd } from "react-icons/md";
import { GiProfit } from "react-icons/gi";

const AdminDashHeader = () => {
  return (
    <div className=" grid grid-cols-4 gap-4 text-white">
     
     {/* investment */}
      <div className=" p-5 rounded-md flex items-center gap-3 bg-white dark:bg-tertiary">
      <div className=' bg-primary text-white p-2 rounded-full'><GiTakeMyMoney size={30}/></div>
      <div>
          <p className='font-medium  text-primary'>Investment</p>
          <h2 className=' text-2xl font-bold '>$ 57820</h2>
      </div>
      </div>
      {/* total asset */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-gradient-to-bl  from-darkOne to-darkTwo">
      <div className=' bg-[#eb62d0] text-white p-2 rounded-full'><RiCoinFill size={30} /></div>
      <div>
          <p className='font-medium text-[#eb62d0]'>Total Asset</p>
          <h2 className=' text-2xl font-bold'>35</h2>
      </div>
      </div>
      {/* total post */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-gradient-to-bl  from-darkOne to-darkTwo">
     <div className=' bg-[#9568ff] text-white p-2 rounded-full'> <MdPostAdd size={30} /></div>
      <div>
          <p className='font-medium text-[#9568ff]'>Total Post</p>
          <h2 className=' text-2xl font-bold'>20</h2>
      </div>
      </div>
      {/* total profit */}
      <div className="g p-5 rounded-md flex items-center gap-3 bg-gradient-to-bl  from-darkOne to-darkTwo">
      <div className=' bg-[#3aba69] text-white p-2 rounded-full'><GiProfit size={30} /></div>
      <div>
          <p className='font-medium text-[#3aba69]'>Total Profit</p>
          <h2 className=' text-2xl font-bold '>$ 578520</h2>
      </div>
      </div>
      
    </div>
  );
};

export default AdminDashHeader;
