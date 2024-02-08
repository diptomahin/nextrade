import DarkButton from "@/components/library/buttons/DarkButton";
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
    <form onSubmit={handleSubmit} className="text-sm mt-5 text-white">
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Currency
          </label>
          <select
            name="currency"
            id=""
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
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
          <label htmlFor="" className="font-medium">
            Amount
          </label>
          <input
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="amount"
            id=""
            placeholder="amount"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 my-5">
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Bank Account Number
          </label>
          <input
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="accountNumber"
            id=""
            placeholder="bank Account Number"
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="" className="font-medium">
            Routing Number
          </label>
          <input
            className="bg-transparent w-full border border-darkThree focus:border-darkGray text-xs  mt-2 px-4 py-2 rounded-xl outline-none"
            type="text"
            name="routingNumber"
            id=""
            placeholder="routing number"
          />
        </div>
      </div>

      <DarkButton type="submit" className="w-full">
        Withdraw
      </DarkButton>
    </form>
  );
};

export default WithdrawForm;
