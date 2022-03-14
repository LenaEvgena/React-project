import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGenreMoviesAsync, setCurrentPage, setMoviesKeyword } from '../../redux/actions';
import { getMoviesAPI } from '../../redux/asyncActions';
import { InitialStateType } from '../../types/types';
import './SearchBar.scss';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: InitialStateType) => state.currentPage);
  const sortType = useSelector((state: InitialStateType) => state.sortType);
  const filter = useSelector((state: InitialStateType) => state.filter);
  const keyword = useSelector((state: InitialStateType) => state.keyword);
  const isFetching = useSelector((state: InitialStateType) => state.isFetching);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoviesKeyword(e.target.value));
  }

  const handleClick = (): void => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(filterGenreMoviesAsync('all'))
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }

  const handleResetClick = (): void => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(setMoviesKeyword(''));
    dispatch(filterGenreMoviesAsync('all'))
    dispatch(getMoviesAPI(currentPage));
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
