import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQueryAction } from '../store/actions';

const Search = ({updateStock}) => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const filteredSymbols = state.selectedCompanySymbols

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
        <>
        <ul class="suggestions">
            {filteredSymbols.map((symbol) => {
              
              return (
                <li  key={symbol}>
                  {symbol}
                </li>
              );
            })}
          </ul>
        <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit}/>
        </div>
        </>
    )
}

export default Search;