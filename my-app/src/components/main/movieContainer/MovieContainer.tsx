import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import Pages from '../../common/pages/Pages';
import MovieList, { Types } from '../movieList/MovieList';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);
  let mountedRef: React.MutableRefObject<boolean> = useRef(true);

  const fetchMovie = useCallback(
    () => {
      dispatch(getMoviesAPI(mountedRef.current, currentPage, sortType, filter, keyword))
    }, [dispatch, currentPage, filter, sortType, keyword]);

  useEffect(() => {
    console.log('movie mounted');

    mountedRef.current = true;
    window.scroll(0, 0);
    fetchMovie();
    return () => {
      console.log('movie unmounted');
      mountedRef.current = false;
    }
  }, [fetchMovie, mountedRef]);

  return (
    <MovieList
      type={Types.ItemType}
      movies={movies}
      total={total}
      currentPage={currentPage}
      sortType={sortType}
      isFetching={isFetching}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}
      refer={mountedRef.current}>
      <Pages />
    </MovieList>
  )
}

export default MovieContainer;
