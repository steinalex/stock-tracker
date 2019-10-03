import React from 'react';

const marketSign = (value) => value === null ? 'moon' : 'sun'
export const MarketStatus = ({stock, keyStats}) => {
    const UKTime = new Date(stock.latestUpdate)
    const USTime = new Date(UKTime).toLocaleString("en-US", {timeZone: "America/New_York"})
    const marketStatus= keyStats.open === null ? 'Market Closed' : 'Market Open'
  
    return (
    <div className="market">
       <p><span className="market-text">Real-Time Price as of {USTime} EST</span> <span className={marketSign(keyStats.open)}> {marketStatus}</span></p>
</div>
)}