import React from 'react';

const NUMBER_FORMATTER = new Intl.NumberFormat();

const DEFAULT_FORMATTER = (data, key) => data[key] != undefined ? data[key] : 'N/A';
const schema = [
    {
        key: 'previousClose',
        label: 'Previous Close'
    },
    {
        key: 'low',
        label: 'Day Range',
        formatter: data => data.low && data.high ? `${data.low}-${data.high}` : 'N/A'
    },
    {
        key: 'previousVolume',
        label: 'Volume',
        formatter: (data, key) => NUMBER_FORMATTER.format(data[key])
    },
    {
        key: 'marketCap',
        label: 'Market Cap',
        formatter: (data, key) => NUMBER_FORMATTER.format(data[key])
    },
    {
        key: 'peRatio',
        label: 'P/E Ratio',
    },
    {
        key: 'open',
        label: 'Open'
    },
    {
        key: 'week52Low',
        label: '52 Week Range',
        formatter: data => `${data.week52Low}-${data.week52High}`
    },
    {
        key: 'avgTotalVolume',
        label: 'Total Avg. Volume',
        formatter: (data, key) => NUMBER_FORMATTER.format(data[key])
    },
    {
        key: 'eps',
        label: 'Earnings Per Share',
    },
    {
        key: 'ytdChange',
        label: 'Dividend & Yield',
        formatter: (data, key) => (data[key]* 100).toPrecision(3)
    },
]

const KeyStats = ({ stock }) => {

    const tableData = schema.map(({ key, label, formatter = DEFAULT_FORMATTER }) => (
        <tr>
            <td>{label}</td>
            <td>{formatter(stock, key)}</td>
        </tr>
    ))

    return (
        <div className="key-stats">
            <h1 className="title">Key Stats</h1>
            {stock.length === 0
                ? <div className="loading-spinner"></div>
                : <>
                    <div className="key-stats__wrapper">
                        <table className="key-stats__table">
                            <tbody>
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </>}
        </div>)
}

export default KeyStats
