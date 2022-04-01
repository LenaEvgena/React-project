import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { getMoviesAPI } from '../../../redux/asyncActionsThunks';
import ErrorPage from '../../errorPage/ErrorPage';
import Pages from '../../common/pages/Pages';
import MovieList, { Types } from '../movieList/MovieList';
import './MovieContainer.scss';

const MovieContainer: React.FC = () => {
  const dispatch = useDispatch();
  const movies = useTypedSelector((state) => state.movies.items);
  const { keyword, filter, total, currentPage, sortType, isFetching, isFetchedError, favoriteList } = useTypedSelector((state) => state);

  const fetchMovie = useCallback(
    () => {
      dispatch(getMoviesAPI(currentPage, sortType, filter, keyword))
    }, [dispatch, currentPage, filter, sortType, keyword]);

  useEffect(() => {
    let isMounted = true;
    window.scroll(0, 0);
    if (isMounted) {
      fetchMovie();
    }
    return () => {
      isMounted = false;
    }
  }, [fetchMovie]);

  if (isFetchedError) {
    return <ErrorPage handleClick={() => dispatch(getMoviesAPI(currentPage, sortType))} text='Try again' />;
  }

  return (
    <MovieList
      type={Types.ItemType}
      movies={movies}
      total={total}
      currentPage={currentPage}
      sortType={sortType}
      isFetching={isFetching}
      isFetchedError={isFetchedError}
      favoriteList={favoriteList}>
      <Pages />
    </MovieList>
  )
}

export default MovieContainer;
