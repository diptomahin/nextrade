import React from 'react';

import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const TradingGraph = (params) => {
  console.log(params)
    return (
        <div className="w-full h-96 2xl:h-[70vh] xl:w-3/4 ">
        <AdvancedRealTimeChart
          width="100%"
          height="100%"
          autosize
          symbol={`${params.value}`}
          interval={20}
          range="1M"
          timezone="UTC"
          theme="light"
          style={2}
          locale="en"
          toolbar_bg="#f1f3f6"
          enable_publishing={false}
          hide_top_toolbar={false}
          hide_legend={true}
          withdateranges={false}
          hide_side_toolbar={true}
          details={false}
          hotlist={false}
          calendar={false}
          studies={[]}
          disabled_features={[]}
          enabled_features={[]}
          container_id="advanced-chart-widget-container"
        />
      </div>
    );
};

export default TradingGraph;