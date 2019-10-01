import React from 'react';

const Peers = ({ stock }) => {

    return (
        <div className="peers">
            <h1 className="title">Top Peers</h1>
            <ul>{stock.map(peers => <li>{peers}</li>)}</ul>
        </div>
    )
}

export default Peers