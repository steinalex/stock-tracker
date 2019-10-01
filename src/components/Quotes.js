import React from 'react';


export const Quotes = ({ stock }) => {

    const formatColour = (value) => value > 0 ? 'green' : 'red'
 
    const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="quotes">
        <p className="header__stock-price">$ {stock.latestPrice}</p>
        <p className="header__stock-price"><span className={formatColour(stock.change)}>{stock.change > 0 ? stock.change : -stock.change}</span></p>
       <p className="header__stock-price"><span className={formatColour(changePercent)}>{changePercent}%</span></p>
</div>
)}