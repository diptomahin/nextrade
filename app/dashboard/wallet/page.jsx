import TransactionTable from "@/components/traders_comp/wallet/TransactionTable";
import DepositWithdrawSection from "./DepositWithdrawSection";
import Rechart from "@/components/traders_comp/wallet/Rechart";
import BalanceSection from "./BalanceSection";

// add title in metadata
export const metadata = {
  title: "Wallet - Dashboard",
  description: 'About page from Nextrade',
};

const Wallet = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-5 w-full">
      <div className="xl:w-9/12 flex flex-col gap-5">
        <BalanceSection />

        <TransactionTable />
      </div>

      <div className="xl:w-5/12 2xl:w-4/12">
        <DepositWithdrawSection />

        {/* Transaction Report */}
        <Rechart />
      </div>
    </div>
  );
};

export default Wallet;
