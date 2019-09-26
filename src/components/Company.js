import React from 'react';
import { useSelector } from 'react-redux';
import Peers from "./peers";

const Company = () => {

    const response = useSelector((state) => state.response)

    return (
        <div class="company-overview">
            <h1 className="title">Company Overview</h1>
            <table>
                <tbody>
                    <tr>{response.companyName} ({response.symbol})</tr>
                    <tr>{response.website}</tr>
                    <tr>{response.description}</tr>
                </tbody>
            </table>
            <Peers />
        </div>
    )
}

export default Company