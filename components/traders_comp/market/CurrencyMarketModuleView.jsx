import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./market.css";

const CurrencyMarketModuleView = ({ assets }) => {
  return (
    <div className="grid lg:grid-cols-2  3xl:grid-cols-3 gap-6">
      {assets.map((asset, idx) => (
        <Link key={idx} href={`/dashboard/market/${asset.key}`}>
          <div className="rounded-[30px] coinBg border bg-zinc-100 border-zinc-300 dark:border-none dark:bg-secondary p-6 space-y-4 hover:scale-105 transition-transform cursor-pointer ease-in">
            <div className="flex gap-2 items-center">
              <Image width={40} height={40} src={asset.icon} alt="coin-icon" />
              <span className="bg-primary/40 dark:bg-sky-100/10 px-1 py-[2px] rounded text-black dark:text-primary text-xs">
                {asset.key}
              </span>
            </div>
            <h3 className="text-xl font-semibold">{asset.name}</h3>
            <p>Current Price: ${asset.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CurrencyMarketModuleView;
