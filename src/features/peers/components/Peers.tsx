import React, { FC } from "react";
import { Loading } from "../../loading";
import { ErrorMessage } from "../../error-message";
import { useDispatch } from "react-redux";
import { updateStockAction } from "../../../actions";
import "./Peers.css";
import { IPeers } from "../redux/actions";

type PeersProps = {
  peers: IPeers[] | null;
};

export const Peers: FC<PeersProps> = ({ peers }) => {
  const dispatch = useDispatch();
  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = event => {
    const symbol = event.currentTarget.value;
    const peerStock =
      peers && peers.find((peer: IPeers) => peer.symbol === symbol);
    if (peerStock && peerStock.name) {
      dispatch(updateStockAction(peerStock));
    }
  };
  const renderPeersComponent = () => (
    <ul className="peers__list">
      {peers && peers.length !== 0 ? (
        peers.map(({ symbol }: IPeers) => (
          <button
            onClick={onClickHandler}
            value={symbol}
            key={symbol}
            className="peers__list---item"
          >
            {symbol}
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
