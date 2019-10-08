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
    const currency = stock=== null || undefined ? 'N/A' : stock.currency


    return (
        <div className="header">
            <img className='header__logo' src={logo} alt="Adaptive Logo" />
            <ul className="header__list">
                <li className="current">Quotes</li>
                <li>Markets</li>
                <li>Watchlists</li>
            </ul>
            <div className="search-bar__wrapper">
                <Search searchQuery={state.enteredSearchQuery} symbol={state.selectedCompanySymbols} updateStock={(stock) => dispatch(updateStockAction(stock))} />
                <StockTicker stock={state.selectedStockTicker} />
            </div>
            <MarketStatus stock={state.selectedStockTicker} keyStats={state.selectedKeyStats} />
            <ul className="stockInfo__list">
                <li>{stock.primaryExchange}</li> <li>{stock.sector}</li> <li> {currency} </li></ul>
        </div>

    )
}