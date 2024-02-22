"use client";
import useTransactionData from "@/hooks/useTransactionData";
import useUserData from "@/hooks/useUserData";
import { FaCreditCard } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { RiLuggageDepositFill } from "react-icons/ri";

const BalanceSection = () => {
  const { userData, userDataLoading, userDataPending, userDataError } =
    useUserData();

  const {
    transactionsData,
    transactionsDataLoading,
    transactionsDataPending,
    transactionsDataError,
  } = useTransactionData();

  if (
    userDataLoading ||
    userDataPending ||
    userDataError ||
    transactionsDataLoading ||
    transactionsDataPending ||
    transactionsDataError
  ) {
    return;
  }

  const totalDeposit = transactionsData?.reduce((acc, obj) => {
    if (obj?.deposit !== undefined) {
      // Added safe navigation operator ?.
      acc += obj.deposit;
    }
    return acc;
  }, 0);

  const totalWithdraw = transactionsData?.reduce((acc, obj) => {
    if (obj?.withdraw !== undefined) {
      // Added safe navigation operator ?.
      acc += obj.withdraw;
    }
    return acc;
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 4xl:grid-cols-3 justify-between gap-5">
      {/* total balance */}
      <div className="w-full p-5 bg-primary rounded flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Total Balance</h3>
          <h3 className="text-xl font-semibold">
            $ {parseFloat(userData?.balance).toFixed(2) || "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <MdAccountBalance className="text-4xl" />
        </div>
      </div>

      {/* total deposit */}
      <div className="w-full p-5 bg-thirdGreen rounded flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Total Deposit</h3>
          <h3 className="text-xl font-semibold">
            $ {totalDeposit ? totalDeposit?.toFixed(2) : "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <RiLuggageDepositFill className="text-4xl" />
        </div>
      </div>

      {/* total withdraw */}
      <div className="w-full p-5 bg-fourthPink rounded flex items-center justify-between gap-3">
        <div>
          <h3 className="font-medium">Total Withdraw</h3>
          <h3 className="text-xl font-semibold">
            $ {totalWithdraw ? totalWithdraw?.toFixed(2) : "0.00"}
          </h3>
        </div>
        <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full">
          <FaCreditCard className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
