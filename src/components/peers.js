import React from 'react';

const Peers = ({ stock }) => {

    return (
        <div className="peers">
            <h1 className="title">Top Peers</h1>
            <ul className="peers-list">{stock.map(peers => <li key={peers}>{peers}</li>)}</ul>
        </div>
    )
}

export default Peers