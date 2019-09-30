import React from 'react';
import { useSelector } from 'react-redux';

const state = useSelector((state) => state)
const quotes = state.selectedQuotes
export const Quotes = () => {

    const formatColour = (value) => value>0 ? 'green' : 'red'
 
    const changePercent = parseFloat(Math.round((quotes.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="quotes">
        <p className="header__stock-price">$ {quotes.latestPrice}</p>
        <p className="header__stock-price"><span className={formatColour(quotes.change)}>{quotes.change > 0 ? quotes.change : -quotes.change}</span></p>
       <p className="header__stock-price"><span className={formatColour(changePercent)}>{changePercent}%</span></p>
</div>
)}