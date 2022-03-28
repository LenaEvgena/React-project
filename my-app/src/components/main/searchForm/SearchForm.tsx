import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { filterGenreMoviesAsync, setCurrentPage, setMoviesKeyword, toggleFavoriteList } from '../../../redux/actions';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword, sortType, isFetching, isFavorListOpen } = useTypedSelector((state) => state);

  const handleClick = (keyword: string): void => {
    if (!keyword.trim()) return;
    if (isFavorListOpen) {
      navigate('/');
      dispatch(toggleFavoriteList(false));
    }
    dispatch(setCurrentPage(1));
    dispatch(setMoviesKeyword(keyword));
    dispatch(filterGenreMoviesAsync('all'));
    dispatch(getMoviesAPI(1, sortType, 'all', keyword));
  }

  const handleResetClick = (): void => {
    if (!keyword.trim()) return;
    dispatch(setCurrentPage(1));
    dispatch(setMoviesKeyword(''));
    dispatch(filterGenreMoviesAsync('all'));
    dispatch(getMoviesAPI(1, sortType, 'all', ''));
  }

  return (
    <div className="header__search">
      <div className="search__text">
        <h1>Find your movie</h1>
      </div>
      <SearchBar isBusy={isFetching} handleClick={(keyword) => handleClick(keyword)} handleResetClick={handleResetClick} />
    </div>
  )
};

export default SearchForm;
