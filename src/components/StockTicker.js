import React from 'react';


const formatColour = (value) => value > 0 ? 'green' : 'red'
const arrowSign = (value) => value > 0 ? 'arrowUp' :'arrowDown'
export const StockTicker = ({ stock }) => {
    const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);
    return (
    <div className="quotes">
        <p className="header__stock-price"><span className="dollar-sign">{stock.latestPrice}</span></p>
        <p className="header__stock-price"><span className={`${formatColour(stock.change)} ${arrowSign(stock.change)}`}>{Math.abs(stock.change)}</span></p>
       <p className="header__stock-price"><span className={formatColour(changePercent)}>{changePercent > 0 ? changePercent : -changePercent}%</span></p>
</div>
)}