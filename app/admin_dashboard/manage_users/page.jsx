"use client"
import PeopleIcon from '@mui/icons-material/People';
import { FaUserTie } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
const ManageUsers = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5">
        {/* total users */}
        <div className="w-full p-5 bg-[#40a0ff] rounded-xl flex justify-between items-center">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Users</h3>
            <h3 className="text-2xl font-semibold">20</h3>
          </div>
          <PeopleIcon sx={{ fontSize: "50px" }} />
        </div>

        {/* total traders */}
        <div className="w-full p-5 bg-[#78c350] rounded-xl flex justify-between items-center">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Trader</h3>
            <h3 className="text-2xl font-semibold">20</h3>
          </div>
          <FaUserTie className='text-5xl' />
        </div>

        {/* total admins */}
        <div className="w-full p-5 bg-[#ff5252] rounded-xl flex justify-between items-center">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Admin</h3>
            <h3 className="text-2xl font-semibold">20</h3>
          </div>
          <MdAdminPanelSettings className='text-5xl' />
        </div>
      </div>
    </div>
  )


};

export default ManageUsers;
