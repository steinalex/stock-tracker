import React from "react";
import logo from "./adaptive-logo.png";
import { Search } from "../../search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction, UpdateStockAction } from "../../../actions";
import { StockTicker } from "../../stock-ticker";
import { MarketStatus } from "../../market-status";
import "./Headline.css";
import { AppState } from "../../../store";

export const Headline = () => {
  const { selectedStockTicker } = useSelector(
    (state: AppState) => state.stockTickerData
  );
  const { selectedKeyStats } = useSelector(
    (state: AppState) => state.keyStatsData
  );
  const {
    selectedSearch,
    enteredSearchQuery,
    selectedCompanySymbols
  } = useSelector((state: AppState) => state.headlineData);

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
          updateStock={(stock: string) => dispatch(updateStockAction(stock))}
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
