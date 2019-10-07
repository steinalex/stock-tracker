import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine} from 'recharts';
import moment from 'moment';

const Chart = ({ stock, latestPrice, updateChartRange }) => {

    const [active, setActive] = useState('5y')
    const chartData = stock.map(data => ({close:data.close, date:moment(data.close).format('lll') }))

    const onClickHandler = event => {
        updateChartRange(event.target.value)
        setActive(event.target.value);
    }

    return (
        <div className="chart">
            <div className="chart-button__wrapper">
                <button className={active === '1d' ? 'active' : 'inactive'} onClick={onClickHandler} value='1d'>1D</button>
                <button className={active === '5d' ? 'active' : 'inactive'} onClick={onClickHandler} value='5d'>5D</button>
                <button className={active === '1m' ? 'active' : 'inactive'} onClick={onClickHandler} value='1m'>1M</button>
                <button className={active === '1y' ? 'active' : 'inactive'} onClick={onClickHandler} value='1y'>1Y</button>
                <button className={active === '5y' ? 'active' : 'inactive'} onClick={onClickHandler} value='5y'>5Y</button>
                <button className={active === 'max' ? 'active' : 'inactive'} onClick={onClickHandler} value='max'>MAX</button>
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
                    <XAxis dataKey="date" valueFormatString="MMM"/>
                    <YAxis orientation='right' />
                    <Tooltip />
                    <ReferenceLine y={latestPrice.latestPrice} label={{ value: `${latestPrice.latestPrice}`, position: 'right', fill: 'orange' }}  stroke="orange" strokeDasharray="3 3" />
                    <Area type='monotone' dataKey='close' stroke='#8884d8' fillOpacity={1} fill='url(#chartGradient)' connectNulls= {true} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart