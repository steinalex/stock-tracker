import React from 'react';
import Peers from "./Peers";
import { useSelector } from 'react-redux';


export const Company = ({ stock }) => {
    const state = useSelector((state) => state)
    console.log(stock)
    return (
        <div className="company-overview">
            <h1 className="title">Company Overview</h1>
            {stock.length === 0 ? <div className="loading-spinner"></div> :
                <>
                    <div className="company-overview__title">{stock.companyName} ({stock.symbol})</div>
                    <div><a target='_blank' rel="noopener noreferrer" className='company-overview__website' href={`${stock.website}`}>{stock.website}</a> </div>
                    <div className="company-overview__text"><p>{stock.description}</p></div>
                </>
            }
            <Peers stock={state.selectedTopPeers} />
        </div>
    )
}