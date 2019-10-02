import React from 'react';

const KeyStats = ({ stock }) => {
    
    return (
        <div className="key-stats">
            <h1 className="title">Key Stats</h1>
            <div className="key-stats__wrapper">
                <table className="key-stats__table">
                    <tbody>
                        <tr>
                            <td>Previous Close:</td><td>{stock.previousClose}</td>
                        </tr>
                        <tr>
                            <td>Day Range:</td><td>{stock.low} - {stock.high}</td>
                        </tr>
                        <tr>
                            <td>Volume:</td><td>{stock.previousVolume}</td>
                        </tr>
                        <tr>
                            <td>Market Cap:</td><td>{stock.marketCap}</td>
                        </tr>
                        <tr>
                            <td>P/E Ratio:</td><td>{stock.peRatio}</td>
                        </tr>
                        <tr>
                            <td>Open:</td><td>{stock.open}</td>
                        </tr>
                        <tr>
                            <td>52 Week Range:</td><td>{stock.week52High}-{stock.week52Low}</td>
                        </tr>
                        <tr>
                            <td>Total Avg Volume:</td><td>{stock.avgTotalVolume}</td>
                        </tr>
                        <tr>
                            <td>Earning per share:</td><td>{stock.eps}</td>
                        </tr>
                        <tr>
                            <td> Dividend &amp; Yeild:</td><td>{stock.ytdChange}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KeyStats