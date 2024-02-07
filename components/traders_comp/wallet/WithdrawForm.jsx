// const WithdrawForm = () => {
//   return (
//     <form className="mt-5">
//       <label htmlFor="" className="font-semibold ml-4">
//         Amount
//       </label>
//       <input
//         // onChange={(e) => setAmount(e.target.value)}
//         className="w-full border-2 mt-3 mb-8 px-4 py-2 rounded-xl"
//         type="text"
//         name="amount"
//         id=""
//         placeholder="amount"
//       />
//       <button
//         className="btn btn-sm h-10 w-full bg-primary/90 focus:bg-primary ext-white border-none rounded-xl py-[6px] text-base mt-5"
//         type="submit"
//       >
//         Withdraw
//       </button>
//     </form>
//   );
// };
// export default WithdrawForm;

import { useState } from "react";

const WithdrawForm = () => {
  const [amount, setAmount] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [currency, setCurrency] = useState("usd");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/create-payout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          bankAccountNumber,
          routingNumber,
          currency,
        }),
      });

      if (response.ok) {
        console.log("Payout successful!");
      } else {
        console.error("Payout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-sm mt-5">
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium ml-4">
            Select Currency
          </label>
          <select
            name="currency"
            id=""
            className="w-full border focus:border-primary text-xs  mt-1 px-4 py-2 rounded-xl outline-none"
          >
            <option value="" disabled selected>
              select currency
            </option>
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
            <option value="INR">INR</option>
          </select>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium ml-4">
            Withdraw Amount
          </label>
          <input
            className="w-full border focus:border-primary text-xs  mt-1 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="withdrawAmount"
            id=""
            placeholder="withdraw amount"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium ml-4">
            Bank Account Number
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border focus:border-primary text-xs mt-1 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="accountNumber"
            id=""
            placeholder="bank Account Number"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium ml-4">
            Routing Number
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border focus:border-primary text-xs mt-1 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="routingNumber"
            id=""
            placeholder="routing number"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-sm h-10 w-full bg-primary/90 focus:bg-primary text-white border-none rounded-xl py-[6px] text-base"
      >
        Withdraw
      </button>
    </form>
  );
};

export default WithdrawForm;
