import React from 'react';
import { useSelector } from 'react-redux';

const state = useSelector((state) => state)
const topPeers=state.selectedTopPeers
const Peers = () => {
    return (
        <div className="peers">
            <h1 className="title">Top Peers</h1>
            <p>{topPeers.peers}</p>
        </div>
    )
}

export default Peers    