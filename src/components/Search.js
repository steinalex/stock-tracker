import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQueryAction } from '../store/actions';

const Search = ({ updateStock }) => {

  const dispatch = useDispatch()
  const filteredSymbols = useSelector((state) => state.selectedCompanySymbols)
  const [isOpen, toggleIsOpen] = useState(false);
  const [stock, setStock] = useState('');

  const onChange = ({ target: { value } }) => {
    setStock(value)
    dispatch(updateSearchQueryAction(value))
    
    toggleIsOpen(value.length > 0);
  }

  const onSubmit = ({ key, target }) => {
    if (key === 'Enter') {
      updateStock(target.value)
    }
  }

  const optionClick = data => {
    setStock(`${data.name} (${data.symbol})`)
    updateStock(data.symbol)
    toggleIsOpen(false);
    console.log("Data has been clicked")
  }

  const options = filteredSymbols.map(data => {
    return (
      <li onClick={() => optionClick(data)} value={data.symbol} key={data.symbol}>
        {`${data.name} (${data.symbol})`}
      </li>
    );
  });

  // const handleBlur = () => toggleIsOpen(false);
  
  // const handleFocus = () => toggleIsOpen(stock.length !== 0);

  React.useEffect(() => {
    toggleIsOpen(filteredSymbols.length !== 0);
  }, [filteredSymbols.length]);

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit} />
      </div>
      <ul name="search" className="search-bar__options" style={{display: isOpen ? 'block' : 'none'}}>{options}</ul>
    </>
  )
}

export default Search;