import React from 'react';
import { useSelector } from 'react-redux';

const KeyStats = () => {

  const response = useSelector((state) => state.response)

  return (
    <ul>
      {Object.keys(response).map((key, index) =>
        <li key={index}>{key}: {response[key]}</li>
      )}
    </ul>
  )
}

export default KeyStats