import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../loading";
import "./KeyStats.css";
import { AppState } from "../../../store";
import { IKeyStats } from "../redux/actions";
import { ErrorMessage } from "../../error-message";

const NUMBER_FORMATTER = new Intl.NumberFormat();

const DEFAULT_FORMATTER = (keyStatsData: IKeyStats, key: keyof IKeyStats) =>
  keyStatsData[key] !== null ? keyStatsData[key] : "N/A";

type Formatter = (keyStatsData: IKeyStats) => string;

type Schema = {
  key: keyof IKeyStats;
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
    formatter: data =>
      data.low && data.high ? `${data.low}-${data.high}` : "N/A"
  },
  {
    key: "previousVolume",
    label: "Volume",
    formatter: data => NUMBER_FORMATTER.format(data.previousVolume)
  },
  {
    key: "marketCap",
    label: "Market Cap",
    formatter: data => NUMBER_FORMATTER.format(data.marketCap)
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
    formatter: data => `${data.week52Low}-${data.week52High}`
  },
  {
    key: "avgTotalVolume",
    label: "Total Avg. Volume",
    formatter: data => NUMBER_FORMATTER.format(data.avgTotalVolume)
  },
  {
    key: "eps",
    label: "Earnings Per Share"
  },
  {
    key: "ytdChange",
    label: "Dividend & Yield",
    formatter: data => (data.ytdChange * 100).toPrecision(3) + "%"
  }
];

export const KeyStats = () => {
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
