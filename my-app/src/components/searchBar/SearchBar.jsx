import React from 'react';
import './SearchBar.scss';

const SearchBar = () => (
  <div className="search">
    <input className="search__field" type="text" placeholder="What do you want to watch?" />
    <button className="search__button" type="button">Search</button>
  </div>
);

export default SearchBar;
