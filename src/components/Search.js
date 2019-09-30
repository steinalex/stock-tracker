import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const state = useSelector((state) => state)
const dispatch = useDispatch()
const stock = state.selectedStock
const updateStock = dispatch(updateStockAction(stock))

const Search = () => {

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
            <input type="text" placeholder="Search..." className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit}/>
        </div>
    )
}

export default Search;