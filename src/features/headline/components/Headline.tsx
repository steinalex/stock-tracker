import React from "react";
import logo from "./adaptive-logo.png";
import { Search } from "../../search";
import { useDispatch, useSelector } from "react-redux";
import { updateStockAction } from "../../../actions";
import { StockTicker } from "../../stock-ticker";
import { MarketStatus } from "../../market-status";
import "./Headline.css";
import { AppState } from "../../../store";
import { ISelectedSearch } from "../redux/actions";

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

  console.log(selectedSearch);
  const labels = selectedSearch && (
    <ul>
      {selectedSearch.primaryExchange && (
        <li>{selectedSearch.primaryExchange}</li>
      )}
      {selectedSearch.sector && <li>{selectedSearch.sector}</li>}
      {selectedSearch.symbol && <li>{selectedSearch.symbol}</li>}
    </ul>
  );

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Adaptive Logo" />
      <div className="search-bar__wrapper">
        <Search
          searchQuery={enteredSearchQuery}
          symbol={selectedCompanySymbols}
          updateStock={(stock: ISelectedSearch) =>
            dispatch(updateStockAction(stock))
          }
        />
        {selectedSearch && selectedStockTicker && (
          <StockTicker stock={selectedStockTicker} />
        )}
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
