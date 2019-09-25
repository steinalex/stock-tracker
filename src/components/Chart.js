import React from 'react';
import { useSelector } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = () => {
    const chartData = useSelector((state) => state.chartData)

    return (
        <>
            <button>1D</button>
            <button>5D</button>
            <button>1M</button>
            <button>1Y</button>
            <button>5Y</button>
            <button>MAX</button>
            <AreaChart width={600} height={400} data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type='monotone' dataKey='close' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
        </>
    )
}
export default Chart