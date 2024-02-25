const QuickTrade = () => {
  return (
    <div className="md:col-span-6 xl:col-span-3 w-full h-96 bg-gradient-to-br from-darkOne to-darkTwo hover:bg-gradient-to-tl p-5 rounded">
      <div className="flex items-center justify-between">
        <h3>Quick trade</h3>
        <div className="relative flex items-center bg-darkBG rounded">
          <button className="">Buy</button>
          <button className="">Sell</button>
        </div>
      </div>
    </div>
  );
};

export default QuickTrade;
