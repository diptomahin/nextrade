"use client"
import useAuth from '@/hooks/useAuth';
import useSecureFetch from '@/hooks/useSecureFetch';
import PeopleIcon from '@mui/icons-material/People';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, Tab, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import { FaUserCircle, FaUserTie } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useSecureAPI from '@/hooks/useSecureAPI';
import UsersInfo from '@/components/admins_comp/UsersInfo';
const ManageUsers = () => {

  const { user, loading } = useAuth();
  const [value, setValue] = useState('1');
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPhoto, setUserPhoto] = useState("")
  const [userRole, setUserRole] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const secureAPI = useSecureAPI();

  const {
    data: allUser = [],
    refetch,
    isPending,
    isLoading,
  } = useSecureFetch(`/all-users`, "userBalance");

  console.log(allUser)
  const traderAccounts = allUser.filter(user => user.role === "trader");
  const adminAccounts = allUser.filter(admin => admin.role === "admin");


  const [open, setOpen] = useState(false);

  const handleClickOpen = (singleUser) => {
    setOpen(true);
    setUserName(singleUser.name)
    setUserEmail(singleUser.email)
    setUserPhoto(singleUser.photo)
    setUserRole(singleUser.role)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTypeChange = (event) => {
    setUserRole(event.target.value);
  };

  const handleSubmitChange = e => {
    e.preventDefault();
    const formData = e.target;
    const role = userRole

    secureAPI.patch(`/all-users/${userEmail}/${userRole}`)
      .then((res) => {
        refetch();
        if (res.data.modifiedCount) {
          Swal.fire({
            title: `Edit successful!`,
            text: `${userName} has been promoted to ${role}!`,
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: `failed!`,
          text: `Please try again`,
          icon: "error",
        });
      });

    handleClose();
  }



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
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: 'divider', marginBottom: "20px" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="All Users" sx={{ px: { xs: 1, md: 3 }, }} value="1" />
              <Tab label="Traders" sx={{ px: { xs: 1, md: 3 }, }} value="2" />
              <Tab label="Admins" sx={{ px: { xs: 1, md: 3 }, }} value="3" />
            </TabList>
          </Box>

          {/* all users */}
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
              {
                allUser.map(singleUser => (
                  <div key={singleUser._id} className='min-w-[200px]'>
                    <Accordion sx={{ border: "1px solid #40a0ff", boxShadow: "0px 0px 0px 0px", borderRadius: "20px" }}>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ display: "flex", justifyContent: "space-between", overflowX: "hidden" }}
                      >
                        <div className='flex items-center gap-2 md:gap-3'>
                          {singleUser?.photo ? (
                            <Image
                              src={singleUser?.photo}
                              width={40}
                              height={40}
                              className="rounded-full"
                              alt="user photo"
                            />
                          ) : (
                            <FaUserCircle className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`} />
                          )}
                          <div className='text-sm lg:text-base'>
                            <h1 className='font-semibold'>{singleUser.name} <span className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin" ? "bg-[#6c52ff]" : singleUser.role === "trader" ? "bg-[#5dad3e]" : "bg-[#40a0ff]"}`}>{singleUser.role}</span></h1>
                            <h1 className='hidden xs:block'>{singleUser.email}</h1>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <UsersInfo singleUser={singleUser}></UsersInfo>
                        <div className="pt-5">
                          <Button onClick={() => handleClickOpen(singleUser)} sx={{ width: "100%" }} variant="contained" startIcon={<ManageAccountsIcon />}>Manage Account</Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))
              }
            </div>
          </TabPanel>

          {/* all traders */}
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
              {
                traderAccounts.map(singleUser => (
                  <div key={singleUser._id} className='min-w-[200px]'>
                    <Accordion sx={{ border: "1px solid #40a0ff", boxShadow: "0px 0px 0px 0px", borderRadius: "20px" }}>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ display: "flex", justifyContent: "space-between", overflowX: "hidden" }}
                      >
                        <div className='flex items-center gap-2 md:gap-3'>
                          {singleUser?.photo ? (
                            <Image
                              src={singleUser?.photo}
                              width={40}
                              height={40}
                              className="rounded-full"
                              alt="user photo"
                            />
                          ) : (
                            <FaUserCircle className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`} />
                          )}
                          <div className='text-sm lg:text-base'>
                            <h1 className='font-semibold'>{singleUser.name} <span className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin" ? "bg-[#6c52ff]" : singleUser.role === "trader" ? "bg-[#5dad3e]" : "bg-[#40a0ff]"}`}>{singleUser.role}</span></h1>
                            <h1 className='hidden xs:block'>{singleUser.email}</h1>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <UsersInfo singleUser={singleUser}></UsersInfo>
                        <div className="pt-5">
                          <Button onClick={() => handleClickOpen(singleUser)} sx={{ width: "100%" }} variant="contained" startIcon={<ManageAccountsIcon />}>Manage Account</Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))
              }
            </div>
          </TabPanel>


          {/* all admins */}
          <TabPanel sx={{ padding: "0px", width: "100%" }} value="3">
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-6'>
              {
                adminAccounts.map(singleUser => (
                  <div key={singleUser._id} className='min-w-[200px]'>
                    <Accordion sx={{ border: "1px solid #40a0ff", boxShadow: "0px 0px 0px 0px", borderRadius: "20px" }}>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ display: "flex", justifyContent: "space-between", overflowX: "hidden" }}
                      >
                        <div className='flex items-center gap-2 md:gap-3'>
                          {singleUser?.photo ? (
                            <Image
                              src={singleUser?.photo}
                              width={40}
                              height={40}
                              className="rounded-full"
                              alt="user photo"
                            />
                          ) : (
                            <FaUserCircle className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`} />
                          )}
                          <div className='text-sm lg:text-base'>
                            <h1 className='font-semibold'>{singleUser.name} <span className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin" ? "bg-[#6c52ff]" : singleUser.role === "trader" ? "bg-[#5dad3e]" : "bg-[#40a0ff]"}`}>{singleUser.role}</span></h1>
                            <h1 className='hidden xs:block'>{singleUser.email}</h1>
                          </div>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <UsersInfo singleUser={singleUser}></UsersInfo>
                        <div className="pt-5">
                          <Button onClick={() => handleClickOpen(singleUser)} sx={{ width: "100%" }} variant="contained" startIcon={<ManageAccountsIcon />}>Manage Account</Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                ))
              }
            </div>
          </TabPanel>
        </TabContext>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (e) => handleSubmitChange(e)
        }}
      >
        <DialogTitle>
          <div className='flex items-center gap-2 md:gap-3'>
            {userPhoto ? (
              <Image
                src={userPhoto}
                width={40}
                height={40}
                className="rounded-full"
                alt="user photo"
              />
            ) : (
              <FaUserCircle className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`} />
            )}
            <div className='text-sm lg:text-base'>
              <h1 className='font-semibold'>{userName} <span className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${userRole === "admin" ? "bg-[#6c52ff]" : userRole === "trader" ? "bg-[#5dad3e]" : "bg-[#40a0ff]"}`}>{userRole}</span></h1>
              <h1 className='hidden xs:block'>{userEmail}</h1>
            </div>
          </div>
        </DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <FormControl required sx={{ width: "100%", marginTop: "15px" }}>
            <InputLabel id="demo-simple-select-helper-label">User Role</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={userRole}
              label="Coin type"
              onChange={handleTypeChange}
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"trader"}>Trader</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
            </Select>
          </FormControl>
          <Accordion sx={{ border: "0.2px solid #b4b1b1" }}>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{ display: "flex", justifyContent: "space-between", overflowX: "hidden" }}
            >
              <p>Send Mail</p>
            </AccordionSummary>
            <AccordionDetails>

            </AccordionDetails>
          </Accordion>
          <Button variant='outlined' color='error' endIcon={<WarningAmberIcon />}>Remove Account</Button>
        </DialogContent>
        <DialogActions sx={{ padding: "15px" }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Done</Button>
        </DialogActions>
      </Dialog>

    </div>
  )


};

export default ManageUsers;
