import React from "react";
import { Loading } from "./Loading";

const Peers = ({ peers }) => {
  const renderPeersComponent = () => (
    <ul className="peers__list">
      {peers.length !== 0
        ? peers.map(items => (
            <li key={items} className="peers__list---item">
              {items}
            </li>
          ))
        : "Peers N/A"}
    </ul>
  );

  return (
    <div className="peers">
      <h1 className="title">Top Peers</h1>
      <Loading loaded={peers !== null} render={renderPeersComponent} />
    </div>
  );
};

export default Peers;
