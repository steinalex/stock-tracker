import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchQueryAction } from "../store/actions";
const Search = ({ updateStock }) => {
  const dispatch = useDispatch();
  const filteredSymbols = useSelector(state => state.selectedCompanySymbols);
  const [isOpen, toggleIsOpen] = useState(false);
  const [stock, setStock] = useState("");
  const dropSelect = useRef(null);
  const inputSelect = useRef(null);

  const onChange = ({ target: { value } }) => {
    setStock(value);
    dispatch(updateSearchQueryAction(value));
    toggleIsOpen(value.length > 0);
  };

  const onSubmit = ({ key, target }) => {
    if (key === "Enter") {
      toggleIsOpen(false);
      updateStock(target.value);
    }
  };

  const optionClick = data => {
    setStock(`${data.name} (${data.symbol})`);
    updateStock(data.symbol);
    toggleIsOpen(false);
    inputSelect.current.blur();
  };

  const handleBlur = () => {
    requestAnimationFrame(() => {
      if (
        !inputSelect.current.contains(document.activeElement) &&
        !dropSelect.current.contains(document.activeElement)
      ) {
        toggleIsOpen(false);
      } else {
        inputSelect.current.focus();
      }
    });
  };

  const options =
    filteredSymbols.length > 0
      ? filteredSymbols.map(data => {
          return (
            <li
              onClick={() => optionClick(data)}
              value={data.symbol}
              key={data.symbol}
            >
              {`${data.name} (${data.symbol})`}
            </li>
          );
        })
      : "No symbols found";

  useEffect(() => {
    toggleIsOpen(filteredSymbols.length !== 0);
  }, [filteredSymbols.length]);

  return (
    <>
      <div className="search-bar">
        <input
          ref={inputSelect}
          type="text"
          placeholder="Search..."
          className="search-bar__input"
          value={stock}
          onChange={onChange}
          onKeyPress={onSubmit}
          onBlur={handleBlur}
        />
      </div>
      <ul
        ref={dropSelect}
        className="search-bar__options"
        style={{ display: isOpen ? "block" : "none" }}
        tabIndex={0}
      >
        {options}
      </ul>
    </>
  );
};

export default Search;
