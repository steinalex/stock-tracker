import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStockAction  } from '../redux';

const Search = () => {

    const [stock, setStock] = useState('');
    const dispatch = useDispatch();
    const addStock = (stock) => dispatch(updateStockAction(stock));

    
    const onChange = event => {
        setStock(event.target.value)
    }
    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            addStock(stock)
        }
    }

    return (
        <input type="text" value={stock} onChange={onChange} onKeyPress={onSubmit} />
    )
}

export default Search;