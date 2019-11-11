import React, { FC } from "react";
import "./StockTicker.css";
import { IStockTicker } from "../redux/actions";

const getSign = (value: number) => (value > 0 ? "positive" : "negative");

type StockProps = {
  stock: IStockTicker;
};

export const StockTicker: FC<StockProps> = ({ stock }) => {
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
