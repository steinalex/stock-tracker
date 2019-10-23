import React from "react";
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

import { useSelector, useDispatch } from "react-redux";
import { updateChartAction } from "../redux/actions";
import { Loading } from "../../loading";
import { ErrorMessage } from "../../error-message";
import "./Chart.css";

const tenors = [
  { value: "1d", label: "1D" },
  { value: "5d", label: "5D" },
  { value: "1m", label: "1M" },
  { value: "1y", label: "1Y" },
  { value: "5y", label: "5Y" },
  { value: "max", label: "MAX" }
];

const formatDate = (isoDate, ChartRange) => {
  const date = new Date(isoDate);
  switch (ChartRange) {
    case "max":
    case "5y":
    case "1y":
    case "1m":
      return Intl.DateTimeFormat("en-US", {
        year: "2-digit",
        month: "short"
      }).format(date);
    case "5d":
      return Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
    case "1d":
      return Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    default:
      return isoDate;
  }
};

export const Chart = () => {
  const dispatch = useDispatch();
  const { selectedChartData, selectedChartRange } = useSelector(
    state => state.chartData
  );
  const { selectedStockTicker } = useSelector(state => state.stockTickerData);
  const updateChartRange = stock => dispatch(updateChartAction(stock));
  const onClickHandler = event => {
    updateChartRange(event.target.value);
  };

  const chartData =
    selectedChartData &&
    selectedChartData.map(data => ({
      date: formatDate(data.date, selectedChartRange),
      close: data.close
    }));

  const renderChartComponent = () => (
    <>
      <div className="chart__wrapper">
        {selectedChartData.length !== 0 ? (
          tenors.map(({ value, label }) => {
            const activeClass = selectedChartRange === value ? "--active" : "";

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
        minHeight="420px"
        maxHeight="420px"
      >
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: -22, left: 0, bottom: 28 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity="0.2" />
          <XAxis
            domain={["auto", "auto"]}
            dataKey="date"
            minTickGap="10"
            interval="preserveStart"
            tick={{ fill: "#ffffff" }}
          />
          <YAxis
            orientation="right"
            tick={{ fill: "#ffffff" }}
            domain={["auto", "auto"]}
          />
          <Tooltip />
          <ReferenceLine
            y={selectedStockTicker.latestPrice}
            label={{
              value: String(selectedStockTicker.latestPrice),
              position: "right",
              fill: "#e95656"
            }}
            stroke="#e95656"
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
