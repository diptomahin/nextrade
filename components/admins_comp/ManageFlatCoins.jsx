import Image from "next/image";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import useSecureAPI from "@/hooks/useSecureAPI";
import Swal from "sweetalert2";

const ManageFlatCoins = ({ assets, refetch }) => {
    const secureAPI = useSecureAPI();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await secureAPI.delete(`/allCoins/${id}`)
                refetch()
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "product has been deleted.",
                        icon: "success",
                        timer: 1500
                    });
                }
            }
        });
    }
    return (
        <div className='flex gap-6 flex-wrap my-6'>
            {assets.map((asset, idx) => (
                // <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
                <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-indigo-100 '>
                    <div className="absolute right-2 flex flex-col gap-2">
                        <IconButton aria-label="delete">
                            <EditIcon className='text-gray-500' />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete(asset._id)}>
                            <DeleteIcon className='text-gray-500' />
                        </IconButton>
                    </div>
                    <p className='absolute top-4 left-4'>{idx + 1}.</p>
                    <div >
                        <Image
                            width={40}
                            height={40}
                            src={asset.icon}
                            alt="coin-icon"
                            className='mx-auto'
                        />
                        <p className='text-center text-lg font-semibold mt-3'>{asset.name}</p>
                    </div>
                    <p className='font-semibold'>Current value: {parseFloat(asset.price).toFixed(2)}{" "}<span className="text-xs text-indigo-700">{asset.key}/USD</span></p>
                </div>
            ))}
        </div>
    );
};

export default ManageFlatCoins;