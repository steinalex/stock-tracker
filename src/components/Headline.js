import React from "react";
import logo from "../assets/images/adaptive-logo.png";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction } from "../store/actions";
import { StockTicker } from "./StockTicker";
import { MarketStatus } from "./MarketStatus";

export const Headline = ({ stock }) => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const labels =
    stock &&
    Object.keys(stock)
      .filter(key => key !== "companyName" && key !== "symbol")
      .map(key => <li>{stock[key]}</li>);

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Adaptive Logo" />
      <div className="search-bar__wrapper">
        <Search
          searchQuery={state.enteredSearchQuery}
          symbol={state.selectedCompanySymbols}
          updateStock={stock => dispatch(updateStockAction(stock))}
        />
        {stock && <StockTicker stock={state.selectedStockTicker} />}
      </div>
      {stock && (
        <>
          <MarketStatus
            stock={state.selectedStockTicker}
            keyStats={state.selectedKeyStats}
          />
          <div className="stockInfo__list">{labels}</div>
        </>
      )}
    </div>
  );
};
