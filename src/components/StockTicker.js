import React from 'react';


export const StockTicker = ({ stock }) => {
    // const a =new Date(stock.latestUpdate *1000)
    const UKTime = new Date(stock.latestUpdate)
    // const USTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
    // const usTime = new Date(USTime)
    // const time = usTime.toLocaleDateString(UKTime)
    // // let b = a.getUTCString(stock.latestUpdate) 

    const formatColour = (value) => value > 0 ? 'green' : 'red'
 
    const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="quotes">
        <p className="header__stock-price">$ {stock.latestPrice}</p>
        <p className="header__stock-price"><span className={formatColour(stock)}>{stock.change > 0 ? stock.change : -stock.change}</span></p>
       <p className="header__stock-price"><span className={formatColour(changePercent)}>{changePercent > 0 ? changePercent : -changePercent}%</span></p>
       <p>Real-Time Price as of {UKTime.toUTCString()}</p>
</div>
)}