import React from "react";
import { Loading } from "../../loading/components";
import { ErrorMessage } from "../../error-message/components";
import "./Peers.css";

export const Peers = ({ peers }) => {
  const renderPeersComponent = () => (
    <ul className="peers__list">
      {peers.length !== 0 ? (
        peers.map(items => (
          <li key={items} className="peers__list---item">
            {items}
          </li>
        ))
      ) : (
        <ErrorMessage message="Peers N/A" />
      )}
    </ul>
  );

  return (
    <div className="peers">
      <h1 className="title">Top Peers</h1>
      <Loading loaded={peers !== null} render={renderPeersComponent} />
    </div>
  );
};
