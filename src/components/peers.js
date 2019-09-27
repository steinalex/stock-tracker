import React from 'react';

const Peers = ({stock}) => {
    return (
        <>
            <h1 className="title">Top Peers</h1>
            <tr>{stock.peers}</tr>
        </>
    )
}

export default Peers    