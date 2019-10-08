import React from 'react';
import Peers from "./Peers";
import { useSelector } from 'react-redux';


export const Company = ({ stock }) => {
    const state = useSelector((state) => state)

    return (
        <div className="company-overview">
            <h1 className="title">Company Overview</h1>
            <div>{stock.companyName} ({stock.symbol})</div>
            <div><a target='_blank' rel="noopener noreferrer" className='company-overview__website' href={`${stock.website}`}>{stock.website}</a> </div>
            <p>{stock.description}</p>
            <Peers stock={state.selectedTopPeers} />
        </div >

    )
}