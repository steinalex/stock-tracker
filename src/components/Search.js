import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchQueryAction } from '../store/actions';
const Search = ({ updateStock }) => {
  const dispatch = useDispatch()
  const filteredSymbols = useSelector((state) => state.selectedCompanySymbols)
  const [isOpen, toggleIsOpen] = useState(false);
  const [stock, setStock] = useState('');
  const dropSelect = useRef(null);

  const onChange = ({ target: { value } }) => {
    setStock(value)
    dispatch(updateSearchQueryAction(value))
    toggleIsOpen(value.length > 0);
  }

  const onSubmit = ({ key, target }) => {
    if (key === 'Enter') {
      toggleIsOpen(false);
      updateStock(target.value)
    }
  }

  const optionClick = data => {
    console.log("Data has been clicked")
    setStock(`${data.name} (${data.symbol})`)
    updateStock(data.symbol)
    toggleIsOpen(false);
  }

  const focusSearch = () => {
    dropSelect.current.focus();
  }

  const options = filteredSymbols.map(data => {
    return (
      <li onClick={() => optionClick(data)} value={data.symbol} key={data.symbol}>
        {`${data.name} (${data.symbol})`}
      </li>
    );
  });

  React.useEffect(() => {
    toggleIsOpen(filteredSymbols.length !== 0);
  }, [filteredSymbols.length]);

  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-bar__input" value={stock} onChange={onChange} onKeyPress={onSubmit} onClick={focusSearch} />
      </div>
      <ul name="search" ref={dropSelect} className="search-bar__options" style={{display: isOpen ? 'block' : 'none'}}>{options}</ul>
    </>
  )
}

export default Search;