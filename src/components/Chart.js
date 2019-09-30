import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({stock, updateChartRange}) => {
    const updateTimeRange = event =>{
        updateChartRange(event.target.value)        
    }
    return (
        <div className="chart">
            <button onClick={updateTimeRange} value='1d'>1D</button>
            <button onClick={updateTimeRange} value='5d'>5D</button>
            <button onClick={updateTimeRange} value='1m'>1M</button>
            <button onClick={updateTimeRange} value='1y'>1Y</button>
            <button onClick={updateTimeRange} value='5y'>5Y</button>
            <button onClick={updateTimeRange} value='max'>MAX</button>
            <ResponsiveContainer height='100%' width='100%'>
                <AreaChart data={stock}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis orientation='right' />
                    <Tooltip />
                    <Area type='monotone' dataKey='close' stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default Chart