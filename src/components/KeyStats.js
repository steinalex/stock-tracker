import React from 'react';

export const RenderTable = ({response}) => (
    <ul>
        {Object.keys(response).map((key, index) =>
        <li key={index}>{key}: {response[key]}</li>
        )}
  </ul>
)