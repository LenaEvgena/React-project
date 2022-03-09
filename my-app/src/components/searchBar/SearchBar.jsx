import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.scss';
import { setCurrentPage, setMoviesKeyword } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/asyncActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.currentPage);
  const sortType = useSelector(state => state.sortType);
  const filter = useSelector(state => state.filter);
  const keyword = useSelector(state => state.keyword);

  const handleChange = ({ target }) => dispatch(setMoviesKeyword(target.value));

  const handleClick = () => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={keyword} onChange={handleChange} />
      <button className="search__button" type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
