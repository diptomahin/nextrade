import React from "react";

const UsersInfo = ({ singleUser }) => {
  return (
    <div className="text-sm lg:text-base dark:text-white">
      <p className="xs:hidden">
        <span className="font-semibold">Email: </span>
        {singleUser.email}
      </p>
      <p>
        <span className="font-semibold">User ID: </span>
        {singleUser.userID}
      </p>
      <p>
        <span className="font-semibold">Created At: </span>
        {singleUser?.createdAt?.day}/{singleUser?.createdAt?.month}/
        {singleUser?.createdAt?.year}
      </p>
      <p>
        <span className="font-semibold">Address: </span>
        {singleUser.address ? singleUser.address : "N/A"}
      </p>
      <p>
        <span className="font-semibold">Phone: </span>
        {singleUser.phone ? singleUser.phone : "N/A"}
      </p>
      <p>
        <span className="font-semibold">Balance: </span>${singleUser.balance}
      </p>
      <p>
        <span className="font-semibold">Total Transactions: </span>
        {singleUser.depositWithdrawData?.length
          ? singleUser.depositWithdrawData.length
          : "0"}{" "}
        times
      </p>
      {singleUser.lastUpdate && (
        <p>
          <span className="font-semibold">Last update: </span>
          {singleUser.lastUpdate.day}/{singleUser.lastUpdate.month}/
          {singleUser.lastUpdate.year}
        </p>
      )}
    </div>
  );
};

export default UsersInfo;
