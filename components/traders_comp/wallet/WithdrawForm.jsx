const WithdrawForm = () => {
  return (
    <form className="mt-5">
      <label htmlFor="" className="font-semibold ml-4">
        Amount
      </label>
      <input
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border-2 mt-3 mb-8 px-4 py-2 rounded-xl"
        type="text"
        name="amount"
        id=""
        placeholder="amount"
      />
      <button
        className="w-full bg-primary/95 hover:bg-primary text-white border-none rounded-xl py-[6px] text-lg"
        type="submit"
      >
        Withdraw
      </button>
    </form>
  );
};

export default WithdrawForm;
