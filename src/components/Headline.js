import React from "react";
import logo from "../assets/images/adaptive-logo.png";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction } from "../store/actions";
import { StockTicker } from "./StockTicker";
import { MarketStatus } from "./MarketStatus";

export const Headline = () => {
  const {
    selectedSearch,
    enteredSearchQuery,
    selectedCompanySymbols,
    selectedStockTicker,
    selectedKeyStats
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const labels =
    selectedSearch &&
    Object.keys(selectedSearch)
      .filter(
        key => key !== "companyName" && key !== "symbol" && selectedSearch[key]
      )
      .map(key => <li key={key}>{selectedSearch[key]}</li>);

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Adaptive Logo" />
      <div className="search-bar__wrapper">
        <Search
          searchQuery={enteredSearchQuery}
          symbol={selectedCompanySymbols}
          updateStock={stock => dispatch(updateStockAction(stock))}
        />
        {selectedSearch && <StockTicker stock={selectedStockTicker} />}
      </div>
      {selectedSearch && (
        <>
          <MarketStatus
            stock={selectedStockTicker}
            keyStats={selectedKeyStats}
          />
          <div className="stockInfo__list">{labels}</div>
        </>
      )}
    </div>
  );
};
