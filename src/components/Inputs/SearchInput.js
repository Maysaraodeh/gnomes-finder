import React, { useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const SearchInput = ({ onSearch, error }) => {
  const [searchValue, setSearchValue] = useState('');
  const search = (value) => {
    if (!value || value === '') return;
    onSearch(value, true);
  };
  return (
    <div data-testid="searchInput" className="search-container">
      <input
        disabled={error ? true : false}
        data-testid="searchInput-input"
        className="search"
        type="text"
        value={searchValue}
        placeholder="Find Gnomes ..."
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          setSearchValue(value.toLowerCase());
          if (value === '') return onSearch('', true);
        }}
      />
      <button
        data-testid="searchInput-button"
        onClick={() => search(searchValue)}
        className="search-button"
        disabled={error ? true : false}
      >
        <img
          alt="search"
          width="25"
          src={require('assets/img/icons/search.png')}
        />
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;
