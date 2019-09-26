import React from 'react';
import { useSelector } from 'react-redux';

const KeyStats = () => {

  const response = useSelector((state) => state.response)
  return (
    <div className="key-stats">
      <h1>Key Stats</h1>
      <table  >
        <tbody>
          <tr>
            <td>Previous Close:</td><td>{response.previousClose}</td>
          </tr>
          <tr>
            <td>Day Range:</td> <td>{response.low}-{response.high}</td>
          </tr>
          <tr>
            <td>Volume:</td> <td>{response.previousVolume}</td>
          </tr>
          <tr>
            <td>Market Cap:</td> <td> {response.marketCap} </td>
          </tr>
          <tr>
            <td>P/E Ratio:</td> <td> {response.peRatio} </td>
          </tr>
          <tr>
            <td>Open:</td> {response.open}
          </tr>
          <tr>
            <td>52 Week Range:</td> <td>{response.week52High}-{response.week52Low}</td>
          </tr>
          <tr>
            <td>Total Avg Volume:</td> <td>{response.avgTotalVolume}</td>
          </tr>
          <tr>
            <td>Earning per share:</td> <td> {response.EPS}</td>
          </tr>
          <tr>
            <td>Dividend & Yield:</td> <td> {response.ytdChange}</td>
          </tr>
          <tr>
            <td> Open: </td> <td>{response.open} </td>
          </tr>
          <tr>
            <td>52 Week Range:</td> <td> {response.week52High}-{response.week52Low}</td>
          </tr>
          <tr>
            <td>Total Avg Volume:</td> <td>{response.avgTotalVolume}</td>
          </tr>
          <tr>
            <td>Earning per share:</td> <td> {response.EPS}</td>
          </tr>
          <tr>
            <td>Dividend & Yield:</td> <td>{response.ytdChange}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default KeyStats