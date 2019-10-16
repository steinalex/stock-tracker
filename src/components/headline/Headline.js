import React from "react";
import logo from "./adaptive-logo.png";
import { Search } from "../search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction } from "../../store/actions";
import { StockTicker } from "../stockticker/StockTicker";
import { MarketStatus } from "../marketstatus/MarketStatus";
import "./Headline.css";

export const Headline = () => {
  const { selectedStockTicker, selectedKeyStats } = useSelector(
    state => state.referenceData
  );
  const {
    selectedSearch,
    enteredSearchQuery,
    selectedCompanySymbols
  } = useSelector(state => state.stockData);

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
