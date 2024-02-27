"use client"
import React from 'react';
import useSecureFetch from "@/hooks/useSecureFetch";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Tab
} from "@mui/material";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import Swal from "sweetalert2";
import useSecureAPI from "@/hooks/useSecureAPI";
import DashButton from '../library/buttons/DashButton';
import ManageUserTopBar from './ManageUserTopBar';
import UsersInfo from './UsersInfo';


const ManageUserBody = () => {
    const [value, setValue] = useState("1");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [userRole, setUserRole] = useState("");
    const [userId, setUserId] = useState("");
    const [userUID, setUserUID] = useState("");
    const [emailText, setEmailText] = useState();
    const [emailSubject, setEmailSubject] = useState();
    const [errorMsg, setErrorMsg] = useState();

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

    // console.log(allUser)
    const traderAccounts = allUser.filter((user) => user.role === "trader");
    const adminAccounts = allUser.filter((admin) => admin.role === "admin");

    const [open, setOpen] = useState(false);

    const handleClickOpen = (singleUser) => {
        setOpen(true);
        setUserName(singleUser.name);
        setUserEmail(singleUser.email);
        setUserPhoto(singleUser.photo);
        setUserRole(singleUser.role);
        setUserId(singleUser._id);
        setUserUID(singleUser.userID);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (event) => {
        setUserRole(event.target.value);
    };

    const handleSubmitChange = (e) => {
        e.preventDefault();
        const formData = e.target;
        const role = userRole;

        secureAPI
            .patch(`/all-users/${userEmail}/${userRole}`)
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
    };

    const handleRemoveAccount = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const resf = await secureAPI.post(`/deleteUserFromFirebase/${userUID}`);
                // console.log(resf.data)
                if (resf.data.success) {
                    // console.log(resf.data.message);
                    const res = await secureAPI.delete(`/all-users/${id}`);
                    refetch();
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted successfully.",
                            icon: "success",
                            timer: 1500,
                        });
                    }
                } else {
                    Swal.fire({
                        title: "failed!",
                        text: "Some thing went wrong.",
                        icon: "error",
                        timer: 1500,
                    });
                }
            }
        });
        handleClose();
    };

    // console.log(emailText)

    const handleSendMail = e => {
        const usersEmail = userEmail // Change this to recipient's email address
        const subject = emailSubject;
        const body = emailText;
        // Construct mailto URL
        const mailtoUrl = `mailto:${usersEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        if (!emailSubject || !emailText) {
            setErrorMsg("please fill up the form!")
            return
        } else {
            // Open default email client
            window.location.href = mailtoUrl;
            setErrorMsg()
        }
    }
    return (
        <div>
            <ManageUserTopBar allUser={allUser} traderAccounts={traderAccounts} adminAccounts={adminAccounts} />
            <Box>
                <TabContext value={value}>
                    <Box
                        sx={{
                            borderBottom: 2,
                            borderColor: "#2c3750",
                            marginBottom: "20px",
                        }}
                    >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="All Users" sx={{ px: { xs: 1, md: 3 }, color: 'white' }} value="1" />
                            <Tab label="Traders" sx={{ px: { xs: 1, md: 3 }, color: 'white' }} value="2" />
                            <Tab label="Admins" sx={{ px: { xs: 1, md: 3 }, color: 'white' }} value="3" />
                        </TabList>
                    </Box>

                    {/* all users */}
                    <TabPanel sx={{ padding: "0px", width: "100%" }} value="1">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {allUser.map((singleUser) => (
                                <div key={singleUser._id} className="min-w-[200px] ">
                                    <Accordion
                                        className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded"
                                        sx={{
                                            border: "1px solid #40a0ff",
                                            boxShadow: "0px 0px 0px 0px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ArrowDownwardIcon style={{ color: 'white' }} />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                overflowX: "hidden",

                                            }}
                                        >
                                            <div className="flex items-center gap-2 md:gap-3">
                                                {singleUser?.photo ? (
                                                    <Image
                                                        src={singleUser?.photo}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                        alt="user photo"
                                                    />
                                                ) : (
                                                    <FaUserCircle
                                                        className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`}
                                                    />
                                                )}
                                                <div className="text-sm lg:text-base text-white">
                                                    <h1 className="font-semibold">
                                                        {singleUser.name ? singleUser.name : "No name"}{" "}
                                                        <span
                                                            className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin"
                                                                ? "bg-[#6c52ff]"
                                                                : singleUser.role === "trader"
                                                                    ? "bg-[#5dad3e]"
                                                                    : "bg-[#40a0ff]"
                                                                }`}
                                                        >
                                                            {singleUser.role}
                                                        </span>
                                                    </h1>
                                                    <h1 className="hidden xs:block text-gray-500">
                                                        {singleUser.email}
                                                    </h1>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails >
                                            <UsersInfo singleUser={singleUser}></UsersInfo>
                                            <div className="pt-5">
                                                <Button
                                                    onClick={() => handleClickOpen(singleUser)}
                                                    sx={{ width: "100%" }}
                                                    variant="contained"
                                                    startIcon={<ManageAccountsIcon />}
                                                >
                                                    Manage Account
                                                </Button>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                    {/* all traders */}
                    <TabPanel sx={{ padding: "0px", width: "100%" }} value="2">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {traderAccounts.map((singleUser) => (
                                <div key={singleUser._id} className="min-w-[200px]">
                                    <Accordion
                                        className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded"
                                        sx={{
                                            border: "1px solid #40a0ff",
                                            boxShadow: "0px 0px 0px 0px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                overflowX: "hidden",
                                            }}
                                        >
                                            <div className="flex items-center gap-2 md:gap-3">
                                                {singleUser?.photo ? (
                                                    <Image
                                                        src={singleUser?.photo}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                        alt="user photo"
                                                    />
                                                ) : (
                                                    <FaUserCircle
                                                        className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`}
                                                    />
                                                )}
                                                <div className="text-sm lg:text-base text-white">
                                                    <h1 className="font-semibold">
                                                        {singleUser.name}{" "}
                                                        <span
                                                            className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin"
                                                                ? "bg-[#6c52ff]"
                                                                : singleUser.role === "trader"
                                                                    ? "bg-[#5dad3e]"
                                                                    : "bg-[#40a0ff]"
                                                                }`}
                                                        >
                                                            {singleUser.role}
                                                        </span>
                                                    </h1>
                                                    <h1 className="hidden xs:block text-gray-400">
                                                        {singleUser.email}
                                                    </h1>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <UsersInfo singleUser={singleUser}></UsersInfo>
                                            <div className="pt-5">
                                                <Button
                                                    onClick={() => handleClickOpen(singleUser)}
                                                    sx={{ width: "100%" }}
                                                    variant="contained"
                                                    startIcon={<ManageAccountsIcon />}
                                                >
                                                    Manage Account
                                                </Button>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </TabPanel>

                    {/* all admins */}
                    <TabPanel sx={{ padding: "0px", width: "100%" }} value="3">
                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {adminAccounts.map((singleUser) => (
                                <div key={singleUser._id} className="min-w-[200px]">
                                    <Accordion
                                        className="bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded"
                                        sx={{
                                            border: "1px solid #40a0ff",
                                            boxShadow: "0px 0px 0px 0px",
                                            borderRadius: "20px",
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ArrowDownwardIcon sx={{ color: 'white' }} />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                overflowX: "hidden",
                                            }}
                                        >
                                            <div className="flex items-center gap-2 md:gap-3">
                                                {singleUser?.photo ? (
                                                    <Image
                                                        src={singleUser?.photo}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                        alt="user photo"
                                                    />
                                                ) : (
                                                    <FaUserCircle
                                                        className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`}
                                                    />
                                                )}
                                                <div className="text-sm lg:text-base text-white">
                                                    <h1 className="font-semibold">
                                                        {singleUser.name}{" "}
                                                        <span
                                                            className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${singleUser.role === "admin"
                                                                ? "bg-[#6c52ff]"
                                                                : singleUser.role === "trader"
                                                                    ? "bg-[#5dad3e]"
                                                                    : "bg-[#40a0ff]"
                                                                }`}
                                                        >
                                                            {singleUser.role}
                                                        </span>
                                                    </h1>
                                                    <h1 className="hidden xs:block text-gray-400">
                                                        {singleUser.email}
                                                    </h1>
                                                </div>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <UsersInfo singleUser={singleUser}></UsersInfo>
                                            <div className="pt-5">
                                                <Button
                                                    onClick={() => handleClickOpen(singleUser)}
                                                    sx={{ width: "100%" }}
                                                    variant="contained"
                                                    startIcon={<ManageAccountsIcon />}
                                                >
                                                    Manage Account
                                                </Button>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>

            <Dialog

                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: (e) => handleSubmitChange(e),
                }}

            >
                <DialogTitle>
                    <div className="flex items-center gap-2 md:gap-3 ">
                        {userPhoto ? (
                            <Image
                                src={userPhoto}
                                width={40}
                                height={40}
                                className="rounded-full"
                                alt="user photo"
                            />
                        ) : (
                            <FaUserCircle
                                className={`w-8 h-8 lg:w-12 lg:h-12 text-primary`}
                            />
                        )}
                        <div className="text-sm lg:text-base ">
                            <h1 className="font-semibold">
                                {userName ? userName : "No name"}{" "}
                                <span
                                    className={`ml-2 md:ml-5 rounded-lg px-2 py-1 text-white font-normal text-xs  ${userRole === "admin"
                                        ? "bg-[#6c52ff]"
                                        : userRole === "trader"
                                            ? "bg-[#5dad3e]"
                                            : "bg-[#40a0ff]"
                                        }`}
                                >
                                    {userRole}
                                </span>
                            </h1>
                            <h1 className="hidden xs:block">{userEmail}</h1>
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent
                    sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                    <FormControl required sx={{ width: "100%", marginTop: "15px" }}>
                        <InputLabel id="demo-simple-select-helper-label">
                            User Role
                        </InputLabel>
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
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                overflowX: "hidden",
                            }}
                        >
                            <p>Send Mail</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-col gap-4">
                                <p>Subject:</p>
                                <input type="text" onChange={(e) => setEmailSubject(e.target.value)} name="emailSubject" id="emailSubject" className="p-4 border border-1 rounded"></input>
                                <p>Message:</p>
                                <textarea onChange={(e) => setEmailText(e.target.value)} name="emailText" id="emailText" cols="30" rows="5" className="resize-none p-4 border border-1 rounded" ></textarea>
                                {
                                    errorMsg && <p className="text-red-700">{errorMsg}</p>
                                }
                                <DashButton onClick={handleSendMail}>Send</DashButton>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Button
                        variant="outlined"
                        color="error"
                        endIcon={<WarningAmberIcon />}
                        onClick={() => handleRemoveAccount(userId)}
                    >
                        Remove Account
                    </Button>
                </DialogContent>
                <DialogActions sx={{ padding: "15px" }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ManageUserBody;