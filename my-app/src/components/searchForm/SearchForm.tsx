import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import './SearchForm.scss';

const SearchForm: React.FC = () => (
  <div className="header__search">
    <div className="search__text">
      <h1>Find your movie</h1>
    </div>

    <SearchBar />
  </div>
);

export default SearchForm;
