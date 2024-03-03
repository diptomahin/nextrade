"use client";
import DarkButton from "@/components/library/buttons/DarkButton";
import useInvestmentHistory from "@/hooks/useInvestmentHistory";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import emptyIcon from "../../../assets/emptyIcon.png";

const SideHistory = () => {
  const {
    investmentHistoryData,
    investmentHistoryLoading,
    investmentHistoryPending,
    investmentHistoryError,
  } = useInvestmentHistory();
  // Helper function to format time in 12-hour format
  const formatTime = (hours) => {
    return hours % 12 || 12; // Convert to 12-hour format
  };

  // Helper function to pad zero for single-digit minutes
  const padZero = (minutes) => {
    return minutes < 10 ? `0${minutes}` : minutes;
  };

  // Helper function to determine AM or PM
  const getAmPm = (hours) => {
    return hours >= 12 ? "PM" : "AM";
  };

  if (
    investmentHistoryError ||
    investmentHistoryLoading ||
    investmentHistoryPending
  ) {
    return;
  }
  return (
    <div className="w-full h-full flex flex-col gap-8 bg-white dark:bg-tertiary p-5 rounded-xl">
      <div className="flex items-center justify-between border-b pb-2 dark:border-b-darkThree">
        <h3 className="text-xl font-semibold">History</h3>
        <Link
          href="/dashboard/history"
          className="btn btn-sm h-10 bg-transparent hover:bg-primary/10 active:bg-primary/20 border-none font-medium text-primary"
        >
          See all history
        </Link>
      </div>
      {investmentHistoryData.length > 0 ? (
        investmentHistoryData.slice(0, 5).map((history) => (
          <div key={history._id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={history.assetImg}
                alt="assets-image"
                className="rounded-full overflow-hidden"
              />
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium">{history.assetName}</h4>
                <p className="text-xs text-darkGray">{history.detail}</p>
              </div>
            </div>
            <div className="text-darkGray text-xs flex flex-col gap-1 items-end whitespace-nowrap">
              {/* Time */}
              <span>
                {formatTime(history?.date?.hours || " ")}:
                {padZero(history?.date?.minutes || " ")}{" "}
                {getAmPm(history?.date?.hours || " ")}
              </span>
              {/* Date */}
              <span>
                {history?.date?.day || " "}-{history?.date?.month || " "}-
                {history?.date?.year || " "}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 py-24">
          <Image src={emptyIcon} width={70} height={70} alt=" Logo" />
          <h3 className="text-primary text-lg font-semibold text-center">
            No history data available !!!
          </h3>
        </div>
      )}
    </div>
  );
};

export default SideHistory;
