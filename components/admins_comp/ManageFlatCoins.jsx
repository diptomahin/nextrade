import Image from "next/image";


const ManageFlatCoins = ({ assets }) => {
    return (
        <div className='flex gap-6 flex-wrap my-6'>
            {assets.map((asset, idx) => (
                <div key={idx} className='rounded-lg p-6 space-y-4 min-w-[280px] relative bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree'>
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
                    <p className=''>Current value: {parseFloat(asset.price).toFixed(2)}{" "}<span className="text-xs text-yellow-400">{asset.key}/USD</span></p>
                </div>
            ))}
        </div>
    );
};

export default ManageFlatCoins;