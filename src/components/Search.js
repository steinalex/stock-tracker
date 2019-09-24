import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStockAction  } from '../redux'

export default({socket}) => {

    const [stock, setStock] = useState('');
    const dispatch = useDispatch();
    const addStock = (stock) => dispatch(updateStockAction(stock));

    
    const onChange = event => {
        setStock(event.target.value)
    }
    const onSubmit = event => {
        console.log(event.target.value)
        event.preventDefault();
        addStock({
            stock: event.target.value
        })
    }

    return (
    
    <form onSubmit={onSubmit}>
        <label>
            Symbol:
        <input
                type="text"
                value={stock}
                onChange={onChange}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    )
}