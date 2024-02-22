"use client";
import useTransactionData from "@/hooks/useTransactionData";
import useUserData from "@/hooks/useUserData";
import { BiMoneyWithdraw } from "react-icons/bi";
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
      <div className="w-full p-5 bg-primary rounded flex flex-col justify-center gap-3">
        <h3 className="flex items-center gap-2 font-medium">
          <MdAccountBalance className="text-2xl" /> Total Balance
        </h3>
        <h3 className="text-2xl font-semibold">
          $ {parseFloat(userData?.balance).toFixed(2) || "0.00"}
        </h3>
      </div>

      {/* total deposit */}
      <div className="w-full p-5 bg-thirdGreen rounded flex flex-col justify-center gap-3">
        <h3 className="flex items-center gap-2 font-medium">
          <RiLuggageDepositFill className="text-2xl" /> Total Deposit
        </h3>
        <h3 className="text-2xl font-semibold">
          $ {totalDeposit ? totalDeposit?.toFixed(2) : "0.00"}
        </h3>
      </div>

      {/* total withdraw */}
      <div className="w-full p-5 bg-fourthPink rounded flex flex-col justify-center gap-3">
        <h3 className="flex items-center gap-2 font-medium">
          <BiMoneyWithdraw className="text-2xl" /> Total Withdraw
        </h3>

        <h3 className="text-2xl font-semibold">
          $ {totalWithdraw ? totalWithdraw?.toFixed(2) : "0.00"}
        </h3>
      </div>
    </div>
  );
};

export default BalanceSection;
