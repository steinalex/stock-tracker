import React from 'react';

const NUMBER_FORMATTER = new Intl.NumberFormat();

const formatNumber = (num) => num == null ? 'N/A' : NUMBER_FORMATTER.format(num)


// const NUMBER_FORMATTER = value => value.toFixed(2);

// const ALLOWED = ['previousClose', 'high', 'previousVolume']

// const LABELS = {
//     previousClose: 'Previous Close',
//     companyName: 'Company Name',
//     peRatio: 'P/E Ratio',
//     open: 'Open',
//     symbol: 'Symbol',
//     currency: 'Currency',
//     primaryExchange: 'Primary Exchange',
//     high: 'High',
//     low: 'Low',
//     previousVolume: 'Previous Volume',
//     avgTotalVolume: 'Average Total Volume',
//     marketCap: 'Market Cap',
//     eps: 'Earnings Per Share'
// }

// const FORMATTERS = {
//     avg: value => value.toFixed(2),
//     // eps: eps,
// }

const KeyStats = ({ stock }) => {
    const checkNull = (value) => value === null ? 'N/A' : value;
    const stockOpen = stock.open == null ? 'N/A' : stock.open
    const dayRange = stock.low == null ? 'N/A' : `${stock.low} - ${stock.high}`
    const range52 = stock.week52High == null ? 'N/A' : `${stock.week52Low} - ${stock.week52High}`
    const dividend = stock.ytdchange == null ? 'N/A' : `${(stock.ytdChange * 100).toPrecision(3)} %`
    // const generateKeyStatsTable = () => {
    //     return Object.keys(stock)
    //     .filter(key => ALLOWED.includes(key))
    //     .map((key) => {
    //         const value = stock[key];
    //         return (
    //             <tr key={key}>
    //                 <td>{LABELS[key]}</td>
    //                 {/* <td>{FORMATTERS[key](value)}</td> */}
    //             </tr>
    //         )
    //     })
    // }
    return (
        <div className="key-stats">
            <h1 className="title">Key Stats</h1>
            {stock.length === 0
                ? <div className="loading-spinner"></div>
                :<>
                <div className="key-stats__wrapper">
                    <table className="key-stats__table">
                        <tbody>
                            <tr>
                                <td>Previous Close:</td><td>{checkNull(stock.previousClose)}</td>
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
                                <td>P/E Ratio:</td><td>{checkNull(stock.peRatio)}</td>
                            </tr>
                            <tr>
                                <td>Open:</td><td>{stockOpen}</td>
                            </tr>
                            <tr>
                                <td>52 Week Range:</td><td>{range52}</td>
                            </tr>
                            <tr>
                                <td>Total Avg Volume:</td><td>{formatNumber(stock.avgTotalVolume)}</td>
                            </tr>
                            <tr>
                                <td>Earning per share:</td><td>{checkNull(stock.eps)}</td>
                            </tr>
                            <tr>
                                <td> Dividend &amp; Yield:</td><td>{dividend} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </>}
        </div>)
}

export default KeyStats
