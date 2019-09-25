import React from 'react';
import { useSelector } from 'react-redux';

const LatestNews = () => {

    const response = useSelector((state) => state.response)

    return (
        <>
            <h1>LatestNews</h1>
            <ul>
                {Object.keys(response).map((key, index) =>
                    <li key={index}>{key}: {response[key]}</li>
                )}
            </ul>
        </>
    )
}

export default LatestNews