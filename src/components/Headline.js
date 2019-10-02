import React from 'react';
import logo from '../assets/images/adaptive-logo.png';
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateStockAction } from '../store/actions';
import { StockTicker } from "./StockTicker";

export const Headline = ({ stock }) => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    // const colour = stock.change > 0 ? 'green' : 'red'
    // const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="header">
        <img className='header__logo' src={logo} alt="Adaptive Logo" />
        <p>{stock.companyName} ({stock.symbol}) </p>
        <p>{stock.primaryExchange} {stock.sector} {stock.currency}</p>
        <StockTicker stock={state.selectedStockTicker} />
        <p>Real-Time Price as of {stock.latestTime}</p>
        <Search searchQuery={state.enteredSearchQuery} symbol={state.selectedCompanySymbols} updateStock={(stock) => dispatch(updateStockAction(stock))} />
</div>

    )
}