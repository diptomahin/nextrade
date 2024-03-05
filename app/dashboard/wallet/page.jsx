import WalletPage from "./WalletPage";

// add title in metadata
export const metadata = {
  title: "Wallet - Dashboard",
  description: "Wallet from Dashboard",
};

const Wallet = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
      <WalletPage />
    </div>
  );
};

export default Wallet;
