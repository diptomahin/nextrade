import TransactionTable from "@/components/traders_comp/wallet/TransactionTable";
import DepositWithdrawSection from "../../../components/traders_comp/wallet/deposit-withdraw/DepositWithdrawSection";
import Rechart from "@/components/traders_comp/wallet/Rechart";
import BalanceSection from "../../../components/traders_comp/wallet/BalanceSection";

// add title in metadata
export const metadata = {
  title: "Wallet - Dashboard",
  description: "About page from Nextrade",
};

const Wallet = () => {
  return (
    <div className="flex flex-col 2xl:flex-row justify-between gap-5 w-full">
      <div className="2xl:w-9/12 flex flex-col gap-5">
        <BalanceSection />

        <TransactionTable />
      </div>

      <div className="2xl:w-5/12 3xl:w-4/12 flex flex-col gap-5">
        <DepositWithdrawSection />

        {/* Transaction Report */}
        <div className="w-full p-5 bg-[#21212f] text-white rounded-xl">
          <h1 className="text-xl text-center font-bold mb-5">
            Transaction Report
          </h1>
          <Rechart />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
