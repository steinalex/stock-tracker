import React from "react";
import logo from "./adaptive-logo.png";
import { Search } from "../../search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction } from "../../../App-actions";
import { StockTicker } from "../../stock-ticker/components/StockTicker";
import { MarketStatus } from "../../market-status";
import "./Headline.css";

export const Headline = () => {
  const { selectedStockTicker } = useSelector(state => state.stockTickerData);
  const { selectedKeyStats } = useSelector(state => state.keyStatsData);
  const {
    selectedSearch,
    enteredSearchQuery,
    selectedCompanySymbols
  } = useSelector(state => state.headlineData);

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
