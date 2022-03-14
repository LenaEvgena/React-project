import React from 'react';
import { useDispatch } from 'react-redux';
import { filterGenreMoviesAsync, setCurrentPage, setMoviesKeyword } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/asyncActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { filter, keyword, currentPage, sortType, isFetching } = useTypedSelector((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoviesKeyword(e.target.value));
  }

  const handleClick = (): void => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(filterGenreMoviesAsync('all'))
    dispatch(getMoviesAPI(1, sortType, 'all', keyword));
  }

  const handleResetClick = (): void => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(setMoviesKeyword(''));
    dispatch(filterGenreMoviesAsync('all'))
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }

  return (
    <div className="search">
      <input className="search__field" type="text" placeholder="What do you want to watch? Enter a keyword..." value={keyword} onChange={handleChange} />
      <button className="search__button search__button-reset" type="button" onClick={handleResetClick}></button>
      <button className={`search__button ${isFetching && 'busy'}`} type="button" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
