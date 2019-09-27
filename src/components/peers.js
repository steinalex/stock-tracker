import React from 'react';

const Peers = ({stock}) => {
    return (
        <>
            <h1 className="title">Top Peers</h1>
            <p>{stock.peers}</p>
        </>
    )
}

export default Peers    