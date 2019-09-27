import React, { useState } from 'react';

const Search = ({updateStock}) => {

    const [stock, setStock] = useState('');
   
    const onChange = event => {
        setStock(event.target.value)
    }
    const onSubmit = ({key, target}) => {
        if (key === 'Enter') {
            updateStock(target.value)
        }
    }

    return (
        <div className="search-bar">
            <input type="text" className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit}/>
        </div>
    )
}

export default Search;