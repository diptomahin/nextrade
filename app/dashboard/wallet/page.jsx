"use client"

import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';


const Wallet = () => {
    return (
        <Container className="flex justify-between gap-5 w-full p-2 bg-[#e9eef1]">
            <div className="w-9/12 flex flex-col gap-5">
                <div className="p-2 bg-white border rounded-lg">
                    <div className="flex justify-between">
                        <div>
                            <h1 className='text-xl font-bold'>Wallet</h1>
                            <p className="text-sm">Update 16/02/2022 at 02:30PM</p>
                        </div>
                        <div>
                            <Button> <BorderColorIcon className=" text-white" /> Edit</Button>
                            <Button className="ml-5"> <AddIcon className=" text-white" /> Add New Wallet</Button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-10">
                        <div>
                            <p className="text-sm pb-2"><CardTravelOutlinedIcon className=" text-gray-500"/> Wallet Balance</p>
                            <div className="flex gap-5 justify-center">
                                <h1 className='text-3xl font-bold'>$30,455.00</h1>
                                <Button className="button-sm">Edit <VisibilityOffOutlinedIcon className=" text-white" /></Button>
                            </div>
                        </div>
                        <div className="bg-[#e9eef1] border rounded-lg p-2">
                            <h6><AddCardOutlinedIcon className=" text-gray-500"/> Total Deposited <span className="text-xl font-semibold ml-5"><FileDownloadOutlinedIcon className=" text-green-600" /> $32,455.12</span></h6>

                            <h6><AvTimerOutlinedIcon className=" text-gray-500"/> Total Withdrawals <span className="text-xl font-semibold ml-5"><FileUploadOutlinedIcon className=" text-red-600" /> $2,455.12</span></h6>
                        </div>
                    </div>
                </div>

                {/* Transaction History */}
                <div className="border p-2 bg-white rounded-lg">
                    <h1 className='text-xl font-bold'>Transaction History</h1>
                </div>
            </div>

            {/* Select Currency & Payment */}
            <div className="w-4/12 border p-2 bg-white rounded-lg">
                <h1 className='text-xl text-center font-bold'>Select Currency & Payment</h1>
            </div>
        </Container>
    );
};

export default Wallet;