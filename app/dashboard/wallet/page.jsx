import WalletPage from "./WalletPage";

// add title in metadata
export const metadata = {
  title: "Wallet - Dashboard",
  description: "Wallet from Dashboard",
};

const Wallet = () => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-between gap-5 w-full">
      <WalletPage />
    </div>
  );
};

export default Wallet;
