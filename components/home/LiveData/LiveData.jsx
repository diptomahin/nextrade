"use client";
import React from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const LiveData = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-20">
      <h1 className="xl:text-3xl lg:text-4xl text-4xl my-2 text-primary font-bold mx-auto text-center">
        Get Market Info
      </h1>
      <p className="mt-1 mb-5 xl:w-96 text-center mx-auto font-medium text-gray-500">
        Real-time market data is continuous, such as stock prices and trading volumes.
      </p>
      <div className="w-full h-96 mb-10">
        <AdvancedRealTimeChart
          width="100%"
          height="100%"
          autosize
          interval="D"
          range="1M"
          timezone="UTC"
          theme="dark"
          style={1}
          locale="en"
          toolbar_bg="#f1f3f6"
          enable_publishing={false}
          hide_top_toolbar={false}
          hide_legend={false}
          withdateranges={false}
          hide_side_toolbar={false}
          allow_symbol_change={true}
          save_image={true}
          show_popup_button={false}
          details={false}
          hotlist={false}
          calendar={false}
          watchlist={[]}
          studies={[]}
          disabled_features={[]}
          enabled_features={[]}
          container_id="advanced-chart-widget-container"
        />
      </div>
    </div>
  );
};

export default LiveData;
