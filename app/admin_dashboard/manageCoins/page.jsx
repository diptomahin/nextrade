import ManageCoinsBody from "@/components/admins_comp/ManageCoinsBody";

// add title in metadata
export const metadata = {
    title: "Manage coins - Dashboard",
    description: "Effortlessly manage cryptocurrencies with NexTrade's Manage Coins Dashboard. Admins can add, delete, and update coins to ensure accurate and up-to-date listings.",
};

const ManageCoins = () => {
    return (
        <ManageCoinsBody />
    )
}
export default ManageCoins;