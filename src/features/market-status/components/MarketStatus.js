import React from "react";
import moment from "moment";
import "./MarketStatus.css";

const marketSign = value => (value === null ? "market---moon" : "market---sun");
const formatDate = date => new Date(date);
export const MarketStatus = ({ stock, keyStats }) => {
  const UKTime = formatDate(stock.latestUpdate);
  const USTime = formatDate(UKTime).toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  const correctFormat = moment(new Date(USTime)).format("lll");
  const marketStatus = keyStats.open === null ? "Market Closed" : "Market Open";

  return (
    <div className="market">
      <p>
        <span className="market__text">
          Real-Time Price as of {correctFormat} EST
        </span>{" "}
        <span className={marketSign(keyStats.open)}> {marketStatus}</span>
      </p>
    </div>
  );
};
