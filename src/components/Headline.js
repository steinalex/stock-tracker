import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/adaptive-logo.png';

const state = useSelector((state) => state)
const headline = state.selectedSearch;

export const Headline = () => {

    // const colour = stock.change > 0 ? 'green' : 'red'
    const changePercent = parseFloat(Math.round((headline.changePercent*100) * 100) / 100).toFixed(2);

    return (
    <div className="header">
        <img className='header__logo' src={logo} alt="Adaptive Logo" />
        <p>{headline.companyName} ({headline.symbol}) </p>
        <p>{headline.primaryExchange} {headline.sector} {headline.currency}</p>
</div>
)}

