"use client";
import DepositForm from "@/components/traders_comp/wallet/DepositForm";
import WithdrawForm from "@/components/traders_comp/wallet/WithdrawForm";
import { Elements } from "@stripe/react-stripe-js";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./depositWithdrawTab.css";
import { loadStripe } from "@stripe/stripe-js";
import useUserData from "@/hooks/useUserData";
import useSpecificTransactionData from "@/hooks/useSpecificTransactionData";

const stripePromise = loadStripe(
  "pk_test_51OlajqDiMQeSaa5LxC7tWUKZSGttpwdEYpHonWb6QkYttv3vgJlGazlArbsWPutWsDsua0zPbK9oUvEYYspfs0Rf00viBhriC3"
);
const DepositWithdrawSection = () => {
  const {
    userData,
    refetchUserData,
    userDataLoading,
    userDataPending,
    userDataError,
  } = useUserData();

  const {
    refetchSpecificTransactionsData,
    SpecificTransactionsDataLoading,
    SpecificTransactionsDataPending,
    SpecificTransactionsDataError,
  } = useSpecificTransactionData();

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
    <div className="w-full p-5 bg-gradient-to-bl from-darkOne to-darkTwo border border-darkThree rounded">
      <Tabs>
        <TabList className="text-xl flex items-center justify-center gap-10 font-medium">
          <Tab className="font-semibold border-none outline-none cursor-pointer">
            Deposit
          </Tab>
          <Tab className="font-semibold border-none outline-none cursor-pointer">
            Withdraw
          </Tab>
        </TabList>

        <TabPanel>
          <Elements stripe={stripePromise}>
            <DepositForm
              refetchUserData={refetchUserData}
              refetchSpecificTransactionsData={refetchSpecificTransactionsData}
            />
          </Elements>
        </TabPanel>
        <TabPanel>
          {userData && userData.balance <= 10 ? (
            <div className="flex flex-col items-center justify-center text-center my-10">
              <h4 className="text-xl 2xl:text-2xl font-bold">
                Please deposit first
              </h4>
              <p className="text-sm 2xl:text-base">
                Your account balance must meet or exceed{" "}
                <span className="font-semibold text-secondary">$10</span> to
                initiate a withdrawal.
              </p>
            </div>
          ) : (
            <Elements stripe={stripePromise}>
              <WithdrawForm
                refetchUserData={refetchUserData}
                refetchSpecificTransactionsData={
                  refetchSpecificTransactionsData
                }
                totalBalance={userData?.balance}
              />
            </Elements>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DepositWithdrawSection;
