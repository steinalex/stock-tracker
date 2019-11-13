import React, { FC } from "react";
import moment from "moment";
import "./MarketStatus.css";
import { IKeyStats } from "../../key-stats/redux/actions";
import { IStockTicker } from "../../stock-ticker/redux/actions";

const marketSign = (value: boolean) =>
  value === false ? "market---moon" : "market---sun";

type MarketStatusProps = {
  stock: IStockTicker | undefined;
  keyStats: IKeyStats | null;
};

export const MarketStatus: FC<MarketStatusProps> = ({ stock, keyStats }) => {
  console.log(keyStats);
  const dateFormat = stock && moment(stock.latestUpdate).format("lll");
  const marketStatus =
    keyStats && keyStats.isUSMarketOpen === false
      ? "Market Closed"
      : "Market Open";

  return (
    <div className="market">
      <p>
        <span className="market__text">
          Real-Time Price as of {dateFormat} EST
        </span>
        {keyStats && (
          <span className={marketSign(keyStats.isUSMarketOpen)}>
            {marketStatus}
          </span>
        )}
      </p>
    </div>
  );
};
