import React, { useEffect, useRef } from 'react'
import MovieContainer from './movieContainer/MovieContainer';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getMoviesAPI } from '../../redux/asyncActionsThunks';

const Main = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, currentPage, sortType } = useTypedSelector((state) => state);
  let mountedRef = useRef(false);

  useEffect(() => {
    window.scroll(0, 0);
    mountedRef.current = true;
    dispatch(getMoviesAPI(mountedRef.current, currentPage, sortType, filter, keyword));
    return () => {
      mountedRef.current = false;
    }
  }, [dispatch, currentPage, sortType, filter, keyword]);

  return (
    <MovieContainer movies={movies} />
  )
}

export default Main;
