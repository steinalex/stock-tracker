import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStockAction  } from '../redux'

const Search = ({socket}) => {

    const [stock, setStock] = useState('');
    const dispatch = useDispatch();
    const addStock = (stock) => dispatch(updateStockAction(stock));

    const onChange = event => {
        setStock(event.target.value)
    }
    const onSubmit = event => {
        event.preventDefault();

        addStock({
            stock: event.target.value
        })

     
  useEffect(() => {
    socket.on('FromAPI', payload => {
      setResponse(payload);
    });


  });
    }

    return (
    
    <form onSubmit={onSubmit}>
        <label>
            Symbol:
        <input
                type="text"
                value={stock}
                onChange={e => onChange={onChange}}
            />
        </label>
        <input type="submit" value="Submit" />
    </form>
    )
}

export default Search;