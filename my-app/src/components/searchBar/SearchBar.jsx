import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/api';
import './SearchBar.scss';

const SearchBar = () => {
  const [inputQuery, setInputQuery] = useState('');
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);

  const handleChange = ({ target }) => setInputQuery(target.value);

  const handleClick = () => {
    if (!inputQuery.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(getMoviesAPI(inputQuery, currentPage));
    setInputQuery('');
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={inputQuery} onChange={handleChange} />
      <button className="search__button" type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
