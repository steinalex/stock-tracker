import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
// import moment from 'moment';


const tenors = [
    { value: '1d', label: '1D' },
    { value: '5d', label: '5D' },
    { value: '1m', label: '1M' },
    { value: '1y', label: '1Y' },
    { value: '5y', label: '5Y' },
    { value: 'max', label: 'MAX' },
]

const Chart = ({ stock, latestPrice, updateChartRange }) => {

    const [active, setActive] = useState('5y')
    // const chartData = stock.map(data => ({close:data.close, date:moment(data.close).format('lll') }))

    const onClickHandler = event => {
        updateChartRange(event.target.value)
        setActive(event.target.value);
    }
    return stock.length === 0 ? <div className="loading-spinner"></div> : <div className="chart">
        <div className="chart__wrapper">
            {tenors.map(({ value, label }) => {

                const activeClass = active === value ? '--active' : ''

                return (
                    <button className={`chart__button chart__button${activeClass}`} onClick={onClickHandler} value={value}>{label}</button>
                )
            })}
        </div>
        <ResponsiveContainer height='100%' width='100%'>
            <AreaChart data={stock}
                margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" valueFormatString="MMM" />
                <YAxis orientation='right' />
                <Tooltip />
                <ReferenceLine y={latestPrice.latestPrice} label={{ value: `${latestPrice.latestPrice}`, position: 'right', fill: 'orange' }} stroke="orange" strokeDasharray="3 3" />
                <Area type='monotone' dataKey='close' stroke='#8884d8' fillOpacity={1} fill='url(#chartGradient)' connectNulls={true} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
    //     return stock.length === 0 ? <div>'loading'</div> : <div className="chart">
    //     <div className="chart__wrapper">
    //         {tenors.map(({ value, label }) => {

    //             const activeClass = active === value ? '--active' : ''

    //             return (
    //                 <button className={`chart__button chart__button${activeClass}`} onClick={onClickHandler} value={value}>{label}</button>
    //             )
    //         })}
    //     </div>
    //     <ResponsiveContainer height='100%' width='100%'>
    //         <AreaChart data={stock}
    //             margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
    //             <defs>
    //                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
    //                     <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
    //                     <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
    //                 </linearGradient>
    //             </defs>
    //             <CartesianGrid strokeDasharray="3 3" />
    //             <XAxis dataKey="date" valueFormatString="MMM" />
    //             <YAxis orientation='right' />
    //             <Tooltip />
    //             <ReferenceLine y={latestPrice.latestPrice} label={{ value: `${latestPrice.latestPrice}`, position: 'right', fill: 'orange' }} stroke="orange" strokeDasharray="3 3" />
    //             <Area type='monotone' dataKey='close' stroke='#8884d8' fillOpacity={1} fill='url(#chartGradient)' connectNulls={true} />
    //         </AreaChart>
    //     </ResponsiveContainer>
    // </div>
}
export default Chart