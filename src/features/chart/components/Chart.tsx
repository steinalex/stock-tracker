import React, { FC } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label
} from "recharts";

import { useSelector, useDispatch } from "react-redux";
import { updateChartRangeAction, ChartRange } from "../redux/actions";
import { Loading } from "../../loading";
import { ErrorMessage } from "../../error-message";
import "./Chart.css";
import { AppState } from "../../../store";

const chartValues: ChartRange[] = ["1D", "5D", "1M", "1Y", "5Y", "MAX"];

const yaxisFormat = (item: number) => item.toFixed(2);

const formatDate = (isoDate: string, chartRange: ChartRange) => {
  const date = new Date(isoDate);
  switch (chartRange) {
    case "MAX":
    case "5Y":
    case "1Y":
    case "1M":
      return Intl.DateTimeFormat("en-US", {
        year: "2-digit",
        month: "short"
      }).format(date);
    case "5D":
      return Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
    case "1D":
      return Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    default:
      return isoDate;
  }
};

export const Chart: FC = () => {
  const dispatch = useDispatch();
  const { selectedChartData, selectedChartRange } = useSelector(
    (state: AppState) => state.chartData
  );
  const { selectedStockTicker } = useSelector(
    (state: AppState) => state.stockTickerData
  );
  const updateChartRange = (stock: ChartRange) =>
    dispatch(updateChartRangeAction(stock));

  const chartData = selectedChartData
    ? selectedChartData.map(data => ({
        date: formatDate(data.date, selectedChartRange),
        close: data.close
      }))
    : [];

  const renderChartComponent = () => (
    <>
      <div className="chart__wrapper">
        {chartData.length !== 0 ? (
          chartValues.map(range => {
            const activeClass =
              selectedChartRange === range ? "chart__button--active" : "";

            return (
              <button
                key={range}
                className={`chart__button ${activeClass}`}
                onClick={() => updateChartRange(range)}
                value={range}
              >
                {range}
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
        minHeight="370px"
        maxHeight="370px"
      >
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: -18, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity="0.2" />
          <XAxis
            dataKey="date"
            minTickGap={10}
            interval="preserveStart"
            tick={{ fill: "#ffffff" }}
          />
          <YAxis
            orientation="right"
            dataKey="close"
            tick={{ fill: "#ffffff" }}
            tickCount={10}
            tickFormatter={yaxisFormat}
            domain={["auto", "auto"]}
          />
          <Tooltip />
          <ReferenceLine
            y={selectedStockTicker && selectedStockTicker.latestPrice}
            label={
              <Label
                value={selectedStockTicker && selectedStockTicker.latestPrice}
                position="right"
                fill="#e95656"
              />
            }
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
