import React from 'react';
import { useSelector } from 'react-redux';

const Peers = () => {

    const response = useSelector((state) => state.response)

    return (
        <>
            <h1>Peers</h1>
            <ul>{response.peers}</ul>
        </>
    )
}

export default Peers