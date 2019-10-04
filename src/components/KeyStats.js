import React from 'react';

const NUMBER_FORMATTER = new Intl.NumberFormat();

const formatNumber = (num) => { return NUMBER_FORMATTER.format(num)}

const KeyStats = ({ stock }) => {
    const stockOpen = stock.open == null ? 'N/A' : stock.open
    const dayRange = stock.low == null ? 'N/A' : `${stock.low} - ${stock.high}`
    const dividend = (stock.ytdChange * 100).toPrecision(3)

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
                            <td>Day Range:</td><td>{dayRange}</td>
                        </tr>
                        <tr>
                            <td>Volume:</td><td>{formatNumber(stock.previousVolume)}</td>
                        </tr>
                        <tr>
                            <td>Market Cap:</td><td>{formatNumber(stock.marketCap)}</td>
                        </tr>
                        <tr>
                            <td>P/E Ratio:</td><td>{stock.peRatio}</td>
                        </tr>
                        <tr>
                            <td>Open:</td><td>{stockOpen}</td>
                        </tr>
                        <tr>
                            <td>52 Week Range:</td><td>{stock.week52High} - {stock.week52Low}</td>
                        </tr>
                        <tr>
                            <td>Total Avg Volume:</td><td>{formatNumber(stock.avgTotalVolume)}</td>
                        </tr>
                        <tr>
                            <td>Earning per share:</td><td>{stock.eps}</td>
                        </tr>
                        <tr>
                            <td> Dividend &amp; Yield:</td><td>{dividend} %</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default KeyStats
