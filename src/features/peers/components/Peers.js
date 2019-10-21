import React from "react";
import { Loading } from "../../loading";
import { ErrorMessage } from "../../error-message";
import { useDispatch } from "react-redux";
import { updateStockAction } from "../../../App-actions";
import "./Peers.css";

export const Peers = ({ peers }) => {
  const dispatch = useDispatch();
  const onClickHandler = event => {
    dispatch(updateStockAction(event.target.value));
  };
  const renderPeersComponent = () => (
    <ul className="peers__list">
      {peers.length !== 0 ? (
        peers.map(items => (
          <button
            onClick={onClickHandler}
            value={items}
            key={items}
            className="peers__list---item"
          >
            {items}
          </button>
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
