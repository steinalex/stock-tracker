import React from 'react';
import { useSelector } from 'react-redux';

const LatestNews = () => {

    const response = useSelector((state) => state.response)
    console.log(response)

    return (
        <>
            <h1>LatestNews</h1>
            <table>
                <tbody>
                    <tr>Previous Close: <span className='space'>{response.previousClose}</span> Open: <span className='space'>{response.open}</span></tr>
                    <tr>Day Range: <span className='space'>{response.low}-{response.high}</span>52 Week Range: <span className='space'>{response.week52High}-{response.week52Low}</span></tr>
                    <tr>Volume: <span className='space'>{response.previousVolume}</span>Total Avg Volume: <span className='space'>{response.avgTotalVolume}</span></tr>
                    <tr>Market Cap: <span className='space'>{response.marketCap}</span> Earning per share: <span className='space'>{response.EPS}</span></tr>
                    <tr>P/E Ratio: <span className='space'>{response.peRatio}</span>Dividend & Yield: <span className='space'>{response.ytdChange}</span></tr>
                </tbody>
            </table>
        </>
    )
}

export default LatestNews