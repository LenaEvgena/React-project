import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { filterGenreMoviesAsync, setCurrentPage, setMoviesKeyword, toggleFavoriteList } from '../../../redux/actions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword, isFetching, isFavorListOpen } = useTypedSelector((state) => state);

  const handleClick = useCallback(
    (keyword: string): void => {
      if (!keyword.trim()) return;
      if (isFavorListOpen) {
        dispatch(setMoviesKeyword(keyword));
        dispatch(toggleFavoriteList(false));
        navigate('/');
      } else {
        dispatch(setCurrentPage(1));
        dispatch(setMoviesKeyword(keyword));
        dispatch(filterGenreMoviesAsync('all'));
      }
    }, [dispatch, isFavorListOpen, navigate])

  const handleResetClick = useCallback(
    (): void => {
      if (!keyword.trim()) return;
      dispatch(setCurrentPage(1));
      dispatch(setMoviesKeyword(''));
      dispatch(filterGenreMoviesAsync('all'));
    }, [dispatch, keyword])

  return (
    <div className="header__search">
      <div className="search__text">
        <h1>Find your movie</h1>
      </div>
      <SearchBar isBusy={isFetching} handleClick={(keyword: string) => handleClick(keyword)} handleResetClick={handleResetClick} />
    </div>
  )
};

export default SearchForm;
