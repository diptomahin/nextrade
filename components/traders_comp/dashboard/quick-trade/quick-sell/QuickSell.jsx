import { useState } from "react";

const QuickSell = () => {
  const [isLimitOpen, setIsLimitOpen] = useState(true);
  return (
    <div className="w-full mt-10 border">
      <div className="">
        <button onClick={() => setIsLimitOpen(true)}>Limit</button>
        <button onClick={() => setIsLimitOpen(false)}>Market</button>
      </div>
      {isLimitOpen ? <div>Limit</div> : <div>Market</div>}
    </div>
  );
};

export default QuickSell;
