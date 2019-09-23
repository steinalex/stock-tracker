import React from 'react';
import useSearchBox from './CustomHooks';

const { inputs, handleInputChange, handleSubmit } = useSearchBox();

const Search = () => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Symbol</label>
                <input type="text" name="symbol" onChange={handleInputChange} value={inputs.symbol} required />
                <button type="submit">Search</button>
            </div>
        </form>
    )
}
export default Search;