import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, onInputChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={onInputChange}
  />
);

export default SearchBox;
