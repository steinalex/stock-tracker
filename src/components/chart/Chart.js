import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { updateChartAction } from "../../store/actions";
import { Loading } from "../loading";
import { ErrorMessage } from "../error-message";
import "./Chart.css";

const tenors = [
  { value: "1d", label: "1D" },
  { value: "5d", label: "5D" },
  { value: "1m", label: "1M" },
  { value: "1y", label: "1Y" },
  { value: "5y", label: "5Y" },
  { value: "max", label: "MAX" }
];

export const Chart = () => {
  const [active, setActive] = useState("5y");
  const dispatch = useDispatch();
  const { selectedChartData, selectedStockTicker } = useSelector(
    state => state.referenceData
  );
  const updateChartRange = stock => dispatch(updateChartAction(stock));
  const onClickHandler = event => {
    updateChartRange(event.target.value);
    setActive(event.target.value);
  };

  const formatChartData = () => {
    const getDay = data => {
      const tempDate = new Date(data);
      const day = tempDate.getDate();
      return day;
    };

    const formatDate = data => {
      const tempDate = new Date(data);
      const day = tempDate.getDate();
      if (day === 1) {
        return Intl.DateTimeFormat("en-US", { month: "short" }).format(
          tempDate
        );
      } else {
        return day;
      }
    };

    const reduceChartData = selectedChartData.reduce((result, option) => {
      const day = getDay(option.date);
      if (day === 1 || day === 14) {
        result.push({
          close: option.close,
          date: formatDate(option.date),
          axis: formatDate(option.date)
        });
      } else {
        result.push({
          close: option.close,
          date: option.date,
          axis: null
        });
      }
      return result;
    }, []);

    // console.log(reduceChartData);
    return reduceChartData;
  };

  const renderChartComponent = () => (
    <>
      <div className="chart__wrapper">
        {selectedChartData.length !== 0 ? (
          tenors.map(({ value, label }) => {
            const activeClass = active === value ? "--active" : "";

            return (
              <button
                key={label}
                className={`chart__button chart__button${activeClass}`}
                onClick={onClickHandler}
                value={value}
              >
                {label}
              </button>
            );
          })
        ) : (
          <ErrorMessage message="Chart data N/A" />
        )}
      </div>
      <ResponsiveContainer
        height="100%"
        width="100%"
        minHeight="350px"
        maxHeight="400px"
      >
        <AreaChart
          data={formatChartData()}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity="0.2" />
          <XAxis
            tickCount={2}
            ticks={[0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18]}
            tick={{ fill: "#ffffff" }}
          />
          <YAxis orientation="right" tick={{ fill: "#ffffff" }} />
          <Tooltip />
          <ReferenceLine
            y={selectedStockTicker.latestPrice}
            label={{
              value: String(selectedStockTicker.latestPrice),
              position: "right",
              fill: "orange"
            }}
            stroke="orange"
            strokeDasharray="3 3"
          />
          <Area
            type="monotone"
            dataKey="close"
            stroke="#7fb3ff"
            fillOpacity={1}
            fill="url(#chartGradient)"
            connectNulls={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );

  return (
    <div className="chart">
      <Loading
        loaded={selectedChartData !== null}
        render={renderChartComponent}
      />
    </div>
  );
};
