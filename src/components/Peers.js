import React from "react";
import { Loading } from "./Loading";

const Peers = ({ Peers }) => {
  const renderPeersComponent = () => (
    <ul className="peers__list">
      {Peers.length !== 0
        ? Peers.map(peers => (
            <li key={peers} className="peers__list---item">
              {peers}
            </li>
          ))
        : "Peers N/A"}
    </ul>
  );
  return (
    <div className="peers">
      <h1 className="title">Top Peers</h1>
      <Loading loaded={Peers !== null} render={renderPeersComponent} />
    </div>
  );
};

export default Peers;
