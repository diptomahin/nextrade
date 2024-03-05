"use client";
import BalanceSection from "@/components/traders_comp/wallet/BalanceSection";
import DepositWithdrawSection from "@/components/traders_comp/wallet/DepositWithdrawSection";
import TransactionTable from "@/components/traders_comp/wallet/TransactionTable";
import useSecureAPI from "@/hooks/useSecureAPI";
import useSpecificTransactionData from "@/hooks/useSpecificTransactionData";
import useUserData from "@/hooks/useUserData";
import React, { useState } from "react";

const WalletPage = () => {
  const [dynamicSearch, setDynamicSearch] = useState("");

  const secureAPI = useSecureAPI();
  const {
    userData,
    refetchUserData,
    userDataLoading,
    userDataPending,
    userDataError,
  } = useUserData();

  const {
    specificTransactionsData,
    refetchSpecificTransactionsData,
    SpecificTransactionsDataLoading,
    SpecificTransactionsDataPending,
    SpecificTransactionsDataError,
  } = useSpecificTransactionData(dynamicSearch);
  refetchSpecificTransactionsData();

  if (
    userDataLoading ||
    userDataPending ||
    userDataError ||
    SpecificTransactionsDataLoading ||
    SpecificTransactionsDataPending ||
    SpecificTransactionsDataError
  ) {
    return;
  }
  return (
    <>
      <div className="col-span-full 2xl:col-span-8 3xl:col-span-9 flex flex-col gap-7">
        <BalanceSection userData={userData} />

        <TransactionTable
          secureAPI={secureAPI}
          setDynamicSearch={setDynamicSearch}
          specificTransactionsData={specificTransactionsData}
          refetchSpecificTransactionsData={refetchSpecificTransactionsData}
        />
      </div>

      <div className="col-span-full 2xl:col-span-4 3xl:col-span-3">
        <DepositWithdrawSection
          userData={userData}
          refetchUserData={refetchUserData}
          refetchSpecificTransactionsData={refetchSpecificTransactionsData}
        />
      </div>
    </>
  );
};

export default WalletPage;
