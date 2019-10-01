import React from 'react';

const Peers = ( {stock} ) => {
    console.log(stock)
    // const testData = stock;
    // const peersList = stock.map(peers =>
    //     <li>{peers}</li>
    // );
    
    return (
        <div className="peers">
            <h1 className="title">Top Peers</h1>
            <ul>{stock}</ul>
        </div>
    )
}

export default Peers    