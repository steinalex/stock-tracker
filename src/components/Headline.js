import React from 'react';
import { useSelector } from 'react-redux';

const Headline = () => {

    const response = useSelector((state) => state.response)

    return (
        <>
            <h1>{response.companyName} ({response.symbol}) {response.latestPrice} {response.change} {response.changePercent} </h1>
            <h2>{response.primaryExchange} {response.sector} {response.currency}</h2>
        </>
    )
}

export default Headline    