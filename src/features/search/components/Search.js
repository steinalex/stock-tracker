import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchQueryAction } from "../../headline/redux/actions";
import "./Search.css";

export const Search = ({ updateStock }) => {
  const dispatch = useDispatch();
  const filteredSymbols = useSelector(
    state => state.headlineData.selectedCompanySymbols
  );
  const [isOpen, toggleIsOpen] = useState(false);
  const [stock, setStock] = useState("");
  const [symbol, setSymbol] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const dropSelect = useRef(null);
  const inputSelect = useRef(null);

  const onChange = ({ target: { value } }) => {
    setSearchQuery(value);
    dispatch(updateSearchQueryAction(value));
    toggleIsOpen(value.length > 0);
  };

  const onSubmit = ({ key, target: { value: symbol } }) => {
    const symbolUpper = symbol.toUpperCase();
    if (key === "Enter") {
      const selectedDatum = filteredSymbols.find(
        datum => datum.symbol === symbolUpper
      );
      if (selectedDatum) {
        selectOption({ symbol, name: selectedDatum.name });
      }
    }
  };

  const selectOption = data => {
    setStock(data.name);
    setSymbol(data.symbol.toUpperCase());
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
              onClick={() => selectOption(data)}
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
          id="seach-input"
          ref={inputSelect}
          type="text"
          placeholder="Search..."
          className="search-bar__input"
          value={searchQuery}
          onChange={onChange}
          onKeyPress={onSubmit}
          onBlur={handleBlur}
          autoComplete="off"
        />
        {searchQuery && (
          <label htmlFor="seach-input">
            <span className="company-name">{stock}</span>
            <span className="company-symbol">{symbol && ` (${symbol})`}</span>
          </label>
        )}
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
