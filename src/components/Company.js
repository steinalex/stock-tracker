import React from 'react';
import { useSelector } from 'react-redux';

const state = useSelector((state) => state)
const companyOverview=state.selectedCompanyOverview

export const Company = () =>
    <div className="company-overview">
        <h1 className="title">Company Overview</h1>
        <table>
            <tbody>
                <tr><td>{companyOverview.companyName} ({companyOverview.symbol})</td></tr>
                <tr><td>{companyOverview.website}</td></tr>
                <tr><td>{companyOverview.description}</td></tr>
            </tbody>
        </table>
    </div>

