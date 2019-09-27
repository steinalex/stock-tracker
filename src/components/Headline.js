import React from 'react';

export const Headline = ({stock}) => <div className="header">
    <h1>{stock.companyName} ({stock.symbol}) {stock.latestPrice} {stock.change} {stock.changePercent} </h1>
    <h2>{stock.primaryExchange} {stock.sector} {stock.currency}</h2>
</div>