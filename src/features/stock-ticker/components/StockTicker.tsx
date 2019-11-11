import React from "react";
import "./StockTicker.css";

const getSign = (value: number) => (value > 0 ? "positive" : "negative");

export const StockTicker = ({ stock }: any) => {
  const changePercent = Math.round(stock.changePercent * 100 * 100) / 100;

  return (
    <div className="quotes">
      <p className="quotes__stock-price">
        <span className="quotes_dollar-sign">
          {stock.latestPrice.toFixed(2)}
        </span>
      </p>
      <p className="quotes__stock-price">
        <span
          className={`change-${getSign(stock.change)} arrow-${getSign(
            stock.change
          )}`}
        >
          {Math.abs(stock.change)}
        </span>
      </p>
      <p className="quotes__stock-price">
        <span
          className={`change-${getSign(changePercent)} quotes__percentage-sign`}
        >
          {changePercent > 0
            ? changePercent.toFixed(2)
            : -changePercent.toFixed(2)}
        </span>
      </p>
    </div>
  );
};
