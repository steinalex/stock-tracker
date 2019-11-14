import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../loading";
import "./KeyStats.css";
import { AppState } from "store";
import { IKeyStats } from "../redux/actions";
import { ErrorMessage } from "../../error-message";

type RenderedKeyStats = Omit<IKeyStats, "isUSMarketOpen">;

const NUMBER_FORMATTER = new Intl.NumberFormat();

type Formatter = (
  keyStatsData: RenderedKeyStats,
  key: keyof RenderedKeyStats
) => string | number;

const DEFAULT_FORMATTER: Formatter = (
  keyStatsData: RenderedKeyStats,
  key: keyof RenderedKeyStats
) => (keyStatsData[key] !== null ? keyStatsData[key] : "N/A");

type Schema = {
  key: keyof RenderedKeyStats;
  label: string;
  formatter?: Formatter;
}[];

const schema: Schema = [
  {
    key: "previousClose",
    label: "Previous Close"
  },
  {
    key: "low",
    label: "Day Range",
    formatter: stats =>
      stats.low && stats.high ? `${stats.low}-${stats.high}` : "N/A"
  },
  {
    key: "previousVolume",
    label: "Volume",
    formatter: stats => NUMBER_FORMATTER.format(stats.previousVolume)
  },
  {
    key: "marketCap",
    label: "Market Cap",
    formatter: stats => NUMBER_FORMATTER.format(stats.marketCap)
  },
  {
    key: "peRatio",
    label: "P/E Ratio"
  },
  {
    key: "open",
    label: "Open"
  },
  {
    key: "week52Low",
    label: "52 Week Range",
    formatter: stats => `${stats.week52Low}-${stats.week52High}`
  },
  {
    key: "avgTotalVolume",
    label: "Total Avg. Volume",
    formatter: stats => NUMBER_FORMATTER.format(stats.avgTotalVolume)
  },
  {
    key: "eps",
    label: "Earnings Per Share"
  },
  {
    key: "ytdChange",
    label: "Dividend & Yield",
    formatter: stats => (stats.ytdChange * 100).toPrecision(3) + "%"
  }
];

export const KeyStats: FC = () => {
  const { selectedKeyStats } = useSelector(
    (state: AppState) => state.keyStatsData
  );

  const renderKeystatsComponent = React.useCallback(() => {
    const tableData = selectedKeyStats ? (
      schema.map(({ key, label, formatter = DEFAULT_FORMATTER }) => (
        <tr key={key}>
          <td>{label}</td>
          <td>{formatter(selectedKeyStats, key)}</td>
        </tr>
      ))
    ) : (
      <ErrorMessage message="KeyStats data N/A" />
    );

    return (
      <div className="key-stats__wrapper">
        <table className="key-stats__table">
          <tbody>{tableData}</tbody>
        </table>
      </div>
    );
  }, [selectedKeyStats]);

  return (
    <div className="key-stats">
      <h1 className="title">Key Stats</h1>
      <Loading
        loaded={selectedKeyStats !== null}
        render={renderKeystatsComponent}
      />
    </div>
  );
};
