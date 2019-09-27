import React from 'react';

export const Company = ({stock}) =>
    <div class="company-overview">
        <h1 className="title">Company Overview</h1>
        <table>
            <tbody>
                <tr>{stock.companyName} ({stock.symbol})</tr>
                <tr>{stock.website}</tr>
                <tr>{stock.description}</tr>
            </tbody>
        </table>
    </div>

