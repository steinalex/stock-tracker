import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchQueryAction } from '../store/actions';

const Search = ({searchQuery, symbol, updateStock}) => {

    const dispatch = useDispatch()

    const [stock, setStock] = useState('');
    
    const onChange = event => {
        setStock(event.target.value)
        dispatch(updateSearchQueryAction(event.target.value))
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