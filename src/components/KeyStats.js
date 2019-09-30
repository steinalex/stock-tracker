import React from 'react';
import {  useSelector } from 'react-redux';
const state = useSelector((state) => state)
const keyStats=state.selectedKeyStats 

const KeyStats = () => {
    
    return (
        <div className="key-stats">
            <h1 className="title">Key Stats</h1>
            <div className="key-stats__wrapper">
                <table className="key-stats__table">
                    <tbody>
                        <tr>
                            <td>Previous Close:</td><td>{keyStats.previousClose}</td>
                        </tr>
                        <tr>
                            <td>Day Range:</td><td>{keyStats.low} - {keyStats.high}</td>
                        </tr>
                        <tr>
                            <td>Volume:</td><td>{keyStats.previousVolume}</td>
                        </tr>
                        <tr>
                            <td>Market Cap:</td><td>{keyStats.marketCap}</td>
                        </tr>
                        <tr>
                            <td>P/E Ratio:</td><td>{keyStats.peRatio}</td>
                        </tr>
                        <tr>
                            <td>Open:</td><td>{keyStats.open}</td>
                        </tr>
                        <tr>
                            <td>52 Week Range:</td><td>{keyStats.week52High}-{keyStats.week52Low}</td>
                        </tr>
                        <tr>
                            <td>Total Avg Volume:</td><td>{keyStats.avgTotalVolume}</td>
                        </tr>
                        <tr>
                            <td>Earning per share:</td><td>{keyStats.EPS}</td>
                        </tr>
                        <tr>
                            <td> Dividend &amp; Yeild:</td><td>{keyStats.ytdChange}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KeyStats