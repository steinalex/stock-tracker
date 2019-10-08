import React from 'react';
import Peers from "./Peers";
import { useSelector } from 'react-redux';


export const Company = ({ stock }) => {
    const state = useSelector((state) => state)

    return (
        <div className="company-overview">
            <h1 className="title">Company Overview</h1>
            <table>
                <tbody>
                    <tr><td>{stock.companyName} ({stock.symbol})</td></tr>
                    <tr><td><a target='_blank' rel="noopener noreferrer" className='company-overview_Website' href={`${stock.website}`}>{stock.website}</a> </td></tr>
                    <tr><td>{stock.description}</td></tr>
                </tbody>
            </table>
            <Peers stock={state.selectedTopPeers} />
        </div>

    )
}