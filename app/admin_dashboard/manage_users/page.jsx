"use client"
import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import PeopleIcon from '@mui/icons-material/People';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import Image from 'next/image';
import { FaUserCircle, FaUserTie } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const ManageUsers = () => {

  const { user, loading } = useAuth();

  const {
    data: allUser = [],
    refetch,
    isPending,
    isLoading,
  } = useSecureFetch(`/all-users`, "userBalance");

  console.log(allUser)
  const traderAccounts = allUser.filter(user => user.role === "trader");
  const adminAccounts = allUser.filter(admin => admin.role === "admin");



  return (
    <div>
      <h1 className='text-3xl font-semibold'>Manage Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5 my-6">
        {/* total users */}
        <div className="w-full p-5 bg-[#40a0ff] rounded-xl flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Users</h3>
            <h3 className="text-2xl font-semibold">{allUser.length}</h3>
          </div>
          <PeopleIcon sx={{ fontSize: "50px" }} />
        </div>

        {/* total traders */}
        <div className="w-full p-5 bg-[#5dad3e] rounded-xl flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Trader</h3>
            <h3 className="text-2xl font-semibold">{traderAccounts.length}</h3>
          </div>
          <FaUserTie className='text-5xl' />
        </div>

        {/* total admins */}
        <div className="w-full p-5 bg-[#6c52ff] rounded-xl flex justify-between items-center text-white">
          <div className="font-medium">
            <h3 className='text-lg font-semibold'>Total Admin</h3>
            <h3 className="text-2xl font-semibold">{adminAccounts.length}</h3>
          </div>
          <MdAdminPanelSettings className='text-5xl' />
        </div>
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        {
          allUser.map(singleUser => (
            <div key={singleUser._id} className='min-w-[200px]'>
              <Accordion sx={{border: "1px solid #40a0ff", boxShadow:"0px 0px 0px 0px", borderRadius:"20px"}}>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{ display:"flex", justifyContent:"space-between", overflowX:"hidden"}}
                >
                  <div className='flex items-center gap-3'>
                    {singleUser?.photoURL ? (
                      <Image
                        src={singleUser?.photoURL}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="user photo"
                      />
                    ) : (
                      <FaUserCircle className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`} />
                    )}
                    <div className='text-sm lg:text-base'>
                      <h1 className='font-semibold'>{singleUser.name} <span className={`ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin" ? "bg-[#6c52ff]" : singleUser.role === "trader" ? "bg-[#5dad3e]" : "bg-[#40a0ff]"}`}>{singleUser.role}</span></h1>
                      <h1 className='hidden xs:block'>{singleUser.email}</h1>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <p className='xs:hidden'><span className='font-semibold'>Email: </span>{singleUser.email}</p>
                    <p><span className='font-semibold'>User ID: </span>{singleUser.userID}</p>
                    <p><span className='font-semibold'>Created At: </span>{singleUser.createdAt}</p>
                    <p><span className='font-semibold'>Balance: </span>${singleUser.balance}</p>
                  </div>
                </AccordionDetails>
              </Accordion>

            </div>
          ))
        }
      </div>
    </div>
  )


};

export default ManageUsers;
