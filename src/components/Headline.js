import React from 'react';
import logo from '../assets/images/adaptive-logo.png';

export const Headline = ({ stock }) => {

    // const colour = stock.change > 0 ? 'green' : 'red'
    // const changePercent = parseFloat(Math.round((stock.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="header">
        <img className='header__logo' src={logo} alt="Adaptive Logo" />
        <p>{stock.companyName} ({stock.symbol}) </p>
        <p>{stock.primaryExchange} {stock.sector} {stock.currency}</p>
</div>
)}