"use client"

import Button from "@/components/library/Button/Button";
import Container from "@/components/library/Container";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddIcon from '@mui/icons-material/Add';


const Wallet = () => {
    return (
        <Container className="flex justify-between gap-5 w-full p-2 bg-[#e9eef1]">
            <div className="w-9/12 flex flex-col gap-5">
                <div className="flex p-2 border bg-white rounded-lg justify-between">
                    <div>
                        <h1 className='text-xl font-bold'>Wallet</h1>
                        <p className="text-sm">Update 16/02/2022 at 02:30PM</p>
                    </div>
                    <div>
                        <Button> <BorderColorIcon className=" text-white"/> Edit</Button>
                        <Button className="ml-5"> <AddIcon className=" text-white"/> Add New Wallet</Button>
                    </div>
                </div>
                <div className="border p-2 bg-white rounded-lg">
                    <h1 className='text-xl font-bold'>Transaction History</h1>
                </div>
            </div>
            <div className="w-4/12 border p-2 bg-white rounded-lg">
                <h1 className='text-xl text-center font-bold'>Select Currency & Payment</h1>
            </div>
        </Container>
    );
};

export default Wallet;