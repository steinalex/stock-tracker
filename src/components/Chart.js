import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = (chartData, {updateChartRange}) => {
    console.log(chartData.chartData)
    return (
        <div class="chart">
            <button value='1d'>1D</button>
            <button>5D</button>
            <button>1M</button>
            <button>1Y</button>
            <button>5Y</button>
            <button>MAX</button>
            <ResponsiveContainer height='100%' width='100%'>
                <AreaChart data={chartData.chartData}
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