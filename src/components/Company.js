import React from 'react';
import Peers from './peers';

export const Company = ({stock}) =>
    <div className="company-overview">
        <h1 className="title">Company Overview</h1>
        <table>
            <tbody>
                <tr><td>{stock.companyName} ({stock.symbol})</td></tr>
                <tr><td>{stock.website}</td></tr>
                <tr><td>{stock.description}</td></tr>
            </tbody>
        </table>
    </div>

