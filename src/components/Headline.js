import React from 'react';
import logo from '../assets/images/adaptive-logo.png';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateStockAction } from '../store/actions';
import { StockTicker } from "./StockTicker";
import { MarketStatus } from './MarketStatus';

export const Headline = ({ stock }) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    // const colour = stock.change > 0 ? 'green' : 'red'
    // const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);

    return (
        <div className="header">
            <img className='header__logo' src={logo} alt="Adaptive Logo" />
            <ul className="headline-list">
                <li className="current">Quotes</li>
                <li>Markets</li>
                <li>Watchlists</li>
            </ul>
            <div className="search-bar__wrapper">
                <Search searchQuery={state.enteredSearchQuery} symbol={state.selectedCompanySymbols} updateStock={(stock) => dispatch(updateStockAction(stock))} />
                <StockTicker stock={state.selectedStockTicker} />
            </div>
            <MarketStatus stock={state.selectedStockTicker} keyStats={state.selectedKeyStats} />
            <ul className="stockInfo-list">
                <li>{stock.primaryExchange}</li> <li>{stock.sector}</li> <li> {stock.currency} </li></ul>
        </div>

    )
}