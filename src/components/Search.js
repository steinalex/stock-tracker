import React, { useState } from 'react';

const Search = ({symbol, updateStock}) => {

    const [stock, setStock] = useState('');
    const [data, setDataArray] = useState(['A', 'AAPL', 'B', 'BG', 'DA'])
    
    const onChange = event => {
        setStock(event.target.value)
        const filteredData = symbol.filter(search => search.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        console.log(filteredData)
    }
    const onSubmit = ({key, target}) => {
        if (key === 'Enter') {
            updateStock(target.value)
        }
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit}/>
        </div>
    )
}

export default Search;