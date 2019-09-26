import React from 'react';
import { useSelector } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const chartData = useSelector((state) => state.chartData)

    const updateTimeRange = useSelector((state) => state.timeRange)

    return (
        <div class="chart">
            <button onClick={updateTimeRange} value='1d'>1D</button>
            <button onClick={updateTimeRange}>5D</button>
            <button onClick={updateTimeRange}>1M</button>
            <button onClick={updateTimeRange}>1Y</button>
            <button onClick={updateTimeRange}>5Y</button>
            <button onClick={updateTimeRange}>MAX</button>
            <ResponsiveContainer height='100%' width='100%'>
                <AreaChart data={chartData}
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