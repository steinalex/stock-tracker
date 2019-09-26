import React from 'react';
import { useSelector } from 'react-redux';

const KeyStats = () => {

    const response = useSelector((state) => state.response)

    const dayRange = response.low-response.high;

    return (
        <div className="key-stats">
            <h1 className="title">Key Stats</h1>
            <div className="key-stats__wrapper">
                <table className="key-stats__table">
                    <tbody>
                        <tr>
                            <td>Previous Close:</td><td>{response.previousClose}</td>
                        </tr>
                        <tr>
                            <td>Day Range:</td> <td>{dayRange ? dayRange : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>Volume:</td> <td>{response.previousVolume}</td>
                        </tr>
                        <tr>
                            <td>Market Cap:</td> <td> {response.marketCap} </td>
                        </tr>
                        <tr>
                            <td>P/E Ratio:</td> <td> {response.peRatio} </td>
                        </tr>
                        <tr>
                            <td>Open:</td> <td>{response.open ? response.open : 'N/A'}</td>
                        </tr>
                        <tr>
                            <td>52 Week Range:</td> <td>{response.week52High}-{response.week52Low}</td>
                        </tr>
                        <tr>
                            <td>Total Avg Volume:</td> <td>{response.avgTotalVolume}</td>
                        </tr>
                        <tr>
                            <td>Earning per share:</td> <td> {response.EPS}</td>
                        </tr>
                        <tr>
                            <td> Dividend &amp; Yeild: </td> <td>{response.ytdChange} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KeyStats