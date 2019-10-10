import React from "react";

const Peers = ({ stock }) => {
  return (
    <div className="peers">
      <h1 className="title">Top Peers</h1>
      {stock === null ? (
        <div className="loading-spinner"></div>
      ) : stock.length === 0 ? (
        <div> N/A </div>
      ) : (
        <ul className="peers__list">
          {stock.map(peers => (
            <li key={peers} className="peers__list---item">
              {peers}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Peers;
