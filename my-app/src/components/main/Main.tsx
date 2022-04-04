import React, { useEffect } from 'react'
import MovieContainer from './movieContainer/MovieContainer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getMoviesAPI } from '../../redux/asyncActionsThunks';

const Main = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, currentPage, sortType } = useTypedSelector((state) => state);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getMoviesAPI(currentPage, sortType, filter, keyword));
  }, [currentPage, sortType, filter, keyword, dispatch]);

  return (
    <MovieContainer movies={movies} />
  )
}

export default Main;
